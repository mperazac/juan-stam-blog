import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

const previewClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN,
  host: 'preview.contentful.com',
});

const getClient = (preview) => (preview ? previewClient : client);

function parseAuthor({ fields }) {
  return {
    name: fields.name,
    email: fields.email,
    biography: fields.biography,
    picture: fields.picture.fields.file,
    excerpt: fields.shortDescription,
    picture2: fields.picture2.fields.file,
  };
}

function parseFallbackImage(imageUrl) {
  const url = new URL(imageUrl);
  url.searchParams.set('h', 380);
  return url.toString();
}

function parsePost({ sys, fields }) {
  return {
    id: sys.id,
    title: fields.title,
    slug: fields.slug,
    date: fields.createdDate,
    content: fields.content,
    excerpt: fields.shortDescription || null,
    coverImage: fields.image || {
      url: parseFallbackImage(fields.fallbackImageUrl),
    },
    author: parseAuthor(fields.author),
  };
}

function parseBook({ sys, fields }) {
  return {
    id: sys.id,
    title: fields.title,
    description: fields.description,
    cover: fields.cover,
    links: fields.links,
  };
}

function parsePostEntries(entries, cb = parsePost) {
  return entries?.items?.map(cb);
}

function parseComments({ fields }) {
  return {
    title: fields.title,
    date: fields.createdDate,
    comment: fields.comment,
    name: fields.name,
  };
}

function parsePostComments(comments, cb = parseComments) {
  return comments?.items?.map(cb);
}

export async function getPreviewPostBySlug(slug) {
  const entries = await getClient(true).getEntries({
    content_type: 'blogPost',
    limit: 1,
    'fields.slug[in]': slug,
  });
  return parsePostEntries(entries)[0];
}

export async function getAllPostsWithSlug() {
  const entries = await client.getEntries({
    content_type: 'blogPost',
    select: 'fields.slug',
  });
  return parsePostEntries(entries, (post) => post.fields);
}

export async function getAllPostsForHome(skip, limit, preview) {
  const entries = await getClient(preview).getEntries({
    content_type: 'blogPost',
    order: '-fields.createdDate',
    skip,
    limit,
  });
  return {
    ...entries,
    items: parsePostEntries(entries),
  };
}

export async function getAllBooks(preview = false) {
  const entries = await getClient(preview).getEntries({
    content_type: 'books',
  });
  return parsePostEntries(entries, parseBook);
}

export async function getPostAndMorePostsAndComments(slug, preview) {
  const entry = await getClient(preview).getEntries({
    content_type: 'blogPost',
    limit: 1,
    'fields.slug[in]': slug,
  });
  const comments = await getClient(preview).getEntries({
    content_type: 'comments',
    'fields.blogPost.sys.id': entry.items[0].sys.id,
  });
  const entries = await getClient(preview).getEntries({
    content_type: 'blogPost',
    limit: 3,
    order: '-fields.createdDate',
    'fields.slug[nin]': slug,
  });

  return {
    post: parsePostEntries(entry)[0],
    comments: parsePostComments(comments),
    morePosts: parsePostEntries(entries),
  };
}

export async function getAuthor(preview) {
  const entries = await getClient(preview).getEntries({
    content_type: 'author',
  });
  return parsePostEntries(entries, parseAuthor)[0];
}

const PAGE_LIMIT = 30;
export async function searchPosts(query, page, preview = false) {
  const skip = (Number(page) - 1) * PAGE_LIMIT;
  const entries = await getClient(preview).getEntries({
    content_type: 'blogPost',
    order: '-fields.createdDate',
    query,
    skip,
    limit: PAGE_LIMIT,
  });
  return {
    ...entries,
    items: parsePostEntries(entries),
  };
}

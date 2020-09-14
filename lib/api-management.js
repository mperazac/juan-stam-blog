import { createClient } from 'contentful-management';

const client = createClient({
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

const getClient = () => {
  return client;
};

export async function createNewComment(entry) {
  try {
    const client = await getClient();
    const space = await client.getSpace(
      process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
    );
    const environment = await space.getEnvironment('master');
    await environment.createEntry('comments', entry);
  } catch (error) {
    console.error('An error happened while saving a new comment: ', error);
  }
}

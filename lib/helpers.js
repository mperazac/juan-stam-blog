export const stringTruncate = (input, maxLength = 5) =>
  input.length > maxLength ? `${input.substring(0, maxLength)}...` : input;

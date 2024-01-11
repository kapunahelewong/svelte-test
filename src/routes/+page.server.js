
// src/routes/+page.server.js
import { fetchOneEntry } from '@builder.io/sdk-svelte';

export async function load({ page }) {
  if (!page) {
    page = []; // Set a default value if page is not provided
  }

  const urlPath = `/${page.join('/')}`;

  // fetch your Builder content
  const content = await fetchOneEntry({
    model: 'page',
    apiKey: "fe07520489dd4741b861fe3c2e19b071",
    userAttributes: {
      urlPath,
    },
  });

  // return content from `fetchOneEntry()`
  return {
    props: {
      content,
    },
  };
}
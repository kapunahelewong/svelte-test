import { fetchEntries, fetchOneEntry } from '@builder.io/sdk-svelte';

export async function load({ params }) {
  const urlPath = `/${params.page || ''}`;

  // fetch your Builder content
  const content = await fetchEntries({
    model: 'page', 
    apiKey: "fe07520489dd4741b861fe3c2e19b071",
    userAttributes: {
      urlPath,
    },
  });

  console.log("Content prop in page.server.js: ", content);
  
  // return content 
  return {
    content
  };
}

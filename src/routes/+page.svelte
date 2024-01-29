<!-- src/routes/+page.svelte -->
<script>
  import { Content, isPreviewing } from "@builder.io/sdk-svelte";

  // Add your Public API Key
  const YOUR_API_KEY = "fe07520489dd4741b861fe3c2e19b071";
  export let content;

  console.log("Content prop in page.svelte: ", content);
  // console.log("Page:  ", page);
  
</script>

<main>
  <h1>Welcome to your Builder-integrated Svelte app</h1>
  <div>Below is your Builder Content:</div>

  <!-- {#if content || isPreviewing()} -->
  <!-- Render builder content with all required props -->
  <Content model="page" {content} apiKey={YOUR_API_KEY} />
  <!-- {:else} -->
  <!-- <p>Loading...</p> -->
  <!-- {/if} -->
</main>

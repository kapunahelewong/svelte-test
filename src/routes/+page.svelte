<!-- `content` only returns one page (though there are 3 in that space) but no content is displayed -->
<!-- src/routes/+page.svelte -->
<script lang="ts">
  import { Content, fetchEntries, isPreviewing } from "@builder.io/sdk-svelte";

  // Add your Public API Key
  const YOUR_API_KEY = "fe07520489dd4741b861fe3c2e19b071";
  let content = undefined;
  let canShowContent = false;

  // Define an async function to fetch and log pages
  const fetchAndLogPages = async () => {
    try {
      // Fetch all pages from Builder
      content = await fetchEntries({
        model: "page", // Change 'page' to match your Builder model name
        apiKey: YOUR_API_KEY,
        userAttributes: {
          urlPath: window.location.pathname || "/",
        },
      });

      // Log the entire response
      console.log("Content from Builder:", content);

      // Set canShowContent based on whether content is defined
      canShowContent = !!content;
      console.log("canShowContent:", canShowContent);
    } catch (error) {
      console.error("Error fetching pages from Builder:", error);
    }
  };

  // Call the fetchAndLogPages function to fetch and log pages
  fetchAndLogPages();
</script>

<main>
  <h1>Welcome to your Builder-integrated Svelte app</h1>
  <div>Below is your Builder Content:</div>

  {#if canShowContent}
    <div>page Title: {content?.results?.[0].data?.title || "Unpublished"}</div>
    <!-- Render builder content with all required props -->

    <!-- This doesn't show anything -->
    <Content model="page" {content} apiKey={YOUR_API_KEY} />
  {:else}
    <p>Loading...</p>
  {/if}
</main>

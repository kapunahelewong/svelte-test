<!-- src/routes/+page.svelte -->
<script lang="ts">
  import { Content, fetchEntries, isPreviewing } from "@builder.io/sdk-svelte";

  // Add your Public API Key
  const YOUR_API_KEY = "fe07520489dd4741b861fe3c2e19b071";
  let content = undefined;
  let canShowContent = false;
  const fetch = async () => {
    // fetch your Builder content
    content = await fetchEntries({
      model: "page",
      apiKey: YOUR_API_KEY,
      userAttributes: {
        urlPath: window.location.pathname || "/",
      },
    });
    // handle preview mode
    canShowContent = content || isPreviewing();
  };

  // Define an async function to fetch and log pages
  const fetchAndLogPages = async () => {
    try {
      // Fetch all pages from Builder
      const pages = await fetchEntries({
        model: "page", // Change 'page' to match your Builder model name
        apiKey: YOUR_API_KEY,
      });

      // Log the pages
      console.log("Pages from Builder:", pages);
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
    <div>page Title: {content?.data?.title || "Unpublished"}</div>
    <!-- Render builder content with all required props -->
    <Content model="page" {content} apiKey={YOUR_API_KEY} />
  {:else}
    <p>Loading...</p>
  {/if}
</main>

// Function to remove suggested posts
function removeSuggestedPosts() {
  // Find all span elements containing 'Suggested'
  const spans = document.querySelectorAll('span');
  spans.forEach(span => {
    if (span.textContent === 'Suggested') {
      // Find the parent div with a 'data-id' attribute
      let parent = span.parentElement;
      while (parent && !parent.hasAttribute('data-id')) {
        parent = parent.parentElement;
      }
      // Remove the parent div
      if (parent)
      {
        parent.remove();
        console.log("Removed suggested post");
      }
    }
  });
}

// Create a MutationObserver to observe changes in the document
const observer = new MutationObserver(removeSuggestedPosts);

// Start observing the document with the configured parameters
observer.observe(document, { childList: true, subtree: true });

// Call the function once at the start
removeSuggestedPosts();

document.getElementById('fetchDataBtn').addEventListener('click', async function() {
  document.getElementById('output').innerText = 'Please wait, processing for 5 seconds...';

  // Function to simulate delay
  function delay(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
  }

  try {
      // Wait for 5 seconds
      await delay(5000);

      // Fetch data after the timeout
      const response = await fetch('https://dummyjson.com/posts');
      const data = await response.json();

      // Process the fetched data
      let posts = data.posts;
      let output = '<h2>Posts</h2><ul>';
      posts.forEach(post => {
          output += `<li>${post.title}</li>`;
      });
      output += '</ul>';
      document.getElementById('output').innerHTML = output;
  } catch (error) {
      // Handle errors
      document.getElementById('output').innerText = 'Error fetching data';
      console.error('Error:', error);
  }
});


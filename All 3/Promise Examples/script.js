document.getElementById('fetchButton').addEventListener('click', function() {
    document.getElementById('result').innerText = 'Please wait, processing for 5 seconds...';

    // Create a promise that resolves after 5 seconds
    new Promise((resolve) => {
        setTimeout(resolve, 5000);
    })
    .then(() => {
        // Fetch data after the timeout
        return fetch('https://dummyjson.com/posts');
    })
    .then(response => response.json())
    .then(data => {
        // Process the fetched data
        let posts = data.posts;
        let output = '<h2>Posts</h2><ul>';
        posts.forEach(post => {
            output += `<li>${post.title}</li>`;
        });
        output += '</ul>';
        document.getElementById('result').innerHTML = output;
    })
    .catch(error => {
        // Handle errors
        
        console.error('Error:', error);
    });
});

document.getElementById('myButton').addEventListener('click', function() {
    document.getElementById('output').innerText = 'Please wait, processing for 5 seconds...';
    
    setTimeout(function() {
        fetch('https://dummyjson.com/posts')
            .then(response => response.json())
            .then(data => {
                let posts = data.posts;
                let output = '<h2>Posts</h2><ul>';
                posts.forEach(post => {
                    output += `<li>${post.title}</li>`;
                });
                output += '</ul>';
                document.getElementById('output').innerHTML = output;
            })
            .catch(error => {
                document.getElementById('output').innerText = 'Error fetching data';
                console.error('Error:', error);
            });
    }, 5000);
});


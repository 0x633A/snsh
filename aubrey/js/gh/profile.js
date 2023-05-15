// Get the GitHub user data
fetch('https://api.github.com/users/0x633A')
.then(response => response.json())
.then(data => {
  // Display the profile data
  document.getElementById('github-profile').innerHTML = `
    <img src="${data.avatar_url}" alt="${data.name} avatar">
    <div>
      <h2>${data.name}</h2>
      <p>${data.bio}</p>
    </div>
  `;
})
.catch(error => console.error(error));

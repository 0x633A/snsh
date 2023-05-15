const apiUrl = 'https://api.github.com/users/0x633A/repos';
const reposContainer = document.getElementById('repos');

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const repos = data.map(repo => {
      return `
        <div class="repo-card">
          <h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
          <p>${repo.description}</p>
          <div class="repo-details">
            <span><i class="fas fa-star"></i> ${repo.stargazers_count}</span>
            <span><i class="fas fa-code-branch"></i> ${repo.forks_count}</span>
            <span><i class="fas fa-eye"></i> ${repo.watchers_count}</span>
          </div>
        </div>
      `;
    }).join('');

    reposContainer.innerHTML = repos;
  });

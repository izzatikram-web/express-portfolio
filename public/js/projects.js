document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('#projectsList');
  if (!container) return;

  const projects = [
    { name: '📚 Library Management System', stack: 'Node/Express/EJS/MongoDB', url: 'https://github.com/<you>/library-management-system' },
    { name: '🔠 Word Guessing Game',        stack: 'JavaScript, HTML, CSS',     url: 'https://github.com/<you>/word-guessing-game' },
    { name: '🌐 Networking Labs Portfolio', stack: 'VLANs, OSPF, eBGP, GRE',    url: 'https://github.com/<you>/networking-portfolio' },
  ];

  container.innerHTML = projects.map(p => `
    <div class="col-md-6">
      <div class="card h-100 shadow-sm border-0">
        <div class="card-body">
          <h5 class="card-title">${p.name}</h5>
          <p class="text-muted small">${p.stack}</p>
          <a class="btn btn-outline-primary btn-sm" href="${p.url}" target="_blank" rel="noopener">View on GitHub</a>
        </div>
      </div>
    </div>
  `).join('');
});

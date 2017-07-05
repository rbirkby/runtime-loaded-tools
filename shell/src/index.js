function loadTool() {
  const tool = document.location.hash.substr(1) || 'accounts';
  console.log('loading', tool);

  import(`./tools/${tool}`)
  .then(tool => {
    document.getElementById('application').innerHTML = tool.render();
  });
}

window.addEventListener('load', loadTool);
window.addEventListener('hashchange', loadTool);

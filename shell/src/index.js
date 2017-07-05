import React from "react";
import ReactDOM from "react-dom";

function loadTool() {
  const tool = document.location.hash.substr(1) || 'accounts';
  console.log('loading', tool);

  import(`./tools/${tool}`)
  .then(tool => {
    tool.render(document.getElementById('application'));
  });
}

window.addEventListener('load', loadTool);
window.addEventListener('hashchange', loadTool);

var container = React.createElement('div', {id: 'application'});
var heading = React.createElement('h1', null, `Shell (React v${React.version})`);
var shell = React.createElement('div', null, [heading, container]);

ReactDOM.render(shell, document.getElementById('shell'));


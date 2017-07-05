import dependency from './lib/dependency';
import ReactDOM from 'react-dom';
import React from 'react';

console.info('Accounts tool dynamically loaded');

export function render(container) {
  ReactDOM.render(React.createElement(
    'h2',
    null,
    `Accounts (React v${React.version})`
  ), container);
}


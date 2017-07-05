import scriptjs from 'scriptjs';

console.info('Accounts shim loaded');

export function render(container) {
  scriptjs('../accounts-tool/build/application.js', function() {
    console.log('loaded accounts tool');
    accounts.render(container);
  });
}

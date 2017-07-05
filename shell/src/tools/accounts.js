import scriptjs from 'scriptjs';

console.info('Accounts shim loaded');

export function render() {
  scriptjs('../accounts-tool/build/application.js', function() {
    console.log('loaded accounts tool');
  });

  // TODO: non-block above....
  return accounts ? accounts.render() : '';
}

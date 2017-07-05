import scriptjs from 'scriptjs'

console.info('Payments shim loaded');

export function render() {
  scriptjs('../payments-tool/build/application.js', function() {
    console.log('loaded payments tool');
  });

  // TODO: non-block above....
  return payments ? payments.render() : '';
}

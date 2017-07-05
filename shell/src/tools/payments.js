import scriptjs from 'scriptjs'

console.info('Payments shim loaded');

export function render(container) {
  scriptjs('../payments-tool/build/application.js', function() {
    console.log('loaded payments tool');
    payments.render(container);
  });
}

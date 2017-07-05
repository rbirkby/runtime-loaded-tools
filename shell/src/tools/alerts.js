import scriptjs from 'scriptjs';

console.info('Alerts shim loaded');

export function render(container) {
  scriptjs('../alerts-tool/build/application.js', function() {
    console.log('loaded alerts tool');
    alerts.render(container);
  });
}

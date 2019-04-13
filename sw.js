if (navigator.serviceWorker) {
  navigator.serviceWorker.register('./sw.js').catch(function(err) {
    console.warn('failed to register SW', err);
  });

  const hadInitialController = Boolean(navigator.serviceWorker.controller);
  if (hadInitialController) {
    navigator.serviceWorker.addEventListener('controllerchange', function() {
      window.location.reload();
    });
  }
}

if (navigator.serviceWorker) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./serviceWorker.js")
      .then(e => {
        console.log("ServiceWorker registered");
        console.log(`SW registered with scope ${e.scope}`);
      })
      .catch(error => console.error(error));
  });

  window.addEventListener('beforeinstallprompt', event => {
      window.deferredPrompt = event;
      document.getElementById('installContainer').classList.toggle('hidden', false)
  })

  document.getElementById('installButton').addEventListener('click', () => {
    console.log('Clicked')
    const promptEvent = window.deferredPrompt;
    if(!promptEvent) return;
    console.log("Here it is")
    promptEvent.prompt();
    promptEvent.userChoice.then(result => {
        console.log(result)
    })
})
}

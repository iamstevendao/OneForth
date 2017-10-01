const urls =
  {
    "9gag": "https://m.9gag.com/",
    "whatsapp": "https://web.whatsapp.com/",
    "messenger": "https://messenger.com/"
  }

onload = () => {
  const webview = document.querySelector('webview')
  const indicator = document.querySelector('.indicator')
  let target = "9gag";

  const loadstart = () => {
    indicator.innerText = 'loading...'
  }

  const loadstop = () => {
    indicator.innerText = ''
    if (target == "whatsapp") {
      webview.setZoomLevel(-1)
    } else webview.setZoomLevel(0);
  }

  webview.addEventListener('did-start-loading', loadstart)
  webview.addEventListener('did-stop-loading', loadstop)


  document.body.addEventListener('click', function (event) {
    if (event.target.dataset.section) {
      handleSectionTrigger(event)
    }
  })

  function handleSectionTrigger(event) {
    target = event.target.dataset.section;
    webview.loadURL(urls[target]);
  }
}

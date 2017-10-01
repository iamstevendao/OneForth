const urls =
  {
    "9gag": "https://m.9gag.com/",
    "whatsapp": "https://web.whatsapp.com/"
  }

onload = () => {
  const webview = document.querySelector('webview')
  const indicator = document.querySelector('.indicator')

  const loadstart = () => {
    indicator.innerText = 'loading...'
  }

  const loadstop = () => {
    indicator.innerText = ''
  }

  webview.addEventListener('did-start-loading', loadstart)
  webview.addEventListener('did-stop-loading', loadstop)


  document.body.addEventListener('click', function (event) {
    if (event.target.dataset.section) {
      console.log("hello");
      handleSectionTrigger(event)
    }
  })

  function handleSectionTrigger(event) {
    let target = event.target.dataset.section;
    webview.loadURL(urls[target]);
  }
}

let replaceHTML = (pageName) => {
    return `<h1>Website Blocked</h1>`
}


fetch('http://localhost:9000').then(response => response.json())
  .then(data => {
    if (data["sites"].includes(window.location.hostname)) {
        document.body.innerHTML = replaceHTML("Blocked Site")
    }
  })





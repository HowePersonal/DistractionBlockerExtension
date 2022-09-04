let replaceHTML = () => {
    return `
        <div class="blockedText">Website Blocked</div>
    
    `
}

let replaceSTYLE = () => {
    return `<style>
    html, body {
      display: flex;
      justify-content: center;
      align-items: center;
      width:100%;
      height:100%;
      margin:0;
      padding:0;
    }

    body {
      background: white;
      overflow: hidden;
      max-height: 700px;
    }

    .blockedText {
      display: flex;
      font-size: 30px;
      color: black;
      font-family: Arial;
      font-weight: bold;
    }

    </style>`
}


fetch('http://localhost:9000').then(response => response.json())
  .then(data => {
    if (data["sites"].includes(window.location.hostname)) {
        document.head.innerHTML = replaceSTYLE()
        document.body.innerHTML = replaceHTML()
    }
  })





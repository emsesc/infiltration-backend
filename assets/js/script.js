function twittertwotter() {
    console.log("Welcome! I guess you found the console 🧐")  
  }
  
async function updatePrivileges() {
    let result = await fetch('/api/developers', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({
            token: "d3v3l0p3rsrUl3"
        })
    })

    let url = await result.json()
    console.log(url)
    window.location.href = url.url
  }
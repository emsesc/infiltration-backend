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

async function login() {
let result = await fetch('/api/login', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
    body: JSON.stringify({
        username: document.getElementById('username').value,
        password: document.getElementById('password').value
    })
})

let token = await result.json()
console.log(token)
if (token.token != "Fail") {
    window.location.href = '/JpkP0KKXlV78jx6fF1Yi/dashboard?auth=' + token.token
} else {
    document.getElementById('output').innerText = "Sorry, wrong credentials! Try again."
}
}
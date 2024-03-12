// Sidebar Funcionalidade
let btn = document.querySelector('#btn')
let sidebar = document.querySelector('.sidebar')

btn.onclick = function() {
    sidebar.classList.toggle('active')
}

// API Random User
const img = document.getElementById("img")
const loc = document.getElementById("address-user")
const name = document.getElementById("name-user")
const email = document.getElementById("email-user")
const birthday = document.getElementById("birthday")
const number = document.getElementById("number-user")

async function users(){
  const response = await fetch('https://randomuser.me/api/')
  const result = await response.json()
  console.log(result)
  setUserInfo(result)
}

function setUserInfo(result){
  img.src = result.results[0].picture.large
  loc.textContent = result.results[0].location.city + ", " + result.results[0].location.country
  name.textContent = result.results[0].name.first + " " + result.results[0].name.last
  email.textContent = result.results[0].email
  birthday.textContent = result.results[0].dob.date.split("T")[0]
  number.textContent = result.results[0].phone
}

users()
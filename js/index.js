console.log("script index")

const URL = "http://localhost:8080/users/auth"
const emailInput = document.querySelector("#email")
const passwordInput = document.querySelector("#password")
const button = document.querySelector("#iniciar-sesion")

button.addEventListener("click", async (event) => {
  event.preventDefault()

  const data = {
    email : emailInput.value,
    password : password.value
  }

  const response = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })

  const responseJson = await response.json()
  const token = responseJson.data.token

  localStorage.setItem("token", token)

  if(token) window.location.href = "/profile"

  console.log("response json", responseJson)
})
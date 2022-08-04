const token = localStorage.getItem("token")


const URL = "http://localhost:8080/users/comida"
const buttonSubirComida = document.querySelector("#subir-comida")
console.log("sacando el token del local storage", token)

buttonSubirComida.addEventListener("click", async (event) => {
  event.preventDefault()

  const response = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`

    },
    body: JSON.stringify({ "platillo": "carne asada" })
  })

  const responseJson = await response.json()

  console.log("response", responseJson)
  if(responseJson?.success) {
    alert("subiste la comida con exito")
  } {
    alert("Inicia sesion primero")
  }
  console.log("respuesta", responseJson)
})
import { API_URL } from "./constants.js";
const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("loginc");
const register = document.getElementById("registrar");
const Btnlogin = document.getElementById("Btnlogin");

registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});

register.addEventListener("click", async () => {
  const nombre = document.querySelector("#iN").value;
  const apellido = document.querySelector("#iA").value;
  const dni = document.querySelector("#iD").value;
  const contrasenia = document.querySelector("#iC").value;
  const info = {
    nombre,
    apellido,
    dni,
    contrasenia,
  };
  console.log(info);
  const peticion = await fetch(API_URL + "/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(info),
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error al realizar el login:", error);
      throw error;
    });
  if (peticion.msg == "Registrado correctamente") {
    window.location.reload();
  }
});

Btnlogin.addEventListener("click", async () => {
  const dni = document.querySelector("#iDL").value;
  const contrasenia = document.querySelector("#iPL").value;
  const hashContrasenia = "lol";

  const info = {
    dni,
    contrasenia,
    hashContrasenia,
  };
  console.log(info);
  const peticion = await fetch(API_URL + "/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(info),
  }).then((response) => response.json());
  console.log(peticion.msg);
  localStorage.setItem("token", `${peticion.token}`);
  if (peticion.msg == "Inicio de sesión exitoso") {
    window.location.href = "./products";
  }
});

registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});

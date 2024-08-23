const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");
const register = document.getElementById("registrar");

register.addEventListener("click", () => {
  const nombre = document.querySelector("#iN").value;
  const apellido = document.querySelector("#iA").value;
  const dni = document.querySelector("#iD").value;
  const hashContrasenia = "lol";
  const info = {
    nombre,
    apellido,
    dni,
    hashContrasenia,
  };
  console.log(info);
});

registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});

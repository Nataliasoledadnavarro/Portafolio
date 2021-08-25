const iconoHamburguesa = document.querySelector(".icono-hamburguesa");
const panelAside = document.querySelector(".aside-oculto");
const iconoCruz = document.querySelector(".fa-window-close");

iconoHamburguesa.onclick = () => {
  panelAside.classList.remove("aside-oculto");
};

iconoCruz.onclick = () => {
  panelAside.classList.add("aside-oculto");
};

const iconoSol = document.querySelector(".fa-sun");
const iconoLuna = document.querySelector(".fa-moon");
const body = document.querySelector("body");

iconoLuna.onclick = () => {
  body.classList.add("oscuro");
};

iconoSol.onclick = () => {
  body.classList.remove("oscuro");
};

const iconoHamburguesa = document.querySelector(".icono-hamburguesa");
const panelAside = document.querySelector(".aside-oculto");
const iconoCruz = document.querySelector(".fa-window-close");

iconoHamburguesa.onclick = () => {
  panelAside.classList.remove("aside-oculto");
};

iconoCruz.onclick = () => {
  panelAside.classList.add("aside-oculto");
};

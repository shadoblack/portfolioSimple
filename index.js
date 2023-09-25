const proyectosContainer = document.getElementById("tarjetasContainer");
const aside = document.getElementsByTagName("aside")[0];
const getTecnologias = (tecnologias) => {
  let res = "";
  tecnologias.forEach((tecnologia) => {
    res += `<span class="tecnologia"> ${tecnologia} </span>`;
  });
  return res;
};

//auto creacion proyectos

proyectos.forEach((proyecto) => {
  const nuevoProyecto = document.createElement("div");
  nuevoProyecto.classList = "tarjeta proyecto";
  proyectosContainer.appendChild(nuevoProyecto);
  nuevoProyecto.innerHTML = `
  <img src="img/proyectos/${proyecto.imagen}" alt="${proyecto.titulo}">
  <div>
  <h3> ${proyecto.titulo} </h3>
  <p> ${proyecto.descripcion} </p>
  <p>Tecnologías:${getTecnologias(proyecto.tecnologias)}</p>
  </div>
  <a href="${proyecto.link}" target="_blank">Ver proyecto</a>`;
});

//creacion informacion personal
const nuevaPresentacion = document.createElement("div");
nuevaPresentacion.classList = "presentacion";
nuevaPresentacion.innerHTML = `<img src="${informacionPersonal.imagen}" alt="foto de perfil">`;
informacionPersonal.otros.forEach((dato) => {
  nuevaPresentacion.innerHTML += `<div>
  <span>${dato[0]}:</span>
  <span>${dato[1]}</span>
  </div>`;
});
aside.appendChild(nuevaPresentacion);

//idiomas
const nuevoIdiomas = document.createElement("div");
nuevoIdiomas.classList = "idioma";
informacionPersonal.idiomas.forEach((dato) => {
  nuevoIdiomas.innerHTML += `<div>
  <span>${dato[0]}:</span>
  <span>${dato[1]}</span>
  </div>`;
});
aside.appendChild(nuevoIdiomas);
//lenguajes de programacion
const nuevoLenguajesProgramacion = document.createElement("div");
nuevoLenguajesProgramacion.classList = "idioma";
informacionPersonal.tecnologias.forEach((dato) => {
  nuevoLenguajesProgramacion.innerHTML += `<div>
  <span>${dato[0]}</span>
  <span>${dato[1]}</span>
  </div>
  <progress max ="10" value="${dato[1]}"></progress>`;
});
aside.appendChild(nuevoLenguajesProgramacion);
//links

const getIconoRed = (red) => {
  switch (red) {
    case "GitHub":
      return "github.svg";
    case "LinkedIn":
      return "linkedin.svg";
    default:
      return "";
  }
};

const nuevoRedes = document.createElement("div");
nuevoRedes.classList = "redes";
informacionPersonal.redes.forEach(dato => {
  nuevoRedes.innerHTML += `<a href="${dato[1]} target="_blank">
  <img src="img/${getIconoRed(dato[0])}">
  </a>
  `
});
aside.appendChild(nuevoRedes);

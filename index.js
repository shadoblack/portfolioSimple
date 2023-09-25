const proyectosContainer = document.getElementById("tarjetasContainer");
const getTecnologias = (tecnologias) => {
  let res = "";
  tecnologias.forEach((tecnologia) => {
    res += `<span class="tecnologia"> ${tecnologia} </span>`;
  });
  return res;
};

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

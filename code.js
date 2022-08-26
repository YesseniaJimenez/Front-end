/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [
  {
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector("#cambiar-tema");

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  datosPersona.nombre = prompt("ingrese su nombre");
  datosPersona.edad = prompt("ingrese su año de nacimiento");
  datosPersona.ciudad = prompt("ingrese ciudad de recidencia");
  datosPersona.interesPorJs = alert("¿te interesa Js?");
}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */

  const nombre = document.querySelector("#nombre");
  const edad = document.querySelector("#edad");
  const ciudad = document.querySelector("#ciudad");
  const interesJS = document.querySelector("#javascript");

  nombre.innerText = datosPersona.nombre;
  edad.innerText = 2022 - datosPersona.edad;
  ciudad.innerText = datosPersona.ciudad;
  interesJS.innerText = "Sí";
}

function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  const grupoCards = document.querySelector("#fila");
  const elementosInsertados = grupoCards.querySelectorAll(".caja").length;

  if (elementosInsertados === 0) {
    //listado.forEach((item) => {
     for(let i=0; i<listado.length;i++){ 

      let card= `<div class='caja'>
                    <img src=${listado[i].imgUrl} alt=${listado[i].lenguajes}/>
                    <p class='lenguajes'> ${listado[i].lenguajes}</p>
                    <p class='bimestre'> ${listado[i].bimestre}</p>
                    </div>`;


      /*const card = document.createElement("div");
      card.classList.add("caja");

      const imagen = document.createElement("img");
      const lenguajes = document.createElement("p");
      const bimestre = document.createElement("p");
    
      lenguajes.classList.add("lenguajes");
      bimestre.classList.add("bimestre");

      lenguajes.innerText = item.lenguajes;
      bimestre.innerText = item.bimestre;
      imagen.setAttribute("src", item.imgUrl);
      imagen.setAttribute("alt", item.lenguajes);

      card.appendChild(imagen);
      card.appendChild(lenguajes);
      card.appendChild(bimestre);*/
      
      grupoCards.innerHTML+=card
      //grupoCards.appendChild(card);
    };
  }
}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  const cambiarModo = document.querySelector("#sitio");
  cambiarModo.classList.toggle("dark");
};

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
window.addEventListener("keydown", function (e) {
  if (e.key === "f"||"F") {
    const mostrar = this.document.querySelector("#sobre-mi");
    mostrar.classList.remove("oculto");
  }
});

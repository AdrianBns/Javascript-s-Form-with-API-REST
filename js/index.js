
const BUTTON_POST = document.getElementById('showPost');
const BUTTON_HIDDENPOST = document.getElementById('hiddenPost');
const BUTTON_PUT = document.getElementById('showPut');
const BUTTON_HIDDENPUT = document.getElementById('hiddenPut');
const BUTTON_SEARCH = document.getElementById('showDelete');
const DIV = document.getElementById('datos');


/*AQUI EMPIEZA EL POST*/

BUTTON_POST.addEventListener('click', (e) => {
  e.preventDefault();
  showPost();
});
BUTTON_HIDDENPOST.addEventListener('click', (e) => {
  e.preventDefault();
  hiddenPost();
});

function showPost() {
    document.getElementById("post").style.display = 'block';
    BUTTON_POST.style.display = 'none';
    BUTTON_HIDDENPOST.style.display = 'block';

}

function hiddenPost() {
  document.getElementById("post").style.display = 'none';
  BUTTON_POST.style.display = 'block';
  BUTTON_HIDDENPOST.style.display = 'none';
}


/*AQUI EMPIEZA EL PUT*/

BUTTON_PUT.addEventListener('click', (e) => {
  e.preventDefault();
  showPut();
});
BUTTON_HIDDENPUT.addEventListener('click', (e) => {
  e.preventDefault();
  hiddenPut();
});
BUTTON_SEARCH.addEventListener('click', (e) => {
  e.preventDefault();
  showSearch();
});
function showPut() {
    document.getElementById("put").style.display = 'block';
    BUTTON_PUT.style.display = 'none';
    BUTTON_HIDDENPUT.style.display = 'block';

}

function hiddenPut() {
  document.getElementById("put").style.display = 'none';
  BUTTON_PUT.style.display = 'block';
  BUTTON_HIDDENPUT.style.display = 'none';
}
function showSearch(){

  document.getElementById('searchBar').style.display = 'block';

}

async function crearCliente(){

  const form = document.getElementById('form-post');
  let nombre = form.getElementsByTagName("input")[0].value;
  let apellidos = form.getElementsByTagName("input")[1].value;
  let telefonoMovil = form.getElementsByTagName("input")[2].value;
  let telefonoFijo = form.getElementsByTagName("input")[3].value;
  let hijos = form.getElementsByTagName("input")[4].value;


  let datas = {
    nombre: nombre,
    apellidos: apellidos,
    telefonos: [{telefonoMovil},{telefonoFijo}],
    hijos: hijos
  }

  const option = {
    headers: {'Content-Type': 'application/json'},
    method: "POST",
    mode: "cors",
    body: JSON.stringify(datas),
  };

  let request = new Request('http://localhost:8084/users', option);

  const response = await fetch(request);
  const json= await response.json();
  console.log(json);


}



document.getElementById('searchBar').addEventListener('keydown', (e) => {

  if(e.code === "Enter") {
    buscarCliente(e);
  } else{}

});

async function buscarCliente(){

  const nombre = document.getElementById('searchBar').value;


  const option = {
    headers: {'Content-Type': 'application/json'},
    method: "GET",
    body: undefined
  };

  let request = new Request(`http://localhost:8084/users/${nombre}`, option);

  const response = await fetch(request);
  const json= await response.json();

  (function () {
    let html=new Array();

                for(let nodo in json){
                 html.push(`<p>${JSON.stringify(json[nodo])}</p><br>`);
                }
                DIV.innerHTML= html.toString();
  }());

  console.log(json);


}

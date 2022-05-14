const DIV = document.getElementById('datos');

async function crearCliente() {
   const form = document.getElementById('form-post');
   const nombre = form.getElementsByTagName('input')[0].value;
   const apellidos = form.getElementsByTagName('input')[1].value;
   const telefonoMovil = form.getElementsByTagName('input')[2].value;
   const telefonoFijo = form.getElementsByTagName('input')[3].value;
   const hijos = form.getElementsByTagName('input')[4].value;

   const datas = {
      nombre,
      apellidos,
      telefonos: [{ telefonoMovil }, { telefonoFijo }],
      hijos,
   };

   const option = {
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(datas),
   };

   const request = new Request('http://localhost:8084/users', option);

   const response = await fetch(request);
   const json = await response.json();
}

document.getElementById('searchBarText').addEventListener('keydown', (e) => {
   if (e.code === 'Enter') {
      buscarCliente(e);
   }
});

async function buscarCliente() {
   const nombre = document.getElementById('searchBarText').value;

   const option = {
      headers: { 'Content-Type': 'application/json' },
      method: 'GET',
      body: undefined,
   };

   const request = new Request(`http://localhost:8084/users/${nombre}`, option);

   const response = await fetch(request);
   const json = await response.json();

   (function () {
      const html = [];

      for (const nodo in json) {
         html.push(json[nodo]);
      }

      const node = document.createElement('p', 'br');
      const textnode = document.createTextNode(`Nombre cliente: ${html[0]}`);
      node.appendChild(textnode);
      const node1 = document.createElement('p', 'br');
      const textnode1 = document.createTextNode(
         `Apellidos cliente: ${html[1]}`
      );
      node1.appendChild(textnode1);

      DIV.appendChild(node);
      DIV.appendChild(node1);
   })();
}

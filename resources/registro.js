const url = "http://34.232.233.57:3000/api/usuario/";
let resultados = '';
const formArticulo = document.querySelector("form");
const nomuser = document.getElementById("NOMUSER");
const emauser = document.getElementById("EMAUSER");
const celuser = document.getElementById("CELUSER");
const prouser = document.getElementById("PROUSER");
const ldpuser = document.getElementById("LDPUSER");
var opcion = '';

btnCrear.addEventListener('click', () => {
    console.log("Acción de listar activada");
    opcion = 'crear';
});

formArticulo.addEventListener('submit',
    (e) => {
   	 e.preventDefault();
   	 if (opcion == 'crear') {
   		 if (NOMUSER.value == "" || EMAUSER.value == "" || CELUSER.value == "" || PROUSER.value == "" || LDPUSER.value == "") {
       		 alert("Asegúrese de que todos los campos estén completos");
       		 return false;
   		 } else {
       		 console.log("Todos los campos están completos");
       		 fetch(
           		 url,
           		 {
               		 method: 'POST',
               		 headers: {
                   		 'content-Type':'application/json'
               		 },
               		 body: JSON.stringify(
                   		 {
                       		 NOMUSER: NOMUSER.value,
                       		 EMAUSER: EMAUSER.value,
                       		 CELUSER: CELUSER.value,
                       		 PROUSER: PROUSER.value,
                       		 LDPUSER: LDPUSER.value
                   		 }
               		 )
           		 }
       		 )
       		 .then(
           		 response => response.json()
       		 )
       		 .then(
           		 response => location.reload()
       		 );
   		 }
   	 } else if(opcion == 'editar'){
   		 console.log("Activado el ");
   	 }
    }
);
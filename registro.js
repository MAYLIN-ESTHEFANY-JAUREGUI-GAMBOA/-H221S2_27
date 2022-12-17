const url = "http://52.7.42.231:3000/api/Usuario/";
let resultados = '';
const formArticulo = document.querySelector("form");
const NOM_USER = document.getElementById("NOM_USER");
const APE_USER = document.getElementById("APE_USER");
const GMA_USER = document.getElementById("GMA_USER");
const CEL_USER = document.getElementById("CEL_USER");
const PRO_USER = document.getElementById("PRO_USER");
const LDP_USER = document.getElementById("LDP_USER");
var opcion = '';

btnCrear.addEventListener('click', () => {
    console.log("Acción de listar activada");
    opcion = 'crear';
});

formArticulo.addEventListener('submit',
    (e) => {
   	 e.preventDefault();
   	 if (opcion == 'crear') {
   		 if (NOM_USER.value == "" || APE_USER.value == "" || GMA_USER.value == "" || CEL_USER.value == "" || PRO_USER.value == ""|| LDP_USER.value == "") {
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
                       		NOM_USER: NOM_USER.value,
                       		APE_USER: APE_USER.value,
                       		GMA_USER: GMA_USER.value,
                       		CEL_USER: CEL_USER.value,
                       		PRO_USER: PRO_USER.value,
							LDP_USER: LDP_USER.value
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
let nombre = "Luis";
let apellido = "Robles";

let estudiante = `${nombre} ${apellido}`;

let estudianteMayus = estudiante.toUpperCase();

let estudianteMinus = estudiante.toLowerCase();

let longitud = estudiante.length;

let primeraLetra = nombre.charAt(0);

let ultimaLetraApellido = apellido.charAt(apellido.length -1);

let estudianteSinEspacios = estudiante.replace(" ","");

let contiene = estudiante.includes(nombre);

console.log(contiene);
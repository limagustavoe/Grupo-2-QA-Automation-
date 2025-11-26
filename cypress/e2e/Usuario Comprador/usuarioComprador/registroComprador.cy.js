/*El siguiente test case tiene como objetivo
registrar el cliente comprador de entradas en el formulario de registro.*/
function generarEmailRandom() {
    const tiempoActual = Date.now();
    return `test${tiempoActual}@gmail.com`;
  }
function generarDNIRandom() {
    // Genera un DNI de 7-8 dígitos
    const dni = Math.floor(Math.random() * 90000000) + 10000000;
    return dni.toString();
  }

function generarTelefonoRandom() {
    // Genera un Numero de Telefono de 10 dígitos
    const numeroTelefono = Math.floor(Math.random() * 9000000000) + 1000000000;
    return numeroTelefono.toString();
}
function generarContrasena() {
  const abecedario = "abcdefghijklmnopqrstuvwxyz";
  const numeros = "0123456789";
  const especiales = "!@#$%^&*()-_=+[]{};:,.<>/?";

 
  let contrasena = abecedario[Math.floor(Math.random() * abecedario.length)].toUpperCase();

  
  for (let i = 0; i < 2; i++) {
    contrasena += numeros[Math.floor(Math.random() * numeros.length)];
  }

  contrasena += especiales[Math.floor(Math.random() * especiales.length)];

  
  while (contrasena.length < 8) {
    contrasena += abecedario[Math.floor(Math.random() * abecedario.length)];
  }

  let primera = contrasena[0];
  let resto = contrasena.slice(1).split("");

  
  for (let i = resto.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [resto[i], resto[j]] = [resto[j], resto[i]];
  }

  return primera + resto.join("");
}





describe('Registrar Cliente Comprador de Entradas', () => {

    beforeEach(() => {

        cy.visit('https://ticketazo.com.ar/')
    })

})
it('Login',()=>{

    const dniAleatorio = generarDNIRandom();
    const emailAleatorio = generarEmailRandom();
    const telefonoAleatorio = generarTelefonoRandom();
    const contrasenaAleatoria = generarContrasena();

    cy.registroComprador(
    dniAleatorio,
    emailAleatorio,
    telefonoAleatorio,
    contrasenaAleatoria
)
    });
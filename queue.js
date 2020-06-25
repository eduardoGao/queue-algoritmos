var fila = [];
var item = 1;


function entrar() {
  if(fila.length == 5) {
    console.log('La fila está llena');
  } else {
    fila.push(item++);
  }
}

function salir() {
  if(fila.length == 0) {
    console.log('La fila está vacía');
  } else {
    fila.shift();
  }
}

function activeEntry() {
  const entry = document.getElementById('entry');
  entrar();
  console.log(fila);
}

function activeExit() {
  const exit = document.getElementById('exit');
  salir();
  console.log(fila);
}

console.log(fila);
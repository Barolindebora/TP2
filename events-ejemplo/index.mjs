import { EventEmitter } from 'events'; 

//Crear una instancia EventEmmitter
const emisor=new EventEmitter(); 

//Definir un evento personalizado 
emisor.on('saludo', (nombre) =>{console.log ('Hola, ${nombre}');

});

//Emitir evento saludo
emisor.emit('saludo', 'mundo'); 
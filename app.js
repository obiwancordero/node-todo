const argv = require('./config/yargs').argv;
const colors = require('colors');
const todoFunc = require('./todo/todo');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = todoFunc.crear(argv.descripcion);

        break;
    case 'listar':
        let listado = todoFunc.getListado();

        for (let tarea of listado) {
            console.log("==========por hacer ========".green);
            console.log('todo: ', tarea.descripcion);
            console.log("estado: ", tarea.completado);
            console.log("============================".green);
        }
        break;
    case 'actualizar':
        //console.log('actualizar', argv.descripcion, argv.completado);
        let actualizado = todoFunc.actualizar(argv.descripcion, argv.completado);
        console.log("Actualizado");
        break;
    case 'borrar':
        let borrar = todoFunc.borrar(argv.descripcion, argv.confirm);

        break;
    default:
        console.log('comado no reconocido');
}
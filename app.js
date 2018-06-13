const argv = require('./config/yargs').argv;
const colors = require('colors');
const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch (comando) {

    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':
        let listado = porHacer.getListado(argv.completado);
        if (listado != null) {
            for (let tarea of listado) {
                console.log('=========Por hacer======='.green);
                console.log(tarea.descripcion);
                console.log(tarea.completado);
                console.log('=========Por hacer======='.green);
            }
        } else {
            console.log(`No existe registro con completado = ${ argv.completado}`);
        }
        break;

    case 'actualizar':

        let actualizado = porHacer.actualizar(argv.descripcion, argv.actualizado);
        console.log(actualizado);
        break;

    case 'borrar':

        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;

    default:
        console.log('Comando no es reconocido');
}
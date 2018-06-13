const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
}

const completado = {
    alias: 'c',
    default: true,
    desc: 'Completa una tarea por hacer'
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Elimina una tarea de la Base de Datos', {
        descripcion
    })
    .command('listar', 'Lista el estado de una tarea de acuerdo al completado', {
        completado
    })
    .help()
    .argv;

module.exports = {
    argv
}
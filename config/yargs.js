const argv = require('yargs')
    .command('crear', 'crea nueva tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'descripcion de la tarea obligatoria'
        }
    })
    .command('actualizar', 'Actualizar tarea', {
        descripcion: {
            demand: true,
            alias: 'd'
        },
        completado: {
            alias: 'c',
            default: true
        }
    })
    .command('listar', 'Actualizar tarea', {
        descripcion: {
            demand: false,
            alias: 'd'
        }
    })
    .command('borrar', 'Borra tarea', {
        descripcion: {
            demand: true,
            alias: 'd'
        },
        confirm: {
            demand: true,
            alias: 'c',
            desc: 'Confirmacion de borrardo (n) para NO y (s) para SI'
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}
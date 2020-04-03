//guardar en filesystem
const fs = require('fs');



//arreglo de listado
let listadoPorHacer = [];

const saveDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    //guardar en FS
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo Guardar');
    });
};

const loadDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }



};

const crear = (descripcion) => {

    //Cargar DB en tmp;
    loadDB();


    let toDo = {
        descripcion,
        completado: false
    };
    //hacer push
    listadoPorHacer.push(toDo);
    saveDB();
    return toDo;
};



const getListado = () => {
    loadDB();
    return listadoPorHacer;

};

const actualizar = (descripcion, completado = true) => {
    loadDB();

    //busqueda en JSON 
    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        saveDB()
        return true;
    } else {
        return false;
    }

};

const borrar = (descripcion, confirmacion) => {
    loadDB();
    if (confirmacion !== 's') {
        return console.log("debe confirmar para borrar");
    }
    let nuevoListado = listadoPorHacer.filter(tarea => {
        return tarea.descripcion !== descripcion
    });

    if (listadoPorHacer.length === nuevoListado.length) {
        console.log("no se borró");
    } else {
        console.log("si se borro");
        listadoPorHacer = nuevoListado;
        saveDB();
        return true;
    }


};

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}
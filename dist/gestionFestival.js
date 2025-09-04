"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Festival = exports.Entrada = exports.Staff = exports.Artista = exports.Participante = void 0;
class Participante {
    nombre;
    constructor(nombre) {
        this.nombre = nombre;
    }
}
exports.Participante = Participante;
class Artista extends Participante {
    genero;
    tipo;
    constructor(nombre, genero, tipo) {
        super(nombre);
        this.genero = genero;
        this.tipo = tipo;
    }
    presentarse() {
        return `🎤 Hola, soy ${this.nombre}, toco ${this.genero} y mi instrumento es ${this.tipo}`;
    }
    tocar() {
        return `🎶 ${this.nombre} está tocando su ${this.tipo}`;
    }
}
exports.Artista = Artista;
class Staff extends Participante {
    rol;
    constructor(nombre, rol) {
        super(nombre);
        this.rol = rol;
    }
    presentarse() {
        return `👷 Soy ${this.nombre}, mi rol como staff es: ${this.rol}`;
    }
}
exports.Staff = Staff;
class Entrada {
    precio;
    codigo;
    constructor(precio, codigo) {
        this.precio = precio;
        this.codigo = codigo;
    }
    getPrecio() {
        return this.precio;
    }
    setPrecio(precio) {
        this.precio = precio;
    }
}
exports.Entrada = Entrada;
class Festival {
    nombre;
    artistas = [];
    staff = [];
    entradas = [];
    constructor(nombre) {
        this.nombre = nombre;
    }
    agregarArtista(artista) {
        this.artistas.push(artista);
    }
    agregarStaff(staff) {
        this.staff.push(staff);
    }
    venderEntrada(entrada) {
        this.entradas.push(entrada);
    }
    iniciar() {
        const mensajes = [];
        mensajes.push(`🎉 Bienvenidos al festival: ${this.nombre}`);
        this.artistas.forEach((a) => mensajes.push(a.presentarse()));
        this.staff.forEach((s) => mensajes.push(s.presentarse()));
        return mensajes;
    }
    totalRecaudado() {
        return this.entradas.reduce((total, entrada) => total + entrada.getPrecio(), 0);
    }
}
exports.Festival = Festival;
//# sourceMappingURL=gestionFestival.js.map
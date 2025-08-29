declare abstract class Participante {
    nombre: string;
    constructor(nombre: string);
    abstract presentarse(): string;
}
interface IInstrumento {
    tipo: string;
    tocar(): string;
}
declare class Artista extends Participante implements IInstrumento {
    private genero;
    readonly tipo: string;
    constructor(nombre: string, genero: string, tipo: string);
    presentarse(): string;
    tocar(): string;
}
declare class Staff extends Participante {
    rol: string;
    constructor(nombre: string, rol: string);
    presentarse(): string;
}
declare class Entrada {
    private precio;
    readonly codigo: string;
    constructor(precio: number, codigo: string);
    getPrecio(): number;
    setPrecio(precio: number): void;
}
declare class Festival {
    nombre: string;
    private artistas;
    private staff;
    private entradas;
    constructor(nombre: string);
    agregarArtista(artista: Artista): void;
    agregarStaff(staff: Staff): void;
    venderEntrada(entrada: Entrada): void;
    iniciar(): string[];
    totalRecaudado(): number;
}
export { Participante, type IInstrumento, Artista, Staff, Entrada, Festival };
//# sourceMappingURL=gestionFestival.d.ts.map
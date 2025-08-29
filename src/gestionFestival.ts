abstract class Participante {
  constructor(public nombre: string) {}
  abstract presentarse(): string; 
}

interface IInstrumento {
  tipo: string;
  tocar(): string;
}

class Artista extends Participante implements IInstrumento {
  private genero: string;
  readonly tipo: string;

  constructor(nombre: string, genero: string, tipo: string) {
    super(nombre);
    this.genero = genero;
    this.tipo = tipo;
  }

  presentarse(): string {
    return `🎤 Hola, soy ${this.nombre}, toco ${this.genero} y mi instrumento es ${this.tipo}`;
  }

  tocar(): string {
    return `🎶 ${this.nombre} está tocando su ${this.tipo}`;
  }
}

class Staff extends Participante {
  constructor(nombre: string, public rol: string) {
    super(nombre);
  }

  presentarse(): string {
    return `👷 Soy ${this.nombre}, mi rol como staff es: ${this.rol}`;
  }
}

class Entrada {
  constructor(private precio: number, public readonly codigo: string) {}

  getPrecio(): number {
    return this.precio;
  }

  setPrecio(precio: number): void {
    this.precio = precio;
  }
}

class Festival {
  private artistas: Artista[] = [];
  private staff: Staff[] = [];
  private entradas: Entrada[] = [];

  constructor(public nombre: string) {}

  agregarArtista(artista: Artista): void {
    this.artistas.push(artista);
  }

  agregarStaff(staff: Staff): void {
    this.staff.push(staff);
  }

  venderEntrada(entrada: Entrada): void {
    this.entradas.push(entrada);
  }

  iniciar(): string[] {
    const mensajes: string[] = [];
    mensajes.push(`🎉 Bienvenidos al festival: ${this.nombre}`);
    this.artistas.forEach((a) => mensajes.push(a.presentarse()));
    this.staff.forEach((s) => mensajes.push(s.presentarse()));
    return mensajes;
  }

  totalRecaudado(): number {
    return this.entradas.reduce((total, entrada) => total + entrada.getPrecio(), 0);
  }
}

export { Participante, type IInstrumento, Artista, Staff, Entrada, Festival };

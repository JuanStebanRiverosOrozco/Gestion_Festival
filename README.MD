# Guía Básica de TypeScript con POO

## ¿Qué es TypeScript y en qué se diferencia de JavaScript?
TypeScript es como una versión mejorada de JavaScript.  
Imagina que **JavaScript es un carro** que puedes manejar de inmediato, pero **TypeScript es ese mismo carro con un sistema de seguridad adicional** que te avisa si una llanta está baja o si se te olvidó abrocharte el cinturón antes de que arranques.  

La gran diferencia es que **TypeScript agrega tipos de datos** (string, number, boolean), lo que ayuda a encontrar errores mientras escribes el código, no cuando ya lo ejecutas.  
👉 Todo código JavaScript válido también es válido en TypeScript.

---

## Ventajas de TypeScript en la Programación Orientada a Objetos (POO)
- **Tipado Estático**: te obliga a ser más organizado con tus datos.  
- **Interfaces**: son contratos que aseguran que todas las clases que los implementen se comporten de forma similar.  
- **Modificadores de Acceso**: controlan quién puede acceder a las propiedades y métodos de una clase (encapsulamiento).

---

## Modificadores de Acceso
Los modificadores controlan el acceso a las partes de una clase:

- **`public`** → acceso libre (por defecto).  
```ts
class Coche {
    public marca: string;
}
private → acceso restringido a la clase.
class CuentaBancaria {
    private saldo: number;
}
protected → acceso desde la clase y sus herederas.
class Vehiculo {
    protected velocidad: number;
}
readonly

Es un candado: una vez asignado un valor (generalmente en el constructor), no se puede modificar.
Ideal para propiedades que no deben cambiar, como un número de identificación.
class Usuario {
    readonly id: number;
    constructor(id: number) {
        this.id = id;
    }
}
Clases y Objetos en TS
Clase: el plano o diseño del objeto.
Objeto: una instancia real de la clase.
class Persona {
    nombre: string;
}   
const persona1 = new Persona();
Constructores
Método especial que se ejecuta automáticamente al crear un nuevo objeto.
Sirve para inicializar valores de propiedades.
class Libro {
    titulo: string;
    constructor(titulo: string) {
        this.titulo = titulo;
    }
}
const miLibro = new Libro("1984");
Permite que una clase "hija" tome propiedades y métodos de una clase "padre".
extends → define la herencia.
super() → llama al constructor de la clase padre.
class Animal {
    constructor(public nombre: string) {}
}
class Perro extends Animal {
    constructor(nombre: string) {
        super(nombre);
    }
}
Polimorfismo

Significa "muchas formas". Permite que objetos de diferentes clases se traten de la misma manera si comparten una herencia o interfaz.
abstract class Animal {
    abstract hacerSonido(): void;
}

class Perro extends Animal {
    hacerSonido() { console.log("Guau!"); }
}

class Gato extends Animal {
    hacerSonido() { console.log("Miau!"); }
}

const animales: Animal[] = [new Perro(), new Gato()];
animales.forEach(a => a.hacerSonido()); // Guau! / Miau!
Clases Abstractas vs Clases Normales

Clase normal → puedes crear objetos directamente con new.
Clase abstracta → no puedes crear objetos directamente; obliga a que sus hijas implementen métodos incompletos
abstract class Empleado {
    abstract calcularSalario(): number;
}
Interfaces vs Clases Abstractas

Interface → define un contrato (qué debe tener una clase), no la implementación. Una clase puede implementar varias interfaces.

Clase abstracta → puede tener implementación real y métodos abstractos. Una clase solo puede heredar de una única clase abstracta.

Pilares de la POO en TS (Ejemplo mínimo)

Abstracción
abstract class Empleado { abstract calcularSalario(): number; }
Encapsulamiento
private _nombre: string;

Herencia
class Gerente extends Empleado { ... }

Polimorfismo
let empleado: Empleado = new Gerente();

Configuración de TypeScript con Node.js y VS Code

Instalar Node.js
Descárgalo de su página oficial.

Crear proyecto
npm init -y

Instalar TypeScript
npm install typescript --save-dev

Generar archivo de configuración
npx tsc --init

Instalar tipos de Node.js (opcional)
npm install @types/node --save-dev

Compilar y ejecutar
tsc archivo.ts
node archivo.js
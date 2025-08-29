¿Qué es TypeScript y en qué se diferencia de JavaScript?
TypeScript es como una versión mejorada de JavaScript. Imagina que JavaScript es un carro que puedes manejar de inmediato, pero TypeScript es el mismo carro con un sistema de seguridad adicional que te avisa si una llanta está baja o si se te olvidó abrocharte el cinturón antes de que arranques. La gran diferencia es que TypeScript agrega tipos de datos (como string, number, boolean), lo que te ayuda a encontrar errores en tu código mientras lo escribes, no cuando ya lo estás ejecutando. A pesar de esto, todo código JavaScript válido es también código TypeScript.

Ventajas de TypeScript en la Programación Orientada a Objetos (POO)
TypeScript es ideal para la POO porque te ayuda a construir software más robusto y fácil de mantener.

Tipado Estático: Te obliga a ser más organizado con tus datos. Por ejemplo, si una propiedad de una clase debe ser un número, TypeScript no te dejará asignarle un texto. Esto evita errores tontos y hace tu código más predecible.

Interfaces: Son como contratos que tus clases deben cumplir. Una interfaz te dice: "Si quieres ser una clase de Vehiculo, tienes que tener una propiedad velocidad y un método acelerar()". Esto asegura que todos los objetos que representen lo mismo se comporten de manera similar.

Modificadores de Acceso: Te permiten controlar quién puede ver y usar las propiedades y métodos de una clase. Esto es clave para el encapsulamiento, un pilar de la POO.

Modificadores de acceso (public, private, protected)
Son como llaves que definen el acceso a las partes de una clase.

public: Es el acceso por defecto, la "puerta principal". Cualquiera puede entrar y usar lo que esté adentro.

TypeScript

class Coche {
    public marca: string;
}

private: El acceso es restringido, la "caja fuerte". Solo la clase en sí misma puede usar lo que está dentro. Ni siquiera otras clases que hereden de ella pueden acceder.

TypeScript

class CuentaBancaria {
    private saldo: number;
}

protected: El acceso es para la "familia". La clase y sus "hijos" (clases que heredan de ella) pueden usar lo que está dentro, pero nadie más.

TypeScript

class Vehiculo {
    protected velocidad: number;
}

¿Qué es un readonly y para qué se usa?
readonly es como un candado que pones a una propiedad. Una vez que le asignas un valor (generalmente en el constructor), no se puede cambiar. Esto es perfecto para cosas que no deberían variar, como el número de identificación de un usuario o la fecha de creación de un registro.

¿Cómo se definen clases y objetos en TS?
Una clase es el plano o diseño de un objeto. Un objeto es una instancia, es decir, un ejemplar real de esa clase.

Clase: Se define con la palabra class.

TypeScript

class Persona {
    nombre: string;
}

Objeto: Se crea usando la palabra new.

TypeScript

const persona1 = new Persona();
¿Qué son los constructores y para qué sirven?
El constructor es un método especial que se ejecuta automáticamente cuando creas un nuevo objeto. Su única tarea es preparar el objeto, dándole valores iniciales a sus propiedades. Es como la cadena de montaje de una fábrica que le pone el motor y las llantas a un carro nuevo.

TypeScript

class Libro {
    titulo: string;
    constructor(titulo: string) {
        this.titulo = titulo;
    }
}

const miLibro = new Libro("1984"); // El constructor se ejecuta aquí.
¿Qué es la herencia en TS y cómo se implementa?
La herencia permite que una clase "hija" tome las propiedades y métodos de una clase "padre". Esto te ahorra mucho trabajo porque no tienes que escribir el mismo código una y otra vez.

extends: Se usa en la clase hija para decir de qué clase padre hereda.

super(): Se usa en el constructor de la clase hija para llamar al constructor de la clase padre y asegurarse de que sus propiedades también se inicialicen correctamente.

TypeScript

class Animal {
    constructor(public nombre: string) {}
}
class Perro extends Animal {
    constructor(nombre: string) {
        super(nombre); // Llama al constructor de Animal
    }
}

¿Qué significa polimorfismo en el contexto de TS?
Polimorfismo significa "muchas formas". En TypeScript, esto se refiere a la capacidad de que objetos de diferentes clases (pero que comparten una herencia o una interfaz común) puedan ser tratados de la misma manera. Por ejemplo, si tienes una clase Perro y una clase Gato que heredan de Animal, puedes tener una lista de Animales y llamar a un método hacerSonido() en cada uno. Aunque el método se llame igual, el Perro ladrará y el Gato maullará.

¿Qué son las clases abstractas y qué diferencia tienen con una clase normal?
Clase normal: Puedes crear objetos directamente de ella con new.

Clase abstracta: No puedes crear objetos directamente de ella. Es un plano incompleto que obliga a sus clases "hijas" a completar ciertas funcionalidades. Es como la maqueta de una casa que no puedes habitar, pero que te obliga a construir las paredes y el techo si quieres hacer una casa de verdad.

¿Qué es una interface en TS y en qué se diferencia de una clase abstracta?
interface: Define un contrato. Solo dice "qué" debe tener una clase (qué métodos, qué propiedades), pero no "cómo" implementarlo. Una clase puede cumplir con varios contratos a la vez.

Clase abstracta: Puede contener código de verdad (implementación) y, además, definir métodos abstractos que las clases hijas deben implementar. Una clase solo puede heredar de una única clase abstracta.

Pilares de la POO en TS: Ejemplo mínimo
Abstracción: abstract class Empleado { abstract calcularSalario(): number; }

Encapsulamiento: private _nombre: string;

Herencia: class Gerente extends Empleado { ... }

Polimorfismo: let empleado: Empleado = new Gerente();

Configuración de TypeScript con Node.js y VS Code
Instala Node.js: Es la base para que corra JavaScript fuera del navegador. Puedes descargarlo de su página oficial.

Crea tu proyecto: En la terminal, haz npm init -y en una carpeta vacía.

Instala TypeScript: Con el comando npm install typescript --save-dev. Esto lo agrega a tu proyecto.

Genera el archivo tsconfig.json: Ejecuta npx tsc --init. Este archivo es tu manual de instrucciones para el compilador de TypeScript.

Instala los tipos de Node: Si usarás cosas de Node.js, como el sistema de archivos, instala npm install @types/node --save-dev.

Usa VS Code: El editor ya viene listo para trabajar con TypeScript. Simplemente abre la carpeta de tu proyecto y ¡a programar! Para compilar tu código, usa el comando tsc y luego node para ejecutar el archivo JavaScript que se generó.
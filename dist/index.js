import { input, select } from "@inquirer/prompts";
import { Artista, Staff, Entrada, Festival } from "./gestionFestival.js";
// MENÚ INTERACTIVO
const festival = new Festival("Live Music Fest");
while (true) {
    const opcion = await select({
        message: "🎶 Menú del Festival",
        choices: [
            { name: "Agregar artista", value: "add_artist" },
            { name: "Agregar staff", value: "add_staff" },
            { name: "Vender entrada", value: "sell_ticket" },
            { name: "Mostrar festival", value: "show" },
            { name: "Ver total recaudado", value: "revenue" },
            { name: "Salir", value: "exit" }
        ]
    });
    if (opcion === "exit") {
        console.log("👋 Gracias por usar el simulador del festival.");
        break;
    }
    if (opcion === "add_artist") {
        const nombre = await input({ message: "🎤 Nombre del artista:" });
        const genero = await input({ message: "🎶 Género musical:" });
        const tipo = await input({ message: "🎸 Instrumento que toca:" });
        const artista = new Artista(nombre, genero, tipo);
        festival.agregarArtista(artista);
        console.log(`✅ Artista ${nombre} agregado.`);
    }
    if (opcion === "add_staff") {
        const nombre = await input({ message: "👷 Nombre del staff:" });
        const rol = await input({ message: "🔧 Rol del staff:" });
        const staff = new Staff(nombre, rol);
        festival.agregarStaff(staff);
        console.log(`✅ Staff ${nombre} agregado.`);
    }
    if (opcion === "sell_ticket") {
        const precioStr = await input({ message: "💵 Precio de la entrada:" });
        const codigo = await input({ message: "🎫 Código de la entrada:" });
        const precio = parseFloat(precioStr);
        if (!isNaN(precio)) {
            const entrada = new Entrada(precio, codigo);
            festival.venderEntrada(entrada);
            console.log(`✅ Entrada vendida por $${precio.toLocaleString()}`);
        }
        else {
            console.log("❌ Precio inválido.");
        }
    }
    if (opcion === "show") {
        const mensajes = festival.iniciar();
        mensajes.forEach((msg) => console.log(msg));
    }
    if (opcion === "revenue") {
        console.log(`💰 Total recaudado: $${festival.totalRecaudado().toLocaleString()}`);
    }
}
//# sourceMappingURL=index.js.map
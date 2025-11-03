import Cl_vGeneral, { tHTMLElement } from "./tools/Cl_vGeneral.js";
export default class Cl_vEquipos extends Cl_vGeneral {
    constructor() {
        super({ formName: "agenda" });
        this.inNombre = this.crearHTMLInputElement("inNombre", {
            refresh: () => { },
            oninput: () => this.mostrarContactosRegistrados(),
        });
        this.btAgregar = this.crearHTMLButtonElement("btAgregar", {
            onclick: () => this.agregarContacto(),
        });
        this.divContactosRegistrados = this.crearHTMLElement("divContactosRegistrados", {
            type: tHTMLElement.CONTAINER,
            refresh: () => this.mostrarContactosRegistrados(),
        });
    }
    get nombre() {
        return this.inNombre.value.trim();
    }
    mostrarContactosRegistrados() {
        this.divContactosRegistrados.innerHTML = "";
        let contactos = this.controlador.contactosRegistrados();
        contactos = contactos.filter((contacto) => {
            return contacto.nombre.toLowerCase().includes(this.nombre.toLowerCase());
        });
        contactos.forEach((contacto) => {
            this.divContactosRegistrados.innerHTML += `<tr>
            <td style="width: 80px;">${contacto.cedula}</td>
            <td style="width: 200px;">${contacto.nombre}</td>
            <td style="width: 80px;">${contacto.telefono}</td>
        </tr>`;
        });
    }
    agregarContacto() {
        let cedula = prompt("Ingrese la cédula del nuevo contacto:");
        if (!cedula)
            return;
        let nombre = prompt("Ingrese el nombre:");
        if (!nombre)
            return;
        let telefono = prompt("Ingrese el teléfono:");
        if (!telefono)
            return;
        this.controlador.agregarContacto({
            contactoData: {
                cedula: +cedula,
                nombre: nombre,
                telefono: telefono,
            },
            callback: (error) => {
                if (error)
                    alert(error);
                this.refresh();
            },
        });
    }
}

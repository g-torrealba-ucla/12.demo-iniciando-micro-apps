import Cl_mContacto from "./Cl_mContacto.js";
export default class Cl_mAgenda {
    constructor() {
        this.agenda = [];
    }
    contacto(cedula) {
        return this.agenda.find((contacto) => contacto.cedula === cedula) || null;
    }
    agregarContacto({ contactoData, callback }) {
        let contacto = new Cl_mContacto(contactoData);
        if (contacto.contactoError()) {
            callback(contacto.contactoError());
            return;
        }
        this.agenda.push(contacto);
        callback(false);
    }
}

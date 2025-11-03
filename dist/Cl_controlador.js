export default class Cl_controlador {
    constructor(modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;
    }
    agregarContacto({ contactoData, callback, }) {
        this.modelo.agregarContacto({
            contactoData,
            callback: (error) => {
                callback(error);
            },
        });
    }
    contactosRegistrados() {
        let contactos = [];
        this.modelo.agenda.map((contacto) => contactos.push(contacto.toJSON()));
        contactos.sort((a, b) => a.cedula - b.cedula);
        return contactos;
    }
}

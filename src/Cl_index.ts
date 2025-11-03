/**
 * Una aplicación que sirva para guardar los contactos de personas.
 * Debe permitir añadir un nuevo contacto.
 * Cada contacto tiene una cédula, nombre y un teléfono.
 * Debe permitir buscar por número agenda de teléfono.
 */

import Cl_controlador from "./Cl_controlador.js";
import Cl_mAgenda from "./Cl_mAgenda.js";
import Cl_vAgenda from "./Cl_vAgenda.js";
import { dtContactos } from "./data/dtContactos.js";

export default class Cl_index {
  public modelo: Cl_mAgenda;
  public vista: Cl_vAgenda;
  constructor() {
    this.modelo = new Cl_mAgenda();
    dtContactos.forEach((contacto) => {
      this.modelo.agregarContacto({
        contactoData: contacto,
        callback: (error: string | false) => {
          if (error) console.error(error);
        },
      });
    });
    this.vista = new Cl_vAgenda();
    let controlador = new Cl_controlador(this.modelo, this.vista);
    this.vista.controlador = controlador;
    this.vista.refresh();
  }
}

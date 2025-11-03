import { iContacto } from "./Cl_mContacto.js";
import Cl_mContacto from "./Cl_mContacto.js";
import { dtContactos } from "./data/dtContactos.js";
interface iResultObjects {
  objects: [iContacto] | null;
  error: string | false;
}
interface iResultEditObject {
  objects: [iContacto] | null;
  error: string | false;
}

export interface iAgregarContacto {
  contactoData: iContacto;
  callback: (error: string | false) => void;
}

export default class Cl_mAgenda {
  public agenda: Cl_mContacto[];
  constructor() {
    this.agenda = [];
  }
  contacto(cedula: number): Cl_mContacto | null {
    return this.agenda.find((contacto) => contacto.cedula === cedula) || null;
  }

  agregarContacto({ contactoData, callback }: iAgregarContacto): void {
    let contacto = new Cl_mContacto(contactoData);
    if (contacto.contactoError()) {
      callback(contacto.contactoError());
      return;
    }
    this.agenda.push(contacto);
    callback(false);
  }
}

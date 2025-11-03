export interface iContacto {
  cedula: number;
  nombre: string;
  telefono: string;
}
export default class Cl_mContacto {
  private _cedula: number = 0;
  private _nombre: string = "";
  private _telefono: string = "";
  constructor(
    { cedula = 0, nombre = "", telefono = "" }: iContacto = {
      cedula: 0,
      nombre: "",
      telefono: "",
    }
  ) {
    this.cedula = cedula;
    this.nombre = nombre;
    this.telefono = telefono;
  }
  set cedula(cedula: number) {
    this._cedula = +cedula;
  }
  get cedula() {
    return this._cedula;
  }
  set nombre(nombre: string) {
    this._nombre = nombre.trim();
  }
  get nombre() {
    return this._nombre;
  }
  set telefono(telefono: string) {
    this._telefono = telefono;
  }
  get telefono() {
    return this._telefono;
  }
  contactoError(): string | false {
    if (this.cedula <= 1000000 || this.cedula >= 99999999)
      return "Cédula inválida.";
    if (this.nombre === "") return "Nombre inválido.";
    if (this.telefono.length < 11) return "Teléfono inválido.";
    if (
      ["0412", "0422", "0414", "0424", "0416", "0426"].indexOf(
        this.telefono.substring(0, 4)
      ) < 0
    )
      return "Operadora telefónica inválida.";
    return false;
  }
  toJSON() {
    return {
      cedula: this._cedula,
      nombre: this._nombre,
      telefono: this._telefono,
    };
  }
}

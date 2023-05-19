let mensaje: string = "Hola mundo";

mensaje = "facundo";

console.log(mensaje);

mensaje = "chanchito feliz";

let edad: number = 26;
let deporteFavorito: string = "crossfit";
let adulto: boolean = true;

const chanchitoFeliz = (config: any) => {
  return config;
};

let animales: string[] = ["perro", "gato", "conejo"];
let nums: number[] = [1, 2, 3];
let checks: boolean[] = [];
let num2: Array<number> = [];

// nums.map(x => x.) // el autocompletado sugiere metodos del tipo de datos que hay en el array.

let tupla: [number, string[]] = [1, ["facundo", "cajita feliz"]];

const chica = "s";
const mediana = "m";
const grande = "l";
const extragrande = "xl";

enum Talla {
  Chica = "s",
  Mediana = "m",
  Grande = "l",
  ExtraGrande = "xl",
}

const variable1 = Talla.Grande;
console.log(variable1);

const enum LoadingState {
  Idle,
  Loading,
  Success,
  Error,
}

const estado = LoadingState.Success;

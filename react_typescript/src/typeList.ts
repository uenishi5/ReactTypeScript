// TypeScriptの基本の型
export {};

//boolean
let falg: boolean = true;

//number 数値
let number: number = 0;

//string 文字列
let str: string = "A";

//Array 配列
let array1: Array<number> = [1, 2, 3, 4, 5];
let array2: number[] = [1, 2, 3, 4];

//tuple
let tuple: [number, string] = [1, "A"];

//any　何でも入れることができるので、非推奨
let any: any = false;

// void　「const functionA = () : void => {」に暗黙的に型変換してくれる
const functionA = () => {
  const test = "TEST";
};

//null
let null1: null = null;

// undefined
let undefined1: undefined = undefined;

//object
let object1: object = {};
let object2: { id: number; name: string } = { id: 0, name: "ヒンナ" };

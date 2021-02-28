//型推論できるときは型注釈を書かない
const hasValue = true;

const person = {
  name: {
    first: 'chan',
    last: 'mako'
  },
  age: 24
}

const fruits: string[] = ['Apple', 'Banana', 'Grape']

//タプル型 必ずstring,number,booleanの順番
const book: [string , number, boolean] = ['business', 1500, false]

//列挙型 enum 入る値を限定する
enum CoffeeSize {
  SHORT = 'SHORT',
  TALL = 'TALL',
  GRANDE = 'GRANDE',
  VENTI = 'VENTI'
}

const coffee = {
  hot: true,
  size: CoffeeSize.TALL
}
coffee.size = CoffeeSize.SHORT;

//ユニオン型 OR演算子のような
let union: number | string = 10;
union = 'hello';
union.toUpperCase();

const unionType: (number | string)[] = [21, 'hello']

//リテラル型 決まった値に限定する
// const apple: 'apple' = 'apple'
const apple = 'apple'

const clothSize: 'small' | 'medium' | 'large' = 'large';

const cloth: {
  color: string,
  size: 'small' | 'medium' | 'large'
} = {
  color: 'white',
  size: 'medium'
}

//typeエイリアス
type ClothSize = 'small' | 'medium' | 'large';

//関数に型をつける
function add(num1: number, num2: number): number {
  return num1 + num2
}

function hello(): void {
  console.log('Hello')
}

const doubleNumber = (num: number): number => num * 2;

function doubleAndHandle(num: number, cb: (num: number)=> number): void {
  const doubleNum = cb(num * 2)
}
doubleAndHandle(21, doubleNum => {
  return doubleNum
})

//unknown型
let unknownInput: unknown;
let anyInput: any;
let text:string;
unknownInput = 'hello';
unknownInput = 21;
unknownInput = true;

text = anyInput;

if(typeof unknownInput === 'string'){
  text = unknownInput;
}

//never型
function error(message: string) {
  throw new Error(message)
}
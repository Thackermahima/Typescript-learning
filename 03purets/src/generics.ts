const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number) : boolean | number {
    return val
}
function identityTwo(val : any) :any{
    return val
}
function identityThree<Type>(val: Type) : Type {
    return val
}
function identityFoure<T>(val: T) : T{
    return val
}
//It can return anything but if I number there it will return number only
//In case of any type, it can return different type as well.
//So you are locking a value here
//---Interface with generics

interface Bottle{
    brand: string,
    type : number
}
identityFoure<Bottle>({brand : "",type : 1})

//Generics with array.

function getSearchProducts<T>(products: T[]) : T {
    const num = 3
    // return products[3]
    return products[num]

}
//generics with arrow function.
const getSearch = <T,>(pro: T[]) : T => {
    return pro[4];
}
function anotherf<T,U extends Bottle>(valO: T,valT: U) : object{
    return {
        valO,
        valT
    }
}
interface Quiz{
    name : string,
    type : string
}
interface Course{
    name : string,
    code : number,
    semester : number
}
class Sellable<T>{
    public cart : T[] = []
    addToCart(product: T){
        this.cart.push(product);
    }
}
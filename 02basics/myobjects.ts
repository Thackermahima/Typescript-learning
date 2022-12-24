const user = {
    name : 'Mahima',
    email : 'mahima11@gmail.com',
    isActive : true
}

function currentUser({name : string, isPaid : boolean}){

}
currentUser({ name : "Mahima", isPaid : true});
//return object
function createCourse():{name : string, price : number}{
return { name : "anything", price : 499}
}

//type in typescript
//We can use type whenever we want to use multiple datatypes
//in a sngle object.

type User = {
 readonly _id : string
 name : string,
 email : string,
 isActive : boolean,
 creditCard ? : number
 //Option mark in ts -> ?
}
let myUser : User = {
  _id : "1234",
  name : "",
  email : "",
  isActive : false
}

// function createUser( user : User) {}
// createUser({name : "",email : "",isActive : true})
type cardName = {
  name : string
} 
type cardNumber = {
  cnumber: number
}
type cardData = cardName & cardNumber & {
  cvv : number
}

//extending types
type Animal = {
  name: string
}

type Bear = Animal & { 
  honey: boolean 
}

//A type cannot be change whereas interface can actually!
        
export {}
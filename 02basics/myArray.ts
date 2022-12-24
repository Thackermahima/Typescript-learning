const superHeroes : string[] = [];
superHeroes.push("hello");

const nums : number[] = [];
//2nd way to define array type -> const nums : Array<number> = [];

nums.push(5);

type User = {
    name : string,
    age : number
}
const allUsers: User[] = [];
allUsers.push({name : "",age : 10});

//array of array 

const allUser: number[][] = [
    [288,299,776],
];

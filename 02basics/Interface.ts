import { getCreate2Address } from "ethers/lib/utils";

interface User1 {
  readonly id: number;
  name: string;
  age: number;
  googleid?: string;
  startTrail(): string;
  getCoupon(couponname: string): number;
  //startTrail : () => string
}
interface User1 {
    gitToken : number
}
//You can create same name of interface again and you only need to add that property's data in var.
//Inheritance is also possible in the interfaces.
interface Admin extends User1{
role : "admin" | "no"
}
//const mahima: User1 = {
const mahima: Admin = {
  id: 2,
  name: "",
  role : "admin",
  age: 10,
  gitToken : 11,
  startTrail: () => {
    return "";
  },
  getCoupon: (name: "hello") => {
    return 11;
  },
};

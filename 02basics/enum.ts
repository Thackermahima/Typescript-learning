//Enum can be used when you want to restricts somebody's choices.
const AISLE = 0;
const MIDDLE = 1;
const WINDOW = 2;

//you can add const if you want to shortned your code.
enum SeatSelector {
    //you can declare specific value to it 
    //for ex :- AISLE -> 10 so now middle will become 11 and so on.
    AISLE, // -> 0 // a = 20
    MIDDLE,// -> 1 //b = 40
    WINDOW // -> 2
}

const hcSeat = SeatSelector.AISLE;


const ps4 = require("prompt-sync");
const prompt4 = ps4();
class Contacts {
    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }
    set firstName(firstName) {
        let pattern = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if (pattern.test(firstName)) {
            this._firstName = firstName;
        } else {
            throw "First Name is invalid.";
        }
    }
    get firstName() {
        return this._firstName;
    }

    set lastName(lastName) {
        let pattern = RegExp('^[A-Z]{1}[A-Za-z]{2,}$');
        if (pattern.test(lastName)) {
            this._lastName = lastName
        } else {
            throw "Last Name is invalid.";
        }
    }
    get lastName() {
        return this._lastName;
    }

    set address(address) {
        let pattern = RegExp('^[A-Za-z]{4,}$');
        if (pattern.test(address)) {
            this._address = address;
        } else throw "Address Must have 4 Characters";
    }

    get address() {
        return this._address;
    }

    set city(city) {
        let pattern = RegExp('^[A-Za-z]{4,}$');
        if (pattern.test(city)) {
            this._city = city;
        } else throw "State Must have 4 Characters";
    }

    get city() {
        return this._city;
    }

    set state(state) {
        let pattern = RegExp('^[A-Za-z]{4,}$');
        if (pattern.test(state)) {
            this._state = state;
        } else throw "State Must have 4 Charactes";
    }

    get state() {
        return this._state;
    }

    set zip(zip) {
        let Pattern = RegExp('^[0-9]{6}$');
        if (Pattern.test(zip)) {
            this._zip = zip;
        } else throw 'Zip Code must be of 6 digits.';
    }

    get zip() {
        return this._zip;
    }

    set phoneNo(phoneNo) {
        let Pattern = RegExp('^[0-9]{2}|\s|[0-9]{10}$');
        if (Pattern.test(phoneNo)) {
            this._phoneno = phoneNo;
        } else throw 'Invalid Phone Number.';
    }

    get phoneNo() {
        return this._phoneno;
    }

    set email(email) {
        let Pattern = RegExp('^[a-zA-Z0-9]+([+_.-][a-zA-Z0-9]+)*[@][a-zA-Z0-9]+[.][a-zA-Z]{2,4}([.][a-zA-Z]{2,4})?$');
        if (Pattern.test(email)) {
            this._email = email;
        } else throw "Invalid Email ID";
    }

    get email() {
        return this._email;
    }
    toString() {
        return "First Name= " + this.firstName
            + " Last Name= " + this.lastName
            + " Address= " + this.address
            + " City= " + this.city
            + " State= " + this.state
            + " Zip= " + this.zip
            + " Phone Number = " + this.phoneNumber
            + " Email = " + this.email;
    }
}
// UC1:Adding the contact in the address Book
// let contact1 = new Contacts("Sahil", "Khan", "Ambazari", "Nagpur", "MHGJ", "447141", "987962080", "sahil@gmail.com");
//console.log(contact1.toString());

//UC3: Creating array of contacts
let arr = new Array(new Contacts("Sahil", "Khan", "Ambazari", "Nagpur", "MHGJ", "447141", "987962080", "sahil@gmail.com"),
    new Contacts("Saurav", "Abc", "Colony", "Banglore", "UPKJ", "447554", "887962080", "saurav@gmail.com"),
    new Contacts("Ankit", "Xyz", "Patna", "Delhi", "WBDL", "541441", "123962080", "ankit@gmail.com"));

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].toString());
}
console.log("-------------------------");
//UC4: Editing contacts using the name
function editContacts(contact) {
    let firstName = prompt4("Enter the First Name is:");
    contact.firstName = firstName;
    let lastName = prompt4("Enter the last Name is:");
    contact.lastName = lastName;
    let address = prompt4("Enter your Address:");
    contact.address = address;
    let city = prompt4("Enter your City:");
    contact.city = city;
    let state = prompt4("Enter your State:");
    contact.state = state;
    let zip = prompt4("Enter your Zip:");
    contact.zip = zip;
    let pn = prompt4("Enter your phoneNumber:");
    contact.phoneNumber = pn;
    let emailaddress = prompt4("Enter your Email Address:");
    contact.email = emailaddress;
    contact = new Contacts(firstName, lastName, address, city, state, zip, pn, emailaddress);
}
let firstNameedit = prompt4("Enter the First Name you like to edit:");
for (let i = 0; i < arr.length; i++) {
    if (arr[i]._firstName == firstNameedit) {
        console.log("Print matched: " + arr[i].toString());
        editContacts(arr[i]);
        console.log("Print matched: " + arr[i].toString());
    }
}
printArray();

function printArray() {
    console.log("Printing all the contacts:")
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i].toString());
    }
}
//UC5: delete contacts
deleteContacts();
function deleteContacts() {
    let firstNamedelete = prompt4("Enter the First Name you like to delete:");
    let check = true;
    check = contactChecker(firstNamedelete, check);
    if (check) {
        console.log("Sorry there is no name with this first name.");
    } else {
        console.log("Contact is deleted sucessfully!")
    }

}
function contactChecker(firstNamedelete, check) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]._firstName == firstNamedelete) {
            check = false;
            console.log("Print matched: " + arr[i].toString());
            let deleted = arr.splice(i, 1);
            console.log("Deleted element: " + deleted);
            return check;
        }
        return check;
    }

}
printArray();
//UC6: count contacts
let count=countContacts();
console.log("total count of contacts are: "+count)
function countContacts(){
    return arr.map(contact => contact._firstName)
    .reduce((start,firstName)=>start+=1,0);
}
//UC8:Search by City or State
searchPersonthroughCityorstate();
function searchPersonthroughCityorstate() {
    let parameter = prompt4("Select Search Parameter 1. City 2. State :");
    if(parameter == 1) {
        let city = prompt4("Enter the City to Search Person :");
        console.log(arr.filter(contact => contact._city == city).map(contact => contact));
    } else {
        let state = prompt4("Enter the State to Search Person :");
        console.log(arr.filter(contact => contact._state == state).map(contact => contact));
    }
}
countByCityState();
function countByCityState() {
    let cityArr = new Array();
    let stateArr = new Array();
    arr.forEach(contact => cityArr[contact._city] ? cityArr[contact._city] += 1 : cityArr[contact._city] = 1);
   arr.forEach(contact => stateArr[contact._state] ? stateArr[contact._state] += 1 : stateArr[contact._state] = 1);

    console.log("City Counts :"+cityArr);
    console.log("State Counts :"+stateArr);
}
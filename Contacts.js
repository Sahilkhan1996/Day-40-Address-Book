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
    let contact1 = new Contacts("Sahil", "Khan", "Ambazari", "Nagpur", "MH", "447141", "987962080", "sahil@gmail.com");
    console.log(contact1.toString());
class Person{
    constructor (firstname,lastName,age,email){
        this.firstname=firstname;
        this.lastName=lastName;
        this.age=age;
        this.email=email;
    }
    toString(){
        return `${this.firstname} ${this.lastName} (age: ${this.age}, email: ${this.email})`
    }
}


let person = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
console.log(person.toString());

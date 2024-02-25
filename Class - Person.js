class Person {
    constructor(FirstName, LastName, DateOfBirth, gender, Hobbies) {
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.DateOfBirth = new Date(DateOfBirth);
        this.gender = gender;
        this.Hobbies = Hobbies;
    }
    getFullName() {
        return `${this.FirstName} ${this.LastName} `;
    }
    getAge() {
        const age = new Date().getFullYear() - this.DateOfBirth.getFullYear();
        return age;
    }
    getBio() {
        return `${this.getFullName()} is ${this.getAge()} years old, ${this.gender} and likes ${this.Hobbies.join(', ')}`;
    }
}
const person1 = new Person('Kavin', 'Prasad', '2000-08-30', 'male', ['reading', 'traveling']);
const person2 = new Person('Vishnu','Prasath','2003-03-09', 'male', ['reading', 'traveling']);
console.log(person1.getFullName());
console.log(person1.getBio());
console.log(person2.getFullName());
console.log(person2.getBio());

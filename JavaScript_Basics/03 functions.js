function User(name, bio) {
    this.name = name;
    this.bio = bio;
    this.details = function() {
        return this.name + " has bio: " + this.bio;
    }
}

console.log(User.prototype); // prints the prototype property of the function

var user1 = new User("Dheeraj", "Hacker");
var user2 = new User("Mr.Robot", "Legends");

console.log(user1);

console.log(user2);

user1.details();
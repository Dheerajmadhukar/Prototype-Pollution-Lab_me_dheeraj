function User(email, name) {
    this.email = email;
    this.name = name;
    this.active = false;
}

User.prototype.login = function(){
this.active = true;
this.secret = "HACKER";
console.log(this.email, 'is logged in with secret', this.secret);
}

User.prototype.logout = function(){
this.active = false;
console.log(this.email, 'is logged out.');
}

var user1 = new User('dheeraj@owasp.org', 'Dheeraj Madhukar');
var user2 = new User('robot@owasp.org', 'Mr. Robot');


// the "new" keyword 
// - create new empty object {}
// - set the value of 'this' to be the new empty object
// - calls the constructor method
/*
var user1 = {
email: "dheeraj@owasp.org",
name: "Dheeraj Madhukar",
reveal(){
    secret: "HACKER",
    console.log(this.email, 'is a', this.secret);
},
hide(){
    console.log(this.email, 'has a secret');
}
};
var user2 = {
email: "robot@owasp.org",
name: "Mr. Robot",
reveal(){
    secret: "Legend",
    console.log(this.email, 'is a', this.secret);
},
hide(){
    console.log(this.email, 'has a secret');
}
};

console.log(user1.name);
*/
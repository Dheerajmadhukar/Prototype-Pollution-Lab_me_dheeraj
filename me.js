function User(email, name, secret) {
        this.email = email;
        this.name = name;
        this.active = false;
        User.__proto__.secret = secret;
        // Object.defineProperty(this.prototype, 'secret',{
        //     value: secret,
        //     enumerable: false
        // });
}

User.prototype.login = function(){
    this.active = true;
    this.secret = User.__proto__.secret;
    console.log(this.email, 'is logged in with secret', this.secret);
    document.getElementById("demo").innerHTML= "<h2>" + this.email + "</h2>" + "<p>" + ' is logged in with a secret ' + "</p>" + "<h2>" + this.secret + "</h2>"
    //return res.redirect("/login.html");
}

User.prototype.logout = function(){
    this.active = false;
    console.log(this.email, 'is logged out.');
}

var user1 = new User('dheeraj@owasp.org', 'Dheeraj Madhukar', 'HACKER');
var user2 = new User('robot@owasp.org', 'Mr. Robot', 'LEGEND');


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
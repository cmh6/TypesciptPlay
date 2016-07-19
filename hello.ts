class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world");

let button = document.createElement('button');
button.textContent = "Say Hello x";

let label = document.createElement('div');
label.textContent = "My Label";

button.onclick = function() {
	label.textContent = greeter.greet();
    alert(greeter.greet());

}

document.body.appendChild(button);
document.body.appendChild(label);

var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter("world");
var button = document.createElement('button');
button.textContent = "Say Hello";
var label = document.createElement('div');
label.textContent = "My Label";
button.onclick = function () {
    label.textContent = greeter.greet();
    alert(greeter.greet());
};
document.body.appendChild(button);
document.body.appendChild(label);

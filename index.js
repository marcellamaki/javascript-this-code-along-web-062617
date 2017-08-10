const app = "I don't do much."

var pbj = {
  bread: "white",
  ingredients: ["peanut butter", "jelly"],
  cut: "triangles",
  name: "peanut butter and jelly",
}

function Sandwich(bread, ingredients, cut) {
  this.bread = bread;
  this.ingredients = ingredients;
  this.describe = function() {
    console.log("Your " + this.name + " includes: " + this.ingredients.join(", ") + ". Yum!");
  }
}

function serve() {
    if(arguments.length > 0) {
        var customers = Array.prototype.slice.call(arguments);
        last = customers.pop();
        console.log(this.name + " for " + customers.join(", ") + " and " + last + ". Enjoy!");
    }else {
        console.log(this.name + ". Order up!");
    }
}

var blt = new Sandwich("white", ["bacon", "lettuce", "tomato", "mayo"], "rectangle");

var reuben = new Sandwich("rye", ["corned beef", "sauerkraut", "swiss", "russian dressing"], "diagonal");

var gc = new Sandwich("white", ["cheese"], "Grilled Cheese");
var pbj = new Sandwich("wheat", ["peanut butter", "raspberry jam"], "Peanut Butter & Jelly");

serve.call(gc);
serve.call(pbj);


function visitTable() {
  console.log("The server is visiting " + this.name + " at table number " + this.tableNumber);
}

function Customer(name, tableNumber) {
  this.name = name;
  this.tableNumber = tableNumber;
}

var sally = new Customer("Sally", "4");

var visitSally = visitTable.bind(sally);
setTimeout(visitSally, 1000);

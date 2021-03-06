// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h2>JS Datastructure - Stack Implementation Using Object</h2><hr><br>`;

function Stack() {
  this.storage = {};
  this.count = 0;
}

Stack.prototype.push = function(val) {
  this.storage[this.count++] = val;
}

Stack.prototype.pop = function(val) {
  let value = this.storage[--this.count];
  delete this.storage[this.count];
  if (this.count < 0) {
    this.count = 0;
  }
  return value;
}

Stack.prototype.peek = function() {
  return this.storage[this.count-1];
}

Stack.prototype.size = function() {
  return this.count;
}

let myStack = new Stack();
myStack.push('India');
myStack.push('USA');
myStack.push('Australia');
myStack.push('UK');
myStack.push('Germany');

appDiv.innerHTML+= `Stack: ${Object.values(myStack.storage)}, Size: ${myStack.size()}<br><br>`;

appDiv.innerHTML+= `Pop: ${myStack.pop()}, Size: ${myStack.size()}<br>`;
appDiv.innerHTML+= `Pop: ${myStack.pop()}, Size: ${myStack.size()}<br><br>`;

appDiv.innerHTML+= `Peek: ${myStack.peek()}<br><br>`;

myStack.push('UAE');
appDiv.innerHTML+= `Push: UAE, Size: ${myStack.size()}<br>`;
myStack.push('Brazil')
appDiv.innerHTML+= `Push: Brazil, Size: ${myStack.size()}<br><br>`;

appDiv.innerHTML+= `Pop: ${myStack.pop()}, Size: ${myStack.size()}<br><br>`;

appDiv.innerHTML+= `Peek: ${myStack.peek()}<br><br>`;



class Person {
  constructor(name,age){
    this.name=name;
    this.age=age;
    
  }
  greet(){
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
  }
}

const P1= new Person("Logan" , 25);
P1.greet();
/* Create a class Rectangle that has properties width and height. 
 Implement:
A getter area that calculates the area of the rectangle.
A setter dimensions that sets both width and height at once
*/
class Rectangle {
  constructor(width,height){
    this.width=width;
    this.height=height;
  }

getter(){
 var area=this.width*this.height;
  var msg="the area of the rectangle is equal "+ area;
  console.log(msg)
  return msg
}

setter(w,h){
  this.width=w;
  this.height=h;
  console.log(this.width);
}
}

const R1=new Rectangle(10,5);
R1.getter();
R1.setter(4,3);

/*
Create a class called BankAccount with the following properties and methods:

Property: balance
Method: deposit(amount) that adds the specified amount to the balance.
Method: withdraw(amount) that subtracts the specified amount from the balance.
Method: getBalance() that returns the current balance.
*/

class BankAccount {
     constructor(balance){
      this.balance=balance;
     }

deposit(amount){
  this.balance+= amount;
}
withdraw(amount){
  if( this.balance>amount){this.balance-= amount; }
  if( this.balance<amount){console.log('not enough money'); }
}

getBalance(){
  return this.balance ; }
}

const B1= new BankAccount(5000);
B1.deposit(200);
B1.balance;
B1.withdraw(5500);
B1.balance;

/* Create a class called FootballPlayers with the following properties and methods:

Property: players (an array to store player names)
Method: addPlayer(name) - Adds a player to the players array.
Method: removePlayer(name) - Removes a player from the players array by their name.
Method: getPlayer(name) - Returns a player by their name if they exist, otherwise returns "Player not found".  
*/

class FootballPlayers {
  constructor(players){
    this.players=players;
  }
addPlayer(name){
  this.players.push(name)
  console.log(this.players)
}

RemovePlayer(name){
  if(this.players.indexOf(name)!==-1){
      this.players.splice(this.players.indexOf(name),1)
  }
  console.log(this.players)
}
getPlayer(name){
  if(this.players.include(name)){ return name }

}
}

const PL1= new FootballPlayers(["mbappe","haaland","Puyol"]);
PL1.addPlayer("Messi");


//-------------------------- Stack class ( lifo /fiLo)
class Stack{
  constructor(){
    this.data=[]
  }
  add(element){
    this.data.push(element)
  }
  Remove(){
    this.data.pop()
  }
  Size(){
    return this.data.length
  }
  Peek_check(){
    return this.data[this.data.length-1]
  }

}

const ST1= new Stack()
ST1.add("iyed")
ST1.add("bechir")
ST1.add("ahmed")

ST1.Size()  // Retrun 3
ST1.Peek_check() // 

//------------------------------ Queues class ( fifo rules )
/*
Create a class Queue that implements a queue with the following functionalities:

A constructor that initializes an empty queue.
A method enqueue that adds an item to the end of the queue.
A method dequeue that removes and 
returns the item from the front of the queue. If the queue is empty, it should return null.
A method peek that returns the item at the front of the queue without removing it. If the queue is empty, it should return null.
A method isEmpty that returns true if the queue is empty, otherwise false.
A method size that returns the number of items in the queue.

*/
class Queue {
  constructor(){this.data=[]}

  IsEmpty(){
    return this.data.length==0 ? true:false
  }

  Enqueue(element){
    this.data.push(element)
  }
  Dequeue(){

    if(this.data.length!=0) {
    var msg = this.data[0] + " was deleted from the Queue"
    this.data.shift()
    return msg }
    else return null
  }
  Peek(){
    if(this.data.length!=0) {
      var msg = this.data[0] + " is the first element of the Queue"
      return msg }
      else return null
  }

  Size(){
    return this.data.length
  }

}

const Q1 = new Queue()
Q1.Enqueue("iyed");
Q1.Enqueue("bechir");


//--------------------------------------------------------------------------


class Task{
  constructor(id , title, completed){
    this.id=id
    this.title=title
    this.completed=false }  }

//-------------- live coding solurtion 
class TaskManager{
    constructor(){
        this.data = []
        this.count = 1
    }


//endpoint tasks/add
addTask(endpoint,title){
    if(endpoint !== "/tasks/add"){
        return {
            message: "this is a wrong endpoint 404"
        }
    }
    else{
        // var random = Math.random() * 999999999
        this.data.push(new Task(this.count++,title))    
        console.log('the task was added succesfuly')
    }
}

//------  retreive :
getTasks(endpoint){
  if(endpoint !== "/tasks/get"){
    return {
        message: "this is a wrong endpoint 404"
    }
  }
  else {

  }
}
//------- update task : 
updateTask(endpoint, id, title, completed){
  if(endpoint!=="/tasks/update"){ return { message: "Wrong endpoint"}}
  else {
    var res = this.data.find(ele=>ele.id===id )
    if( res !== id){ return { message: " task not found "}}

    else { this.data[res].title=title }}


} 
}

const T=new TaskManager()
T.addTask("/tasks/add"," hi there")
T.addTask("/tasks/add","let go ")

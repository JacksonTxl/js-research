class Cat {
    constructor(food){
        this.food = food;
    }
    eat(animal){
        console.log(animal + ' eat food ' + this.food + '!');
    }
}
class Dog {
    constructor (food) {
        this.food = food;
    }
}

(function(){
    const cat = new Cat('fish');
    const dog = new Dog('bone');
    cat.eat('Cat');
    cat.eat.call(dog, 'Dog');
    cat.eat.apply(dog, ['Dog']);
})()
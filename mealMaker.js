// Program Meal Maker
// generates a meal
// date : 28/07/2020
// author : Julien Violette

const menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: []
    },
    get appetizers() {
        return this._courses.appetizers;
    },
    get mains() {
        return this._courses.mains;
    },
    get desserts() {
        return this._courses.desserts;
    },
    set appetizers(appetizers) {
        this._courses.appetizers = appetizers;
    },
    set mains(mains) {
        this._courses.mains = mains;
    },
    set desserts(desserts) {
        this._courses.desserts = desserts;
    },
    get courses() {
        return {
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts
        };
    },
    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice
        };
        return this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName) {
        const dishes = this._courses[courseName];
        const randomIndex = Math.floor(Math.random() * dishes.length); 
        return dishes[randomIndex];
    },
    generateRandomMeal() {
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const main = this.getRandomDishFromCourse('mains');
        const dessert = this.getRandomDishFromCourse('desserts');
        const totalPrice = appetizer.price + main.price + dessert.price;
        return `Your meal is ${appetizer.name}, ${main.name}, and ${dessert.name}, and the total price is ${totalPrice}.`;
    }
};

menu.addDishToCourse('appetizers', 'tomatoes', 3.50);
menu.addDishToCourse('appetizers', 'pancakes', 4.50);
menu.addDishToCourse('appetizers', 'crackers', 2.50);

menu.addDishToCourse('mains', 'french fries', 6.50);
menu.addDishToCourse('mains', 'chicken', 7.50);
menu.addDishToCourse('mains', 'potatoes', 7.50);

menu.addDishToCourse('desserts', 'ice cream', 4.50);
menu.addDishToCourse('desserts', 'coffee', 5.50);
menu.addDishToCourse('desserts', 'cake', 4.50);

const meal = menu.generateRandomMeal();

console.log(meal);

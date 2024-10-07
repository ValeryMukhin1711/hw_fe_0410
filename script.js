// 1)
// Создайте класс BankAccount со свойствами balance и accountNumber. Добавьте в класс методы, позволяющие пользователю вносить деньги на счет, снимать деньги со счета и проверять баланс счета.

class BankAccount {
    constructor(balance, accountNumber) {
        this.balance = balance;
        this.accountNumber = accountNumber;
    }

    addMoney(moneyAdded) {
        this.balance = this.balance + moneyAdded;
    }

    withdrawMoney(moneyToWithdraw) {
        this.balance = this.balance - moneyToWithdraw;
    }

    checkBalance() {
        console.log(`На счете ${this.accountNumber} лежат `, this.balance);
        
    }
};

// console.log('start');
// console.log();
let account1 = new BankAccount(101, 1);

account1.checkBalance();
account1.addMoney(15);
account1.checkBalance();
account1.withdrawMoney(40);
account1.checkBalance();


// 2) Создайте класс Student со свойствами name, age, email и grades(массив с оценками) , а также методы addGrade и getAverageGrade. Метод addGrade должен принимать оценку и добавлять ее в массив grades, если оценка является числом от 0 до 100. Если оценка не является числом или находится вне диапазона 0-100, метод должен выдать ошибку. Метод getAverageGrade должен вычислить средний балл всех оценок в массиве grades и вернуть его.



class Student {
    constructor(name, age, email, grades) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.grades = grades;
    };

    addGrade(newGrade) {

        try{
            if((typeof newGrade !== "number") || (newGrade > 100) || (newGrade < 0)) {
                throw new Error (`${newGrade} неверный формат оценки`);
            };
        
            this.grades.push(newGrade);
        }
        catch (error) {
            console.log(error.message);
            // alert (error.message);
        }

        
    };

    getAverageGrade() {
        let average = this.grades.reduce((a, b) => (a + b)) / this.grades.length;

        return average;
    }
} 

const student1 = new Student("Kolya", 3,"kolya@gmail.com", [55, 100, 75, 75]);

console.log(student1);
console.log(student1.getAverageGrade());

student1.addGrade(100);
console.log(student1.getAverageGrade());
console.log(student1.grades);

student1.addGrade(66);
console.log(student1.grades);

const student2 = new Student('Vasya', 5, 'vasya@gmail.com', []);

student2.addGrade(50);
student2.addGrade(50);
student2.addGrade(50);
console.log(student2.getAverageGrade());
student2.addGrade(70);
console.log(student2.grades);
console.log(student2.getAverageGrade());

student2.addGrade('s')
console.log(student2.getAverageGrade());


// 3)Создайте класс ShoppingCart, который имеет свойства items и totalPrice, а также методы addItem и removeItem. Метод addItem должен добавлять товар в корзину и обновлять общую цену, а метод removeItem должен удалять товар из корзины и обновлять общую цену. Оба метода должны выдавать ошибку, если переданный аргумент не является допустимым объектом со свойствами name и price.

function checkItem(obj) {
    if (typeof obj === 'object' && obj !== null && 'name' in obj && 'price' in obj) {
        return true;
    } else {
        return false;
    }
}

let item1 = {name: 'table', price: 400};
let item2 = {name: 'chair'};
let item3 = 'not an object';


class ShoppingCart {
    constructor(items) {
    this.items = items;
    this.totalPrice = items1.reduce((sum, item) => sum + item.price, 0);    
    };

    

    addItem(newItem) {
        if (checkItem(newItem)) {

        this.items.push(newItem);
        this.totalPrice = this.totalPrice + newItem.price;
        }
    };

    removeItem(itemToRemove) {
        if(checkItem(itemToRemove)) {
            
    let updatedItems = this.items.filter(item => item.name !== itemToRemove);
        this.items = updatedItems;
    };
    };

};

let items1 = [
    {name: 'table',
    price: 400,
    },
    {name: 'chair',
    price: 150,
    },
    {name: 'pencil',
    price: 10,
    }
];
const cart1 = new ShoppingCart(items1);
console.log(cart1);

const plate = {name: 'plate',
    price: 30,
};
const fork = {name: 'fork',
    price: 24,
};
const spoon = {name: 'spoon',
    price: 60,
};

cart1.addItem(plate);
console.log(cart1.items);

cart1.addItem(fork);
console.log(cart1.items);


cart1.removeItem('fork');
console.log(cart1.items);

cart1.addItem('wrong item');
console.log(cart1.items);

const glue = {name: 'glue',
    price: 45};

cart1.addItem(glue);
console.log(cart1.items);
console.log(cart1.totalPrice);






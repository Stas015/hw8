// Оператор if
// Перевірка часу: Напишіть код, який перевіряє час доби у змінній hour і виводить "Доброго ранку!" якщо час менше 12.

let message = "Доброго ранку";
const hour = 8;

if (hour < 12) {
    console.log(message);
}

// Перевірка віку: Напишіть програму, яка перевіряє вік користувача і виводить "Ви повнолітній", якщо вік більший або дорівнює 18.

let massage = "Ви повнолітній";
const age = 32;

if (age >= 18) {
    console.log("Ви повнолітній");
}

const number = 6;

if (number % 2 === 0) {
    console.log("число парне");
} else {
    console.log("число непарне");
}

// Оператор if else if
// Оцінка за балами: Напишіть програму, яка оцінює бали студента(від 0 до 100) і виводить оцінку: "відмінно"(90 - 100), "добре"(70 - 89), "задовільно"(50 - 69), "незадовільно"(менше 50).
let points = 48

if (points >= 101) {
    console.log(`ERROR`)

} else if (points <= 49) {
    console.log(`незадовільно`)

} else if (points <= 69 && points >= 50) {
    console.log(`задовільно`)

} else if (points <= 89 && points >= 70) {
    console.log(`добре`)

} else if (points <= 100 && points >= 90) {
    console.log(`відмінно`)
} 

// Визначення пори року: Напишіть програму, яка визначає пору року залежно від номера місяця і виводить відповідне повідомлення.
var month = 6;

if (month >= 3 && month <= 5) {
    console.log("весна");
} else if (month >= 6 && month <= 8) {
    console.log("літо");
} else if (month >= 9 && month <= 11) {
    console.log("осінь");
} else if (month === 1 || month === 2 || month === 12) {
    console.log("зима");
} else {
    console.log("Місяці мають числа від 1 до 12");
}

// // Оператор switch case
// Обмін долларів, евро або британських фунтів на гривню по встановленому заздалегідь курсу кожної валюти для 100 грошових одиниць.
const currency = "EUR";

switch (currency) {
    case "EUR":
        console.log("Received " + (100 * 42.5) + " UAH for 100 EUR");
        break;
    case "USD":
        console.log("Received " + (100 * 39.7) + " UAH for 100 USD");
        break;
    case "GPB":
        console.log("Received " + (100 * 49.7) + " UAH for 100 GPB");
        break;
        default:
            console.log("is not valid currency");
}
    
// Тернарний оператор
// Повідомлення про знижку: Напишіть однорядковий код, який виводить "Знижка 10%", якщо сума покупки перевищує 1000 грн, а інакше — "Без знижки"
var Fullcost = 1000
var Discount = Fullcost >= 999 ? "Знижка 10%" : "Без знижки";

console.log(Discount);
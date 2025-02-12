const steps = ["one", "two", "three"];
function listTemplate(step) {
  return   `<li>${step}</li>`//the html string made from step
}
const stepsHtml = steps.map(listTemplate);// use map to convert the list from strings to HTML
document.querySelector("#myList").innerHTML = stepsHtml.join("");// set the innerHTML

//map function
const grades = ["A", "B", "A"];

function convertGrade(grade) {
    let point = 0;
    if (grade === "A") {
        point = 4;
    } else if (grade === "B") {
        point = 3;
    }
    return point;
}

const points = grades.map(convertGrade);

//reduce function
const gpaTotal = points.reduce((total, item) => {
    return total + item;
}, 0);

console.log(gpaTotal);

const gpa = gpaTotal / points.length;
console.log(gpa);


// filter function
const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];

const letterFruit = fruits.filter((fruit) => fruit.length < 6);
console.log(letterFruit);

// indexOf
const numbers = [12, 34, 21, 54];
const lucky = 21;
const index = numbers.indexOf(lucky);
console.log(index);
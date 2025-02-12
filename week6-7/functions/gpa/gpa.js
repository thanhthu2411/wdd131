function getGrades(inputSelector) {
    // get grades from the input box
    const grades = document.querySelector(inputSelector).value;
    // split them into an array (String.split(','))
    const gradeArray = grades.split(",");
    // clean up any extra spaces, and make the grades all uppercase. (Array.map())
    const cleanGrades = gradeArray.map(grade => grade.trim().toUpperCase());
    // return grades
    return cleanGrades;
  }
  
  function lookupGrade(grade) {
    let points = 0;
    // converts the letter grade to it's GPA point value and returns it
    if (grade === "A") {
        points = 4;
    } else if (grade === "B") {
        points = 3;
    } else if (grade === "C") {
        points = 2;
    } else if (grade === "D") {
        points = 1
    }

    return points;
  }
  
  function calculateGpa(grades) {
    // gets a list of grades passed in
    // convert the letter grades to gpa points
    const gpaPoints = grades.map(grade => lookupGrade(grade));
    // calculates the GPA
    const gpa = gpaPoints.reduce((total, item) => total + item, 0) / gpaPoints.length;
    // return the GPA
    return gpa.toFixed(2);
  }
  
  function outputGpa(gpa, selector) {
    // takes a gpa value and displays it in the HTML in the element identified by the selector
    document.querySelector(selector).innerText = gpa;
  }
  
  function clickHandler() {
    // when the button in our html is clicked:
    const grades = getGrades("#grades");
    const gpa = calculateGpa(grades);
    outputGpa(gpa, "#output");
    // get the grades entered into the input
    // calculate the gpa from the grades entered
    // display the gpa
  }

  document.querySelector("#submitButton").addEventListener("click",clickHandler);

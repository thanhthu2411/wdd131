const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
        { sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'},
        { sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A'}
    ],

    // enrollStudent: function(sectionNum) {
    //     const sectionIndex = this.sections.findIndex((section) => section.sectionNum == sectionNum);

    //     if (sectionIndex >= 0) {this.sections[sectionIndex].enrolled++};

    //     renderSections(this.sections);
    // }, 

    // dropStudent: function(sectionNum) {
    //     const sectionIndex1 = this.sections.findIndex((section) => section.sectionNum == sectionNum);

    //     if (sectionIndex1 >= 0) {
    //         this.sections[sectionIndex1].enrolled--};
        
    //     renderSections(this.sections);

    // },

    changeStudent: function(sectionNum, add = true) {
        const sectionIndex = this.sections.findIndex((section) => section.sectionNum == sectionNum);
        if (sectionIndex >= 0) {
            if (add) {this.sections[sectionIndex].enrolled++;}
            else {this.sections[sectionIndex].enrolled--;}
        }
        renderSections(this.sections);
    },
  };


//   activity 1.3
function renderCourseDetails(course) {
    document.querySelector("#courseName").textContent = course.name;
    document.querySelector("#courseCode").textContent = course.code;

}

// activity 1.4
function sectionTemplate(sections) {
    return `<tr>
                <td>${sections.sectionNum}</td>
                <td>${sections.roomNum}</td>
                <td>${sections.enrolled}</td>
                <td>${sections.days}</td>
                <td>${sections.instructor}</td>
            </tr>`
}

function renderSections(sections) {
    const html = sections.map(sectionTemplate);
    document.querySelector("#sections").innerHTML = html.join("");
}

renderCourseDetails(aCourse);

renderSections(aCourse.sections);

//activity 2
document.querySelector("#enrollStudent").addEventListener("click", function() {
    const secNum = document.querySelector("#sectionNumber").value; 
    aCourse.changeStudent(secNum, add=true);
});

document.querySelector("#dropStudent").addEventListener("click", function() {
    const secNum = document.querySelector("#sectionNumber").value; 
    aCourse.changeStudent(secNum, add=false);
});




let courses = ["HTML", "CSS", "JavaScript"];


if (courses.length > 0) {
    console.log("Courses are available.");
} else {
    console.log("No courses found.");
}




function handleForm(event) {
    event.preventDefault(); 

    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let selectedCourse = document.querySelector('input[name="course"]:checked');
    let gender = document.querySelector('input[name="gender"]:checked');

    let message = "";

    
    if (name === "" || email === "" || !selectedCourse || !gender) {
        message = "⚠️ Please fill in all fields!";
    } else {
        message = `✅ Hello ${name}, you have selected ${selectedCourse.value} and your gender is ${gender.value}.`;
    }

    
    let result = document.createElement("p");
    result.id = "formResult";
    result.innerText = message;
    document.body.appendChild(result);
}

function changeTitle() {
   
    document.getElementById("title").innerText = "JavaScript Assignment - Updated!";

    document.getElementById("title").style.color = "blue";
}




for (let i = 0; i < courses.length; i++) {
    console.log("Course " + (i + 1) + ": " + courses[i]);
}

for (let course of courses) {
    console.log("Course in uppercase:", course.toUpperCase());
}




document.querySelector("form").addEventListener("submit", handleForm);


setTimeout(changeTitle, 3000);
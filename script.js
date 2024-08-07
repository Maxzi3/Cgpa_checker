const Enter = document.querySelector("#btn1");
const Intro= document.querySelector(".intro");
const cal= document.querySelector(".display");
const Add = document.querySelector(".btn1");
const remove = document.querySelector(".btn2");
const Submit = document.querySelector(".btn3");
const score = document.querySelector(".header2");
const CourseCode = document.querySelector("#code");
const CourseUnit = document.querySelector("#unit");
const CourseGrade = document.querySelector("#grade");
const Profile = document.querySelector(".uli");
const table = document.querySelector("table");
const main = document.querySelector("main");
const clear = document.querySelector("#Profile");
const portal = document.querySelector(".Profile");
let gparry = [];



Enter.addEventListener('click', (e) =>{
e.preventDefault();

const UserName = document.querySelector("#username");
const UserReg = document.querySelector("#reg-no");
const UserLevel = document.querySelector("#level");
const UserDep = document.querySelector("#Dep");

let isValid = true;
let errorMessage = "";

// Clear previous error styles
UserName.classList.remove("error");
UserReg.classList.remove("error");
UserLevel.classList.remove("error");
UserDep.classList.remove("error");

// Validate Username (at least two words)
if (!/^\w+\s+\w+/.test(UserName.value)) {
  isValid = false;
  errorMessage += "Username must contain at least two names.\n";
  UserName.classList.add("error");
}

// Validate Registration Number (at least 13 digits)
if (!/^\d{13,}$/.test(UserReg.value)) {
  isValid = false;
  errorMessage += "Registration Number must be at least 13 digits.\n";
  UserReg.classList.add("error");
}

// Validate Department (not empty)
if (UserDep.value.trim() === "") {
  isValid = false;
  errorMessage += "Department must not be empty.\n";
  UserDep.classList.add("error");
}

// Validate Level (selected)
if (UserLevel.value.trim() === "") {
  isValid = false;
  errorMessage += "Level must be selected.\n";
  UserLevel.classList.add("error");
}

if (isValid) {
   Intro.classList.add("Dshow");
   cal.classList.add("show");
} else {
  alert(errorMessage);
}
})

Add.addEventListener(
  "click",
  (newinputs = () => {
    if (
      CourseCode.value !== "" &&
      CourseUnit.value > 0 &&
      CourseGrade.selectedIndex > 0
    ) {
      const tr = document.createElement("tr");
      const tdCourseCode = document.createElement("td");
      tdCourseCode.innerHTML = CourseCode.value;
      const tdCourseUnit = document.createElement("td");
      tdCourseUnit.innerHTML = CourseUnit.value;
      const tdCourseGrade = document.createElement("td");
      tdCourseGrade.innerHTML =
        CourseGrade.options[CourseGrade.selectedIndex].text;
      tr.appendChild(tdCourseCode);
      tr.appendChild(tdCourseUnit);
      tr.appendChild(tdCourseGrade);
      table.appendChild(tr);
      main.className = "show";
      gparry.push({
        CourseUnit: CourseUnit.value,
        CourseGrade: CourseGrade.options[CourseGrade.selectedIndex].value,
      });
      CourseCode.value = "";
      CourseUnit.value = "";
      CourseGrade.selectedIndex = "0";
    } else {
      alert(
        "Oops! It looks like some information are missing. Please provide all the necessary inputs to continue."
      );
    }
  })
);

remove.addEventListener(
  "click",
  (Rminputs = () => {
    const lastRow = table1.lastElementChild;
    if (lastRow) {
      table1.removeChild(lastRow);
    }
  })
);
Submit.addEventListener(
  "click",
  (calgp = () => {
    const UserName = document.querySelector("#username").value;
    const UserReg = document.querySelector("#reg-no").value;
    const UserLevel = document.querySelector("#level").value;
    const UserDep = document.querySelector("#Dep").value;
    let CourseUnit = 0,
      productOfCourseUnitAndCourseGrade = 0,
      sumProductOfCourseUnitAndCourseGrade = 0;
    gparry.forEach((result) => {
      CourseUnit += parseInt(result.CourseUnit);
      productOfCourseUnitAndCourseGrade =
        parseInt(result.CourseUnit) * parseInt(result.CourseGrade);
      sumProductOfCourseUnitAndCourseGrade += productOfCourseUnitAndCourseGrade;
    });
  Cgpa= (
      sumProductOfCourseUnitAndCourseGrade / CourseUnit
    ).toFixed(2);
    cal.classList.add("Dshow");
    Submit.classList.add("Dshow");
  score.innerHTML = `Dear ${UserName}, with registration number ${UserReg}, studying at level ${UserLevel} in the ${UserDep} department, your CGPA is ${Cgpa}.`;

  })
);
clear.addEventListener("click", () => {
  location.reload();
});
Profile.addEventListener('click', () =>{
   portal.classList.toggle('show');
})
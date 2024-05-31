let Add = document.querySelector(".btn1");
let remove = document.querySelector(".btn2");
let Submit = document.querySelector(".btn3");
let score = document.querySelector("#result");
let CourseCode = document.querySelector("#code");
let CourseUnit = document.querySelector("#unit");
let CourseGrade = document.querySelector("#grade");
let Profile = document.querySelector(".uli");
let table = document.querySelector("table");
let main = document.querySelector("main");
let clear = document.querySelector("#Profile");
let gparry = [];

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
    let CourseUnit = 0,
      productOfCourseUnitAndCourseGrade = 0,
      sumProductOfCourseUnitAndCourseGrade = 0;
    gparry.forEach((result) => {
      CourseUnit += parseInt(result.CourseUnit);
      productOfCourseUnitAndCourseGrade =
        parseInt(result.CourseUnit) * parseInt(result.CourseGrade);
      sumProductOfCourseUnitAndCourseGrade += productOfCourseUnitAndCourseGrade;
    });
    score.innerHTML = (
      sumProductOfCourseUnitAndCourseGrade / CourseUnit
    ).toFixed(2);
  })
);
clear.addEventListener("click", () => {
  location.reload();
});
Profile.addEventListener('click', () =>{
    window.open("https://portal.esut.edu.ng/login.aspx", '_blank');
})
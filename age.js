let userYOB = prompt("Enter your year of birth","Eg 1992")
let currentYear= 2019;

function ageCalc(currentYear,userYOB) {
    return currentYear-userYOB;
}console.log(ageCalc(currentYear,userYOB) + "  is how old you are!");
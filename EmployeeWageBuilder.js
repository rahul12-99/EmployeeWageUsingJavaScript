const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

let employeeHrs = 0;
employeeCheck = Math.floor(Math.random() * 10) % 3;
switch(employeeCheck){
    case IS_PART_TIME:
        employeeHrs = PART_TIME_HOURS;
        break;
    case IS_FULL_TIME:
        employeeHrs = FULL_TIME_HOURS;
        break;
    default:
        employeeHrs = 0;
}
let employeeWage = employeeHrs * WAGE_PER_HOUR;
console.log("Employee Wage: " + employeeWage);
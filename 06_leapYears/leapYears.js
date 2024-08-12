const leapYears = function (year) {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
  };
  

// Do not edit below this line
module.exports = leapYears;


// const leapYears = function(startYear, endYear) {
//     const leapYear = []


// for(let year = startYear; year <= endYear; year++) {
//     if ((year % 4 ===0 && year % 100 !==0) || (year % 400 === 0)) {
//         leapYear.push(year);
//     }
// }
//     return leapYear;

// };

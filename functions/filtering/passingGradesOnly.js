// Arrow Function method
const grades = [73, 69, 3, 100, 50, 70, 69, 88, 95, 77, 35];
const passingGrades = grades.filter(num => num >= 70);
console.log(passingGrades);


/* Stardard Function
const grades = [73, 69, 3, 100, 50, 70, 69, 88, 95, 77, 35];
const passingGrades = grades.filter(function(num) {
  return num >= 70;
});
console.log(passingGrades);
*/
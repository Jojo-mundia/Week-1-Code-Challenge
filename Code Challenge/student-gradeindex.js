//Challenge 1- Student Grade Generator

function studentGrade() {
  // This prompt asks the user to type marks
  let marks = prompt("Enter student marks (0 - 100):");
  marks = Number(marks); // convert input (string) to number

  //If the marks are greater than 100 or less than 0 the output should be invalid

  if (marks < 0 || marks > 100) {
    return "invalid marks";
  }
  if (marks > 79) {
    // If marks are greater than 79, give grade A
    return "Grade -A";
  } else if (marks > 60 && marks <= 79) {
    // Marks that are between 60 and 79, give grade B
    return "Grade -B";
  } else if (marks > 49 && marks <= 59) {
    // Marks that are between 49 and 59, give grade C
    return "Grade -C";
  } else if (marks >= 40 && marks <= 49) {
    // Marks that are between 40 and 49, give grade D
    return "Grade -D";
  } else {
    //If marks are less than 40 the grade given is "E"
    return "Grade -E";
  }
}

//Examples
// It says prompt is not defined because it is inside vs code though
//inside the web browser it should work.
console.log(studentGrade(105));
console.log(studentGrade(49));
console.log(studentGrade(79));

<<<<<<< HEAD
function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeObj = newGrades.find((grade) => grade.studentId === student.id);
      if (gradeObj) {
        return { ...student, grade: gradeObj.grade };
      }
      return { ...student, grade: 'N/A' };
    });
=======
!#/usr/bin/node
function updateStudentGradeByCity(students, city, newGrades) {
  return students.map(student => {
    if (student.location === city) {
      const matchingGrade = newGrades.find(grade => grade.studentId === student.id);
      if (matchingGrade) {
        return { ...student, grade: matchingGrade.grade };
      } else {
        return { ...student, grade: 'N/A' };
      }
    } else {
      return student;
    }
  });
>>>>>>> 07da3c3a7254c86c5a6b7b4439ae4c83094bec4b
}

export default updateStudentGradeByCity;

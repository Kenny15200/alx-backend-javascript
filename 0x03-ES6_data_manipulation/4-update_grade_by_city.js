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
}

export default updateStudentGradeByCity;

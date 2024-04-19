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
}

export default updateStudentGradeByCity;

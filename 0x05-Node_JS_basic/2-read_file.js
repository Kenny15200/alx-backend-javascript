const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    const counts = {
      CS: 0,
      SWE: 0,
    };
    const firstNameLists = {
      CS: [],
      SWE: [],
    };

    lines.forEach((line) => {
      const [firstName, , , field] = line.split(',');
      if (field in counts) {
        counts[field]++;
        firstNameLists[field].push(firstName);
      }
    });

    console.log(`Number of students: ${lines.length}`);
    for (const field in counts) {
      console.log(`Number of students in ${field}: ${counts[field]}. List: ${firstNameLists[field].join(', ')}`);
    }
  } catch (error) {
    console.error('Cannot load the database');
    throw error;
  }
}

module.exports = countStudents;

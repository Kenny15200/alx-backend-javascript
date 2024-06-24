const fs = require('fs');

function countStudents(path) {
  // return a Promise Object
  return new Promise((resolve, reject) => {
    // read from file asynchronously
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const rows = data.split('\n').filter((line) => line.trim() !== '');
      const fieldCount = {};
      const fieldStudents = {};
      let totalStudents = 0;

      for (let i = 1; i < rows.length; i += 1) {
        const columns = rows[i].split(',');
        const firstName = columns[0];
        const field = columns[3];

        if (field in fieldCount) {
          fieldCount[field] += 1;
          fieldStudents[field].push(firstName);
        } else {
          fieldCount[field] = 1;
          fieldStudents[field] = [firstName];
        }
        totalStudents += 1;
      }

      console.log(`Number of students: ${totalStudents}`);
      for (const field in fieldCount) {
        if (field) {
          console.log(`Number of students in ${field}: ${fieldCount[field]}. List: ${fieldStudents[field].join(', ')}`);
        }
      }
      resolve();
    });
  });
}

module.exports = countStudents;

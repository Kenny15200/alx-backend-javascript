const fs = require('fs');

function countStudents(path) {
    try {
        // Read the database file synchronously
        const data = fs.readFileSync(path, 'utf8');
        
        // Split the data into lines and remove empty lines
        const lines = data.split('\n').filter(line => line.trim() !== '');
        
        // Initialize counts for each field
        const counts = {
            CS: 0,
            SWE: 0
        };
        
        // Initialize lists of first names for each field
        const firstNameLists = {
            CS: [],
            SWE: []
        };

        // Loop through each line in the file
        lines.forEach(line => {
            // Split the line into fields
            const [firstName, , , field] = line.split(',');

            // Increment the count for the field
            if (field in counts) {
                counts[field]++;
                // Add the first name to the list for the field
                firstNameLists[field].push(firstName);
            }
        });

        // Log the total number of students
        console.log(`Number of students: ${lines.length}`);

        // Log the number of students in each field and their first names
        for (const field in counts) {
            console.log(`Number of students in ${field}: ${counts[field]}. List: ${firstNameLists[field].join(', ')}`);
        }
    } catch (error) {
        // Log an error message if the database cannot be loaded
        console.error('Cannot load the database');
        throw error;
    }
}

module.exports = countStudents;

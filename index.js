const fs = require('fs');

// a. Delete canada.txt and usa.txt if already exist using fs module
const files = ['canada.txt', 'usa.txt'];

function deleteIfExistsSync(files) {
  for (const file of files) {
    try {
      fs.accessSync(file, fs.constants.F_OK); // Check if the file exists. If not, catch the error

      fs.unlinkSync(file); // If the file exists, delete it
      console.log(`${file} is deleted successfully.`);
    } catch (err) {
      console.log(`${file} does not exist.`);
    }
  }
}

deleteIfExistsSync(files);

// b. Filter data of Canada and write data to canada.txt
fs.readFile('input_countries.csv', 'utf-8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  const lines = data.split('\n'); // Split the data into lines

  const canadaLines = lines.filter(line => line.includes('Canada')); // Filter lines containing 'Canada'

  const outputData = canadaLines.join('\n'); // Join the filtered lines and write them to the output file

  fs.writeFile('canada.txt', outputData, 'utf-8', (err) => {
    if (err) {
      console.error('Error: ', err);
    } else {
      console.log('Canada Data filter success.');
    }
  });
});


// c. Filter data of United States and write data to usa.txt
fs.readFile('input_countries.csv', 'utf-8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  const lines = data.split('\n'); // Split the data into lines

  const canadaLines = lines.filter(line => line.includes('United States')); // Filter lines containing 'United States'

  const outputData = canadaLines.join('\n'); // Join the filtered lines and write them to the output file

  fs.writeFile('usa.txt', outputData, 'utf-8', (err) => {
    if (err) {
      console.error('Error: ', err);
    } else {
      console.log('United States Data filter success.');
    }
  });
});

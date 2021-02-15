const csv = require('csv-parser');
const fs = require('fs');

fs.createReadStream('data_categories.csv')
// fs.createReadStream('data_products.csv')
	.pipe(csv({separator: ';'}))
	.on('data', (row) => {
		console.log(row);
		// console.log(row.id + " "+row.name);
	})
	.on('end', () => {
		console.log('CSV file successfully processed');
	});
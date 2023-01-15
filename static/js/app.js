// import the data from data.js

const tableData = data;

// reference the HTML table using d3

var tbody = d3.select("tbody");

// build a table 12.5.1

function buildTable(data) {
    //first, clear out any existing data
    tbody.html("");
    //next, loop through each object in the data and append a row and cells for each value in the row
    data.forEach((dataRow) => {
        // append a row to the table body
        let row = tbody.append("tr");
        // Loop through each field in that dataRow and add each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {

            let cell = row.append("td");

            cell.text(val);
        
        }
        );
    });
}
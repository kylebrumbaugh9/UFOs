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


function handleClick() {
    //Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    // Check tot see if a dat was entered and filter the data using that date
    if (date) {
        // Apply "filtere" to the table data to only keep the rows where the 'datetime' value matches the filter value
        filteredData = filteredData.filter(row => row.datetime === date);
      };
    // Rebuild the table using the filtered data
    //if no date was entered, then filteredData will just be the original data

    buildTable(filteredData)
}

// Attach an even to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);
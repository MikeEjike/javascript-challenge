// from data.js
var tableData = data;
let tbody = d3.select("tbody");

// YOUR CODE HERE!

// Appends the tbody with the tableData provided
tableData.forEach(item => {
    let row = tbody.append("tr");
    row.append("td").text(item.datetime);
    row.append("td").text(item.city);
    row.append("td").text(item.state);
    row.append("td").text(item.country);
    row.append("td").text(item.shape);
    row.append("td").text(item.durationMinutes);
    row.append("td").text(item.comments);
})

// Selects the filter search and the filter button 
// to allow filtering through the data
d3.select("#filters").on("submit", runSubmit);
d3.select("#filter-btn").on("click", runSubmit);

// Function to submit a specific date within the data 
// and return all data corresponding to that date
function runSubmit(){
    // Clears data on page
    tbody.html("");

    // User data input
    let inputElement = d3.select("#datetime");
    let inputValue = inputElement.property("value")
    console.log(inputValue);
    
    // Filtered data based off of input
    let filteredData = tableData.filter(item => item.datetime === inputValue);
    console.log(filteredData);

    // Appends new data to the html page.
    filteredData.forEach(item => {
        let row = tbody.append("tr");
        row.append("td").text(item.datetime);
        row.append("td").text(item.city);
        row.append("td").text(item.state);
        row.append("td").text(item.country);
        row.append("td").text(item.shape);
        row.append("td").text(item.durationMinutes);
        row.append("td").text(item.comments);
    });
};
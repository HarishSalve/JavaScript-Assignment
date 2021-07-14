async function getFile(){
    let response = await fetch("https://jsonplaceholder.typicode.com/posts")
    let value= await response.json();
    return value;
}
(async function(){
    let value = await getFile();
    console.log(value);
    const table = document.getElementById("tbl");
    let data = Object.keys(value[0]);
    generateTableHead(table, data);
    generateTable(table, value);
    } () )

    function generateTableHead(table, data) { //For table head.
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
        }
    }

    function generateTable(table, data) { //For table 
        for (let element of data) {
            let row = table.insertRow();
            for (key in element) {
                let cell = row.insertCell();
                let text = document.createTextNode(element[key]);
                cell.appendChild(text);
            }
        }
    }
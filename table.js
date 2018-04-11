var count=0;

function addRow(){
    
    var tbl = document.getElementById('dynamic-table'),
        // table reference
        row = tbl.insertRow(tbl.rows.length),
        // append table row
        i;
    
    // insert table cells to the new row
    for (i = 0; i < 1; i++) {
        var cell1 = row.insertCell(i);
        var j = i+1;
        var cell2 = row.insertCell(j);
        cell1.innerHTML = "CELL " + (count+1);
        count++;
        cell2.innerHTML = "CELL " + (count+1);
        count++;
    }
}
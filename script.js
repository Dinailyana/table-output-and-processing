function table1() {
    Papa.parse("Table_Input.csv", {
        download: true,
        skipEmptyLines: true,
        complete: function(results) {
            const data = results.data;

            // Table 1: Display CSV content
            const table1 = document.getElementById("table1");
            table1.innerHTML = "";
            for (let row of data) {
                const tr = table1.insertRow();
                for (let cell of row) {
                    const td = tr.insertCell();
                    td.innerHTML = cell;
                }
            }

            // table 2 
            // Convert CSV to object { A1: 41, A2: 18, ... }
            const lookup = {};
            for (let i = 1; i < data.length; i++) { // skip header
                const [index, value] = data[i];
                lookup[index.trim()] = parseFloat(value);
            }

            //calculations
            const alpha = (lookup["A5"] ?? 0) + (lookup["A20"] ?? 0);
            const beta = (lookup["A15"] ?? 0) / (lookup["A7"] ?? 1); 
            const charlie = (lookup["A13"] ?? 0) * (lookup["A12"] ?? 0);

            //display table 2
            const table2 = document.getElementById("table2");
            table2.innerHTML = "";

            const header = table2.insertRow();
            header.insertCell().innerHTML = "<strong>Category</strong>";
            header.insertCell().innerHTML = "<strong>Value</strong>";

            const rows = [
                ["Alpha", alpha],
                ["Beta", beta],
                ["Charlie", charlie]
            ];

            for (let [label, value] of rows) {
                const tr = table2.insertRow();
                tr.insertCell().textContent = label;
                tr.insertCell().textContent = value.toFixed(2); // round to 2 decimal places
            }
        }
    });
}

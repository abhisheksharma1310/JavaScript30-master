(function () {
  // Store the original console.log and console.table functions
  const originalConsoleLog = console.log;
  const originalConsoleTable = console.table;

  // Override the console.log function
  console.log = function (message) {
    // Call the original console.log function
    originalConsoleLog.apply(console, arguments);

    // Get the console output element
    const outputElement = document.getElementById("console-output");
    if (outputElement) {
      // Append the message to the console output element
      outputElement.innerHTML += message + "<br>";
    }
  };

  // Override the console.table function
  console.table = function (data) {
    // Call the original console.table function
    originalConsoleTable.apply(console, arguments);

    // Get the console output element
    const outputElement = document.getElementById("console-output");
    if (outputElement) {
      // Create a table element
      const table = document.createElement("table");
      const thead = document.createElement("thead");
      const tbody = document.createElement("tbody");

      // Generate table headers
      const headers = Object.keys(data[0]) || "index";
      const headerRow = document.createElement("tr");
      headers.forEach((header) => {
        const th = document.createElement("th");
        th.textContent = header;
        headerRow.appendChild(th);
      });
      thead.appendChild(headerRow);

      // Generate table rows
      data.forEach((row) => {
        const tr = document.createElement("tr");
        headers.forEach((header) => {
          const td = document.createElement("td");
          td.textContent = row[header];
          tr.appendChild(td);
        });
        tbody.appendChild(tr);
      });

      table.appendChild(thead);
      table.appendChild(tbody);
      outputElement.appendChild(table);
    }
  };

  //   // Example usage
  //   console.log("Hello, world!");
  //   console.log("This is console output displayed on a webpage.");

  //   const exampleData = [
  //     { name: "Alice", age: 25, city: "New York" },
  //     { name: "Bob", age: 30, city: "San Francisco" },
  //   ];
  //   console.table(exampleData);
})();

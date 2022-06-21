import query from "../../connection.js";

// creates empty resources table
async function createTable() {
  const response = await query(
    `CREATE TABLE IF NOT EXISTS resources (id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY, name TEXT, url TEXT, description TEXT);`
  );
  //testing that table has been created
  console.log(response);
}

createTable();

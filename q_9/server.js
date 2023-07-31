const mysql = require("mysql");
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: 'employeedb'
});
const selectAllEmployees = () => {
  return new Promise((resolve, reject) => {
    con.query("SELECT * FROM employee", (err, result, fields) => {
      if (err) {
        reject(err);
      }
      else {
        resolve(result);
      }
    })
  })
}

con.connect((err) => {
  if (err) {
    console.log("error: " + err)
  } else {

    con.query("INSERT INTO employee values(1,'Nenshi','surat',2)", (err, result) => {

if (err) {
      console.log("error: " + err)
    } else {
      console.log("record inserted")
    }
  })
selectAllEmployees().then(result => {
  console.log(result)
}).catch(err => {
  console.log("error: " + err)
})
}
})
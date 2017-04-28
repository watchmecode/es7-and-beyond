function createEmployeeWorkflow(cb){
  try {
    var employee = createEmployee();
    var manager = selectManager(employee);
    employee.manager = manager;
    saveEmployee(employee);
    return cb(undefined, employee);
  } catch (ex) {
    return cb(ex);
  }
}

function createEmployee(cb){
  console.log("Creating employee...");
  setTimeout(() => {
    console.log("  - Name: some employee");
    return cb(undefined, {name: "some employee"});
  }, 500);
}

function selectManager(employee, cb){
  console.log("Selecting manager...");
  setTimeout(() => {
    console.log("  - Name: the manager");
    return cb(undefined, {name: "the manager"});
  }, 500);
}

function saveEmployee(employee, cb){
  console.log("Saving...");
  setTimeout(() => { 
    console.log("  - Done!");
    return cb(); 
  }, 500);
}

createEmployeeWorkflow(() => {
  process.exit();
});


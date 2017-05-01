async function createEmployeeWorkflow(cb){
  try {
    var employee = await createEmployee();
    var manager = await selectManager(employee);
    employee.manager = manager;
    await saveEmployee(employee);

    return cb(undefined, employee);
  } catch (ex) {
    return cb(ex);
  }
}

async function createEmployee(cb){
  return new Promise((res) => {
    console.log("Creating employee...");
    setTimeout(() => {
      console.log("  - Name: some employee");
      return res({name: "some employee"});
    }, 500);
  });
}

async function selectManager(employee, cb){
  return new Promise((res) => {
    console.log("Selecting manager...");
    setTimeout(() => {
      console.log("  - Name: the manager");
      return res({name: "the manager"});
    }, 500);
  });
}

async function saveEmployee(employee, cb){
  return new Promise((res) => {
    console.log("Saving...");
    setTimeout(() => { 
      console.log("  - Done!");
      return res(); 
    }, 500);
  });
}

createEmployeeWorkflow(() => {
  process.exit();
});


var justin = {
  firstName: "Justin",
  lastName: "Thompson",
  skills: [
    "docker",
    "node.js",
    "rabbitmq",
    "express.js",
    "mongodb"
  ],
  department: "I.T.",
  location: "West Campus / I.T. Department",
  manager: "Troy",
  type: "Consultant"
};

var derick = {...employee}; 

another.firstName = "Derick";
another.lastName = "Bailey";

console.log(JSON.stringify(employee, null, 2));
console.log("------------");
console.log(JSON.stringify(another, null, 2));

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

var derick = { ...justin }; 

derick.firstName = "Derick";
derick.lastName = "Bailey";

console.log(JSON.stringify(justin, null, 2));
console.log("------------");
console.log(JSON.stringify(derick, null, 2));

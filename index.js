const employee = {
  name: 'April',
  address: '994 Monterey Way',
}

// Task 1
function updateEmployeeWithKeyAndValue(employee, key, value) {
  const newObject = {...employee};
  newObject.key = value;
  const getValues = [employee, newObject]
  return `getValues`;
}

//Task 2
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = [value];
  return `employee`;
}

//Task 3
function deleteFromEmployeeByKey(employee, key) {
  const newObject = {...employee};
  delete newObject[key];
  return newObject;
}

//Task 4
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return `employee`;
}
const { roles, users } = require("./data");

// Code
let _roles = [];
let _users = [];

function getSubordinates(userId) {
  let subordinates = [];

  // Find the user role from the given user id
  const userRole = _users.find((user) => user.Id === userId).Role;

  // Get the role ids of every role subordinate to the user's role
  let subordinateRoleIds = [];
  _roles.forEach((role) => {
    // IF the current role id is not already in the array,
    // AND if the current role's parent is >= the user's role (higher number is a lower position),
    // the current role is a subordinate role!
    // Add it to the array
    if (!subordinateRoleIds.includes(role.Id) && role.Parent >= userRole) {
      subordinateRoleIds.push(role.Id);
    }
  });

  // Fill array of subordinates
  _users.forEach((user) => {
    // If the current role is a subordinate role,
    // add it to the subordinates array
    if (subordinateRoleIds.includes(user.Role)) {
      subordinates.push(user);
    }
  });

  return subordinates;
}

// Setup
setRoles(roles);
setUsers(users);

function setRoles(roles) {
  _roles = roles;
}
function setUsers(users) {
  _users = users;
}

console.log(getSubordinates(1));
console.log(getSubordinates(3));

module.exports = {
  getSubordinates,
  setRoles,
  setUsers,
};

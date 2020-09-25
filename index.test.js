const { getSubordinates, setRoles, setUsers } = require("./index");
const { roles, users } = require("./data");

test("returns all subordinates of user with id 1", () => {
  // Set up roles and users arrays.
  setRoles(roles);
  setUsers(users);

  // Expected output
  const expectedOutput = [
    { Id: 2, Name: "Emily Employee", Role: 4 },
    { Id: 3, Name: "Sam Supervisor", Role: 3 },
    { Id: 4, Name: "Mary Manager", Role: 2 },
    { Id: 5, Name: "Steve Trainer", Role: 5 },
  ];

  // Run test
  expect(getSubordinates(1)).toEqual(expectedOutput);
});

test("returns all subordinates of user with id 3", () => {
  // Set up roles and users arrays.
  setRoles(roles);
  setUsers(users);

  // Expected output
  const expectedOutput = [
    { Id: 2, Name: "Emily Employee", Role: 4 },
    { Id: 5, Name: "Steve Trainer", Role: 5 },
  ];

  // Run test
  expect(getSubordinates(3)).toEqual(expectedOutput);
});

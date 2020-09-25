# UsersHierarchy

Input for the program is stored in two variables in data.js, _roles_ and _users_. To swap the input data, just change those two variables.

When you change the input data, remember to update the _expectedOutput_ variables for the tests in index.test.js; otherwise, Jest will be comparing for the old input data and the tests will fail.

You may also need to update the parameter in the _getSubordinates()_ calls in the tests if the user ids have changed, or you wish to test for new user ids.

## Instructions

Version 12 of Node.js is needed to run the program from the command line.

### Installation

Either clone the repository or download and unzip it.

Navigate to the cloned directory.

Install the dependencies with the command:

`npm install`

### How to Run the Program

If you want to run the program from the terminal, use:

`node index.js`

Nothing should happen, as the _getSubordinates()_ method just returns the subordinates and nothing is logged to the console. But you can see it run without errors. To see if the code is working as intended we can use unit tests.

There is currently a unit test for every user id from the sample input data. If the input data is changed, the unit tests may also need to be changed.

To run the test suite, use:

`npm test`

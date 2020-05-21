# Team Profile Generator: Template Engine

## Description

The application will prompt the user for information about the team manager and then information about the team members. The user can input any number of team members, and they may be a mix of engineers and interns. The application also passes all unit tests. When the user has completed building the team, the application will create an HTML file that displays a nicely formatted team roster based on the information provided by the user.

## User Story

```
As a manager I can generate my team's basic info, so that access to emails and GitHub profiles will be quickly accessible.

```
## Installation

* Use the [Inquirer npm package](https://github.com/SBoudrias/Inquirer.js/) to prompt the user for their email, id, and specific information based on their role with the company.

There is a `package.json` to `npm install` if packages/nodules not installed.

The dependencies are, [jest](https://jestjs.io/) for running the provided tests, and [inquirer](https://www.npmjs.com/package/inquirer) for collecting input from the user.

## Usage

Run the following commands for execution of application:
 
```sh
node index.js
```

* User input

The project prompts the user to build an engineering team. An engineering team consists of a manager, and any number of engineers and interns.

![GIF file](./assets/app.gif)

* Roster output

The project generates a `team.html` page in the `output` directory, that displays a nicely formatted team roster.

![GIF file](./assets/html.gif)

## Tests

The unit tests helped build the classes necessary by following the workflow:

1. Running tests with `npm run test`
2. Creating and updating classes to pass a single test case
3. Repeating process

![GIF file](./assets/tests.gif)
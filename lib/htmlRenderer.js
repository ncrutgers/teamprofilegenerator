const path = require("path");
const fs = require("fs");

const templatesDir = path.resolve(__dirname, "../templates");
// Render function takes in employees(Team) array
const render = employees => {
  // html array
  const html = [];
  // Pushes manager.html string to html array  
  html.push(employees
    .filter(employee => employee.getRole() === "Manager") // Filters and returns manager employees array
    .map(manager => renderManager(manager)) // Returns array of html string template of manager.html
  );
  // Pushes engineer.html string to html array
  html.push(employees
    .filter(employee => employee.getRole() === "Engineer") // Filters and returns engineer employees array
    .map(engineer => renderEngineer(engineer)) // Returns array of html string template of engineer.html
  );
  // Pushes intern.html string to html array
  html.push(employees
    .filter(employee => employee.getRole() === "Intern") // Filters and returns intern employees array
    .map(intern => renderIntern(intern)) // Returns array of html string template of intern.html
  );
  // Returns joined strings of html string templates (Manager, Engineer, & Intern)  
  return renderMain(html.join(""));

};

const renderManager = manager => {
  // Template of html string of manager.html
  let template = fs.readFileSync(path.resolve(templatesDir, "manager.html"), "utf8");
  // Updates manager.html template to replace place holder "name" with manager getName() return value, etc for each other place holder.
  template = replacePlaceholders(template, "name", manager.getName());
  template = replacePlaceholders(template, "role", manager.getRole());
  template = replacePlaceholders(template, "email", manager.getEmail());
  template = replacePlaceholders(template, "id", manager.getId());
  template = replacePlaceholders(template, "officeNumber", manager.getOfficeNumber());
  // Returns new html string template
  return template;
};

const renderEngineer = engineer => {
  // Template of html string of engineer.html
  let template = fs.readFileSync(path.resolve(templatesDir, "engineer.html"), "utf8");
  // Updates manager.html template to replace place holder "name" with engineer getName() return value, etc for each other place holder.
  template = replacePlaceholders(template, "name", engineer.getName());
  template = replacePlaceholders(template, "role", engineer.getRole());
  template = replacePlaceholders(template, "email", engineer.getEmail());
  template = replacePlaceholders(template, "id", engineer.getId());
  template = replacePlaceholders(template, "github", engineer.getGithub());
  // Returns new html string template
  return template;
};

const renderIntern = intern => {
  // Template of html string of intern.html
  let template = fs.readFileSync(path.resolve(templatesDir, "intern.html"), "utf8");
  // Updates manager.html template to replace place holder "name" with intern getName() return value, etc for each other place holder.
  template = replacePlaceholders(template, "name", intern.getName());
  template = replacePlaceholders(template, "role", intern.getRole());
  template = replacePlaceholders(template, "email", intern.getEmail());
  template = replacePlaceholders(template, "id", intern.getId());
  template = replacePlaceholders(template, "school", intern.getSchool());
  // Returns new html string template
  return template;
};

const renderMain = html => {
  // Template of html string of main.html
  const template = fs.readFileSync(path.resolve(templatesDir, "main.html"), "utf8");
  return replacePlaceholders(template, "team", html);
};

const replacePlaceholders = (template, placeholder, value) => {
  const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
  return template.replace(pattern, value);
};

module.exports = render;

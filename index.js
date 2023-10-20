import {users, registerPage, registrationForm} from "./register.js";


//Navigation Links
const links = [
  {
    url: "#home",
    title: "Home",
    id: "home",
    page: document.createElement("section"),
  },
  {
    url: "#project",
    title: "Projects",
    id: "project",
  },
  {
    url: "#login",
    title: "Login",
    id: "login",
  },
];

const app = document.getElementById("app");

const header = document.createElement("header");
const nav = document.createElement("nav");
const ul = document.createElement("ul");

//Pages
const homePage = document.createElement("section");
const projectPage = document.createElement("section");
const loginPage = document.createElement("section");

homePage.innerHTML = "<h1>Home Page</h1>";
projectPage.innerHTML = "<h1>Project Page</h1>";
loginPage.innerHTML = "<h1>Sign In</h1>";

homePage.setAttribute("id", "home");
homePage.setAttribute("class", "page");
projectPage.setAttribute("id", "project");
loginPage.setAttribute("id", "login");

links.forEach((link) => {
  const li = document.createElement("li");
  li.innerHTML = `<a href="${link.url}">${link.title}</a>`;
  li.addEventListener("click", () => {
    if (link.id === "home" || link.id === "project" || link.id === "login") {
        // Clear the registration form if "Home" or "Project" is clicked
        registerPage.style.display = "none";
      }
    // console.log(e);
    const content = document.getElementById(link.id);
    content.style.display = "block";
    links.forEach((li) => {
      if (li.id !== link.id) {
        const content = document.getElementById(li.id);
        content.style.display = "none";
      }
    });
  });
  ul.appendChild(li);
});

//Login form
const form = document.createElement("form");
const email = document.createElement("input");
const password = document.createElement("input");
const submitButton = document.createElement("input");
const registerButton = document.createElement("button");
registerButton.innerText = "Register";
registerButton.id = "register-button";
const emailLabel = document.createElement("label"); // Create a label for the email field
const passwordLabel = document.createElement("label");

emailLabel.innerText = "Email:";
emailLabel.setAttribute("for", "email");
passwordLabel.innerText = "Password:";
passwordLabel.setAttribute("for", "password");

form.method = "POST";

  
  registerButton.addEventListener("click", () => {
    const loginContent = document.getElementById("login");
    loginContent.style.display = " none";
    registerPage.style.display = "block ";
    app.appendChild(registerPage);
    
    

  });
form.addEventListener("submit", (e) => {
  e.preventDefault();
  //Validate user inputs if the user's email and password matches
  //to dummy user's email and password.
  //Prompt the user using alert("Login succesfull") for the correct credentials
  //otherwise, prompt using alert("Incorrect email  or password")
  const enteredEmail = email.value;
  const enteredPassword = password.value;

  const user = users.find((user) => user.email === enteredEmail && user.password === enteredPassword);

if (user){
    alert("Login successful");
}  else{
    alert("Incorrect email or password");
}
});


email.type = "email";
password.type = "password";
submitButton.type = "submit";

form.appendChild(emailLabel);
form.appendChild(email);
form.appendChild(passwordLabel);
form.appendChild(password);
form.appendChild(submitButton);
loginPage.appendChild(form);
loginPage.appendChild(registerButton);
app.appendChild(nav);
nav.appendChild(ul);
app.appendChild(homePage);
app.appendChild(projectPage);
app.appendChild(loginPage);
// app.appendChild(registerPage);

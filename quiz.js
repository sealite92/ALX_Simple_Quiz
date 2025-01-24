const submitButton = document.getElementById("submit-answer");
const feedback = document.getElementById("feedback");

function checkAnswer() {
  const correctAnswer = "4";
  const selectedRadionButton = document.querySelector(
    'input[name="quiz"]:checked'
  );

  const userAnswer = selectedRadionButton ? selectedRadionButton.value : null;
  console.log(selectedRadionButton.value);
  if (userAnswer === correctAnswer) {
    feedback.textContent = "Correct! Well done.";
  } else {
    feedback.textContent = "That's incorrect. Try again!";
  }
}

submitButton.addEventListener("click", checkAnswer);

const person = {
  name: "Chidi",
  age: 31,
  profession: "Front-end engineer",
};
console.log(person);
const { name, age, profession } = person;
console.log(`${name} is a ${age} year old ${profession}.`);

const numAr = [1, 2, 3, 4, 5];
numAr.push(6);
numAr.shift();
console.log(numAr);

const evenNumArray = (Array) => {
  const evenNums = [];
  Array.forEach((num) => {
    if (num % 2 === 0) {
      evenNums.push(num);
    }
  });
  return evenNums;
};

console.log(evenNumArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
function load(url) {
  return new Promise(function (resolve, reject) {
    const request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      if (this.readyState === 4 && this.status == 200) {
        resolve(this.response);
      } else {
        reject(this.status);
      }
    };
    request.open("GET", url, true);
    request.send();
  });
}

const url = "https://www.javascripttutorial.net/sample/promise/api.json";
const btn = document.querySelector("#btnGet");
const msg = document.querySelector("#message");

btn.addEventListener("click", () => {
  load(URL)
    .then((response) => {
      const result = JSON.parse(response);
      msg.innerHTML = result.message;
    })
    .catch((error) => {
      msg.innerHTML = `Error getting the message, HTTP status: ${error}`;
    });
});

const users = fetch("https://jsonplaceholder.typicode.com/users");
console.log(users);

fetch("https://jsonplaceholder.typicode.com/users").then((response) => {
  response.json().then((data) => {
    console.log(data);
    data.forEach((user) => {
      console.log(user);
    });
  });
});

const form = document.getElementById("registrationForm");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  // Validate username
  const usernameInput = document.getElementById("username");
  const usernameError = document.getElementById("usernameError");
  if (usernameInput.value.length < 3) {
    usernameError.textContent = "Username must be at least 3 characters long.";
    return;
  } else {
    usernameError.textContent = "";
  }

  // Validate email
  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("emailError");
  if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(emailInput.value)) {
    emailError.textContent = "Please enter a valid email address.";
    return;
  } else {
    emailError.textContent = "";
  }

  // Validate password
  const passwordInput = document.getElementById("password");
  const passwordError = document.getElementById("passwordError");
  if (passwordInput.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters long.";
    return;
  } else {
    passwordError.textContent = "";
  }

  // Validate age
  const ageInput = document.getElementById("age");
  const ageError = document.getElementById("ageError");
  if (ageInput.value < 18 || ageInput.value > 99) {
    ageError.textContent = "Age must be between 18 and 99.";
    return;
  } else {
    ageError.textContent = "";
  }

  // If all validations pass, submit the form
  form.submit();
});

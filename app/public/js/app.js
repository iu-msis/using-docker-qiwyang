let $btn = document.querySelector("#fetch-button");
let $image = document.querySelector("#image");
let $fullname = document.querySelector("#fullname");
let $gender = document.querySelector("#gender");
let $dob = document.querySelector("#dob");
let $email = document.querySelector("#email");
let $origin = document.querySelector("#origin");

let url = "https://randomuser.me/api";

// initial fetch and update UI
getUserAndUpdate();

// ====== Utility Functions ======
function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}

// ====== Fetch functions ======
function handleErrors(response) {
  if (!response.ok) {
    throw Error("Custom Error: 404");
  }
  return response;
}

function printError(err) {
  console.log(err);
}

// here's where the action happens
function getUserAndUpdate() {
  fetch(url)
    .then(handleErrors)
    .then(response => response.json())
    .catch(printError);
}

// ====== Button Click Listener ======
$btn.addEventListener("click", () => {
  getUserAndUpdate();
});


// ==================== Vue =====================
new Vue({
  el: '#vue-app',
  data: {
    fullname: '',
    patientID: '',
    gender: '',
    dob: '',
    email: '',
    origin: '',
    image: ''
  },
  methods: {
    fetchData: function() {


      fetch(url)
        .then(handleErrors)
        .then(response => response.json())
        .then(data => {
          let user = data.results[0]
          this.fullname = `${capitalize(user.name.first)} ${capitalize(user.name.last)}`
          this.gender = user.gender
          this.dob = user.dob.date
          this.email = user.email
          this.origin = user.location.state
          this.image = user.picture.medium
        })
    }
  },
  created: function() {
    this.fetchData()
  }
})

//Credit to Quentin Mckay from https://codepen.io/quentin-mckay/pen/RQVygM

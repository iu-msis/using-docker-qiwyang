function createUser(element) {
  return document.createElement(element);
}

function append(parent, element) {
	console.log(element)
	document.getElementById("users").appendChild(element);
  // return document.appendChild(element);
}

fetch('https://randomuser.me/api/?result=1')
 .then((resp) => resp.json())
 .then(function (data) {
   let users = data.results;
   return users.map(function (user) {
     let br = createUser('br'),
         img = createUser('img'),
         name = createUser('name');
         dob = createUser('dob');
         patientID = createUser('patientID');
   })
 })

 .catch(function (error) {
   console.log(error);
 })

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
<<<<<<< HEAD
=======
     img.src = user.picture.large;
     patientID.innerHTML = `<br><br>Patient ID: ${user.id.value}`;
     name.innerHTML = `<br><br>Name: ${user.name.first} ${user.name.last}`;
     dob.innerHTML = `<br><br>Date of Birth: ${user.dob.date}`;
     append(br, img);
     append(br, patientID);
     append(br, name);
     append(br, dob);
     append(document.getElementById('users'), br);
>>>>>>> 9ab77d1ca9749c77dd5041609a50391f546ae25a
   })
 })

 .catch(function (error) {
   console.log(error);
 })

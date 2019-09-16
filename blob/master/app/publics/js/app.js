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
         gender = createUser('gender');
         email = createUser('email');
         origin = createUser('origin');
     img.src = user.picture.large;
     patientID.innerHTML = `<br><br>Patient ID: ${user.id.value}`;
     name.innerHTML = `<br><br>Name: ${user.name.first} ${user.name.last}`;
     gender.innerHTML = `<br><br>Gender: ${user.gender}`;
     dob.innerHTML = `<br><br>Date of Birth: ${user.dob.date}`;
     origin.innerHTML = `<br><br>Origin: ${user.location.state}`;
     email.innerHTML = `<br><br>Email Address: <a href="mailto:${user.email}">${user.email}</a>`;
     append(br, img);
     append(br, patientID);
     append(br, name);
     append(br, gender);
     append(br, dob);
     append(br, origin);
     append(br, email);
     append(document.getElementById('users'), br);
   })
 })

 .catch(function (error) {
   console.log(error);
 })

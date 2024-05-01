function DoSomething() {
  ValidateName();
  ValidateBirthDate();
  ValidatePassword();
  ValidateEmail();
  ValidateGender();
  ValidateCourse();
  ValidateUpload();
  ValidateAddress();
}

function ValidateName() {
  var refToTxtName = document.getElementById("txtName");
  var refToerrDiv = document.getElementById("errorDiv1");
  refToerrDiv.innerText = "";
  if (refToTxtName.value == "") {
    refToerrDiv.innerText = "Name is required.";
  } else if (!isNaN(refToTxtName.value)) {
    refToerrDiv.innerText = "Enter text.";
  } else {
    console.log("Name: " + refToTxtName.value);
  }
}

function ValidatePassword() {

  let refToTxtPass = document.getElementById("pswd");
  let refToerrDiv = document.getElementById("errorDiv3");
  let passRejex= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  refToerrDiv.innerText = "";
  if (refToTxtPass.value == "") {
    refToerrDiv.innerText = "Password is required.";
  } else if (!refToTxtPass.value.match(passRejex)) {
    refToerrDiv.innerText="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters";
  } else {
    console.log("password : " + refToTxtPass.value);
  }
}

function ValidateEmail() {
  let refToTxtEmail = document.getElementById("txtEmail");
  let refToerrDiv = document.getElementById("errorDiv4");
  refToerrDiv.innerText = "";
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (refToTxtEmail.value == "") {
    refToerrDiv.innerText = "Email is required.";
  } else if (!refToTxtEmail.value.match(emailRegex)) {
    refToerrDiv.innerText = "Invalid email format.";
  } else {
    console.log("Email: " + refToTxtEmail.value);
  }
}

function ValidateGender() {
  let maleChecked = document.getElementById("male").checked;
  let femaleChecked = document.getElementById("female").checked;
  let refToerrDiv = document.getElementById("errorDiv6");
  
  refToerrDiv.innerText = "";

  if (!maleChecked && !femaleChecked) {
    refToerrDiv.innerText = "Gender is required.";
  } else if (maleChecked) {
    console.log("Gender: Male");
  } else {
    console.log("Gender: Female");
  }
}
function ValidateCourse() {
  let selectedCourse = document.getElementById("scourse").value;
  let refToerrDiv = document.getElementById("errorDiv7");
  
  refToerrDiv.innerText = "";

  if (selectedCourse == "") {
    refToerrDiv.innerText = "Please select a course.";
  } else {
    console.log("Selected course: " + selectedCourse);
  }
}


function ValidateUpload() {
  let fileInput = document.getElementById("uploadfile");
  let refToerrDiv = document.getElementById("errorDiv8");
  
  refToerrDiv.innerText = "";

  if (fileInput.value == "") {
    refToerrDiv.innerText = "Upload photo is required.";
  } else {
    console.log("Photo uploaded: " + fileInput.value);
  }
}


function ValidateBirthDate() {
  // debugger;
  var refToTxtBdate = document.getElementById("txtBdate").value;
 
  var refToerrDiv = document.getElementById("errorDiv2");
  refToerrDiv.innerText = "";
  if (refToTxtBdate.value == undefined) {
    // console.log(refToTxtBdate.value);
    refToerrDiv.innerText = "Birth Date is required";
  } else {
    console.log(refToTxtBdate.value);
  }
}
function ValidateAddress() {
  let state = document.getElementById("state").value;
  let district = document.getElementById("district").value;
  let city = document.getElementById("city").value;
  let refToerrDiv = document.getElementById("errorDiv5");
  
  refToerrDiv.innerText = "";

  if (state == "" || district == "" || city == "") {
    refToerrDiv.innerText = "Please select State, District, and City.";
  } else {
    console.log("Address: State - " + state + ", District - " + district + ", City - " + city);
  }
}

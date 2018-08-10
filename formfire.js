// Initialize Firebase (REPLACE xxxx WITH YOUR OWN DATA)
var config = {
    apiKey: "AIzaSyAT5Ui47ftTy_rP8k7gIxwc1VxQH51_OVs",
    authDomain: "djgilmore4u.firebaseapp.com",
    databaseURL: "https://djgilmore4u.firebaseio.com",
    projectId: "djgilmore4u",
    storageBucket: "djgilmore4u.appspot.com",
    messagingSenderId: "143827307576"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('formName').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
    e.preventDefault();

    // Get values
    // Remember to add all the values in your contact form here
    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');

    // Save message
    // Remember to add all variable declared above here
    saveMessage(name, company, email, phone, message);

    // Show alert
    document.querySelector('.alert').style.display = 'block';

    // Hide alert after 3 seconds
    //Remember to add some CSS to that
    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
    },3000);

    // Clear form - delete form data after submit
    document.getElementById('contactForm').reset();
}

// Function to get form values
function getInputVal(id){
    return document.getElementById(id).value;
}

// Save message to firebase function
function saveMessage(name, company, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        company:company,
        email:email,
        phone:phone,
        message:message
    });
}
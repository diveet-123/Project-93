// Your web app's Firebase configuration
const firebaseConfig = {
     apiKey: "AIzaSyCTvfJOkS3-8hLdI3X7RrUMihFeVu0Tke0",
     authDomain: "project-93-94-95-96-867a2.firebaseapp.com",
     databaseURL: "https://project-93-94-95-96-867a2-default-rtdb.firebaseio.com",
     projectId: "project-93-94-95-96-867a2",
     storageBucket: "project-93-94-95-96-867a2.appspot.com",
     messagingSenderId: "261213594823",
     appId: "1:261213594823:web:2d8e85a2bd212ab4520ae2"
   };
   
   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

   function login_user()
   {
        user_name_typed = document.getElementById("user_name").value;
        localStorage.setItem("name",user_name_typed);
         window.location="Kwitter_room.html";
        firebase.database().ref("/").child(user_name_typed).update({
             purpose:"adding user"
        });
   }
function login_user()
{
     username = document.getElementById("user_name").value;
     localStorage.setItem("name",username);
     window.location="Kwitter_room.html";
}
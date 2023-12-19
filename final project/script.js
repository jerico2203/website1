function validate()
      {
       if(   document.getElementById("uname").value == "kokoy"
         && document.getElementById("psw").value == "jerico" )
           {
          location.href="home.html";
           }
          else
         {
         alert( "Invalid credentials. Try Again" );
        document.getElementById('uname').value = "";
        document.getElementById('psw').value = "";                     
  }
 }
               
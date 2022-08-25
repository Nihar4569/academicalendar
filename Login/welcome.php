<?php

session_start();

if(!isset($_SESSION['loggedin']) || $_SESSION['loggedin'] !==true)
{
    header("location: login.php");
}


?>


<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="../styleHeader.css">
   

    <title>Acadamic login system!</title>
  </head>
  <body>
  <header>
      <nav>
        <label class="logo">TechCoders</label>
        <ul>
          <li><a class="active" href="../index.html">Home</a></li>
          <li>
            <a href="#">Stream
              <i class="fas fa-caret-down"></i>
            </a>
            <ul>
<<<<<<< HEAD
              <li><a href="engineering.html">Engineering</a></li>
              <li><a href="medical.html">Medical</a></li>
              
            </ul>
          </li>
          <li><a href="logout.php">LogOut</a></li>
          <li>
            <a href="#">Register
              <i class="fas fa-caret-down"></i>
            </a>
            <ul>
              <li><a href="Login/sreg.php">Super Admin</a></li>
              <li><a href="Login/register.php">Admin</a></li>
              
            </ul>
          </li>
          <li><a href="aboutus.html">About</a></li>
=======
              <li><a href="../engineering.html">Engineering</a></li>
              <li><a href="../medical.html">Medical</a></li>
              
            </ul>
          </li>
          <li><a href="logout.php">Logout</a></li> 
          
         
          <li> <a class="nav-link" href="#"> <img src="https://img.icons8.com/metro/26/000000/guest-male.png"> <?php echo "". $_SESSION['username']?></a></li>
>>>>>>> 5f48e1583f0d1409b71add890504a4b16164bfc3
        </ul>
      </nav>
      
      
  </header>
  <br><br><br>
<style>
  h3, h4{
    color: #00adb5  ;
  }
  <style>
input[type=text], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type=submit], input[type=reset] {
  width: 100%;
  background-color: #00adb5 ;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #192435;
}
input[type=reset]:hover {
  background-color: #192435;
}
button:hover{
  color: white;
  background-color: #192435;
}

div {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
</style>
  

<div class="container mt-4">
<h3><?php echo "Welcome ". $_SESSION['username']?></h3><br><br>
<form action="send.php" method="POST">
<<<<<<< HEAD
  
=======
  <div>
    <label for="fname">Event ID</label>
    <input type="text" name="eid" placeholder="Event ID"><br>
  </div>
>>>>>>> 5f48e1583f0d1409b71add890504a4b16164bfc3

  <div>
  <label for="lname">Event Name</label>
    <input type="text" name="ename" placeholder="Your Event Name"><br>
  </div>

  <div>
  <label for="lname">Event date</label>
    <input type="date" name="edate" placeholder="Your Event date">
  </div>
    

    
        <br>
        
        

        <br>  

        <div>
            <input type="submit" value="Submit Now">
            <input type="reset" value="Reset Now">
        </div>
    </form>
    <h4>
    To view your events list: <button onclick="location.href='etable.php';"> Click Here</button>
    </h4>
<hr>

</div>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
  </body>
</html>

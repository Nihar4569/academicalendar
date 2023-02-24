
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Uplode Img</title>
</head>
<body>
    <center>
        <h1>upload file</h1>
    </center>
    <form action="" method="POST" enctype="multipart/form-data">

        <div>
      <label for="lname">Event Name</label>
        <input type="text" name="ename" placeholder="Your Event Name">
      </div>
      
      <div>
    <label for="lname">sdate</label>
      <input type="text" name="sdate" placeholder="Your Event start date">
    </div>
    
    <div>
  <label for="lname">end date</label>
    <input type="text" name="edate" placeholder="Your Event end date">
  </div>

  <input type="file" name="upload" id="image" >

  <input type="submit" name="upload" value="Upload image/data">
</form>
</body>
</html>

<?php
$connection = mysqli_connect("localhost", "root", "");
$db = mysqli_select_db($connection,'events');

if (isset($_POST['upload'])) {
    $ename = $_POST['ename'];
    $sdate = $_POST['sdate'];
    $edate = $_POST['edate'];
    $file = addcslashes(file_get_contents($_FILES['image']['tmp_name']));

    $query = "INSERT INTO 'pevents'('ename', 'sdate', 'edate', 'image') VALUES('$ename', '$sdate', '$edate', '$file')";
    $query_run = mysqli_query($connection,$query);

    if ($query_run) {
        echo '<script> type="text/javascript"> alert("Data Updated") </script>';
    }
    else
    {
        echo '<script>  type="text/javascript"> alert("Data not Updated") </script>';
    }
}
?>
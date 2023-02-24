<html>
<head>
    <title>DeletionS</title>
</head>
<body>
    
    <center>
        <h1> delete </h1>
    

    <form action="" method="POST">
        <input type="text" name="eid" placeholder="Enter event id"/><br><br>
        
        
        <input type="submit" name="update" value="Delete DATA">
    </form>
    </center>
</body>
</html>

<?php
$connection = new mysqli('localhost','root','','events');

if(isset($_POST['update']))
{
    $eid=$_POST['eid'];
    
    $query = "DELETE FROM `eventslist` WHERE eid = '$eid'";
    echo $query;
    $query_run = mysqli_query($connection,$query);
    if ($query_run) {
        echo '<script> type="text/javascript"> alert("Data Deleted") </script>';
    }
    
    else
    {
        echo '<script>  type="text/javascript"> alert("Data not Deleted") </script>';
    }
}   

?>
<html>
<head>
    <title>Updation</title>
</head>
<body>

    <center>
        <h1> Update </h1>


    <form action="" method="POST">
        <input type="text" name="eid" placeholder="Enter event id"/><br><br>
        <input type="text" name="ename" placeholder="Enter event name"/><br><br>
        <input type="date" name="sdate" placeholder="Enter event Start date"/><br><br>
        <input type="date" name="edate" placeholder="Enter event End date"/><br><br>
        <input type="url" name="link" placeholder="Enter event Link"/><br><br>
        <input type="text" name="Description" placeholder="Description"/><br><br>

        <input type="submit" name="update" value="UPDATE DATA">
    </form>
    </center>
</body>
</html>

<?php
$connection = new mysqli('localhost','root','','events');

if(isset($_POST['update']))
{
    $eid=$_POST['eid'];

    $query="UPDATE eventslist SET eid='$_POST[eid]', ename='$_POST[ename]', sdate='$_POST[sdate]', edate='$_POST[edate]', link='$_POST[link]', Description='$_POST[Description]' where eid='$_POST[eid]'";
    echo $query;
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

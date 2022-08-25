<?php
<<<<<<< HEAD
	
=======
	$eid = $_POST['eid'];
>>>>>>> 5f48e1583f0d1409b71add890504a4b16164bfc3
    $ename = $_POST['ename'];
    $edate = $_POST['edate'];

	// Database connection
	$conn = new mysqli('localhost','root','','events');
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {
        
<<<<<<< HEAD
		$stmt = $conn->prepare("insert into eventslist(ename, edate) values(?, ?)");
		$stmt->bind_param("ss", $ename, $edate);
=======
		$stmt = $conn->prepare("insert into eventslist(eid, ename, edate) values(?, ?, ?)");
		$stmt->bind_param("sss", $eid, $ename, $edate);
>>>>>>> 5f48e1583f0d1409b71add890504a4b16164bfc3
		$execval = $stmt->execute();
		echo $execval;
		echo "Event added successfully...";
		$stmt->close();
		$conn->close();
	}
?>
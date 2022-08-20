<?php
	$eid = $_POST['eid'];
    $ename = $_POST['ename'];
    $edate = $_POST['edate'];

	// Database connection
	$conn = new mysqli('localhost','root','','events');
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {
        
		$stmt = $conn->prepare("insert into eventslist(eid, ename, edate) values(?, ?, ?)");
		$stmt->bind_param("sss", $eid, $ename, $edate);
		$execval = $stmt->execute();
		echo $execval;
		echo "Event added successfully...";
		$stmt->close();
		$conn->close();
	}
?>
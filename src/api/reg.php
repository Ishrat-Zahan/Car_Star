<?php
require 'db.php';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  exit;
}


$data = json_decode(file_get_contents('php://input'), true);

if (json_last_error() !== JSON_ERROR_NONE) {
  echo json_encode(['error' => 'Invalid JSON data']);
  exit();
}

$fname = $data['fname'];
$lname = $data['lname'];
$email = $data['email'];
$pass = $data['pass'];
$repass = $data['repass'];


if (empty($fname) || empty($pass)) {
  echo json_encode(['error' => 'Username and password are required']);
  exit();
}


$query = "SELECT * FROM customer WHERE first_name = '$fname'";
$result = mysqli_query($conn, $query);

if (mysqli_num_rows($result) > 0) {
  echo json_encode(['error' => 'Username already exists']);
  exit();
}


$query = "INSERT INTO customer (first_name, last_name,email,password,re_password) VALUES ('$fname','$lname','$email','$pass','$repass')";
if (mysqli_query($conn, $query)) {
  echo json_encode(['message' => 'Registration successful']);
} else {
  echo json_encode(['error' => 'Registration failed']);
}

mysqli_close($conn);

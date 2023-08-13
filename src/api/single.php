<?php

require 'db.php';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Check if the request method is OPTIONS and exit
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  exit;
}

// Check if the "id" parameter is provided in the GET request
if (!isset($_GET['id'])) {
  $response = array('message' => 'ID parameter is missing');
  http_response_code(400); // Bad Request
  echo json_encode($response);
  exit;
}

$itemId = $_GET['id'];

$query = "SELECT * FROM cars WHERE id = '$itemId'";
$result = mysqli_query($conn, $query);

if ($result) {
  $row = mysqli_fetch_assoc($result);

  if ($row) {
    $response = array('data' => $row);
    echo json_encode($response);
    exit;
  } else {
    $response = array('message' => 'Car not found');
    http_response_code(404); // Not Found
    echo json_encode($response);
    exit;
  }
} else {
  $response = array('message' => 'Failed to retrieve data');
  http_response_code(500); // Internal Server Error
  echo json_encode($response);
  exit;
}

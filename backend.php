<?php
// Database configuration
$host = 'localhost'; // Change to your MySQL server host (e.g., 'localhost')
$username = 'root'; // Your MySQL username (default is 'root')
$password = ''; // Your MySQL password (default is empty for localhost)
$dbname = 'business_details'; // The name of your database

// Create connection
$conn = new mysqli($host, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if form data is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize input data to avoid security issues
    $plan = $_POST['plan'];
    $duration = $_POST['duration'];
    $businessName = $_POST['businessName'];
    $category = $_POST['category'];
    $contactNumber = $_POST['contactNumber'];

    // Prepare an SQL statement to insert data into the database
    $stmt = $conn->prepare("INSERT INTO business_plans (plan, duration, business_name, category, contact_number) VALUES (?, ?, ?, ?, ?)");
    if ($stmt === false) {
        die('Error preparing the statement: ' . $conn->error);
    }

    // Bind the parameters (s = string, i = integer)
    $stmt->bind_param('sisss', $plan, $duration, $businessName, $category, $contactNumber);

    // Execute the statement
    if ($stmt->execute()) {
        echo "<h1>Business Details Submitted Successfully</h1>";
        echo "<p><strong>Plan:</strong> " . htmlspecialchars($plan) . "</p>";
        echo "<p><strong>Duration:</strong> " . htmlspecialchars($duration) . " months</p>";
        echo "<p><strong>Business Name:</strong> " . htmlspecialchars($businessName) . "</p>";
        echo "<p><strong>Category:</strong> " . htmlspecialchars($category) . "</p>";
        echo "<p><strong>Contact Number:</strong> " . htmlspecialchars($contactNumber) . "</p>";
    } else {
        echo "Error: " . $stmt->error;
    }

    // Close the statement and connection
    $stmt->close();
    $conn->close();
} else {
    echo "Invalid request method!";
}
?>

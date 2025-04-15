<?php
session_start();

if (!isset($_SESSION['user_name'])) {
    header('Location: index.php'); // Redirect to login if the user is not logged in
    exit;
}

$userName = $_SESSION['user_name']; // Retrieve the username from the session
?>

<!-- src/html/index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>20:20 FC - FINEDICA</title>
    <link rel="stylesheet" href="../css/main.css">
</head>
<body>
    <header>
        <nav class="navbar">
            <div class="logo">
                <h1>20:20 FC - FINEDICA</h1>
                <p>Expert Financial Coaching</p>
            </div>
            <ul>
                <li><a href="home.php">Home</a></li>
                <li><a href="questionnaire.php">Questionnaire</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="avatar.php">Avatar</a></li>
                <li><a href="chatbot.php">Chatbot</a></li>
                <li><a href="logout.php" style="font-size: 18px; color: Yellow">Logout <?php echo htmlspecialchars($userName);?></a></li>
            </ul>
        </nav>
    </header>

    <main>
    <section class="hero">
            <div class="hero-content">
                <h2>Welcome to FINEDICA</h2>
                <p>Expert financial coaching for a clearer tomorrow</p>
            </div>
    </section>
    </main>
    <script src="../js/main.js"></script>
    <script src="../js/auth.js"></script>
</body>
</html>

<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

if (isset($_GET['blogs'])) {
    $blogs = [
        [
            "id" => 1,
            "title" => "اولین بلاگ",
            "content" => "این محتوای اولین بلاگ است."
        ],
        [
            "id" => 2,
            "title" => "دومین بلاگ",
            "content" => "این محتوای دومین بلاگ است."
        ],
        [
            "id" => 3,
            "title" => "سومین بلاگ",
            "content" => "محتوای سومین بلاگ"
        ]
    ];

    echo json_encode($blogs);
}

if (isset($_GET['portfolios'])) {
    $portfolios = [
        [
            "id" => 1,
            "title" => "Application UI Design",
            "description" => "Dolar repellendus temporibus...",
            "image" => "src/assets/image/portfolio-img1.png",
            "categories" => ["cars"]
        ],
        [
            "id" => 2,
            "title" => "Furni furniture UI Design",
            "description" => "Dolar repellendus temporibus...",
            "image" => "src/assets/image/portfolio-img2.png",
            "categories" => ["colors", "fruits"]
        ],
        [
            "id" => 3,
            "title" => "Mobile UI Design",
            "description" => "Dolar repellendus temporibus...",
            "image" => "src/assets/image/portfolio-img3.png",
            "categories" => ["cars"]
        ],
        [
            "id" => 4,
            "title" => "Businesscard UI Design",
            "description" => "Dolar repellendus temporibus...",
            "image" => "src/assets/image/portfolio-img4.png",
            "categories" => ["colors"]
        ],
        [
            "id" => 5,
            "title" => "Real estate UI Design",
            "description" => "Dolar repellendus temporibus...",
            "image" => "src/assets/image/portfolio-img5.png",
            "categories" => ["cars", "animals"]
        ]
    ];

    echo json_encode($portfolios);
}

?>

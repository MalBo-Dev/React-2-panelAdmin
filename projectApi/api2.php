<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");



if (isset($_GET['amar'])) {
    $amars = [
        [
            "id" => 1,
            "name" => "کاربران جدید",
            "value" => "20"
        ],
        [
            "id" => 2,
            "title" => "پروژه های جدید",
            "content" => "25"
        ],
        [
            "id" => 3,
            "title" => "بازدید های امروز ",
            "content" => "1256"
        ],
		
		 [
            "id" => 4,
            "title" => "فروش امروز",
            "content" => "565"
        ]
    ];

    echo json_encode($amars);
}elseif (isset($_GET['chartdata'])) {
    $month = $_GET['month'] ?? "0";

	$dataList = [
		"0" => [
			"labels" => ["A", "B", "C", "D", "E", "F"],
			"series" => [
				[100, 85, 90, 120, 110, 95],
				[60, 75, 70, 65, 80, 90]
			]
		],
		"1" => [
			"labels" => ["1", "2", "3", "4", "5", "6", "7", "8"],
			"series" => [
				[21.4, 27.2, 33.8, 29.0, 23.5, 28.7, 40.8, 36.5],
				[7.5, 5.4, 18.9, 6.1, 14.8, 9.5, 7.8, 16.3]
			]
		],
	];

	echo json_encode($dataList[$month] ?? $dataList["0"]);

}
?>
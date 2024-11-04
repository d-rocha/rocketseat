<?php
	// Badge array for about section
	$badges = [
		'GitHub' => 'src/assets/icons/badges/github.svg',
		'PHP' => 'src/assets/icons/badges/php.svg',
		'CSS' => 'src/assets/icons/badges/css.svg',
		'HTML' => 'src/assets/icons/badges/html.svg',
		'Javascript' => 'src/assets/icons/badges/javascript.svg'
	];


	// Event to apply dynamic filling to badges in the project list
	function fillBadgeColorTech($tech) {
		if (!$tech) {
			return "";
		}

		$classes = [
			"PHP" => "bg-tech-php",
			"C#" => "bg-tech-csharp",
			"NodeJS" => "bg-tech-nodejs",
			"Laravel" => "bg-tech-laravel",
			"NextJS" => "bg-tech-nextjs",
			"TypeScript" => "bg-tech-typescript",
			"JavaScript" => "bg-tech-javascript",
			"JSX" => "bg-tech-jsx",
			"Gatsby" => "bg-tech-gatsby",
			"SASS" => "bg-tech-sass",
			"CSS" => "bg-tech-css",
			"Tailwind" => "bg-tech-tailwind",
			"HTML" => "bg-tech-html"
		];

		return $classes[$tech] ?? "bg-base-purple";
	}
?>

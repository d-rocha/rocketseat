<?php
	$controller = "index";
	$controller = mountUri($controller);

	isValidPath($controller);

	require "./src/controllers/{$controller}.controller.php";
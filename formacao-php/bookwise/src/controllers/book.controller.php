<?php
	// Mock Data: Simulate API ** Model
	require "./config/data/api.php";

	$book = bookViewData($books, $_REQUEST['id']);

	renderView("book", compact('book'));
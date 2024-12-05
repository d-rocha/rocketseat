<?php 
	// Mock Data: Simulate API ** Model
	require "./config/data/api.php";

	renderView("index", compact('books'));
<?php
	function bookViewData ($data, $id) {
		$match = array_filter($data, fn($item) => $item['id'] == $id);

		return array_pop($match);
	}

	function mountUri ($route) {
		if (isset($_SERVER['PATH_INFO'])) {
			$route = str_replace('/', '', $_SERVER['PATH_INFO']);
		}

		return $route;
	}

	function isValidPath ($path) {
		if(!file_exists("./src/controllers/{$path}.controller.php")) {
			http_response_code(404);
			
			echo "Página não encontrada";

			die();
		}
	}

	function renderView ($view, $data = []) {
		foreach ($data as $key => $value) {
			$$key = $value;
		}

		require "src/views/template/app.php";
	}
?>
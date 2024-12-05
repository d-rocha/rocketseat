<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Bookwise</title>

        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Asap:ital,wght@0,100..900;1,100..900&family=Inconsolata:wght@200..900&family=Maven+Pro:wght@400..900&display=swap" rel="stylesheet">
		<link rel="stylesheet" href="./src/web/css/source/_typography.css">

        <script src="https://cdn.tailwindcss.com"></script>
        <script>
            tailwind.config = {
				theme: {
					screens: {
						sm: '480px',
						md: '768px',
						lg: '1366px',
						xl: '1440px',
					},
					fontFamily: {
						asap: ['Asap', 'sans-serif'],
						inconsolata: ['Inconsolata', 'serif'],
						mavenPro: ['MavenPro', 'serif']
					},
					fontSize: {
						xs: '12px',
						base: '14px',
						sm: '16px',
						md: '20px',
						lg: '24px',
						xl: '30px'
					},
					fontWeight: {
						normal: '400',
						bold: '700'
					},
					extend: {
						colors: {
							black: '#000',
							white: '#FFF',
							base: {
								red: '#E3646E',
								purple: '#BB72E9',
								blue: '#3996DB',
								green: '#82BC4F',
								yellow: '#EABD5F'
							},
							gray: {
								100: '#0D0E11',
								200: '#16181D',
								300: '#292C34',
								400: '#878EA1',
								500: '#C0C4CE',
								600: '#E2E4E9'
							}
						}
					}
				}
            }
        </script>
    </head>

    <body class="bg-gray-200 font-inconsolata text-gray-500">
		<header class="bg-base-red fixed top-0 w-full">
			<nav class="mx-auto max-w-screen-lg bg-base-red flex justify-between px-8 py-4">
				<div>
					<h1 class="text-xl font-bold text-white uppercase hover:text-base-yellow cursor-pointer">
						<a href="/">Book Wise</a>
					</h1>
				</div>

				<ul class="flex gap-4 items-center text-white cursor-pointer">
					<li><a href="/" class="hover:text-base-yellow">Explorar</a></li>
					<li><a href="/my-books" class="hover:text-base-yellow">Meus Livros</a></li>
				</ul>

				<ul class="flex items-center text-white hover:text-base-yellow cursor-pointer">
					<li><a href="/login" class="uppercase">Fazer Login</a></li>
				</ul>
			</nav>
		</header>

        <main class="mx-auto max-w-screen-lg">
			<?php require "src/views/{$view}.view.php" ?>
        </main>
    </body>
</html>
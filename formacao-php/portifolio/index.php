<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Meu Portifólio</title>

        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Asap:ital,wght@0,100..900;1,100..900&family=Inconsolata:wght@200..900&family=Maven+Pro:wght@400..900&display=swap" rel="stylesheet">
		<link rel="stylesheet" href="./web/css/source/_typography.css">

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
						xl: '56px'
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
						},
						lineHeight: {
							custom1: '120%',
							custom2: '140%'
						},
						backgroundImage: {
							'intro': "url('./assets/images/bg_intro.png')",
							'contancts': "url('./assets/images/bg_contacts.png')"
						}
					}
				}
            }
        </script>
    </head>

    <!-- Mock Data: Simulate API -->
    <?php  include "./config/data/data.php"; ?>

    <body class="bg-gray-200">
		<!-- Section: About me -->
		<?php include "components/about-me.php" ?>
    </body>
</html>
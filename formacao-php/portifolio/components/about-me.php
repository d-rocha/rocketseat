<?php
	$badges = [
		'GitHub' => 'assets/icons/badges/github.svg',
		'PHP' => 'assets/icons/badges/php.svg',
		'CSS' => 'assets/icons/badges/css.svg',
		'HTML' => 'assets/icons/badges/html.svg',
		'Javascript' => 'assets/icons/badges/javascript.svg'
	];
?>

<header class="bg-intro bg-cover mx-auto max-w-[1366px] lg:h-[682px]">
	<div class="flex flex-col justify-center items-center py-[120px] px-[163px] mx-auto text-center">
		<img 
			src="<?= $owner['avatar']; ?>" 
			alt="Avatar Davi Rocha" 
			width="96"
			class="border-2 border-solid border-base-red rounded-full p-1 mb-[56px]"
		/>

		<div class="lg:w-4/5">
			<p class="font-inconsolata leading-custom1 text-md text-gray-500 mb-2">
				Hello World! Meu nome é <span class="text-base-red"><?= $owner['name']; ?></span> e sou
			</p>

			<h1 class="font-asap text-xl leading-custom1 font-bold text-gray-600 mb-5">Desenvolvedor PHP</h1>

			<p class="font-mavenPro text-base leading-custom2 text-gray-400 break-words">
				<?= $owner['description']; ?>
			</p>
		</div>

		<ul class="mt-20 flex justify-center items-center gap-3">
			<?php foreach($badges as $name => $badge): ?>
			<li>
				<img src="<?= $badge; ?>" alt="<?= $name; ?>" />
			</li>
			<?php endforeach; ?>
		</ul>
	</div>
</header>
<?php
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

<section class="mx-auto max-w-[1366px] lg:h-[682px] mb-36">
	<div class="pt-[72px] text-center flex flex-col gap-2 mb-14">
		<p class="font-inconsolata text-md leading-custom1 text-base-red">Meu trabalho</p>

		<h2 class="font-asap font-bold text-lg leading-custom1 text-gray-600">Veja os projetos em destaque</h2>
	</div>

	<div class="flex justify-center flex-wrap gap-6">
		<?php foreach($projects as $project): ?>
			<?php include "src/components/card.php"; ?>
		<?php endforeach;?>
	</div>
</section>
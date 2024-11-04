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
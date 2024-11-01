<section class="bg-contact bg-cover mx-auto max-w-[1366px] lg:h-[682px] px-[120px] pb-[200px]">
	<div class="flex flex-col gap-2 items-center pt-32">
		<p class="font-inconsolata leading-custom1 text-md text-base-purple">Contato</p>

		<h2 class="font-asap font-bold text-lg leading-custom1 text-gray-600">
			Gostou do meu trabalho?
		</h2>

		<p class="font-mavenPro text-sm leading-custom2 text-gray-500">
			Entre em contato ou acompanhe as minhas redes sociais!
		</p>
	</div>
	
	<ul class="flex flex-col items-center gap-4 mt-12">
		<?php foreach($owner['links'] as $name => $link):?>
			<?php include "src/components/button.php"?>
		<?php endforeach;?>
	</ul>
</section>
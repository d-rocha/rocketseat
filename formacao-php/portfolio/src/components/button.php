<li class="social-button bg-gray-300 lg:w-[400px] rounded-lg border hover:border hover:border-base-blue">
	<a 
		href="<?= $name === 'e-mail' ? 'mailto:' . $link : $link; ?>" 
		target="_blank" 
		class="flex justify-between p-5">
		<div class="flex items-center gap-3">
			<img 
				src="src/assets/icons/<?= $name; ?>.svg" 
				alt="<?= ucfirst($name); ?>" 
				class="social-icon"
			/>
			<span class="font-mavenPro font-normal text-sm leading-custom2 text-gray-500">
				<?= ucfirst($name); ?>
			</span>
		</div>

		<img src="src/assets/icons/arrow.svg" alt="Seta"/>
	</a>
</li>

<style>
	.social-button:hover .social-icon {
		filter: 
			brightness(0) saturate(100%) invert(55%)
			sepia(26%) saturate(3467%)
			hue-rotate(181deg) brightness(93%) contrast(84%);
	}
</style>
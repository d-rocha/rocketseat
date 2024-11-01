<div class="lg:w-[508px] lg:h-[180px] rounded-xl flex gap-x-4 p-3 bg-gray-300 border hover:border hover:border-gray-400">
	<div class="lg:w-[224px] lg:h-[156px] rounded-lg bg-gray-200">
		<img 
			src="<?= $project['thumbnail']; ?>"
			alt="<?= $project['title']; ?>"
			class="rounded-lg"
		/>
	</div>

	<div class="w-1/2">
		<p class="font-asap font-bold leading-custom1 text-sm text-gray-600 mb-2">
			<?= $project['title']; ?>
		</p>
		
		<span class="font-mavenPro text-base leading-custom2 text-gray-500">
			<?= $project['description']; ?>
		</span>

		<ul class="mt-[31px] flex gap-x-2 ">
			<?php foreach($project['techs'] as $name => $tech): ?>
			<li class="flex items-center rounded-full h-[18px] py-0.5 px-2 w-max <?= fillBadgeColorTech($tech); ?>">
				<span class="font-inconsolata font-bold text-xs leading-custom1 text-gray-200 uppercase">
					<?= $tech; ?>
				</span>
			</li>
			<?php endforeach; ?>
		</ul>
	</div>
</div>
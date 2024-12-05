<div class="mx-auto max-w-screen-lg mt-24">
	<div class="border border-2 border-base-yellow rounded p-3 w-1/3">
		<div class="flex gap-5">
			<img 
				src="<?= $book['cover']; ?>" 
				alt=""
				class="bg-base-red w-[120px] h-[120px]"
				width="160px"
			/>
	
			<div class="flex flex-col justify-between">
				<div class="flex flex-col gap-1">
					<a href="/" class="font-mavenPro text-md font-bold uppercase hover:underline">
						<?= $book['title']; ?>
					</a>
					<small class="text-xs font-bold"><?= $book['author']; ?></small>
				</div>
	
				<div class="">⭐⭐⭐⭐⭐</div>
			</div>
		</div>
	
		<div class="mt-2.5">
			<p class="text-base">
				<?= $book['description']; ?>
			</p>
		</div>
	</div>
</div>
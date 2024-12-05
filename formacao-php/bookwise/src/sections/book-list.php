<div class="mx-auto max-w-screen-lg">
	<h2 class="font-asap text-md font-bold uppercase text-center mt-12 text-gray-600">Listagem de Livros</h2>

	<div class="flex flex-wrap gap-4 items-center justify-center pt-3">
		<?php foreach ($books as $book): ?>
			<?php include "src/components/card.php"; ?>
		<?php endforeach; ?>
	</div>
</div>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Meu Portifólio</title>
        <script src="https://cdn.tailwindcss.com"></script>
    </head>

    <!-- Mock Data: Simulate API -->
    <?php  include "./data/data.php"; ?>

    <body class="bg-slate-900 text-white font-sans">
        <header class="mx-auto max-w-7xl px-3 py-6 flex justify-between items-center">
            <div class="bg-slate-800 p-3 rounded-xl">
                <span class="text-2xl font-bold">🎓 Formação PHP - Portifólio</span>
            </div>

            <nav class="links">
                <ul class="flex gap-5">
                    <?php foreach($owner['links'] as $name => $link): ?>
                    <li>
                        <a href="<?= $link; ?>" class="hover:text-violet-800">
                            <span><?= ucfirst($name); ?></span>
                        </a>
                    </li>
                    <?php endforeach; ?>
                </ul>
            </nav>
        </header>
    </body>
</html>
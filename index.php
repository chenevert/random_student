<!doctype html>
<html lang="fr">
<head>
	<meta charset="utf-8">
	<title>Roulette</title>
	<link rel="stylesheet" href="style.css">
	<script src="roulette.js"></script>
</head>
<body>
	<h1>random_student(<select><?php
	
			foreach (array_diff(scandir("data", 1), [".", ".."]) as $name)
				echo "<option>". $name . "</option>";

			?></select>);</h1>
	<div id="roulette">
		<img id="dés" src="sep.png"></img>
	</div>
	<div id="controls">
		<input type="button" value="Lancer" id="launch" />
	</div>
	<script src="main.js"></script>
</body>
</html>

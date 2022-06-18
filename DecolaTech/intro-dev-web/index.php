<html lang="pt-BR">

	<head>
		<meta charset="UTF-8" />
		<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
		<title>Introdução ao desenvolvimento para web</title>
	
		<style name="text/css">
			:root {
				font-size: 16px;
			}
		
			.red-span {
				color: red;
				font-size: 2rem;
				font-weight: bolder;
				font-family: 'Arial';
				line-height: 1.5rem;
				
				padding: 1.1rem;
				
				display: flex;
				flex-direction: column-reverse;
				gap: 2rem;
				justify-content: center;
				justify-items: center;
				align-items: center;
				align-content: center;
			}
			
			.blue-modified {
				color: blue;
				font-size: 2.2rem;
			}
		</style>
	</head>
	
	<body>
		<main>
			<h1<Contador feito em PHP:</h1>
			
			<?php
				for( $i = 0 ; $i < 10 ; $i++ ) {
					if($i == 5) {
						print("<span class='red-span blue-modified'>Chegou na linha " . $i . "</span><br /><br />");
					};
					print("<span class='red-span'>Linha " . $i . "</span><br /><br />");
				};
			?>
		</main>
	</body>
	
	<script type="text/javascript">
		
		const changeColors = () => {
			$(document).ready(() => {
				const spanElements = document.querySelectorAll(".red-span");

				spanElements.forEach( e => {
					e.style.color = "green";
					e.style.background = "black";
				});
			});
		};
		
		setTimeout(changeColors, 5000);

	</script>

</html>
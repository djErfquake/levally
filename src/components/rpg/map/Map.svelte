<script>
	import { Canvas, t } from "svelte-canvas";
	import Mainayer from "./MainLayer.svelte";

	// map
	export let width = 1200;
	export let height = 640;
	const darkness = 1;
	const fogness = 0.5;
	const dark_color = "black";
	const fog_color = "black";
	let global_vision = [];
	
	// entities
	const entity_size = 20;
	let entities = [];
	const entity_color = "green";
	const entity_spacing = 100;
	const entity_vision_radius = 150;
	for	(let i = 0; i < width / entity_size + entity_spacing; i++) {
		for	(let j = 0; j < height / entity_size + entity_spacing; j++) {
			entities.push({
				x: i * (entity_size + entity_spacing),
				y: j * (entity_size + entity_spacing)
			});
		}
	}

	function draw(event) {
		let pos = { x: event.clientX, y: event.clientY };
		let x = pos.x;
		let y = pos.y;

		let default_gco = main.globalComponsiteOperation;
		main.clearRect(0, 0, width, height);
		fog.clearRect(0, 0, width, height);
		dark.clearRect(0, 0, width, height);
		main.drawImage(image, 0, 0, width, height);
		main.fillStyle = entity_color;
		for (let i = 0; i < entities.length; i++) {
			const entity = entities[i];
			main.fillRect(entity.x, entity.y, entity_size, entity_size);
		}
		fog.globalComponsiteOperation = dark.globalComponsiteOperation;
	}

	function getDistance(pos1, pos2) {
		const dx = pos1.x - pos2.x;
		const dy = pos1.y - pos2.y;
		return Math.sqrt(dx*dx+dy*dy);
	}
	

</script>

<main>
	<Canvas width={width} height={height} on:mousemove={draw}>
		<Mainayer />
	</Canvas>
</main>

<style>
	main {
		padding-top: 20px;
		width: 100%;
		display: flex;
		justify-content: center;
	}
</style>
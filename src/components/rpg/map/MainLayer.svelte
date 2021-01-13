<script>
	import { Layer } from "svelte-canvas";

	export let color = '#475F94';
	
	const image = new Image();
	image.src = "http://liquipedia.net/commons/images/d/d6/Steppes_of_War.jpg";

	$: render = ({ context, width, height }) => {
		context.fillStyle = color;
		context.fillRect(0, 0, width, height);
	};

</script>

<Layer {render} />
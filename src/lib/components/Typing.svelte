<script>
	// @ts-nocheck
	export let typing;

	const colours = {
		normal: '#A8A77A',
		fire: '#EE8130',
		water: '#6390F0',
		electric: '#F7D02C',
		grass: '#7AC74C',
		ice: '#96D9D6',
		fighting: '#C22E28',
		poison: '#A33EA1',
		ground: '#E2BF65',
		flying: '#A98FF3',
		psychic: '#F95587',
		bug: '#A6B91A',
		rock: '#B6A136',
		ghost: '#735797',
		dragon: '#6F35FC',
		dark: '#705746',
		steel: '#B7B7CE',
		fairy: '#D685AD'
	};

	const text_color = {
		normal: '#FFFFFF',
		fire: '#FFFFFF',
		water: '#FFFFFF',
		electric: '#333333',
		grass: '#FFFFFF',
		ice: '#333333',
		fighting: '#FFFFFF',
		poison: '#FFFFFF',
		ground: '#333333',
		flying: '#FFFFFF',
		psychic: '#FFFFFF',
		bug: '#FFFFFF',
		rock: '#FFFFFF',
		ghost: '#FFFFFF',
		dragon: '#FFFFFF',
		dark: '#FFFFFF',
		steel: '#FFFFFF',
		fairy: '#FFFFFF'
	};

	$: cssVarStyles = `color:${text_color[typing]} ;background-color:${colours[typing]}`;
</script>

<div class="py-1 font-normal rounded-lg w-24 text-center uppercase" style={cssVarStyles}>
	{typing}
</div>

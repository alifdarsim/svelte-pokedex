<script lang="ts">
	import { onMount } from 'svelte';
	import { getPokemonList, getPokemonByName } from '$lib/api/pokemon';

	let pokemonList: any[] = Array();

	import pokeball from '$lib/images/pokeball.svg';
	import DropDown from '$lib/components/DropDown.svelte';

	import Panel from '$lib/components/Panel.svelte';
	import PokemonPanel from '$lib/components/PokemonPanel.svelte';

	// Get the data from the api, after the page is mounted.
	onMount(async () => {
		const res = await getPokemonList();
		pokemonList = res;
	});

	let generation = [
		'All Gen',
		'Gen 1',
		'Gen 2',
		'Gen 3',
		'Gen 4',
		'Gen 5',
		'Gen 6',
		'Gen 7',
		'Gen 8',
		'Gen 9'
	];

	let type = [
		'All Type',
		'normal',
		'fire',
		'water',
		'electric',
		'grass',
		'ice',
		'fighting',
		'poison',
		'ground',
		'flying',
		'psychic',
		'bug',
		'rock',
		'ghost',
		'dragon',
		'dark',
		'steel'
	];

	$: pokemonInfo = {
		name: 'pikachu',
		num: 25,
		type: ['electric'],
		ability: [],
		ability_hide: [],
		height: 0,
		weight: 0,
		base_experience: 0,
		base_stats: [],
	};

	function handleMessage(event: any) {
		let data = event.detail.data;

		let name = data.name;
		let num = data.id;
		let typing = data.types.map((e: any) => e.type.name);
		let abilities = data.abilities.flatMap((e: any) => e.is_hidden ? [] : e.ability.name);
		let abilities_hidden = data.abilities.flatMap((e: any) => !e.is_hidden ? [] : e.ability.name);
		let base_stats = data.stats.flatMap((e: any) => e.base_stat);
		pokemonInfo = {
			name: name,
			num: num,
			type: typing,
			ability: abilities,
			ability_hide: abilities_hidden,
			height: data.height,
			weight: data.weight,
			base_experience: data.base_experience,
			base_stats: base_stats,
		};
		console.log(pokemonInfo)
	}
</script>

<svelte:head>
	<title>Svelte Pokedex</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<div class="flex flex-row gap-10">
		<div class="basis-3/5">
			<div class="flex flex-row min-h-16 bg-base-100 rounded-2xl shadow-lg">
				<img src={pokeball} width="32" alt="search_btn" class="ml-6" />

				<input
					type="text"
					placeholder="Search Pokemon name or Pokemon number #"
					class="input w-full h-9 m-auto focus:outline-0"
				/>
			</div>
			<div class="flex flex-row gap-3 min-h-6 mt-3">
				<DropDown icon={pokeball} contents={generation} />
				<DropDown icon={pokeball} contents={type} />
			</div>

			<div class="grid grid-cols-3 mt-2 gap-2">
				{#each pokemonList as pokemon}
					<Panel name={pokemon.name} on:message={handleMessage} />
				{/each}
			</div>
		</div>

		<div class="basis-2/5 relative">
			<PokemonPanel pokemondata={pokemonInfo} />
		</div>
	</div>
</section>

<style>
</style>

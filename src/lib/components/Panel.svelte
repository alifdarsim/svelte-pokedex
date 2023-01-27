<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
	import { getPokemonByName } from '$lib/api/pokemon';

	const dispatch = createEventDispatcher();

	import Typing from '$lib/components/Typing.svelte';

	export let name: String = '';
	export let number: Number = 0;
	export let typing: String[] = Array();
	
	let pokemonInfo = {}; 
	// Get the data from the api, after the page is mounted.
	onMount(async () => {
		getPokemonByName(name).then((res) => {
			pokemonInfo = res;
			number = res.id;
			typing = res.types.map((e: any) => e.type.name);
		});
	});

	// method to handle the event to get the detail of the pokemon.
	const handleOnClick = (name: any) => {
		dispatch('message', {
			data: pokemonInfo
		});
	};

	const toNumberString = (num: Number) => {
		let number = num.toString();
		if (number.length == 1) number = '00' + num;
		else if (number.length == 2) number = '0' + num;
		return number;
	};

	const renamePokemon = (name: String) =>{
		if (name == "nidoran-m") return "nidoran";
		else if (name == "mr-mime") return "mrmime";
		else if (name == "deoxys-normal") return "deoxys";
		else if (name == "shaymin-land") return "shaymin";
		else if (name == "ho-oh") return "hooh";
		else if (name == "mime-jr") return "mimejr";
		else if (name == "giratina-altered") return "giratina";
		else if (name == "wormadam-plant") return "wormadam";
		return name;
	}
</script>

<button class="btn  relative mb-16 mt-14 cursor-pointer" on:click={() => handleOnClick(name)}>
	<div class="card w-full pb-3 bg-base-100 shadow-xl mt-14 pt-16 absolute">
		<div class="absolute pr-4 text-sm text-gray-800 -mt-14 right-0">#{toNumberString(number)}</div>
		<div class="flex flex-row justify-center text-lg font-bold capitalize mt-3 mb-1 text-gray-700">
			{name}
		</div>
		<div class="flex flex-row justify-center gap-3">
			{#each typing as type}
				<Typing typing={type} />
			{/each}
		</div>
	</div>
	<div class="w-full h-28 flex justify-center">
		<img
			class="bottom-0 absolute"
			src="https://play.pokemonshowdown.com/sprites/ani/{renamePokemon(name)}.gif"
			alt="pokemon-img"
		/>
	</div>
</button>

<style>
	button:hover {
		background-color: white;
		border-color: white;
	}
	button {
		background-color: white;
		border-color: white;
	}
</style>

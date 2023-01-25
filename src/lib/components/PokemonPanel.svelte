<script lang="ts">
	import Fa from 'svelte-fa/src/fa.svelte';
	import { faAngleLeft, faAngleRight, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
	import Typing from '$lib/components/Typing.svelte';
	import { onMount } from 'svelte';
	import { getEvolution, getPokemonSpecies } from '$lib/api/pokemon';
	import { claim_svg_element } from 'svelte/internal';

	export let pokemondata: any;

	const toNumberString = (num: Number) => {
		let number = num.toString();
		if (number.length == 1) number = '00' + num;
		else if (number.length == 2) number = '0' + num;
		return number;
	};

	$: pokemonSpecies = {
		genera: ''
	};

	let pokemonEvolution: any;
	$: pokemonEvolution = [];

	const species = (name: string) => {
		getPokemonSpecies(name).then((res) => {
			let _genera = res.genera[7].genus;
			pokemonSpecies.genera = _genera;

			let evo_url = res.evolution_chain.url;
			let evo_id = evo_url.split('/')[6];
			getEvolution(evo_id).then((res) => {
				pokemonEvolution = res;
				console.log(res);
			});
		});
	};

	function sumArray(base_stats: any) {
		return base_stats.reduce((partialSum: any, a: any) => partialSum + a, 0);
	}
</script>

<div class="hidden">{species(pokemondata.name)}</div>
<div class="card w-full bg-base-100 shadow-xl mt-28 pt-28 absolute">
	<div class="px-4 pb-4">
		<div class="card-title flex justify-center text-gray-800 text-2xl capitalize">
			{pokemondata.name}
		</div>
		<div class="flex justify-center text-gray-600 text-base capitalize">
			#{toNumberString(pokemondata.num)} | {pokemonSpecies.genera}
		</div>
		<div class="flex flex-row justify-center gap-3 mt-1">
			{#each pokemondata.type as type}
				<Typing typing={type} />
			{/each}
		</div>
		<div class="flex justify-center text-gray-600 mt-2 font-bold">Ability</div>
		<div class="flex flex-row justify-center w-full gap-3 px-5">
			{#each pokemondata.ability as ability}
				<div
					class="bg-secondary text-gray-600 w-full font-semibold py-2 rounded-full text-center capitalize outline outline-1 outline-blue-700"
				>
					{ability}
				</div>
			{/each}
			{#each pokemondata.ability_hide as ability}
				<div
					class="bg-secondary flex flex-row text-gray-600 w-full font-semibold py-2 rounded-full justify-center capitalize outline outline-1 outline-blue-700"
				>
					{ability}
					<Fa icon={faEyeSlash} class="mt-1 ml-2 text-sm" />
				</div>
			{/each}
		</div>

		<div class="grid grid-cols-3 w-full gap-3 px-5 mt-4">
			<div>
				<h2 class="text-gray-600 font-semibold text-center">Height</h2>
				<div
					class="bg-secondary text-gray-500 w-full font-semibold py-2 px-5 rounded-full text-center outline-1"
				>
					{(pokemondata.height * 0.1).toFixed(1)} m
				</div>
			</div>
			<div>
				<h2 class="text-gray-600 font-semibold text-center">Weigth</h2>
				<div
					class="bg-secondary text-gray-500 w-full font-semibold py-2 px-5 rounded-full text-center outline-1"
				>
					{(pokemondata.weight * 0.1).toFixed(1)} kg
				</div>
			</div>
			<div>
				<h2 class="text-gray-600 font-semibold text-center">Base Exp</h2>
				<div
					class="bg-secondary text-gray-500 w-full font-semibold py-2 px-5 rounded-full text-center outline-1"
				>
					{pokemondata.base_experience}
				</div>
			</div>
		</div>

		<div class="flex justify-center text-gray-600 font-bold mt-3">Stats</div>
		<div class="grid grid-cols-7 px-5">
			<div class="grid grid-rows-2 grid-flow-col w-14 bg-secondary rounded-2xl mx-auto">
				<div class="bg-red-400 pt-1 text-center text-white my-auto rounded-t-2xl">HP</div>
				<div class=" text-gray-600 text-center font-normal pt-0.5">
					{pokemondata.base_stats[0]}
				</div>
			</div>
			<div class="grid grid-rows-2 grid-flow-col w-14 bg-secondary rounded-2xl mx-auto">
				<div class="bg-orange-400 rounded-t-2xl text-center text-white pt-2 pb-1 text-sm">ATK</div>
				<div class="text-gray-600 rounded-b-2xl text-center font-normal pt-0.5">
					{pokemondata.base_stats[1]}
				</div>
			</div>
			<div class="grid grid-rows-2 grid-flow-col w-14 bg-secondary rounded-2xl mx-auto">
				<div class="bg-yellow-400 rounded-t-2xl text-center text-white pt-2 pb-1 text-sm">DEF</div>
				<div class="text-gray-600 rounded-b-2xl text-center font-normal pt-0.5">
					{pokemondata.base_stats[2]}
				</div>
			</div>
			<div class="grid grid-rows-2 grid-flow-col w-14 bg-secondary rounded-2xl mx-auto">
				<div class="bg-blue-400 rounded-t-2xl text-center text-white pt-2 pb-1 text-sm">SpA</div>
				<div class="text-gray-600 rounded-b-2xl text-center font-normal pt-0.5">
					{pokemondata.base_stats[3]}
				</div>
			</div>
			<div class="grid grid-rows-2 grid-flow-col w-14 bg-secondary rounded-2xl mx-auto">
				<div class="bg-green-400 rounded-t-2xl text-center text-white pt-2 pb-1 text-sm">SpD</div>
				<div class="text-gray-600 rounded-b-2xl text-center font-normal pt-0.5">
					{pokemondata.base_stats[4]}
				</div>
			</div>
			<div class="grid grid-rows-2 grid-flow-col w-14 bg-secondary rounded-2xl mx-auto">
				<div class="bg-pink-400  rounded-t-2xl text-center text-white pt-2 pb-1 text-sm">SPD</div>
				<div class="text-gray-600 rounded-b-2xl text-center font-normal pt-0.5">
					{pokemondata.base_stats[5]}
				</div>
			</div>
			<div class="grid grid-rows-2 grid-flow-col w-14 bg-secondary rounded-2xl mx-auto">
				<div class="bg-purple-400 rounded-t-2xl text-center text-white pt-2 pb-1 text-sm">TOT</div>
				<div class="text-gray-600 rounded-b-2xl text-center font-normal pt-0.5">
					{sumArray(pokemondata.base_stats)}
				</div>
			</div>
		</div>

		<div class="flex justify-center text-gray-600 mt-3 font-bold">Evolution</div>
		{#if pokemonEvolution.length == 2}
			<div class="flex flex-row justify-center ">
				{#each pokemonEvolution[0] as pokemon}
					<div class="mt-auto">
						<img src="https://play.pokemonshowdown.com/sprites/ani/{pokemon}.gif" alt="" />
					</div>
				{/each}
				<div class="my-auto mx-3">
					<kbd class="kbd">-></kbd>
				</div>
				<div class="flex flex-row">
					{#each pokemonEvolution[1] as pokemon}
						<div class=" mt-auto">
							<img src="https://play.pokemonshowdown.com/sprites/ani/{pokemon}.gif" alt="" />
						</div>
					{/each}
				</div>
			</div>
		{:else if pokemonEvolution.length == 3}
			<div class="flex flex-row justify-center ">
				{#each pokemonEvolution[0] as pokemon}
					<div class="mt-auto">
						<img src="https://play.pokemonshowdown.com/sprites/ani/{pokemon}.gif" alt="" />
					</div>
				{/each}
				<div class="my-auto mx-3">
					<kbd class="kbd">-></kbd>
				</div>
				<div class="flex flex-row">
					{#each pokemonEvolution[1] as pokemon}
						<div class=" mt-auto">
							<img src="https://play.pokemonshowdown.com/sprites/ani/{pokemon}.gif" alt="" />
						</div>
					{/each}
				</div>
                <div class="my-auto mx-3">
					<kbd class="kbd">-></kbd>
				</div>
                <div class="flex flex-row">
					{#each pokemonEvolution[2] as pokemon}
						<div class=" mt-auto">
							<img src="https://play.pokemonshowdown.com/sprites/ani/{pokemon}.gif" alt="" />
						</div>
					{/each}
				</div>
			</div>
		{/if}

		<div class="btn-group mt-10 grid grid-cols-2">
			<button class="btn btn-secondary btn-lg gap-1 pl-1 pr-1">
				<Fa icon={faAngleLeft} class="" />
				<img
					src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"
					width="60"
					alt=""
				/>
				<div class="font-normal capitalize">Venasaur</div>
				<div class="font-bold">#009</div>
			</button>
			<button class="btn btn-secondary btn-lg gap-1 pl-1 pr-1">
				<div class="font-bold">#010</div>
				<div class="font-normal capitalize">Venasaur</div>
				<img
					src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png"
					width="60"
					alt=""
				/>
				<Fa icon={faAngleRight} class="" />
			</button>
		</div>
	</div>
</div>
<div class="w-full h-1 flex justify-center">
	<img
		class="absolute mx-auto"
		src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/{pokemondata.num}.png"
		width="240"
		alt="pokemon-img"
	/>
</div>

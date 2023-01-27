<script lang="ts">
	import Fa from 'svelte-fa/src/fa.svelte';
	import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
	import type_ground from '$lib/images/type_ground.svg';
	import type_normal from '$lib/images/type_normal.svg';

	export let contents: string;

	let listing: any;
	if (contents == 'generation') {
		listing = [
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
	} else {
		listing = [
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
	}

	let currentSelect = listing[0];

	const onClicked = (data: any) => {
		currentSelect = data;
		if (document.activeElement instanceof HTMLElement) {
			document.activeElement.blur();
		}
	};
</script>

<div class="basis-3/12 dropdown">
	<div
		tabindex="-1"
		class="flex justify-between btn bg-white m-1 w-full hover:bg-white 
        text-gray-500 rounded-full shadow-lg border-white hover:border-white"
	>
		<img src={type_normal} alt="type" width="24" class="ml-1 mr-2" />
		<div class="capitalize">{currentSelect}</div>
		<Fa icon={faAngleDown} class="ml-3" />
	</div>
	<ul
		tabindex="-1"
		class="dropdown-content menu shadow menu-compact bg-base-100 rounded-box w-52 capitalize"
	>
		{#each listing as list}
			<li>
				<button class:active={list === currentSelect} on:click={() => onClicked(list)}>
					{list}
				</button>
			</li>
		{/each}
	</ul>
</div>

<style>
	.menu {
		max-height: 400px;
	}
	.active{
		background-color: rgb(126 34 206 / var(--tw-bg-opacity));
	}
</style>

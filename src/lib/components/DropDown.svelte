<script>
	// @ts-nocheck

	import Fa from 'svelte-fa/src/fa.svelte';
	import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
	import type_ground from '$lib/images/type_ground.svg';
	import type_normal from '$lib/images/type_normal.svg';

	
	export let icon;
	export let contents;

	let currentSelect = contents[0];

	if (icon == 'ground') icon = type_ground;
	else icon = type_normal;

	const onClicked = (data) => {
		currentSelect = data;
		const elem = document.activeElement;
		if (elem) {
			elem?.blur();
		}
		
	};

	const capitalizeFirst = (str) => {
		return str.charAt(0).toUpperCase() + str.slice(1);
	};

</script>

<div class="basis-3/12 dropdown">
	<div
		tabindex="-1"
		class="flex justify-between btn bg-white m-1 w-full hover:bg-white text-base normal-case 
        text-gray-500 rounded-full shadow-xl border-white hover:border-white"
	>
		<img src={icon} alt="type" width="24" class="ml-1 mr-2" />
		<div>{capitalizeFirst(currentSelect)}</div>
		<Fa icon={faAngleDown} class="ml-3" />
	</div>
	<ul tabindex="-1" class="dropdown-content menu shadow menu-compact bg-base-100 rounded-box w-52">
		{#each contents as content}
			<li><button class:active="{content === currentSelect}" on:click={() => onClicked(content)}>{capitalizeFirst(content)}</button></li>
		{/each}
	</ul>
</div>

<style>
	.menu {
		max-height: 400px;
	}
</style>

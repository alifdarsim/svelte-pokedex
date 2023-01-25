<script lang="ts">
	// import { QueryClient, QueryClientProvider } from '@sveltestack/svelte-query';
	import './styles.css';
	import '../app.css';

	// Create a client
	// const queryClient = new QueryClient();
</script>

<!-- <QueryClientProvider client={queryClient}>

</QueryClientProvider> -->

<div class="app">
	<div class="w-screen pt-4 pr-16 pl-16">
		<div class="navbar bg-base-100 rounded-2xl shadow-lg">
			<div class="navbar-start">
				<button class="dropdown">
					<div class="btn btn-ghost btn-circle">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							><path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h16M4 18h7"
							/></svg
						>
					</div>
					<ul
						class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
					>
						<li><a href="./">Homepage</a></li>
						<li><a href="./">Portfolio</a></li>
						<li><a href="./">About</a></li>
					</ul>
				</button>
			</div>
			<div class="navbar-center">
				<a href="./" class="btn btn-ghost normal-case text-2xl hover:no-underline text-[#767c7f]"
					>Pokedex</a
				>
			</div>
			<div class="navbar-end">
				<button class="btn btn-ghost btn-circle">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
						/></svg
					>
				</button>
				<button class="btn btn-ghost btn-circle">
					<div class="indicator">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							><path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
							/></svg
						>
						<span class="badge badge-xs badge-primary indicator-item" />
					</div>
				</button>
			</div>
		</div>
	</div>

	<main class="pl-20 pr-20 mt-5">
		<slot />
	</main>
</div>

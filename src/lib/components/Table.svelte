<script lang="ts">
	import { Node } from '@accuser/svelte-unist';
	import type { Table } from 'mdast';

	let { align, children }: Table = $props();

	let [head, ...rows] = $derived.by(() =>
		children.map((child) => ({
			...child,
			data: { ...child.data, align }
		}))
	);
</script>

<table>
	{#if head}
		<thead>
			<Node {...head} />
		</thead>
	{/if}
	{#if rows.length}
		<tbody>
			{#each rows as node}<Node {...node} />{/each}
		</tbody>
	{/if}
</table>

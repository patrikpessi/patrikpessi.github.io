<script lang="ts">
    import Piece from "$lib/components/Piece.svelte";
    import { getBlock } from "$lib/data.svelte.js";
    import { fade } from "svelte/transition";

    let { data } = $props();
</script>

<section class="flex max-w-full flex-auto flex-col items-center gap-4 md:gap-8" in:fade>
    <h1 class="text-3xl font-bold">My work</h1>
    <div class="grid w-full grid-cols-1 gap-4 p-4 md:grid-cols-2 md:gap-8 md:p-8">
        {#each data.fields.references.map(getBlock) as piece}
            <Piece {piece} />
        {/each}
    </div>
</section>

<script lang="ts">
    import Icon from "$lib/components/Icon.svelte";
    import Piece from "$lib/components/Piece.svelte";
    import { getBlock } from "$lib/data.svelte.js";
    import { fade } from "svelte/transition";

    let { data } = $props();
</script>

<section class="flex max-w-full flex-auto flex-col" in:fade>
    <div class="flex max-w-full flex-col gap-4 p-4 md:gap-8 md:p-8">
        <h1 class="text-3xl font-bold">My work</h1>
        <div class="grid w-full grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
            {#each data.fields.references.map(getBlock) as piece}
                <Piece {piece} />
            {/each}
        </div>
    </div>
    <a
        href="/contact"
        class="group relative flex items-center justify-center overflow-hidden bg-sky-400 px-12 py-6 text-xl font-semibold text-black transition md:px-20 md:py-10 md:text-3xl"
    >
        <span>Contact me</span>
        <span
            class="absolute inset-0 flex translate-y-full items-center justify-between gap-3 bg-white p-6 text-black backdrop-blur-md transition delay-100 duration-200 ease-out group-hover:translate-y-0"
        >
            <span>Let's talk!</span>
            <Icon name="arrow_up_right_stroke" class="text-4xl! md:text-8xl!" />
        </span>
    </a>
</section>

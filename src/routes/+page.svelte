<script lang="ts">
    import Icon from "$lib/components/Icon.svelte";
    import { fade } from "svelte/transition";

    let { data } = $props();
</script>

<section class="flex flex-auto flex-col" in:fade>
    <div class="relative flex flex-auto flex-col justify-center gap-4 p-4 md:gap-8 md:p-8">
        <h2 class="max-w-[25ch] text-3xl leading-tight font-semibold text-balance md:text-5xl lg:text-7xl">
            {#each data.fields.header as char, index}
                <span
                    class="opacity-100 transition-opacity starting:opacity-0"
                    style={`transition-delay: ${35 * index}ms;`}>{char}</span
                >
            {/each}
        </h2>
    </div>
    <div class="flex w-full flex-col">
        <a
            href="/about"
            class="group relative flex items-center justify-center overflow-hidden bg-sky-400 px-12 py-6 text-xl font-semibold text-black transition md:px-20 md:py-10 md:text-3xl"
        >
            <span>About me</span>
            <span
                class="absolute inset-0 flex translate-y-full items-center justify-between gap-3 bg-white p-6 text-black backdrop-blur-md transition delay-100 duration-200 ease-out group-hover:translate-y-0"
            >
                <span>Get to know me</span>
                <Icon name="arrow_up_right_stroke" class="text-4xl! md:text-8xl!" />
            </span>
        </a>
    </div>
</section>

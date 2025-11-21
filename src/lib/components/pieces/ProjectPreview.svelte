<script lang="ts">
    import { getBlock } from "$lib/data.svelte";
    import Icon from "../Icon.svelte";

    let { title, shortDescription, coverImage, sys, class: _class } = $props();

    const asset = getBlock(coverImage);
</script>

<a href={`/work/${sys.id}`} class="group relative w-full overflow-hidden">
    <img class="w-full" src={asset.fields.file.url} />
    <div
        class="absolute inset-0 flex -translate-y-full flex-col gap-3 bg-white p-6 backdrop-blur-md transition duration-200 ease-out group-hover:translate-y-0"
    ></div>
    <div
        class="absolute inset-0 flex -translate-y-full flex-col gap-3 bg-sky-400 p-6 backdrop-blur-md transition delay-100 duration-200 ease-out group-hover:translate-y-0"
    ></div>
    <div
        class="absolute inset-0 flex -translate-y-full flex-col gap-3 bg-zinc-950 p-6 backdrop-blur-md transition delay-100 duration-300 group-hover:translate-y-0"
    >
        <h2 class="text-4xl font-bold">{title}</h2>
        <p>{shortDescription}</p>
        <div class="mt-auto flex w-full items-center justify-between border border-zinc-700">
            <span class="ms-6 text-2xl">Open</span>
            <Icon name="arrow_up_right_stroke" class="text-4xl! md:text-8xl!" />
        </div>
    </div>
</a>

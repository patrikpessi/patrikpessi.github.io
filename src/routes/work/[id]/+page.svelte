<script lang="ts">
    import { getBlock } from "$lib/data.svelte.js";

    let { data } = $props();

    const coverImage = getBlock(data.fields.coverImage);

    const images = data.fields?.images?.map(getBlock);
</script>

<section class="flex max-w-full flex-auto flex-col items-center">
    <div class="prose max-w-prose gap-4 p-4 prose-color md:gap-8 md:p-8">
        <h2 class="text-4xl font-bold">{data.fields.title}</h2>
        <p>{data.fields.shortDescription}</p>
        <div class="not-prose flex flex-col">
            <img class="w-full" src={coverImage.fields.file.url} />
            {#each images as image}
                <img class="w-full" src={image.fields.file.url} />
            {/each}
        </div>
    </div>
</section>

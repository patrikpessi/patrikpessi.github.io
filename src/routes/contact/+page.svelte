<script lang="ts">
    import Icon from "$lib/components/Icon.svelte";
    import { fade } from "svelte/transition";
</script>

<section class="flex max-w-full flex-auto flex-col gap-4 p-4 md:gap-8 md:p-8" in:fade>
    <h1 class="text-3xl font-bold">Contact</h1>
    <div class="grid flex-auto grid-cols-1 text-lg md:grid-cols-2 md:text-2xl">
        <a
            href="mailto:patrik.pessi@gmail.com"
            class="flex w-full items-center justify-center gap-3 p-10 md:p-20"
            style="background-color: rgb(23, 23, 23);"
            target="_blank"
            rel="noreferrer"
        >
            <Icon name="envelope" />
            <span>patrik.pessi@gmail.com</span>
        </a>
        <div
            class="flex w-full items-center justify-center gap-3 p-10 md:p-20"
            style="background-color: rgb(114, 137, 218);"
        >
            <Icon name="discord" brand={true} />
            <span>@batti</span>
        </div>
        <a
            href="https://dribbble.com/Batti"
            class="flex w-full items-center justify-center gap-3 p-10 md:p-20"
            style="background-color: rgb(234, 76, 137);"
            target="_blank"
            rel="noreferrer"
        >
            <Icon name="dribbble" brand={true} />
            <span>Batti</span>
        </a>
        <a
            href="https://x.com/BPatti12"
            class="flex w-full items-center justify-center gap-3 p-10 md:p-20"
            style="background-color: rgb(0, 172, 238);"
            target="_blank"
            rel="noreferrer"
        >
            <Icon name="twitter" brand={true} />
            <span>BPatti12</span>
        </a>
    </div>
</section>

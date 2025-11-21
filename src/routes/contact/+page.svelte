<script lang="ts">
    import Icon from "$lib/components/Icon.svelte";
    import { fade } from "svelte/transition";
</script>

<section class="flex max-w-full flex-auto flex-col items-center" in:fade>
    <h1 class="text-3xl font-bold">Contact</h1>
    <div class="grid w-full max-w-prose grid-cols-1 gap-4 p-4 text-2xl md:grid-cols-2 md:gap-8 md:p-8">
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
            <span>Batti#8275</span>
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
            href="https://twitter.com/BPatti12"
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

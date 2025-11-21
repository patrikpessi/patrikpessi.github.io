<script lang="ts">
    import type { IconName } from "$lib/icons";
    import { twMerge } from "tailwind-merge";

    const {
        name,
        class: _class = "",
        brand = false,
    }: { name: IconName | string; class?: string; brand?: boolean } = $props();
</script>

<span class={twMerge(brand ? "brand-icon" : "icon", _class)}>{name}</span>

<style>
    .icon {
        user-select: none;
        font-family: "icons";
        font-size: 1em;
        line-height: 1em;
        display: grid;
        place-content: center;
        min-width: 1em;
        min-height: 1em;
        transform: scale(1.15);
    }

    .brand-icon {
        user-select: none;
        font-family: "brands";
        font-size: 1em;
        line-height: 1em;
        display: grid;
        place-content: center;
        min-width: 1em;
        min-height: 1em;
        transform: scale(1.15);
    }
</style>

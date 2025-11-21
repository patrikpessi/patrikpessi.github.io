<script lang="ts">
    import { twMerge } from "tailwind-merge";

    let { company, place, role, start, end, class: _class } = $props();

    function timeToDisplayFormat(date: string | undefined) {
        if (!date) return "Today";
        const temp = new Date(date);
        return `${temp.getMonth() + 1}/${temp.getFullYear()}`;
    }
</script>

<div class={twMerge("flex flex-col gap-1 border border-zinc-700 px-5 py-3 transition hover:scale-103", _class)}>
    <p class="text-zinc-400">{place}</p>
    <h3 class="text-xl font-bold">{company}</h3>
    <h4 class="text-sky-400">{role}</h4>
    <p>
        <span>{timeToDisplayFormat(start)} - {timeToDisplayFormat(end)}</span>
        {#if !end}
            <span class="rounded-full bg-zinc-800 px-1.5 py-0.5 text-sm">Current</span>
        {/if}
    </p>
</div>

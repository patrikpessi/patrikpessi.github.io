<script lang="ts">
    import "./layout.css";
    import favicon from "$lib/assets/favicon.svg";
    import Icon from "$lib/components/Icon.svelte";
    import { page } from "$app/state";

    let { children } = $props();

    const links = [
        {
            href: "/",
            text: "Home",
        },
        {
            href: "/about",
            text: "About",
        },
        {
            href: "/work",
            text: "Work",
        },
        {
            href: "/contact",
            text: "Contact",
        },
    ];

    let navigationDialog: HTMLDialogElement;
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
</svelte:head>

<header class="sticky top-0 z-50 flex w-full flex-nowrap items-center justify-between bg-zinc-950 p-4 md:p-8">
    <div>
        <a href="/">
            <span class="text-3xl font-bold whitespace-nowrap text-sky-400">Patrik Pessi</span>
        </a>
    </div>
    <div>
        <button
            class="flex flex-nowrap items-center gap-2 text-2xl"
            onclick={() => {
                if (navigationDialog.hasAttribute("open")) navigationDialog.close();
                else navigationDialog.showModal();
            }}
        >
            <span class="hidden md:block">Menu</span>
            <Icon name="menu" />
        </button>
        <dialog
            bind:this={navigationDialog}
            closedby="any"
            class="fixed top-0 left-0 m-0 flex h-full max-h-full w-full max-w-full flex-col bg-zinc-950 transition duration-300 not-open:-translate-y-full open:translate-y-0"
        >
            <div class="flex items-center justify-between p-4 md:p-8">
                <h2 class="text-3xl">Navigation</h2>
                <button
                    class="flex flex-nowrap items-center gap-2 text-2xl"
                    onclick={() => {
                        navigationDialog.close();
                    }}
                >
                    <span class="hidden md:block">Close</span>
                    <Icon name="x" />
                </button>
            </div>
            <nav class="mt-auto flex w-full flex-col">
                {#each links as link}
                    <a
                        href={link.href}
                        onclick={() => {
                            navigationDialog.close();
                        }}
                        class="group relative flex h-full flex-nowrap gap-8 overflow-clip border-t border-zinc-700 px-1 text-[20vmin] leading-none"
                    >
                        <div class="flex flex-row">
                            <span>
                                {link.text}
                            </span>
                            {#if page.url.pathname === link.href}
                                <Icon name="arrow_left_stroke" class="leading-none text-zinc-700" />
                            {/if}
                        </div>
                        <div
                            class="absolute inset-0 flex origin-top-left translate-y-full rotate-90 flex-row items-center justify-between bg-sky-400 px-1 text-black transition duration-300 group-hover:translate-y-0 group-hover:rotate-0"
                        >
                            <span>
                                {link.text}
                            </span>
                            <Icon name="arrow_up_right_stroke" />
                        </div>
                    </a>
                {/each}
            </nav>
        </dialog>
    </div>
</header>
<main class="flex flex-auto flex-col">
    {@render children()}
</main>

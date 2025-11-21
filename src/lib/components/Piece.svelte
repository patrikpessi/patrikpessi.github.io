<script lang="ts">
    import Experience from "./pieces/Experience.svelte";
    import Post from "./pieces/Post.svelte";
    import ProjectPreview from "./pieces/ProjectPreview.svelte";

    let { piece } = $props();

    const type = piece?.sys?.contentType?.sys?.id;

    console.log(type, piece);
</script>

{#if type === "post"}
    <Post {...piece.fields} sys={piece.sys} class={piece.class} />
{:else if type === "workExperience"}
    <Experience {...piece.fields} sys={piece.sys} class={piece.class} />
{:else if type === "oldPortfolioProjectShowcase"}
    <ProjectPreview {...piece.fields} sys={piece.sys} class={piece.class} />
{/if}

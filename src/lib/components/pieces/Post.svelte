<script lang="ts">
    import { getEntryById } from "$lib/data.svelte";
    import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
    import { BLOCKS } from "@contentful/rich-text-types";
    import { mount } from "svelte";
    import Piece from "../Piece.svelte";

    let { content, title, class: _class } = $props();

    function renderEmbededEntry(node) {
        const entryId = node.data.target.sys.id;
        const target = document.createElement("div");
        target.classList.add("not-prose", "mb-4");
        const entry = getEntryById(entryId);
        mount(Piece, {
            target,
            props: { piece: entry },
        });
        return target.outerHTML;
    }

    const options = {
        renderNode: {
            [BLOCKS.EMBEDDED_ENTRY]: (node) => renderEmbededEntry(node),
        },
    };
</script>

{#if content}
    <div class="prose max-w-prose prose-color">
        {@html documentToHtmlString(content, options)}
    </div>
{/if}

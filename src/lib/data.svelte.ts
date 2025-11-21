import { get, writable, type Writable } from "svelte/store";

export let data: Writable<any> = writable(null);

export function getBlock(block: any) {
    const blockType = block.sys.type;
    if (blockType !== "Link") return null;
    const linkType = block.sys.linkType;
    if (linkType === "Entry") return getEntryById(block.sys.id);
    if (linkType === "Asset") return getAssetById(block.sys.id);
}

export function getEntryById(id: string) {
    return get(data).items.find((entry: any) => entry.sys.id === id);
}

export function getAssetById(id: string) {
    return get(data).includes.Asset.find((asset: any) => asset.sys.id === id);
}

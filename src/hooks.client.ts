import { data } from "$lib/data.svelte";

export async function init() {
    const response = await fetch(new URL("/entries", API_URL));
    const json = await response.json();
    console.log(json);
    data.set(json);
}

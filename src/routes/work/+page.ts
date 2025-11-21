import type { PageLoad } from "./$types";
import { data } from "$lib/data.svelte";
import { get } from "svelte/store";

export const load: PageLoad = async ({ route }) => {
    return get(data).items.find((item) => item.fields.path === route.id);
};

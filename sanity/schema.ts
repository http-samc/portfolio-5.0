import { type SchemaTypeDefinition } from "sanity";

import category, { Category } from "./schemas/category";
import post, { Post } from "./schemas/post";
import location, { Location } from "./schemas/location";
import audio, { Audio } from "./schemas/audio";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, category, location, audio],
};

export type { Post, Category, Location, Audio };

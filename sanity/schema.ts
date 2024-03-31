import { type SchemaTypeDefinition } from 'sanity'

import category, {Category} from './schemas/category'
import post, { Post } from './schemas/post'
import location, { Location } from './schemas/location'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, category, location],
}

export type { Post, Category, Location };
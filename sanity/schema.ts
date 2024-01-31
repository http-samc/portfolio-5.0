import { type SchemaTypeDefinition } from 'sanity'

import category, {Category} from './schemas/category'
import post, {Post} from './schemas/post'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, category],
}

export type { Post, Category };
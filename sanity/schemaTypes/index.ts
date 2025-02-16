import { type SchemaTypeDefinition } from 'sanity'
import { product } from './product'
import { Category } from './category'
import { Order } from './order'
import { User } from './user'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,Category,Order,User],
}

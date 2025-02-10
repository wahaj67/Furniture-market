import { createClient } from '@sanity/client'
import { datasetss, projectIds, tokenss } from '../env'



export const client = createClient({
  projectId:projectIds,
  dataset:datasetss,
  apiVersion:'2025-01-19',
  useCdn: false, 
  token: tokenss
})

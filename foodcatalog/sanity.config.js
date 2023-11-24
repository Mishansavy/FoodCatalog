import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
// import {schemaTypes} from './schemas'
import schemas from './schemas'
export default defineConfig({
  name: 'default',
  title: 'backend-food-catalog',

  projectId: 'craua8br',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    name: 'default',
    types: schemas.types,
  },
})

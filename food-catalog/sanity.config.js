import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
// import {schemaTypes} from './schemas'
import schemas from './schemas'

const config = defineConfig({
  name: 'default',
  title: 'food-catalog',

  projectId: '2kdh2oos',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    name: 'default',
    types: schemas.types,
  },
})
export default config

import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'vegood',

  projectId: 'kp687fgq',
  dataset: 'posts',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})

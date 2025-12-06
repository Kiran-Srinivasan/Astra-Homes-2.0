import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'constructionProject',
  title: 'Construction Project',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'phase', title: 'Phase', type: 'string' }),
    defineField({ name: 'completion', title: 'Completion %', type: 'number' }),
    defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
  ],
});

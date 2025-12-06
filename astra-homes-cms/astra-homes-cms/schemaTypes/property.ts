import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'property',
  title: 'Property',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
    }),
    defineField({ name: 'location', title: 'Location', type: 'string' }),
    defineField({ name: 'price', title: 'Price', type: 'string' }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: ['Ready to Move', 'Under Construction'],
      },
    }),
    defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
  ],
});

import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'interiorProject',
  title: 'Interior Project',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'category', title: 'Category', type: 'string' }),
    defineField({
      name: 'images',
      title: 'Gallery',
      type: 'array',
      of: [{ type: 'image' }],
    }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
  ],
});

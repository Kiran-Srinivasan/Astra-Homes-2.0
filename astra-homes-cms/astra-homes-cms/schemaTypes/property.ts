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

    defineField({
      name: 'type',
      title: 'Property Type',
      type: 'string',
      options: {
        list: ['Villa', 'Apartment', 'Plot', 'Commercial'],
      },
    }),

    defineField({
      name: 'image',
      title: 'Main Image',
      type: 'image',
      options: { hotspot: true },
    }),

    defineField({
      name: 'gallery',
      title: 'Gallery Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),

    defineField({
      name: 'area',
      title: 'Built-up Area (Sqft)',
      type: 'string',
    }),

    defineField({
      name: 'amenities',
      title: 'Amenities',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
});

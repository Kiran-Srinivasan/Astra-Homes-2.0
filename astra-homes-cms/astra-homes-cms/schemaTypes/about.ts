import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'about',
  title: 'About Astra Homes',
  type: 'document',
  fields: [
    // HERO
    defineField({ name: 'heroTitle', title: 'Hero Title', type: 'string' }),
    defineField({ name: 'heroSubtitle', title: 'Hero Subtitle', type: 'text' }),

    // WHO WE ARE
    defineField({ name: 'whoWeAreTitle', title: 'Who We Are Title', type: 'string' }),
    defineField({ name: 'whoWeAreContent', title: 'Who We Are Content', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'whoWeAreImage', title: 'Who We Are Image', type: 'image' }),

    // MISSION & VISION
    defineField({ name: 'missionTitle', title: 'Mission Title', type: 'string' }),
    defineField({ name: 'missionContent', title: 'Mission Content', type: 'text' }),
    defineField({ name: 'visionTitle', title: 'Vision Title', type: 'string' }),
    defineField({ name: 'visionContent', title: 'Vision Content', type: 'text' }),

    // WHY CHOOSE US
    defineField({ name: 'whyChooseUsTitle', title: 'Why Choose Us Title', type: 'string' }),
    defineField({
      name: 'whyChooseUs',
      title: 'Why Choose Us Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'desc', title: 'Description', type: 'text' },
          ],
        },
      ],
    }),
  ],
});

import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'about',
  title: 'About Astra Homes',
  type: 'document',
  fields: [
    defineField({ name: 'whoWeAre', title: 'Who We Are', type: 'text' }),
    defineField({ name: 'mission', title: 'Mission', type: 'text' }),
    defineField({ name: 'vision', title: 'Vision', type: 'text' }),
  ],
});

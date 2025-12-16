import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

export const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2023-11-01',
  useCdn: true,
};

export const client = createClient(config);

const builder = imageUrlBuilder(client);
export const urlFor = (source: any) => builder.image(source);

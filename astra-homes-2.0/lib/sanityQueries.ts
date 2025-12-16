// Only fetch dynamic media for the hero section
export const homePageQuery = `
*[_type == "homePage"][0]{
  heroMediaType,
  heroImage,
  heroImage,
  "heroVideo": heroVideo.asset->url
}
`;

// Static page content, so we only fetch dynamic projects
export const constructionPageQuery = `{
  "projects": *[_type == "constructionProject"]{
    title,
    image
  }
}`;

export const featuredPropertiesQuery = `*[_type == "property"] | order(_createdAt desc)[0...3] {
  title,
  slug,
  location,
  price,
  image,
  status
}`;

export const contactPageQuery = `*[_type == "contactPage"][0]{
  heroTitle,
  heroSubtitle,
  address,
  phone,
  email,
  mapEmbed
}`;

// Static page content, so we only fetch dynamic gallery
export const interiorPageQuery = `{
  "gallery": *[_type == "interiorProject"]{
    images
  }
}`;



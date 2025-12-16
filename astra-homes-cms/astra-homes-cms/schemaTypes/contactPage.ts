import { defineType, defineField } from "sanity";

export default defineType({
    name: "contactPage",
    title: "Contact Page",
    type: "document",
    fields: [
        defineField({
            name: "heroTitle",
            title: "Hero Title",
            type: "string",
        }),

        defineField({
            name: "heroSubtitle",
            title: "Hero Subtitle",
            type: "text",
        }),

        defineField({
            name: "address",
            title: "Office Address",
            type: "text",
        }),

        defineField({
            name: "phone",
            title: "Phone Number",
            type: "string",
        }),

        defineField({
            name: "email",
            title: "Email Address",
            type: "string",
        }),

        defineField({
            name: "mapEmbed",
            title: "Google Map Iframe Embed",
            type: "text",
            description: "Paste the Google Map embed iframe here",
        }),
    ],
});

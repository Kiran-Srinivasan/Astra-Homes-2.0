import { defineType, defineField } from "sanity";

export default defineType({
    name: "homePage",
    title: "Home Page Content",
    type: "document",
    fields: [
        defineField({
            name: "heroMediaType",
            title: "Hero Type",
            type: "string",
            options: {
                list: [
                    { title: "Image", value: "image" },
                    { title: "Video", value: "video" }
                ]
            },
            initialValue: "image"
        }),

        defineField({
            name: "heroImage",
            title: "Hero Image",
            type: "image",
            hidden: ({ parent }) => parent?.heroMediaType !== "image"
        }),

        defineField({
            name: "heroVideo",
            title: "Hero Video",
            type: "file",
            options: { accept: "video/mp4,video/webm" },
            hidden: ({ parent }) => parent?.heroMediaType !== "video"
        }),

        defineField({
            name: "heroTitle",
            title: "Hero Title",
            type: "string"
        }),

        defineField({
            name: "heroSubtitle",
            title: "Hero Subtitle",
            type: "text"
        }),

        defineField({
            name: "overviewTitle",
            title: "Overview Title",
            type: "string"
        }),

        defineField({
            name: "overviewDescription",
            title: "Overview Description",
            type: "text"
        }),

        defineField({
            name: "overviewCards",
            title: "Overview Cards",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        defineField({ name: "title", title: "Title", type: "string" }),
                        defineField({ name: "description", title: "Description", type: "text" }),
                        defineField({ name: "link", title: "Link", type: "string" }),
                    ]
                }
            ]
        }),

        defineField({
            name: "ctaTitle",
            title: "CTA Title",
            type: "string"
        }),

        defineField({
            name: "ctaSubtitle",
            title: "CTA Subtitle",
            type: "text"
        }),

        defineField({
            name: "ctaButtonText",
            title: "CTA Button Text",
            type: "string"
        }),

        defineField({
            name: "ctaLink",
            title: "CTA Link",
            type: "string"
        })
    ]
});

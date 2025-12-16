import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'contactForm',
    title: 'Contact Messages',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            readOnly: true,
        }),
        defineField({
            name: 'email',
            title: 'Email',
            type: 'string',
            readOnly: true,
        }),
        defineField({
            name: 'message',
            title: 'Message',
            type: 'text',
            readOnly: true,
        }),
        defineField({
            name: 'submittedAt',
            title: 'Submitted At',
            type: 'datetime',
            readOnly: true,
        }),
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'email',
        },
    },
})

import {Image, defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        }
      ]
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
    }),
    defineField({
      name: 'pageType',
      title: 'Page Type',
      type: 'string',
      options: {
        list: ['home', 'project', 'research', 'resume', 'blog', 'essay', 'contact']
      }
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'markdown',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      pageType: 'pageType',
      media: 'mainImage',
    },
    prepare(selection) {
      const { pageType } = selection
      return { ...selection, subtitle: pageType }
    },
  },
});

export interface Post {
  title: string;
  description: string;
  slug: {
    current: string;
  };
  mainImage?: Image;
  pageType: "home" | "project" | "research" | "resume" | "blog" | "essay" | "contact";
  publishedAt: string;
  body: string;
}

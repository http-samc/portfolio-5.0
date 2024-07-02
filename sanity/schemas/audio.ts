import { File, defineField, defineType } from "sanity";

export default defineType({
  name: "audio",
  title: "Audio",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "file",
      title: "Audio File",
      type: "file",
      options: {
        accept: "audio/*",
      },
    }),
  ],
});

export interface Audio {
  title: string;
  file: File;
}

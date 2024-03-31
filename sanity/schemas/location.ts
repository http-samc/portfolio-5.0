import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'location',
  title: 'Location',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'time',
      title: 'Time',
      type: 'datetime',
    }),
  ],
});

export interface Location {
  name: string;
  time: string;
}

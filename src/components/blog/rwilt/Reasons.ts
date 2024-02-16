export type RwiltReason = {
  order: number;
  title: string;
  summary: string;
  duration: string;
  imageUrl?: string;
};

export const reasons: RwiltReason[] = [
  {
    order: 1,
    title: 'Intellisense',
    summary:
      "Relying on your editor's intellisense will not only speed up the development, it will also ensure you're writing safe code.",
    duration: '6min read',
    imageUrl: 'https://i.imgur.com/mTMQU3M.png',
  },
  {
    order: 2,
    title: 'Global types',
    summary:
      'Declare your types in a .d.ts file and access them from anywhere in your codebase.',
    duration: '4min read',
  },
  {
    order: 3,
    title: 'Type indexing',
    summary:
      "Using type indexing, you can reference a nested type. This way, if that nested type ever changes, you don't have to go through your code and update all its instances.",
    duration: '6min read',
    imageUrl: 'https://i.imgur.com/IDLykhZ.png',
  },
];

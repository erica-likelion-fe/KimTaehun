export const Posts = Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    title: `Lorem ipsum ${i + 1}`,
    content: `Lorem ipsum dolor sit amet consectetur. At dignissim orci et sapien. Massa lacus odio venenatis ipsum blandit.`,
  }));
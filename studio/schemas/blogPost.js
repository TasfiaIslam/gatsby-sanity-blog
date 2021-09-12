export default {
  name: "blogPost",
  title: "Blog post",
  type: "document",
  fields: [
    // ... other fields ...
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
    },

    {
      name: "body",
      title: "Body",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "sponsor",
      title: "Sponsor",
      type: "sponsor",
    },
  ],
};

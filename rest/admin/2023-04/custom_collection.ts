// Session is built by the OAuth process
const custom_collection = new shopify.rest.CustomCollection({session: session});
custom_collection.title = "IPods";
custom_collection.collects = [
  {
    "product_id": 921728736
  }
];
await custom_collection.save({
  update: true,
});

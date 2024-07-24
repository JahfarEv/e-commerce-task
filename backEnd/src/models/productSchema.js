const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image: {
      data: Buffer,
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    description: String,

    quantity: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);
const productSchema = mongoose.model("productSchema", ProductSchema);

module.exports = productSchema;

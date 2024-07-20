const { default: mongoose } = require("mongoose");
const productSchema = require("../models/productSchema");
const createError = require("../utils/createError");

//create product

async function newProduct(req, res, next) {
  const { title, description, image, price, quantity } = req.body;
  console.log(title, description);
  if (!title || !description || !image || !price || !quantity) {
    next(createError("All field are required", "ValidationError"));
  }

  const newProduct = await productSchema.create({
    title,
    description,
    image,
    price,
    quantity,
  });
  res.status(201).json({
    status: "success",
    data: {
      Product: newProduct,
    },
  });
}

// get product

async function getProduct(req, res, next) {
  const products = await productSchema.find().sort({ createdAt: -1 });
  if (!products) {
    next(createError("posts not found", "NotFoundError"));
  }
  res.status(200).json({
    status: "success",
    data: products,
  });
  next();
}

// get specific product

async function getProductById(req, res, next) {
  const { id } = req.params;
  if (!id || !mongoose.Types.ObjectId.isValid(id)) {
    next(createError("Required post id", "ValidationError"));
  }
  const products = await productSchema.findById({ _id: id });
  if (!products) {
    next(createError("post not found", "NotFoundError"));
  }
  res.status(200).json({
    status: "success",
    data: {
      products,
    },
  });
}

// update product

async function updateProduct(req, res, next) {
  const { id } = req.params;
  console.log(id);
  try {
    const { title, image, description, price, quantity } = req.body;
    console.log(title);
    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
      next(createError("id required", "ValidationError"));
    }

    const updatedProduct = await productSchema.findByIdAndUpdate(
      id,
      { title, image, description, price, quantity },
      { new: true, runValidators: true }
    );
    if (!updateProduct) {
      next(createError("Product not found", "NotFoundError"));
    }

    res.status(200).json({
      status: "success",
      message: "Product updated successfully",
      data: {
        updatedProduct,
      },
    });
  } catch (error) {
    next(error);
  }
}

//delete product

async function deleteProduct(req, res, next) {
  const { id } = req.params;
  if (!id || !mongoose.Types.ObjectId.isValid(id)) {
    next(createError("Required post id", "ValidationError"));
  }
  const deleteProduct = await productSchema.findByIdAndDelete({ _id: id });
  if (!deleteProduct) {
    next(createError("Post not foud", "NotFoundError"));
  }
  return res.status(200).json({
    
    status: "success",
    message: "Successfully deleted",
  });
}

module.exports = {
  newProduct,
  getProduct,
  getProductById,
  updateProduct,
  deleteProduct,
};

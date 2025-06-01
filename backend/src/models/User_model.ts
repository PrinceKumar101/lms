const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    phone: { type: String, required: true },
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    postalCode: { type: String, required: true },
    country: { type: String, required: true },
    isDefault: { type: Boolean, default: false },
  },
  { _id: false }
);

const paymentMethodSchema = new mongoose.Schema(
  {
    cardType: { type: String }, // e.g., Visa, MasterCard
    cardNumberMasked: { type: String }, // show only last 4 digits
    expiry: { type: String }, // MM/YY
    billingAddress: addressSchema,
    isDefault: { type: Boolean, default: false },
  },
  { _id: false }
);

const cartItemSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    quantity: { type: Number, required: true },
    selectedVariant: { type: Object }, // e.g., color, size
  },
  { _id: false }
);

const wishlistItemSchema = new mongoose.Schema(
  {
    productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
    addedAt: { type: Date, default: Date.now },
  },
  { _id: false }
);

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  passwordHash: { type: String, required: true },
  fullName: { type: String, required: true },
  phoneNumber: { type: String },

  // User status
  isVerified: { type: Boolean, default: false },
  isAdmin: { type: Boolean, default: false },
  isBlocked: { type: Boolean, default: false },

  // Addresses
  addresses: [addressSchema],

  // Payment methods
  paymentMethods: [paymentMethodSchema],

  // Shopping cart
  cart: [cartItemSchema],

  // Wishlist
  wishlist: [wishlistItemSchema],

  // Orders
  orders: [{ type: mongoose.Schema.Types.ObjectId, ref: "Order" }],

  // Reviews written
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],

  // Account info
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export default mongoose.model("Users", userSchema);

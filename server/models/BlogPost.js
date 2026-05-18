import mongoose from 'mongoose';

const blogPostSchema = new mongoose.Schema(
  {
    title:     { type: String, required: true, trim: true },
    slug:      { type: String, required: true, unique: true, lowercase: true },
    excerpt:   { type: String, required: true },
    body:      { type: String, required: true },
    tags:      [{ type: String, lowercase: true }],
    published: { type: Boolean, default: false },
    publishedAt: { type: Date },
  },
  { timestamps: true }
);

blogPostSchema.pre('save', function (next) {
  if (this.isModified('published') && this.published && !this.publishedAt) {
    this.publishedAt = new Date();
  }
  next();
});

export default mongoose.model('BlogPost', blogPostSchema);

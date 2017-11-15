const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  title: {type: String, required: true},
  content: {type: String, required: true},
  created_at: { type: Date, required: true, default: Date.now},
    author: {
    firstName: String,
    lastName: String
  },
});

blogPostSchema.virtual('author').get(function() {
  return `${this.author.firstName} ${this.author.lastName}`.trim();
});


postSchema.methods.apiRepr = function() {
  return {
    id: this._id,
    title: this.title,
    content: this.content,
    created_at: this.created_at,
    author: this.author,
  };
}




const Post = mongoose.model('Post', postSchema);
module.exports = {Post};


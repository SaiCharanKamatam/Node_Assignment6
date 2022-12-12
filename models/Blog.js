const mongoose = require('mongoose');

const schema = mongoose.Schema
const objectId = schema.objectId
const blogSchema = new schema({
    id:String,
    topic: String,
    description:String,
    posted_at: String,
    posted_by: String
})

const Blog = mongoose.model('blogs', blogSchema);

module.exports = Blog;
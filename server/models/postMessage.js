import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  //will convert image into string using base-64
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

// Mongoose allows us to have some sort of uniformity as its a non relational databse each thing can have its different attributes
var PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;

// Exporting a mongoose model from the postmessage file and then on that model we will later on be able to do crud operations

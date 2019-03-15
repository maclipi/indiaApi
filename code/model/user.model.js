import mongoose from "mongoose"; // Importing mongoose

const Schema = mongoose.Schema;
const userSchema = new Schema({
  userId: String
});
export default userSchema;

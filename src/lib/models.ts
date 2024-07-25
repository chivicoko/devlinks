import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        min: 3,
        max: 20,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        max: 50,
    },
    password: {
        type: String,
        required: true,
        min: 8,
    },
    img: {
        type: String,
    },
}, {timestamps: true});


const linkSchema = new mongoose.Schema({
    platform: {
      type: String,
      required: true,
      enum: ['GitHub', 'YouTube', 'Facebook', 'Twitter', 'LinkedIn', 'Instagram', 'Other'],
    },
    userId: {
      type: String,
      required: true,
    },
  }, { timestamps: true });
  

export const User = mongoose.models.User || mongoose.model('User', userSchema);
export const Link = mongoose.models.Link || mongoose.model('Link', linkSchema);
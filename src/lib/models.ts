import mongoose, { Document, Model } from 'mongoose';

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
}, { timestamps: true });

const userLinkSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  platform: {
    type: String,
    required: true,
    enum: ['GitHub', 'YouTube', 'Facebook', 'Twitter', 'LinkedIn', 'Instagram', 'Other'],
  },
  linkItem: {
    type: String,
    required: true,
  },
}, { timestamps: true });

export const User = mongoose.models.User || mongoose.model('User', userSchema);
export const UserLink = mongoose.models.UserLink || mongoose.model('UserLink', userLinkSchema);

interface LinkDocument extends Document {
  userId: string;
  platform: string;
  linkItem: string;
}

export const getUserLinks = async (): Promise<LinkDocument[]> => {
  try {
    const links = await UserLink.find().exec();
    return links;
  } catch (error) {
    console.error("Error fetching user links:", error);
    throw new Error("Error fetching user links");
  }
};

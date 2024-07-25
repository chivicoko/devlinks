import { UserLink, User } from "./models";
import { connectToDb } from "./utils";
import mongoose from 'mongoose';

export const getUserLinks = async () => {
    try {
        await connectToDb();
        const userLinks = await UserLink.find();
        return userLinks;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch userLinks");
    }
};

export const getUserLink = async (id: string | mongoose.Types.ObjectId) => {
    try {
        await connectToDb();
        const userLink = await UserLink.findById(id);
        return userLink;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch userLink");
    }
};

export const getUser = async (id: string | mongoose.Types.ObjectId) => {
    try {
        await connectToDb();
        const user = await User.findById(id);
        return user;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch user");
    }
};

export const getUsers = async () => {
    try {
        await connectToDb();
        const users = await User.find();
        return users;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch users");
    }
};

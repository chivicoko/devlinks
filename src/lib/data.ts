import { Link, User } from "./models";
import { connectToDb } from "./utils";
import mongoose from 'mongoose';

export const getLinks = async () => {
    try {
        await connectToDb();
        const links = await Link.find();
        return links;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch links");
    }
};

export const getLink = async (id: string | mongoose.Types.ObjectId) => {
    try {
        await connectToDb();
        const link = await Link.findById(id);
        return link;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch link");
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

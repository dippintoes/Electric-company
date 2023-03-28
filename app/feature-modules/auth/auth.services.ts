import { compare, genSalt, hash } from "bcryptjs";
import { IUser } from "../users/user.types";
import userServices from "../users/user.services";
import { USER_REPONSES } from "../users/user.responses";
import { ICredentials } from "./auth.types";
import { sign } from "jsonwebtoken";

const encryptUser = async (user: IUser) => {
    const salt = await genSalt(10);
    const hashedPassword = await hash(user.password, salt);
    user.password = hashedPassword;
    return user;
}

const register = async (user: IUser) => {
    const validUser = await encryptUser(user);
    const record = userServices.create(validUser);
    return record;
}

const login = async (credentials: ICredentials) => {
    const foundUser = await userServices.findOne({ email: credentials.email });
    if (!foundUser) throw USER_REPONSES.INVALID_CREDENTIALS;

    const matchedPassword = await compare(credentials.password, foundUser.password);
    if (!matchedPassword) throw USER_REPONSES.INVALID_CREDENTIALS;

    const { _id, role } = foundUser;
    const { JWT_SECRET } = process.env;

    // symmetric token
    try {
        const token = sign({ id: _id, role: role }, JWT_SECRET || "");
        console.log(token)
        return { foundUser, token };
    }
    catch (e) {
        console.log(e);
    }
}

export default {
    register,
    login
}
import {validateCredentials} from "../models/users";

export const validateLogin= async (req, h) => {
    const email = req.payload.email;
    const password = req.payload.password;

    if (!email || !password) {
        return h.response('Required payload missing').code(500);
    }

    const response = await validateCredentials(email, password);

    if (response) {
        return h.response(response).code(200);
    }

    return h.response('').code(404);
};

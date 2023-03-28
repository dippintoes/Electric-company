import { body } from "express-validator";
import { login_validator } from "../../utility/login-validator";

export const CREATE_USER_VALIDATION = [
    body("name").isString().notEmpty().withMessage("Name is Required"),
    body("email").isEmail().notEmpty().withMessage("Email is Required"),
    body("password").isString().notEmpty().isLength({ min: 6 }).withMessage("Minimum password length required is : 6"),
    login_validator
]

export const LOGIN_USER_VALIDATION = [
    body("email").isEmail().notEmpty().withMessage("Email is Required"),
    body("password").isString().notEmpty().withMessage("Password is Required"),
    login_validator
]
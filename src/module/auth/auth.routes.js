import { Router } from "express";
import { authController } from "./auth.controller.js";

const router = Router();

router.get('/login', (req, res) => {
    res.render("login", {
        title: "Login Page"
    })
});

router.get('/register', (req, res) => {
    res.render("register", {
        title: "Register Page"
    })
}); 
router.post('/login', authController.login);
router.post('/register', authController.register);
router.post('/verify-email', authController.verifyEmail);
router.post('/forgot-password', authController.forgotPassword);
router.post('/reset-password', authController.resetPassword);
router.post('/refresh-token', authController.refreshToken);


export default router;
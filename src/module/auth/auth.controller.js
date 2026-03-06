export const authController = {
    login: async (req, res) => {
        res.json({ message: "Login logic not implemented yet" });
    },
    register: async (req, res) => {
        res.json({ message: "Register logic not implemented yet" });
    },

    // To do : Implement the following methods
    verifyEmail: async (req, res) => {
        res.json({ message: "Email verification logic not implemented yet" });
    },
    forgotPassword: async (req, res) => {
        res.json({ message: "Forgot password logic not implemented yet" });
    },
    resetPassword: async (req, res) => {
        res.json({ message: "Reset password logic not implemented yet" });
    },
    refreshToken: async (req, res) => {
        res.json({ message: "Refresh token logic not implemented yet" });
    }
}
const getUserInfo = async (req, res, next) => {
    try {
        res.json({ user: 123 });
    } catch (error) {
        next(error);
    }
};

export default {
    getUserInfo
}
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
        },
        avatar: {
            type: String,
            // default: "https://imgs.search.brave.com/WfSR9-WPS8GcJbJycPti-WI_VhwYDF3TJzOZLw6DXOc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4x/LnZlY3RvcnN0b2Nr/LmNvbS9pLzEwMDB4/MTAwMC8wMC82NS91/c2VyLXByb2ZpbGUt/Z3JleS1pY29uLXdl/Yi1hdmF0YXItZW1w/bG95ZWUtdmVjdG9y/LTMyNTUwMDY1Lmpw/Zw"
            default: "https://lh3.googleusercontent.com/a/ACg8ocJFcYS7qRi4ofgzllHQSMtuS0i73mIrNcAz_bULH-zaPZcEByyB"
        },
    },
    { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;
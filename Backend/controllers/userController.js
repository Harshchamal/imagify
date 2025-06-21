import userModel from "../models/userModel.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const registeruser = async (req, res)=>{
    try{
        const {name, email, password} = req.body;

        if(!name || !email || !password){
            return res.json({success:false, massage: 'Missing Details'})
        }

        const salt = await bcrypt.genSalt(10)

        const hashedpassword = await bcrypt.hash(password, salt)

        const userData = {
           name, 
           email, 
           password: hashedpassword
         }

        const newUser = new userModel(userData)
        const user = await newUser.save()

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)

        res.json({ success: true, token, user: { name: user.name } })



    } catch (error){
        console.log(error)
        registeruser.json({success: false, message: error.message })

    }
}

const loginUser = async (req, res)=>{
    try {
        const {email, password} = req.body;
        const user = await userModel.findOne ({email})

        if(!user){
            return res.json({success: false, message: 'User Does not exist'})
        }
            const isMatch = await bcrypt.compare(password, user.password)

            if(isMatch){
                const token = jwt.sign({id: user._id}, process.env.JWT_SECRET)
        
                res.json({success: true, token, user: {name: user.name}})

            }else{
                return res.json({success: false, message: 'Invalid credentials'})
            }

    } catch (error) {
         console.log(error)
         res.json({ success: false, message: error.message })


    }
}

const userCredits = async (req, res)=>{
    try {
        const userId = req.userId; // ✅ read it from request directly


        const user = await userModel.findById(userId)
        res.json({success: true, credits: user. creditBalance, user:{name: user.name}})
    } catch (error) {
        
        console.log(error.message)
        res.json({ success: false, message: error.message })
    }

}

// ✅ Forget / Reset Password
const resetPassword = async (req, res) => {
    try {
        const { email, newPassword } = req.body;

        if (!email || !newPassword) {
            return res.json({ success: false, message: 'Email and new password required' });
        }

        const user = await userModel.findOne({ email });
        if (!user) {
            return res.json({ success: false, message: 'User not found' });
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);
        user.password = hashedPassword;
        await user.save();

        res.json({ success: true, message: 'Password updated successfully' });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
}


export {registeruser, loginUser, userCredits,  resetPassword  }
import {asyncHandler} from '../utils/asyncHandeler.js';
import {ApiError} from '../utils/ApiError.js';
import {User} from '../models/user.model.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import customId from 'custom-id';

const generateAccessandRefreshToken = async(userId) =>{
    try{
       const user =  await User.findById(userId)
       const AccessToken = user.generateAccessToken()
       const RefreshToken = user.generateRefreshToken()

       user.refreshToken = RefreshToken
      await  user.save({validateBeforeSave: false})

        return {
            AccessToken,
            RefreshToken
        }
       
    }   catch(e){
        throw new ApiError(500, 'Something went wrong while generating refresh token and access token')
    }
}


const registerUser = asyncHandler(
    async(req,res)=>{
        
        const {username, email, password,fullname} = req.body;  // Step 1

        if(username === ""){
            throw new ApiError(400, "username is required");
        }
        if(email === ""){
            throw new ApiError(400, "email is required");
        }
        if(password === ""){
            throw new ApiError(400, "password is required");
        }
        if(fullname === ""){
            throw new ApiError(400, "fullname is required");
        }

     const ExistedUser = await User.findOne({
            $or: [{ username },{ email }]    
        })

        if(ExistedUser){
            throw new ApiError(409, "username or email is already taken");
        }
    const ID = customId(email)
    
    const user = await User.create({    
        fullname,
        email,
        password,
        username: username.toLowerCase(),
        ID
    })

    console.log("Your Registration Number is",ID)

    const createdUser = await User.findById(user._id).select(  
        "-password -refreshToken",
    )

    if(!createdUser){
        throw new ApiError(500, "Something went wrong while registering user");    
    }

    return res.status(201).json(
        new ApiResponse(200, createdUser, "User Registered successfully")
    )

 });

 const loginUser = asyncHandler(async (req, res) => {
    

        const {email, username, password} =  req.body

        if(! username && ! email){
            throw new ApiError(400, "username or email is required");
        }

       const user = await User.findOne({
            $or: [{ username },{ email }]
        })

        if(!user){
            throw new ApiError(404, "username does not exist")
        }
        
        const isPasswordCorrect = await user.isPasswordCorrect(password)

        if(!isPasswordCorrect){
            throw new ApiError(401, "password is incorrect")
        }  
        
       const {accessToken , refreshToken} =  await generateAccessandRefreshToken(user._id)
        
       const loggedInUser = await User.findById(user._id).select('-password -refreshToken')

       const options = {
            httpOnly: true,
            secure: true
       }

       return res.status(200).
       cookie("accessToken", accessToken, options).
       cookie("refreshToken", refreshToken, options).
       json(new ApiResponse(200, {
            user: loggedInUser,accessToken, refreshToken    
        }, "user logged in successfully"
        ))

       
 });



export {
    registerUser,
    loginUser
}
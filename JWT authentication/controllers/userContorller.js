// endpoint for login registration
const user = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// registration end point
const registration = async(req,res)=>{
    let {userName,email,password,role} = req.body;
    const isEmailExist = await user.findOne({email})
    console.log(isEmailExist);

   try{
        if(isEmailExist){
            res.status(300).send({
                error: true,
                message: 'user already exist'
            });
        }else{
            // salting
            const saltValue = 10                             // highly encrypted  // salt means the strength of the password
            const salt= await bcrypt.genSalt(saltValue)      // rounds and minor // genSalt it will generate code for encription
            console.log("salt",salt);
            // encription
            const hashPassword = await bcrypt.hash(password,salt);  //hash will generate the salt. salt algarithem for the code
            console.log("hashPassword", hashPassword);

            await user.insertMany({userName, email, 
                password: hashPassword, role
            })
            res.status(200).json({
                error: false,
                message: 'Registration successfull',
                data :{
                    userName, 
                    email,
                    password:hashPassword,
                    role
                }
            });
        }
   }catch(err){
        res.status(500).send(err)
   }
};

const loginPage= async(req,res)=>{
    let {email,password} = req.body;
    try{
        const userData = await user.findOne({email})
        // const {userName,email,password,role} = userData;

        if(userData){
            // bcript compare()
            const isPasswordMatched = await bcrypt.compare(password,userData.password);
            if(isPasswordMatched){
                const payload = {
                    userName: userData.userName,
                    email: userData.email, 
                    role : userData.role,
                };
                const token = jwt.sign(payload,process.env.SECRET_KEY, {expiresIn: '24h'});
                res.status(200).send({
                    error:false,
                    message: 'logged in successfully',
                    data :{
                        userName: userData.userName,
                        email: userData.email, 
                        role : userData.role,
                        token,          // token send to the front end 
                    }
                })
            }else {
                res.status(403).json({
                    error: true,
                    message: 'Not a valid user'
                })
            }
        }
    } catch(err){
        console.log(err);
    }
}

module.exports = {registration, loginPage}
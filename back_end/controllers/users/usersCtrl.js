const User = require("../../model/user/User")

// ---------------------------------
// Register
// ---------------------------------

const userRegisterCtrl = async (req,res) =>{
    
    try{
            // Register user
        const user = await User.create({
        firstName : 'Sai',
        lastName : 'Teja',
        email: 'teja@gmail.com',
        // password: '12345',
    });
        res.json(user);
    } catch (error){
        res.json(error)
    }
    // res.json({user: "User Registered"})
}

module.exports = {userRegisterCtrl}
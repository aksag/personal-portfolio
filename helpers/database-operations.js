var mongoose = require('mongoose');

module.exports={
    createUser:(userData,callback)=>{
        user=new User(userData)
        try {
            user.save();
            callback("Success");
        } catch (error) {
            console.log(error);
            callback(error)
        }        
    }
}
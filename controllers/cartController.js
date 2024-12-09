
import userModel from "../models/userModel.js";

const addToCart = async(req,res) => {
    try{
        let userData = await userModel.findOne({_id:req.body.userId});
        let cartData =  await userData.cartData;
        if(!cartData[req.body.itemId]){
            cartData[req.body.itemId] = 1
        }

        else{
            cartData[req.body.itemId] += 1;
        }

        await userModel.findByIdAndUpdate(req.body.userId,{cartData});
        res.json({success:true,message:"Added to Cart"});
    }

    catch(err){
        console.log(err);
        res.json({success:false,message:"error"});
    }


}

const removeFromCart = async(req,res) => {
    try{
        let userData = await userModel.findOne({_id:req.body.userId});
        let cartData =  await userData.cartData;
        if(cartData[req.body.itemId] >= 1){
            cartData[req.body.itemId] -= 1
        }

        await userModel.findByIdAndUpdate(req.body.userId,{cartData});
        res.json({success:true,message:"Removed from Cart"});
    }

    catch(err){
        console.log(err);
        res.json({success:false,message:"error"});
    }
}

const getCart = async(req,res) => {
    try{
        let userData = await userModel.findOne({_id:req.body.userId});
        let cartData =  await userData.cartData;
        res.json({success:true,cartData});
    }

    catch(err){
        console.log(err);
        res.json({success:false,message:"error"});
    }
}

export {addToCart,removeFromCart,getCart};
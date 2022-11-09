const express=require('express')

const router=express.Router()

const getAllMember=require("../controllers/api")

router.route('/').get(
getAllMember);

module.exports=router


'use strict'

const response=require('../backend/response.js')
exports.index=(req,res)=>{
    response.status('Hello Rest API NodeJS',res)
}
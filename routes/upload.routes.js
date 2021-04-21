const { Router } = require('express')
var fs = require('fs')
const multer = require('multer')
const config = require('config')



baseUrl = config.get('baseUrl')


let upload = multer({dest:`./client/public/uploads`})

const router = Router()

router.post('/', upload.any(),async(req,res)=>{
    try{
  
     req.files.forEach(function(item,i,arr){
        console.log(1)
        const fileType =item.mimetype.split("/")[1]
        const fileName = item.originalname
        fs.rename(`client/public/uploads/${req.files[i].filename}`,"client/public/uploads/"+fileName,()=>{console.log('callback rename')})
     })


    }catch(e){
      res.status(500).json({ message: `dqwdqdq` })
    }

  })



module.exports = router
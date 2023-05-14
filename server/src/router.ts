import express from "express"

const router = express.Router();


router.post('/pay', (req, res)=>{
    res.send(`quit`)
})

export default router;
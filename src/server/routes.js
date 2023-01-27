const  Router =require( "express");
const userRouter = require("./router/userRouter")
const router = Router();

//Router routes
router.use(userRouter)

router.get('/',(req,res)=>{
        res.json({
                "status": 200
        });
});


module.exports= router;
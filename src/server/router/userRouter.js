const  Router =require( "express");

const userRouter = Router();


userRouter.get('/user',(req,res)=>{
        res.json({
                "rota": "user"
        });
});





module.exports= userRouter;
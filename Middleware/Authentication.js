const jwt = require("jsonwebtoken");
require("dotenv").config();


const Auth=(req,res,next)=>{
    if (!req.headers.authorization) {
        return res.send('Login Again')
      }

      const token=req.headers.authorization.split(" ")[1]

      jwt.verify(token, process.env.jwt_secret_key, (err, decoded) => {
        if (err) {
          return res.send('Login Again')
        }
        req.body.email = decoded.email
        req.body.userId = decoded.userId
        next()
      })

}

module.exports={
    Auth
}
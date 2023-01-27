const express = require("express");
const swagger = require("swagger-ui-express");
const swaggerDocs = require("./swagger.json")
const routes = require("./routes")

const app = express();


app.use(express.json());

app.use("/api-docs",swagger.serve,swagger.setup(swaggerDocs))

app.use(routes)

app.listen(5000,function(){
    console.log('listening on 5000')
});
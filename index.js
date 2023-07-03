const json_server= require("json-server")
const path=require("path");
const cors= require("cors");
server.use(cors())

const server= json_server.create();
const router= json_server.router(path.join(__dirname,"db.json"))

server.use(json_server.bodyParser)
server.use(json_server.defaults())
server.use(router)

server.listen(3000, ()=>{
    console.log("JSON Server is running")
})
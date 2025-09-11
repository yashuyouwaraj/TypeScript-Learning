import Express = require("express");

const app= Express();
const PORT=3000;

app.get('/',(request:Express.Request,response:Express.Response)=>{
    response.send("Hello, welcome to Express with TypeScript");
});
app.listen(PORT,()=>console.log(`Server running on port ${PORT}`));
const http= require ('http');

http.createServer((req,res)=>{
    console.log(req)
    

    // res.writeHead(200,{'Content-Type':'aplicattion/json'})
    // res.setHeader('Content-Disposition','attachment; filename=lista.csv');
    // res.writeHead(200,{'Content-Type':'aplicattion/csv'});
    
   

    
    res.end();

})
.listen(8085)
console.log('Escuchando el puerto 8085')
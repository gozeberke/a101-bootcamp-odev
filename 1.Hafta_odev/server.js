// node.js ile server ayağa kaldırma 

const http=require('http')

const server=http.createServer((req,res)=>{
    const url=req.url
    //res.write(url)
    if(url==="/"){
        res.write("Anasayfa")
        //console.log("İndex Anasayfa",url)
    }else if(url==="/user"){
        res.write("User Sayfasi")
        //console.log("User Sayfası",url)
    }else if (url==="/about"){
        res.write("Abaout Sayfasi")
        //console.log("About Sayfası",url)
    }else {
        
        res.write("Sayfa bulunamadi")
    }
    res.end()
})
server.listen(3000,()=>{
    console.log("Server başlatıldı")
})
import fs from "fs"; // importing node package fs
import http from "http" // will host our URL

const port = 4000 //port where the server will be hosted


// here we will create a server that will host our html files and grab that file with .fs
//*req is an object containing information about the HTTP request that raised the event.
// In response to req, you use res to send back the desired HTTP response.

// *The response.writeHead() (Added in v1..0) property is an inbuilt property of the ‘http’ module which sends a response header to the request. 
// The status code is a 3-digit HTTP status code, like 404. The last argument, headers, are the response headers. 
// Optionally one can give a human-readable statusMessage as the second argument.
// */
const server = http.createServer((req,res) => {
    if (req.url === "/") {
        console.log(req.url);
        res.writeHead(200, {"Content-Type": "text/html"}); // with writehead we are allowing JS to grab our content with html
        fs.readFile("./index.html", (err,data)=>{
            //we use fs readme to grab our first cat in "index.html"
            if (err) throw err; // If we dont find our URL we will recieve a err
            res.write(data)
            res.end() //this would end the program


        });
        
        
        //here we want node to let us know what html file we are on using our url
    } // here we are required to 





//do the same process for Cat2

if(req.url === "/api"){

    console.log(req.url);
    //create the server variable 
    res.writeHead(200, {"Content-Type": "text/html"});
    fs.readFile("./cat2.html", (err,data)=>{
        if(err) throw err;
        res.write(data);
        res.end()
    });
}
});
server.listen(port, (err)=>{
    if (err) console.log("ERROR", err.message);
    console.log(`listening on port ${port}`)
});
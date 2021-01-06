let http = require("http");
let fs = require("fs");

http.createServer((request, response) => {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    switch(request.url) //Dependiendo del articulo seleccionado, elegiremos el CASE
	{	
		case '/contacto':
			
     readFile("./contact.html",response);
      
		break;
    case '/nosotros':
      readFile("./about.html",response);
    
         break;
     case '/proyectos':
			
      readFile("./proyectos.html",response);
    
     break;
     case '/favicon.ico':
      response.setHeader("Content-Type", "img; charset=utf-8");
      readFile("./favicon.png",response);
     break;
     
    
		default: //En caso de no encontrar la ruta
    readFile("./404.html",response);
		break;
	}
    
}).listen(80);


 const readFile=(path, response) =>{
  fs.readFile(path, (error, content) => {
    if(!error){
        response.write(content);
        response.end();
    }
 })
}
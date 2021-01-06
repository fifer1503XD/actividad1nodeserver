let http = require("http");
let fs = require("fs");

http.createServer((request, response) => {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    switch(request.url) //Dependiendo del articulo seleccionado, elegiremos el CASE
	{	
		case '/contacto':
			
        fs.readFile("./contact.html", (error, content) => {
          if(!error){
              response.write(content);
              response.end();
          }
        });
      
		break;
    case '/nosotros':
			
      fs.readFile("./about.html", (error, content) => {
        if(!error){
            response.write(content);
            response.end();
        }
      });
    
     break;
     case '/proyectos':
			
      fs.readFile("./proyectos.html", (error, content) => {
        if(!error){
            response.write(content);
            response.end();
        }
      });
    
     break;
     case '/favicon.ico':
      response.setHeader("Content-Type", "img; charset=utf-8");
      fs.readFile("./favicon.png", (error, content) => {
        if(!error){
            response.write(content);
            response.end();
        }
      });
    
     break;
     
    
		default: //En caso de no encontrar la ruta
    response.write("<h1>404</h1>");
    response.end();
		break;
	}
    
}).listen(80);


 
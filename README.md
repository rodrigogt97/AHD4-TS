# Configuracion de typescript

El archivo `tsconfig.json` es utilizado para configurar el compilador de TypeScript. Aqui estan las principales opciones de configuracion. 

- `"target": "ES5"`: Indica que el codigo TS se compilara a javascript compatible ES5. Asegura una mayor compatiblidad con navegadores y entornos antiguos. 
- `"module:" "ES6"`: Indica que se utilizan de ES6 en el codigo TypeScript. Esto permite utilizar las caracteristicas de importacion, exportacion de ES6 en tu codigo. 

- `"outDir": "./dist"`: Especificar el directorio de salida para los archvios compilados. 
- `"strict": true`: Habilitar todas las opciones estrictas del compilador de TypeScript para mejorar la seguiridad y la calidad del codigo.  
- `"include": [src/**/*.ts"]`: Especifica que archivos TypeScript deben ser incluidos en la compilacion. 

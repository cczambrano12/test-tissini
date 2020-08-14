# test-tissini
Prueba de Cristian Zambrano para desarrollo de aplicación web
El proyecto ejecuta simultáneamente el Frontend de la aplicación y los componentes básicos del backend. 

## BACKEND:
El backend fue programado utilizado el framework express y tiene configurado un endpoint para hacer la validación en el ingreso a la aplicación con el código que fue enviado en las instrucciones de la prueba. Los demás endpoints necesarios para el funcionamiento real de la aplicación no fueron implementados para agilizar el desarrollo del Frontend, sin embargo su desarrollo sigue el esquema utilizado para validar los datos de ingreso.

Se ejecuta desde el archivo ./src/index.js y utiliza las rutas creadas en el folder ./src/routes

## FRONTEND:
El Frontend fue programado utilizando el Framework react en conjunto con webpack y babel para procesar y transpilar el código JSX y ES7 utilizado en React. Adicionalmente se utilizaron componentes de Material-UI y Materialize para estilizar los componentes del Frontend. 

El código de React se ejecuta desde el archivo ./src/app/index.js haciendo uso de los componentes de React que se encuentran en ./src/app/components.

Al procesar y transpilar el código de React se genera un código el archivo ./src/public/bundle.js que contiene el frontend al ser ejecutado desde el archivo /src/public/index.html.

## DESARROLLO:
Para facilitar el desarrollo continuo de la aplicación se utilizó el middleware nodemon para el desarrollo del backend, y la transpilación continua de webpack ejecutandose en modo  --watch.

# EJECUCIÓN:
- 1. Ejecutar el servidor utilizando el comando "node ./src/index.js"
- 2. Ingresar a la aplicación dese "localhost:3000" en el navegador utilizando el código de ingreso  7865470213

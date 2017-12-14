# Exámen Para Desarrollador Frontend - Mobile / Almundo

La aplicación móvil desarrollada con la tecnología de <strong>React Native</strong>, lo cual nos permite usar el mismo código (Javascript) tanto para hacer aplicaciones Android e IOS.

Se integró con el patron de desarrollo <strong>Redux</strong> el cual nos permite controlar los estados de la aplicación y hace que sea mas facil de mantener a medida que la aplicación vaya creciendo.

## Pre-requisitos

Se debe tener instalado [NodeJs](https://nodejs.org/es/download/), un emulador de android (Recomendado [Visual Studio Emulator para Android](https://www.visualstudio.com/es/vs/msft-android-emulator/))



## Instalación

1. Clonar el proyecto digitando el siguiente comando en la consola: 

```
https://github.com/johe8809/hotels_app_almundo.git
```
2. Ejecutar el siguiente comando para instalar los paquetes que se encuentran en el package.json

```
npm install
```
3. Abrir el archivo que se encuentra en la ruta: `/src/api/api.js` y cambiar la url `http://192.168.0.15:3000/api/hotels` por la del servidor donde este corriendo el proyecto de la API REST

4. Iniciar el emulador

5. Luego ejecutar el siguiente comando por consola para arrancar la aplicación:

```
react-native run-android
```

## Ayuda para posibles errores

- Si se presenta el siguiente error: `unable to load script from assets index.android.bundle` realizar lo siguiente:
  - Crear la carpeta assets en android/app/src/main/
  - Luego ejecutar el siguiente comando:
```
react-native bundle --platform android --dev false --entry-file index.android.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
react-native run-android

```

- Si se presenta otro error intentar solucionarlo ejecutando `npm cache clean` y luego `react-native run-android`
- Si se presenta otro error intentar solucionarlo: ir a la carpera de `android/` y ejecutar: si esta en un mac `./gradlew clean` o si esta en windows `gradlew clean`
  y luego ejecutar el comando `react-native run-android` en la raiz del proyecto.



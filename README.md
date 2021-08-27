# Presion-arterial
Aplicación móvil para registrar su presión arterial y llevar registro.
+ Sección de recomendaciones para prevenir la hipertensión.

## Instalar Ionic
`npm install -g @ionic/cli`

## Instalar dependencias
Run `npm install`

## Genera la carpeta www
`ionic build`

## Generamos el proyecto para la plataforma movil
`ionic capacitor add android`
`ionic capacitor add ios`

## Convertir a nativo
`ionic capacitor copy android`
`ionic capacitor copy ios`

## Correr
`ionic capacitor run android`
`ionic capacitor run ios`

## Correr en livereload
`ionic capacitor run android -l --host=YOUR_IP_ADDRESS`
`ionic capacitor run ios -l --external`

### Personalizar la configuración 
Ver [Referencia de configuración](https://ionicframework.com/docs/intro/cli).

## Ejecutar app Desktop
`npx cap open @capacitor-community/electron`
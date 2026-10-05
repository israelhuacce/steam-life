---
title: "Syncthing"
description: "Una guía sobre instalación y sincronización de archivos entre dispositivos usando Syncthing."
date: "2025-10-11"
tags:
  - Software
  - Tecnología
---

Syncthing es una aplicación que ha sido fundamental tanto durante mi etapa universitaria como ahora en el trabajo. Me ha salvado en innumerables ocasiones al mantener mis archivos sincronizados de forma automática entre mis tres dispositivos.

# Instalación

## Dispositivos con Android

La aplicación la pueden encontrar en la Play Store con el nombre **"Syncthing-Fork"**. Esta es una versión mejorada de la aplicación oficial de Syncthing, que dejó de actualizarse con frecuencia.

<img
  src="/images/syncthing/captura-syncthing-android.jpg"
  alt="Captura de Syncthing en Android"
  class="note-image phone"
/>

## Dispositivos con Windows y macOS

[Enlace para descarga](https://syncthing.net/downloads/)

Para la instalación en Windows se tienen dos opciones:

- **Syncthing Windows Setup:** oficial de Syncthing y se ejecuta en el navegador. Tú decides cuándo tenerlo activo.
- **SyncTrayzor v2:** desarrollado por terceros, presenta una interfaz gráfica y el inicio es automático.

Personalmente recomiendo **Syncthing Windows Setup**.

Una vez instalado, se ejecuta en el navegador en el siguiente enlace:

[http://127.0.0.1:8384/](http://127.0.0.1:8384/)

![Instalación de Syncthing](/images/syncthing/syncthing%20-%20instalación.png)

# Procedimiento para sincronización

1. En la aplicación móvil, dirigirse a la opción **"Mostrar ID del dispositivo"**.
2. Copiar el **ID del dispositivo**.
3. En Windows, abrir el siguiente enlace:

   [http://127.0.0.1:8384/](http://127.0.0.1:8384/)

4. Seleccionar la opción **"+Añadir un dispositivo remoto"**.

   ![Agregar dispositivo](/images/syncthing/syncthing%20-%20agregar%20dispositivo.png)

5. Pegar el **ID del dispositivo**.
6. Automáticamente llegará una notificación. Hacer clic en **Aceptar**.
7. Para sincronizar una carpeta, hacer clic en **"+Agregar carpeta"** y configurar la ruta de la carpeta.

   ![Agregar carpeta](/images/syncthing/syncthing%20-%20agregar%20carpeta.png)

8. En la opción **Compartiendo**, agregar el dispositivo vinculado previamente.
9. Automáticamente llegará al dispositivo Android la siguiente notificación.

   ![Compartir carpeta](/images/syncthing/syncthing%20-%20compartir.jpg)

10. Al abrirla, debemos seleccionar una carpeta para compartir, al igual que en Windows. Esta será la carpeta que se sincronizará automáticamente en ambos dispositivos.

    <img
  src="/images/syncthing/syncthing%20-%20directorio.jpg"
  alt="Directorio sincronizado"
  class="note-image phone"
      />

11. Una vez configurado todo, podemos comprobar la sincronización creando un archivo en una de las carpetas. Este debería aparecer automáticamente en la carpeta correspondiente del otro dispositivo.

---

Cualquier duda o consulta:

**huaccehuamaniisrael@gmail.com**
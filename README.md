# Encriptador de Texto

![imagen](https://github.com/luigigake76/Encriptador/blob/main/encriptador.png)
## Descripción
El **Encriptador de Texto** es una aplicación web sencilla que permite a los usuarios encriptar y desencriptar texto utilizando un método de reemplazo de caracteres. Esta herramienta es útil para mantener la privacidad de los mensajes simples al transformarlos en una forma encriptada que sólo puede ser revertida utilizando la aplicación.

## Funcionalidades
- **Encriptar texto:** Reemplaza las vocales con secuencias específicas de caracteres.
- **Desencriptar texto:** Revierte el texto encriptado a su forma original.
- **Copiar texto:** Permite copiar el texto encriptado o desencriptado al portapapeles para utilizarlo en otros lugares.
## Tecnologías Utilizadas
- **HTML:** Estructura de la página web.
- **CSS:** Estilos visuales de la página web.
- **JavaScript:** Lógica de encriptación y desencriptación, manipulación del DOM, y manejo del portapapeles.
## Instalación
No se requiere instalación especial. Sólo necesitas un navegador web moderno para utilizar la aplicación.

### Instrucciones de Uso
1. **Clona el repositorio** en tu máquina local utilizando el siguiente comando:

```
Copiar código
git clone https://github.com/tu-usuario/encriptador-texto.git
```
2. **Abre el archivo 'index.html'** en tu navegador web.

## Cómo Funciona
1. ### Interfaz de Usuario ###
La interfaz de usuario es simple e intuitiva, compuesta por un área de entrada de texto, botones de acción y un área de salida para mostrar el resultado.


- **Campo de Entrada de Texto:** Donde el usuario ingresa el texto que desea encriptar o desencriptar.
- **Botón de Encriptar:** Inicia el proceso de encriptación.
- **Botón de Desencriptar:** Inicia el proceso de desencriptación.
- **Área de Resultado:** Muestra el texto encriptado o desencriptado.
- **Botón de Copiar:** Copia el texto del área de resultado al portapapeles del usuario.
2. ### Proceso de Encriptación ###
Al presionar el botón **"Encriptar"**, el texto ingresado se transforma según las siguientes reglas:

**e** se convierte en **enter**.&nbsp;
**i** se convierte en **imes**.&nbsp;
**a** se convierte en **ai**.&nbsp;
**o** se convierte en **ober**.&nbsp;
**u** se convierte en **ufat**.&nbsp;
**Ejemplo:**

Entrada: **"Hola Mundo"**
Salida Encriptada: **"Hoberlai Mufatndober"**

3. ### Proceso de Desencriptación ###
Al presionar el botón "Desencriptar", el texto encriptado vuelve a su forma original:

**enter** se convierte en **e**
**imes** se convierte en **i**
**ai** se convierte en **a**
**ober** se convierte en **o**
**ufat** se convierte en **u**
Ejemplo:

Entrada Encriptada: **"Hoberlai Mufatndober"**
Salida: **"Hola Mundo"**

4. ### Copiar Texto ###
Cuando el usuario hace clic en el botón "Copiar", el texto en el área de resultado se selecciona y se copia al portapapeles del usuario, permitiendo pegar el texto en otro lugar.


## Contribuciones 
¡Las contribuciones son bienvenidas! Si tienes sugerencias, errores que reportar o deseas agregar nuevas funcionalidades, siéntete libre de abrir un issue o enviar un pull request.

## Licencia 
Este proyecto está licenciado bajo la Licencia MIT. Para más detalles, consulta el archivo LICENSE.

## Autor
Creado por Luigi Gamarra.

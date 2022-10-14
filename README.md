# CardValidation
Desarrollo de una aplicación que permite validar tarjetas de crédito para agregar una forma de pago, con funcionalidad para ocultar todos los dígitos de una tarjeta menos los últimos cuatro.

## Requerimientos del proyecto proporcionados por el cliente
Construir una aplicación web que le permita a un usuario validar el número de una tarjeta de crédito (usando algoritmo de Luhn). Además, implementar funcionalidad para ocultar todos los dígitos de una tarjeta menos los últimos cuatro.

## Herramientas utilizadas en el proyecto

Para este proyecto se utiliza:
- Javascript
- HTML
- Node JS
- NPM
## Aplicación
### Valida el número de tarjeta
Las validaciones correspondientes a este campo serán las siguientes:
- El usuario podrá ingresar hasta 19 dígitos en el campo.
- El campo solo acepta números.
- El campo elimina los espacios colocados por el usuario.

#### Funcionalidad:
- El número se actualiza de forma dinámica en la imagen que representa gráficamente la tarjeta física.
- Se ocultan mediante un # los dígitos actualizados dinámicamente, solo se muestran los últimos 4.
- Después presionar el botón “agregar” se valida el número de tarjeta y muestra, según sea el caso, si se trata de una tarjeta visa o mastercard.

### Detalles de la tarjeta
#### Nombre:
- El campo solo acepta letras.
- El nombre se actualiza de forma dinámica en la representación gráfica de la tarjeta.

#### Datos de expiración:
- Campo que permite seleccionar el mes en un listado en formato “mes” que se actualiza de forma dinámica en la representación gráfica de la tarjeta en formato “MM”.
- Campo que permite seleccionar el año de un listado en formato “AAAA” que se actualiza de forma dinámica en la representación gráfica de la tarjeta en formato “AA”.

#### CVV:
- El usuario solo podrá ingresar 3 dígitos.
- El campo solo acepta números.
- Los números ingresados se actualizan de forma dinámica en la representación gráfica de la tarjeta.

## Desarrollado para
Laboratoria


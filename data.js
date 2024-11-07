const manuales = [
  {
      "tipo": "SSO", 
      "nombre": "Guía de Configuración para Single Sign-On (SSO) mediante protocolo OAuth", 
      "fecha": "17-10-2024",
      "importante":"",
      "descripcion": "Este manual te guía paso a paso en la configuración del inicio de sesión único (SSO) mediante el protocolo OAuth. Con esta integración, los usuarios pueden autenticarse de forma segura a través de su Proveedor de Identidad (IdP), como Google o Microsoft, sin la necesidad de ingresar credenciales adicionales.", 
      "url": "manual.html?id=sso_oauth",
      "activo": true, 
      "imagenes": ["imagenes/sso_oauth/sso_oauth_1.png",
                  "imagenes/sso_oauth/sso_oauth_2.png",
                  "imagenes/sso_oauth/sso_oauth_3.png",
                  "imagenes/sso_oauth/sso_oauth_4.png",
                  "imagenes/sso_oauth/sso_oauth_5.png",
                  "imagenes/sso_oauth/sso_oauth_6.png",
                  "imagenes/sso_oauth/sso_oauth_7.png",
                  "imagenes/sso_oauth/sso_oauth_8.png",
                  "imagenes/sso_oauth/sso_oauth_9.png"],
      "highlightDetails": [
            { x: 1030, y: 3, width: 45, height: 40 },  // Rectángulo para la primera imagen
            { x: 1050, y: 100, width: 240, height: 40 },  // Rectángulo para la segunda imagen
            { x: 1100, y: 53, width: 185, height: 35 },  // Rectángulo para la segunda imagen
            { x: 218, y: 170, width: 345, height: 35 },  // Rectángulo para la segunda imagen
            { x: 1210, y: 246, width: 85, height: 35 },  // Rectángulo para la segunda imagen
            { x: 1100, y: 95, width: 185, height: 35 },  // Rectángulo para la segunda imagen
            { x: 218, y: 355, width: 350, height: 35 },  // Rectángulo para la segunda imagen
            { x: 1210, y: 512, width: 83, height: 35 },  // Rectángulo para la segunda imagen
            { x: 210, y: 53, width: 175, height: 35 }  // Rectángulo para la segunda imagen
        ],
      "instrucciones": [
    "<p class='text-center' style='color: #2f4daa; font-size: 1.0rem; margin-top: 80px;'>Haz clic para acceder a los <strong>ajustes de la plataforma</strong>.</p>",
    "<p class='text-center' style='color: #2f4daa; font-size: 1.0rem; margin-top: 80px;'>Aquí encontrarás todas las <strong>configuraciones disponibles</strong> en la plataforma.</p>",
    "<p class='text-center' style='color: #2f4daa; font-size: 1.0rem; margin-top: 80px;'>Ingresa la palabra <strong>OMNIAUTH</strong> para buscar la configuración.</p>",
    "<p class='text-center' style='color: #2f4daa; font-size: 1.0rem; margin-top: 80px;'>Selecciona la opción <strong>General</strong>.</p>",
    "<p class='text-center' style='color: #2f4daa; font-size: 1.0rem; margin-top: 80px;'>Después de configurar todos los campos solicitados, haz clic en el botón <strong>Guardar</strong>.</p>",
    "<p class='text-center' style='color: #2f4daa; font-size: 1.0rem; margin-top: 80px;'>Ingresa la palabra <strong>DOMINIO</strong> para buscar la configuración.</p>",
    "<p class='text-center' style='color: #2f4daa; font-size: 1.0rem; margin-top: 80px;'>Aquí debes ingresar el <strong>dominio</strong> correspondiente según el proveedor que estés utilizando (Google o Microsoft).</p>",
    "<p class='text-center' style='color: #2f4daa; font-size: 1.0rem; margin-top: 80px;'>Después de configurar todos los campos solicitados, haz clic en el botón <strong>Guardar</strong>.</p>",
    "<p class='text-center' style='color: #2f4daa; font-size: 1.0rem; margin-top: 80px;'>Verás un mensaje de éxito en la parte superior. Ahora realiza pruebas iniciando sesión con un colaborador que exista en BUK y esté registrado en la aplicación del proveedor.</p>"
],
    "enlacesDocumentacion": [
        {
            "nombre": "Integración OAUTH",
            "url": "https://docs.google.com/document/d/153Z6dIywDyZQVLDG458cUdKxSISovoZ3/edit?usp=drive_link&ouid=106476513391002674895&rtpof=true&sd=true"
        },
        {
            "nombre": "OAUTH Integration English Version",
            "url": "https://docs.google.com/document/d/1y_lDcAp956WDmuiEPTSH57YxsyBa14SG/edit?usp=drive_link&ouid=106476513391002674895&rtpof=true&sd=true"
        },
        {
            "nombre": "Errores y Soluciones SSO Buk/Cliente",
            "url": "https://docs.google.com/document/d/1Rk8qPTEluJVnnHUMMT7WVBFWUFYwcWED/edit?usp=sharing&ouid=106476513391002674895&rtpof=true&sd=true"
        }
    ]
  },
  {
      "tipo": "SSO", 
      "nombre": "Guía de Configuración para Single Sign-On (SSO) mediante protocolo SAML", 
      "fecha": "17-10-2024",
      "importante": "Si has llegado a esta sección, debiste haber enviado al cliente el <strong>Identifier</strong> y el <strong>ACS</strong> para generar el XML necesario para la configuración.<br><br> \
      Las URLs se generan a partir de la URL del cliente. Por ejemplo, si la URL del cliente es <strong>buk.buk.cl</strong>, entonces el <strong>ACS</strong> y el <strong>Identifier</strong> serán los siguientes:</br></br> \
       <strong>ACS:</strong> https://buk.buk.cl/users/saml/auth </br></br> \
       <strong>Identifier:</strong> https://buk.buk.cl/users/saml/metadata </br></br> \
       Estos dos parámetros son fundamentales, ya que el cliente debe ingresarlos en su proveedor de identidad al momento de crear la aplicación.<br><br> \
       Una vez creada la aplicación, el cliente podrá descargar un archivo XML desde su proveedor.<br><br> \
       Es crucial que el colaborador con el cual se realizará la prueba exista tanto en <strong>BUK</strong> como en la aplicación creada en el proveedor de identidad.",
      "descripcion": "Este manual detalla los pasos para la configuración del inicio de sesión único (SSO) utilizando el protocolo SAML. Proporciona una explicación detallada sobre cómo generar y configurar los parámetros necesarios, como el ACS y el Identifier, además de guiar al cliente en la integración con su Proveedor de Identidad (IdP) para una autenticación segura y sin necesidad de credenciales adicionales.", 
      "url": "manual.html?id=sso_saml",
      "activo": true, 
      "imagenes": ["imagenes/sso_saml/sso_saml_1.png",
                  "imagenes/sso_saml/sso_saml_2.png",
                  "imagenes/sso_saml/sso_saml_3.png",
                  "imagenes/sso_saml/sso_saml_4.png",
                  "imagenes/sso_saml/sso_saml_5.png",
                  "imagenes/sso_saml/sso_saml_6.png"],
      "highlightDetails": [
            { x: 1030, y: 3, width: 45, height: 40 },  // Rectángulo para la primera imagen
            { x: 1050, y: 100, width: 240, height: 40 },  // Rectángulo para la segunda imagen
            { x: 1100, y: 53, width: 185, height: 35 },  // Rectángulo para la segunda imagen
            { x: 300, y: 160, width: 50, height: 35 },  // Rectángulo para la segunda imagen
            { x: 1210, y: 493, width: 88, height: 35 },  // Rectángulo para la segunda imagen
            { x: 210, y: 53, width: 175, height: 35 }  // Rectángulo para la segunda imagen
        ],
      "instrucciones": [
    "<p class='text-center' style='color: #2f4daa; font-size: 1.0rem; margin-top: 80px;'>Haz clic para acceder a los <strong>ajustes de la plataforma</strong>.</p>",
    "<p class='text-center' style='color: #2f4daa; font-size: 1.0rem; margin-top: 80px;'>Aquí encontrarás todas las <strong>configuraciones disponibles</strong> en la plataforma.</p>",
    "<p class='text-center' style='color: #2f4daa; font-size: 1.0rem; margin-top: 80px;'>Ingresa la palabra <strong>SAML</strong> para encontrar la configuración específica.</p>",
    
    "<table class='table table-striped table-bordered'> \
        <thead style='background-color: #2f4daa; color: white;'> \
            <tr> \
                <th>Parámetro</th> \
                <th>Descripción</th> \
            </tr> \
        </thead> \
        <tbody> \
            <tr> \
                <td><strong>Habilitar SAML</strong></td> \
                <td>Activa el servicio de autenticación <strong>SAML</strong>.</td> \
            </tr> \
            <tr> \
                <td><strong>Dominios a autenticar vía SAML</strong></td> \
                <td>Ingresa los dominios que el cliente necesita autenticar, por ejemplo: buk.cl. Se pueden ingresar más de uno, separados por <strong>punto y coma</strong>.</td> \
            </tr> \
            <tr> \
                <td><strong>Issuer/Audience URL</strong></td> \
                <td>Ingresa el <strong>Identifier</strong> enviado al cliente al configurar la aplicación en el proveedor.</td> \
            </tr> \
            <tr> \
                <td><strong>Authentication Context (opcional)</strong></td> \
                <td>Se recomienda usar <code>urn:oasis:names:tc:SAML:2.0:ac:classes:unspecified</code>.</td> \
            </tr> \
            <tr> \
                <td><strong>URL del IdP para SSO</strong></td> \
                <td>Se encuentra en el XML y es la URL que BUK utilizará para consultar al proveedor de autenticación sobre la existencia del usuario.</td> \
            </tr> \
            <tr> \
                <td><strong>URL del IdP para SLO</strong></td> \
                <td>Se encuentra en el XML y se usa para cerrar sesión en el proveedor SAML cuando se cierra sesión en BUK.</td> \
            </tr> \
            <tr> \
                <td><strong>Certificado de IdP</strong></td> \
                <td>Se encuentra en el XML y es el certificado que garantiza las transacciones entre el Proveedor de Identidad y el Proveedor de Servicios (SP). Generalmente comienza con <code>MIIC8</code> y está delimitado por las etiquetas <code>&lt;/X509Certificate&gt;</code>.</td> \
            </tr> \
            <tr> \
                <td><strong>Hash del certificado de IdP</strong></td> \
                <td>Es la huella digital del certificado del proveedor de identidad. Debe estar separada por dos puntos (ejemplo: 45:A7:88). No es necesario si ya tienes el certificado IdP.</td> \
            </tr> \
            <tr> \
                <td><strong>URL IdP Logout forzada</strong></td> \
                <td>URL de destino para el <strong>Single Log Out</strong>. Dejar vacío si solo quieres cerrar sesión en BUK.</td> \
            </tr> \
            <tr> \
                <td><strong>Algoritmo del hash del certificado</strong></td> \
                <td>Algoritmo utilizado para el hash del certificado. Generalmente se usa <strong>sha256</strong>.</td> \
            </tr> \
        </tbody> \
    </table>",
    
    "<p class='text-center' style='color: #2f4daa; font-size: 1.0rem; margin-top: 80px;'>Después de configurar todos los campos, haz clic en el botón <strong>Guardar</strong>.</p>",
    
    "<p class='text-center' style='color: #2f4daa; font-size: 1.0rem; margin-top: 80px;'>Verás un mensaje de éxito en la parte superior. Ahora, realiza pruebas iniciando sesión con un colaborador que exista en BUK y esté registrado en la aplicación del proveedor.</p>"
],
    "enlacesDocumentacion": [
        {
            "nombre": "Integración SAML",
            "url": "https://docs.google.com/document/d/1SxbkmYYhMHrbSN3sJg1ldQmgL94PCEPm/edit?usp=sharing&ouid=114187329860437263985&rtpof=true&sd=true"
        },
        {
            "nombre": "SAML Integration English Version",
            "url": "https://docs.google.com/document/d/1uA8rPuCZrQkfMsKsBe451NL0jAZMmsy4/edit?usp=sharing&ouid=114187329860437263985&rtpof=true&sd=true"
        },
        {
            "nombre": "Errores y Soluciones SSO Buk/Cliente",
            "url": "https://docs.google.com/document/d/1Rk8qPTEluJVnnHUMMT7WVBFWUFYwcWED/edit?usp=sharing&ouid=106476513391002674895&rtpof=true&sd=true"
        }
    ]
  },
  {
    "tipo": "SFTP", 
    "nombre": "Guía de Configuración para Envío de Archivos Bancarios mediante SFTP", 
    "fecha": "23-10-2024",
    "importante":"",
    "descripcion": "Este manual proporciona una guía paso a paso para la configuración del protocolo SFTP, permitiendo el envío automatizado de archivos bancarios. Incluye la creación de conexiones seguras, la configuración de parámetros esenciales como la URL del servidor, la ruta de almacenamiento, el uso de encriptación y llaves SSH.", 
    "url": "manual.html?id=banco_sftp",
    "activo": true, 
    "imagenes": ["imagenes/banco_sftp/banco_a_sftp_1.png",
                 "imagenes/banco_sftp/banco_a_sftp_2.png",
                 "imagenes/banco_sftp/banco_a_sftp_3.png",
                 "imagenes/banco_sftp/banco_a_sftp_4.png",
                 "imagenes/banco_sftp/banco_a_sftp_5.png",
                 "imagenes/banco_sftp/banco_a_sftp_6.png",
                 "imagenes/banco_sftp/banco_a_sftp_7.png",
                 "imagenes/banco_sftp/banco_a_sftp_8.png",
                 "imagenes/banco_sftp/banco_a_sftp_9.png",
                 "imagenes/banco_sftp/banco_a_sftp_10.png",
                 "imagenes/banco_sftp/banco_a_sftp_11.png",
                 "imagenes/banco_sftp/banco_a_sftp_12.png",
                 "imagenes/banco_sftp/banco_a_sftp_13.png",
                 "imagenes/banco_sftp/banco_a_sftp_14.png",
                 "imagenes/banco_sftp/banco_a_sftp_15.png",
                 "imagenes/banco_sftp/banco_a_sftp_16.png",
                 "imagenes/banco_sftp/banco_a_sftp_17.png",
                 "imagenes/banco_sftp/banco_a_sftp_18.png",
                 "imagenes/banco_sftp/banco_a_sftp_19.png"
              ],
    "highlightDetails": [
          { x: 1030, y: 3, width: 45, height: 40 },
          { x: 1045, y: 97, width: 240, height: 40 },
          { x: 1100, y: 50, width: 185, height: 40 },
          { x: 300, y: 368, width: 49, height: 40 },
          { x: 1210, y: 444, width: 80, height: 40 },
          { x: 1, y: 433, width: 50, height: 40 },
          { x: 40, y: 194, width: 100, height: 40 },
          { x: 320, y: 92, width: 95, height: 40 },
          { x: 535, y: 375, width: 100, height: 40 },
          { x: 227, y: 128, width: 520, height: 40 },
          { x: 235, y: 183, width: 500, height: 36 },
          { x: 650, y: 470, width: 90, height: 36 },
          { x: 5, y: 145, width: 35, height: 40 },
          { x: 40, y: 165, width: 120, height: 30 },
          { x: 790, y: 195, width: 57, height: 30 },
          { x: 575, y: 276, width: 40, height: 40 },
          { x: 530, y: 340, width: 80, height: 35 },
          { x: 1060, y: 20, width: 230, height: 80 },
          { x: 1060, y: 20, width: 230, height: 60 },
      ],
    "instrucciones": [
    "<p class='text-center' style='color: #2f4daa; font-size: 1.0rem; margin-top: 80px;'>Haz clic para acceder a los <strong>ajustes de la plataforma</strong>.</p>",
    "<p class='text-center' style='color: #2f4daa; font-size: 1.0rem; margin-top: 80px;'>Aquí encontrarás todas las <strong>configuraciones disponibles</strong> en la plataforma.</p>",
    "<p class='text-center' style='color: #2f4daa; font-size: 1.0rem; margin-top: 80px;'>Debes ingresar la palabra <strong>BANCO</strong> para encontrar la configuración específica.</p>",
    "<p class='text-center' style='color: #2f4daa; font-size: 1.0rem; margin-top: 80px;'>Activamos la opción <strong>Integrar Envío de Archivos de Bancos</strong>.</p>",
    "<p class='text-center' style='color: #2f4daa; font-size: 1.0rem; margin-top: 80px;'>Haz clic en <strong>Guardar</strong> para confirmar la activación.</p>",
    "<p class='text-center' style='color: #2f4daa; font-size: 1.0rem; margin-top: 80px;'>Selecciona <strong>Marketplace</strong> para ir a la configuración del servidor SFTP.</p>",
    "<p class='text-center' style='color: #2f4daa; font-size: 1.0rem; margin-top: 80px;'>Selecciona <strong>Integraciones</strong>. Aquí verás todas las integraciones que maneja BUK.</p>",
    "<p class='text-center' style='color: #2f4daa; font-size: 1.0rem; margin-top: 80px;'>Selecciona <strong>Contratadas</strong>.</p>",
    "<p class='text-center' style='color: #2f4daa; font-size: 1.0rem; margin-top: 80px;'>Aquí podrás configurar la <strong>integración de bancos mediante SFTP</strong>.</p>",
    "<p class='text-center' style='color: #2f4daa; font-size: 1.0rem; margin-top: 80px;'>Verás el listado de <strong>razón social (empresas)</strong>, ya que la configuración es por razón social.</p>",
    
    "<table class='table table-striped table-bordered'> \
        <thead style='background-color: #2f4daa; color: white;'> \
            <tr> \
                <th>Parámetro</th> \
                <th>Descripción</th> \
            </tr> \
        </thead> \
        <tbody> \
            <tr> \
                <td><strong>Backup URL</strong></td> \
                <td>Especifica si tu servidor es <strong>SFTP</strong> o <strong>FTP</strong> y agrega tu URL, compuesta por el tipo de servidor, usuario, dirección IP o DNS y el puerto de conexión. Ejemplo: sftp://usuario@127.0.0.1:22</td> \
            </tr> \
            <tr> \
                <td><strong>Backup Password</strong></td> \
                <td>Corresponde a la <strong>contraseña del servidor</strong> que estás configurando.</td> \
            </tr> \
            <tr> \
                <td><strong>Backup Path</strong></td> \
                <td>La ruta donde se almacenará el archivo en tu servidor. Ejemplo: <code>'/etc/tmp/'</code></td> \
            </tr> \
            <tr> \
                <td><strong>Encriptación Activa</strong></td> \
                <td>Si necesitas que tu archivo viaje encriptado, activa esta casilla.</td> \
            </tr> \
            <tr> \
                <td><strong>Llave Pública</strong></td> \
                <td>Las llaves SSH o públicas se utilizan para autenticación en servidores remotos. Si utilizas SSH, no es necesaria la contraseña.</td> \
            </tr> \
            <tr> \
                <td><strong>Recipiente de la llave pública</strong></td> \
                <td>Un correo o identificador del dueño de la llave pública, para respaldo.</td> \
            </tr> \
        </tbody> \
    </table>",
    
    "<p class='text-center' style='color: #2f4daa; font-size: 1.0rem; margin-top: 80px;'>Haz clic en <strong>Guardar</strong> para confirmar la configuración.</p>",
    "<p class='text-center' style='color: #2f4daa; font-size: 1.0rem; margin-top: 80px;'>Haz clic en <strong>Administrativo</strong>.</p>",
    "<p class='text-center' style='color: #2f4daa; font-size: 1.0rem; margin-top: 80px;'>Luego, selecciona <strong>Panel de Control</strong>.</p>",
    "<p class='text-center' style='color: #2f4daa; font-size: 1.0rem; margin-top: 80px;'>Expande el mes en el que deseas hacer el envío del archivo de banco.</p>",
    "<p class='text-center' style='color: #2f4daa; font-size: 1.0rem; margin-top: 80px;'>Haz clic en los <strong>tres puntos</strong> para ver más opciones.</p>",
    "<p class='text-center' style='color: #2f4daa; font-size: 1.0rem; margin-top: 80px;'>Selecciona la opción <strong>Enviar banco</strong> para comenzar el proceso.</p>",
    "<p class='text-center' style='color: #2f4daa; font-size: 1.0rem; margin-top: 80px;'>Verás cómo comienza el proceso, mostrando un porcentaje de envío.</p>",
    "<p class='text-center' style='color: #2f4daa; font-size: 1.0rem; margin-top: 80px;'>Finalmente, aparecerá la pantalla de <strong>¡Finalizado con éxito!</strong></p>"
]
},
{
  "tipo": "API", 
  "nombre": "Creación de token y conexión a Apidocs", 
  "fecha": "05-11-2024",
  "importante":"",
  "descripcion": "Veremos como configurar el token (llave) desde BUK para poder conectarnos en apidocs", 
  "url": "manual.html?id=token_api",
  "activo": false, 
  "imagenes": ["imagenes/token_api/banco_a_sftp_1.png",
               "imagenes/token_api/banco_a_sftp_2.png",
               "imagenes/token_api/banco_a_sftp_3.png",
               "imagenes/token_api/banco_a_sftp_4.png",
               "imagenes/token_api/banco_a_sftp_5.png",
               "imagenes/token_api/banco_a_sftp_6.png",
               "imagenes/token_api/banco_a_sftp_7.png",
               "imagenes/token_api/banco_a_sftp_8.png",
               "imagenes/token_api/banco_a_sftp_9.png",
               "imagenes/token_api/banco_a_sftp_10.png",
               "imagenes/token_api/banco_a_sftp_11.png",
               "imagenes/token_api/banco_a_sftp_12.png",
               "imagenes/token_api/banco_a_sftp_13.png",
               "imagenes/token_api/banco_a_sftp_14.png",
               "imagenes/token_api/banco_a_sftp_15.png",
               "imagenes/token_api/banco_a_sftp_16.png",
               "imagenes/token_api/banco_a_sftp_17.png",
               "imagenes/token_api/banco_a_sftp_18.png",
               "imagenes/token_api/banco_a_sftp_19.png"
            ],
  "highlightDetails": [
        { x: 1030, y: 3, width: 45, height: 40 },
        { x: 1045, y: 97, width: 240, height: 40 },
        { x: 1100, y: 50, width: 185, height: 40 },
        { x: 300, y: 368, width: 49, height: 40 },
        { x: 1210, y: 444, width: 80, height: 40 },
        { x: 1, y: 433, width: 50, height: 40 },
        { x: 40, y: 194, width: 100, height: 40 },
        { x: 320, y: 92, width: 95, height: 40 },
        { x: 535, y: 375, width: 100, height: 40 },
        { x: 227, y: 128, width: 520, height: 40 },
        { x: 235, y: 183, width: 500, height: 36 },
        { x: 650, y: 470, width: 90, height: 36 },
        { x: 5, y: 145, width: 35, height: 40 },
        { x: 40, y: 165, width: 120, height: 30 },
        { x: 790, y: 195, width: 57, height: 30 },
        { x: 575, y: 276, width: 40, height: 40 },
        { x: 530, y: 340, width: 80, height: 35 },
        { x: 1060, y: 20, width: 230, height: 80 },
        { x: 1060, y: 20, width: 230, height: 60 },
    ],
  "instrucciones": [
  "<p class='text-center' style='color: #2f4daa; font-size: 1.0rem; margin-top: 80px;'>Haz clic para acceder a los <strong>ajustes de la plataforma</strong>.</p>",
  "<p class='text-center' style='color: #2f4daa; font-size: 1.0rem; margin-top: 80px;'>Aquí encontrarás todas las <strong>configuraciones disponibles</strong> en la plataforma.</p>",
  "<p class='text-center' style='color: #2f4daa; font-size: 1.0rem; margin-top: 80px;'>Debes ingresar la palabra <strong>BANCO</strong> para encontrar la configuración específica.</p>",
  "<p class='text-center' style='color: #2f4daa; font-size: 1.0rem; margin-top: 80px;'>Activamos la opción <strong>Integrar Envío de Archivos de Bancos</strong>.</p>",
  "<p class='text-center' style='color: #2f4daa; font-size: 1.0rem; margin-top: 80px;'>Haz clic en <strong>Guardar</strong> para confirmar la activación.</p>",
  "<p class='text-center' style='color: #2f4daa; font-size: 1.0rem; margin-top: 80px;'>Selecciona <strong>Marketplace</strong> para ir a la configuración del servidor SFTP.</p>",
  "<p class='text-center' style='color: #2f4daa; font-size: 1.0rem; margin-top: 80px;'>Selecciona <strong>Integraciones</strong>. Aquí verás todas las integraciones que maneja BUK.</p>",
  "<p class='text-center' style='color: #2f4daa; font-size: 1.0rem; margin-top: 80px;'>Selecciona <strong>Contratadas</strong>.</p>",
  "<p class='text-center' style='color: #2f4daa; font-size: 1.0rem; margin-top: 80px;'>Aquí podrás configurar la <strong>integración de bancos mediante SFTP</strong>.</p>",
  "<p class='text-center' style='color: #2f4daa; font-size: 1.0rem; margin-top: 80px;'>Verás el listado de <strong>razón social (empresas)</strong>, ya que la configuración es por razón social.</p>",
  
  "<table class='table table-striped table-bordered'> \
      <thead style='background-color: #2f4daa; color: white;'> \
          <tr> \
              <th>Parámetro</th> \
              <th>Descripción</th> \
          </tr> \
      </thead> \
      <tbody> \
          <tr> \
              <td><strong>Backup URL</strong></td> \
              <td>Especifica si tu servidor es <strong>SFTP</strong> o <strong>FTP</strong> y agrega tu URL, compuesta por el tipo de servidor, usuario, dirección IP o DNS y el puerto de conexión. Ejemplo: sftp://usuario@127.0.0.1:22</td> \
          </tr> \
          <tr> \
              <td><strong>Backup Password</strong></td> \
              <td>Corresponde a la <strong>contraseña del servidor</strong> que estás configurando.</td> \
          </tr> \
          <tr> \
              <td><strong>Backup Path</strong></td> \
              <td>La ruta donde se almacenará el archivo en tu servidor. Ejemplo: <code>'/etc/tmp/'</code></td> \
          </tr> \
          <tr> \
              <td><strong>Encriptación Activa</strong></td> \
              <td>Si necesitas que tu archivo viaje encriptado, activa esta casilla.</td> \
          </tr> \
          <tr> \
              <td><strong>Llave Pública</strong></td> \
              <td>Las llaves SSH o públicas se utilizan para autenticación en servidores remotos. Si utilizas SSH, no es necesaria la contraseña.</td> \
          </tr> \
          <tr> \
              <td><strong>Recipiente de la llave pública</strong></td> \
              <td>Un correo o identificador del dueño de la llave pública, para respaldo.</td> \
          </tr> \
      </tbody> \
  </table>",
  
  "<p class='text-center' style='color: #2f4daa; font-size: 1.0rem; margin-top: 80px;'>Haz clic en <strong>Guardar</strong> para confirmar la configuración.</p>",
  "<p class='text-center' style='color: #2f4daa; font-size: 1.0rem; margin-top: 80px;'>Haz clic en <strong>Administrativo</strong>.</p>",
  "<p class='text-center' style='color: #2f4daa; font-size: 1.0rem; margin-top: 80px;'>Luego, selecciona <strong>Panel de Control</strong>.</p>",
  "<p class='text-center' style='color: #2f4daa; font-size: 1.0rem; margin-top: 80px;'>Expande el mes en el que deseas hacer el envío del archivo de banco.</p>",
  "<p class='text-center' style='color: #2f4daa; font-size: 1.0rem; margin-top: 80px;'>Haz clic en los <strong>tres puntos</strong> para ver más opciones.</p>",
  "<p class='text-center' style='color: #2f4daa; font-size: 1.0rem; margin-top: 80px;'>Selecciona la opción <strong>Enviar banco</strong> para comenzar el proceso.</p>",
  "<p class='text-center' style='color: #2f4daa; font-size: 1.0rem; margin-top: 80px;'>Verás cómo comienza el proceso, mostrando un porcentaje de envío.</p>",
  "<p class='text-center' style='color: #2f4daa; font-size: 1.0rem; margin-top: 80px;'>Finalmente, aparecerá la pantalla de <strong>¡Finalizado con éxito!</strong></p>"
]
}
  
];

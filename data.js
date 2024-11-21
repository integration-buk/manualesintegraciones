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
},
{
  "tipo": "BUK", 
  "nombre": "Monitoreo de LOG SFTP", 
  "fecha": "18-11-2024",
  "importante":"",
  "descripcion": "Este manual explica paso a paso cómo activar y revisar los registros de LOG al usar SFTP. Ideal para garantizar un monitoreo efectivo, resolver problemas y mantener un control detallado de las transferencias de archivos.", 
  "url": "manual.html?id=log_sftp",
  "activo": false, 
  "imagenes": ["imagenes/log_sftp/activar_log_sftp_1.png",
               "imagenes/log_sftp/activar_log_sftp_2.png",
               "imagenes/log_sftp/activar_log_sftp_3.png",
               "imagenes/log_sftp/activar_log_sftp_4.png",
               "imagenes/log_sftp/activar_log_sftp_5.png",
               "imagenes/log_sftp/activar_log_sftp_6.png",
               "imagenes/log_sftp/activar_log_sftp_7.png",
               "imagenes/log_sftp/activar_log_sftp_8.png",
               "imagenes/log_sftp/activar_log_sftp_9.png",
               "imagenes/log_sftp/activar_log_sftp_10.png",
               "imagenes/log_sftp/activar_log_sftp_11.png",
               "imagenes/log_sftp/activar_log_sftp_12.png",
               "imagenes/log_sftp/activar_log_sftp_13.png",
               "imagenes/log_sftp/activar_log_sftp_14.png",
               "imagenes/log_sftp/activar_log_sftp_15.png",
               "imagenes/log_sftp/activar_log_sftp_16.png",
               "imagenes/log_sftp/activar_log_sftp_17.png",
               "imagenes/log_sftp/activar_log_sftp_18.png",
               "imagenes/log_sftp/activar_log_sftp_19.png"
            ],
  "highlightDetails": [

        { x: 1035, y: 3, width: 35, height: 35 },
        { x: 1060, y: 97, width: 160, height: 40 },
        { x: 1120, y: 50, width: 170, height: 40 },
        { x: 300, y: 155, width: 47, height: 40 },
        { x: 1210, y: 231, width: 80, height: 40 },
        { x: 1, y: 150, width: 35, height: 35 },
        { x: 40, y: 160, width: 120, height: 40 },
        { x: 775, y: 250, width: 40, height: 40 },
        { x: 705, y: 330, width: 120, height: 35 },
        { x: 1070, y: 20, width: 230, height: 60 },
        { x: 1, y: 120, width: 35, height: 35 },
        { x: 1134, y: 4, width: 105, height: 40 },
        { x: 582, y: 572, width: 118, height: 20 },
        { x: 478, y: 360, width: 25, height: 25 },
        { x: 172, y: 149, width: 30, height: 30 },
        { x: 300, y: 112, width: 40, height: 40 },
        { x: 1135, y: 3, width: 110, height: 35 },
        { x: 1112, y: -2, width: 105, height: 25 },
        { x: 558, y: 480, width: 230, height: 20 },

        
    ],
  "instrucciones": [
  "<p class='text-center' style='color: #2f4daa; font-size: 1.0rem; margin-top: 80px;'>Haz clic para acceder a los <strong>ajustes de la plataforma</strong>.</p>",
  "<p class='text-center' style='color: #2f4daa; font-size: 1.0rem; margin-top: 80px;'>Aquí encontrarás todas las <strong>configuraciones disponibles</strong> en la plataforma.</p>",
  "<p class='text-center' style='color: #2f4daa; font-size: 1.0rem; margin-top: 80px;'>Debes ingresar la palabra <strong>Generar log</strong> para encontrar la configuración específica.</p>",
  "<p class='text-center' style='color: #2f4daa; font-size: 1.0rem; margin-top: 80px;'>Activamos la opción <strong>Generar log en Job del envío de archivos por SFTP</strong>.</p>",
  "<p class='text-center' style='color: #2f4daa; font-size: 1.0rem; margin-top: 80px;'>Haz clic en <strong>Guardar</strong> para confirmar la activación.</p>",
  "<p class='text-center' style='color: #2f4daa; font-size: 1.0rem; margin-top: 80px;'>Selecciona <strong>Administrativo</strong>.</p>",
  "<p class='text-center' style='color: #2f4daa; font-size: 1.0rem; margin-top: 80px;'>Selecciona <strong>Panel de Control</strong>.</p>",
  "<p class='text-center' style='color: #2f4daa; font-size: 1.0rem; margin-top: 80px;'>Haz clic en los <strong>tres puntos</strong> para ver más opciones.</p>",
  "<p class='text-center' style='color: #2f4daa; font-size: 1.0rem; margin-top: 80px;'>Selecciona la opción <strong>Enviar contabilidad</strong> para comenzar el proceso.</p>",
  "<p class='text-center' style='color: #2f4daa; font-size: 1.0rem; margin-top: 80px;'>Finalmente, aparecerá la pantalla de <strong>¡Finalizado con éxito!</strong></p>",
  "<p class='text-center' style='color: #2f4daa; font-size: 1.0rem; margin-top: 80px;'>Haz clic en <strong>Explore</strong>.</p>",
  "<table class='table table-striped table-bordered'> \
      <thead style='background-color: #2f4daa; color: white;'> \
          <tr> \
              <th>N°</th> \
              <th>Acción</th> \
          </tr> \
      </thead> \
      <tbody> \
          <tr> \
              <td><strong>1</strong></td> \
              <td>Seleccionamos <strong>Logs-Buk-Cl-Prod</strong></td> \
          </tr> \
          <tr> \
              <td><strong>2</strong></td> \
              <td>Seleccionamos <strong>namespace</strong></td> \
          </tr> \
          <tr> \
              <td><strong>3</strong></td> \
              <td>Seleccionamos <strong>enterprise-chile</strong></td> \
          </tr> \
          <tr> \
              <td><strong>4</strong></td> \
              <td>Debes escribir el nombre del tenant a consultar.</td> \
          </tr> \
          <tr> \
              <td><strong>5</strong></td> \
              <td>Debemos agregar otro filtro, damos clic en <strongOperations</strong, luego <strongLine filters</strong y seleccionamos <strongLine contains</strong aquí ingresamos <strong>EnviarArchivoBancoJob</strong></td> \
          </tr> \
          <tr> \
              <td><strong>6</strong></td> \
              <td>Debes seleccionar el rango de tiempo a consultar, dependiendo de cuando se ejecuto el envió .</td> \
          </tr> \
      </tbody> \
  </table> <p class='text-center' style='color: #2f4daa; font-size: 1.0rem; margin-top: 80px;'>Por último, hacemos clic en <strong>Run Query</strong> para ejecutar la consulta.</p>",
  "<p class='text-center' style='color: #2f4daa; font-size: 1.0rem; margin-top: 80px;'>Una vez ejecutada la consulta, vemos donde se encuentra la palabra <strong>EnviarArchivoBancoJob</strong> y damos clic sobre esta linea.</p>",
  "<p class='text-center' style='color: #2f4daa; font-size: 1.0rem; margin-top: 80px;'>Se expandira y encontraremos más información, aqui debemos copiar el atributo <strong>pod</strong>.</p>",
  "<p class='text-center' style='color: #2f4daa; font-size: 1.0rem; margin-top: 80px;'>Eliminamos de nuestra consulta el nombre del Tenant.</p>",
  "<p class='text-center' style='color: #2f4daa; font-size: 1.0rem; margin-top: 80px;'>Damos clic para agregar un nuevo filtro a la consulta.</p>",
  "<p class='text-center' style='color: #2f4daa; font-size: 1.0rem; margin-top: 80px;'>Debemos buscar <strong>pod</strong> y pegamos el dato copiado anteriormente, por último damos clic en <strong>Run Query</strong>.</p>",
  "<table class='table table-striped table-bordered'> \
      <thead style='background-color: #2f4daa; color: white;'> \
          <tr> \
              <th>N°</th> \
              <th>Acción</th> \
          </tr> \
      </thead> \
      <tbody> \
          <tr> \
              <td><strong>1</strong></td> \
              <td>Activamos el buscador con el siguiente comando <strong>Microsoft: Ctrl + F</strong> y en <strong>MAC: command + F</strong> y buscamos la palabra <strong>establishing connection</strong></td> \
          </tr> \
          <tr> \
              <td><strong>2</strong></td> \
              <td>Ahora debemos ir buscando el texto ingresado, pero debemos ir revisando la fecha y hora, así llegar al inicio de la ejecución.</td> \
          </tr> \
      </tbody> \
  </table>",
  //ultima tabla
  "<table class='table table-striped table-bordered'>\
  <thead style='background-color: #2f4daa; color: white;'>\
    <tr>\
      <th>Mensaje</th>\
      <th>Descripción</th>\
      <th>Explicación adicional</th>\
    </tr>\
  </thead>\
  <tbody>\
    <tr>\
      <td>SFTP CHANNEL CLOSED</td>\
      <td>El canal SFTP se cerró correctamente.</td>\
      <td>El cierre ocurre tras completar las operaciones del canal.</td>\
    </tr>\
    <tr>\
      <td>18.228.40.92 DELETE CHANNEL 0 WHICH CLOSED LOCALLY AND REMOTELY</td>\
      <td>El canal SSH (ID 0) se eliminó después de cerrarse local y remotamente.</td>\
      <td>El cierre remoto asegura que el servidor y cliente liberan recursos del canal.</td>\
    </tr>\
    <tr>\
      <td>CHANNEL_CLOSE: 0</td>\
      <td>Confirmación de que el canal SSH (ID 0) se cerró.</td>\
      <td>Los canales son estructuras de conexión lógica en SSH.</td>\
    </tr>\
    <tr>\
      <td>CHANNEL_EOF: 0</td>\
      <td>Señal de fin de datos enviada para el canal SSH (ID 0).</td>\
      <td>EOF (End of File) indica que no se enviarán más datos a través del canal.</td>\
    </tr>\
    <tr>\
      <td>CHANNEL_REQUEST: 0 EXIT-STATUS FALSE</td>\
      <td>Solicitud de cierre del canal con estado de salida false.</td>\
      <td>Un exit-status falso puede indicar que la operación terminó sin éxito.</td>\
    </tr>\
    <tr>\
      <td>USING ENCRYPT-THEN-MAC</td>\
      <td>Confirmación del uso del modo encrypt-then-MAC.</td>\
      <td>Mejora la seguridad al aplicar primero el cifrado y luego el código de autenticación (MAC).</td>\
    </tr>\
    <tr>\
      <td>CLOSING REMAINING CHANNELS (1 OPEN)</td>\
      <td>Se están cerrando los canales abiertos restantes (uno en este caso).</td>\
      <td>Esto asegura que no queden canales abiertos tras finalizar la sesión.</td>\
    </tr>\
    <tr>\
      <td>RECEIVED SFTP PACKET 101 LEN 24</td>\
      <td>Paquete SFTP recibido con tipo 101 y longitud 24.</td>\
      <td>Los paquetes SFTP contienen datos o comandos para operar archivos remotos.</td>\
    </tr>\
    <tr>\
      <td>CHANNEL_DATA: 0 28B</td>\
      <td>Se enviaron 28 bytes de datos en el canal SSH (ID 0).</td>\
      <td>`channel_data` transmite información entre cliente y servidor.</td>\
    </tr>\
    <tr>\
      <td>SENDING WRITE PACKET (2)</td>\
      <td>Envío de un paquete SFTP de escritura (ID 2).</td>\
      <td>Este comando solicita escribir datos en un archivo remoto.</td>\
    </tr>\
    <tr>\
      <td>SENDING OPEN PACKET (1)</td>\
      <td>Envío de un paquete SFTP para abrir un archivo (ID 1).</td>\
      <td>El comando `open` abre un archivo en el servidor para operaciones posteriores.</td>\
    </tr>\
    <tr>\
      <td>SENDING STAT PACKET (0)</td>\
      <td>Envío de un paquete SFTP para obtener el estado de un archivo (ID 0).</td>\
      <td>`STAT` consulta información como tamaño, permisos o fechas de modificación de un archivo.</td>\
    </tr>\
    <tr>\
      <td>NEGOTIATED VERSION IS 3</td>\
      <td>La versión del protocolo SFTP negociada es 3.</td>\
      <td>SFTP versión 3 es ampliamente soportado en implementaciones modernas.</td>\
    </tr>\
    <tr>\
      <td>SERVER REPORTS SFTP VERSION 3</td>\
      <td>El servidor confirma que utiliza la versión 3 del protocolo SFTP.</td>\
      <td>Esto asegura compatibilidad entre cliente y servidor.</td>\
    </tr>\
    <tr>\
      <td>NEGOTIATING SFTP PROTOCOL VERSION, MINE IS 6</td>\
      <td>El cliente intenta negociar la versión 6 del protocolo SFTP.</td>\
      <td>SFTP versión 6 incluye características adicionales, pero no siempre es soportado por servidores más antiguos.</td>\
    </tr>\
    <tr>\
      <td>SFTP SUBSYSTEM SUCCESSFULLY STARTED</td>\
      <td>El subsistema SFTP se inició correctamente.</td>\
      <td>El subsistema es la parte del servidor que maneja las operaciones SFTP.</td>\
    </tr>\
    <tr>\
      <td>CHANNEL_SUCCESS: 0</td>\
      <td>El canal SSH (ID 0) reportó éxito en su última operación.</td>\
      <td>Usualmente se refiere a la aceptación de una solicitud o comando.</td>\
    </tr>\
    <tr>\
      <td>CHANNEL_WINDOW_ADJUST: 0 +2097152</td>\
      <td>El tamaño de la ventana del canal SSH (ID 0) se ajustó en 2,097,152 bytes.</td>\
      <td>Esto permite manejar flujos más grandes de datos entre cliente y servidor.</td>\
    </tr>\
    <tr>\
      <td>SENDING CHANNEL REQUEST 'SUBSYSTEM'</td>\
      <td>Solicitud para iniciar un subsistema en el canal SSH.</td>\
      <td>En este caso, el subsistema solicitado es SFTP.</td>\
    </tr>\
    <tr>\
      <td>REQUESTING SFTP SUBSYSTEM</td>\
      <td>Solicitud de inicio del subsistema SFTP.</td>\
      <td>Este comando habilita las funciones SFTP dentro de la conexión SSH.</td>\
    </tr>\
    <tr>\
      <td>CHANNEL_OPEN_CONFIRMATION: 0 0 0 32768</td>\
      <td>Confirmación de apertura del canal SSH (ID 0) con un tamaño inicial de ventana de 32,768 bytes.</td>\
      <td>La ventana controla cuántos datos se pueden enviar sin esperar confirmación.</td>\
    </tr>\
    <tr>\
      <td>GLOBAL REQUEST RECEIVED: HOSTKEYS-00@OPENSSH.COM FALSE</td>\
      <td>Se recibió una solicitud global relacionada con las claves del host.</td>\
      <td>Estas solicitudes son específicas de OpenSSH y no siempre son relevantes para la operación principal.</td>\
    </tr>\
    <tr>\
      <td>PASSWORD SUCCEEDED</td>\
      <td>La autenticación mediante contraseña fue exitosa.</td>\
      <td>Este es uno de los métodos de autenticación soportados por SSH.</td>\
    </tr>\
    <tr>\
      <td>TRYING PASSWORD</td>\
      <td>Intento de autenticación usando una contraseña.</td>\
      <td>La autenticación con contraseña es menos segura que el uso de claves públicas.</td>\
    </tr>\
    <tr>\
      <td>COULD NOT CONNECT TO SSH-AGENT: AGENT NOT CONFIGURED</td>\
      <td>Falló la conexión con el agente SSH.</td>\
      <td>El agente SSH almacena claves privadas en la memoria para simplificar autenticaciones.</td>\
    </tr>\
    <tr>\
      <td>CONNECTING TO SSH-AGENT</td>\
      <td>Intento de conexión al agente SSH.</td>\
      <td>Permite usar claves privadas sin necesidad de ingresarlas manualmente.</td>\
    </tr>\
    <tr>\
      <td>TRYING PUBLICKEY</td>\
      <td>Intento de autenticación usando una clave pública.</td>\
      <td>Este método es más seguro que la autenticación con contraseña.</td>\
    </tr>\
    <tr>\
      <td>NONE FAILED</td>\
      <td>El método de autenticación none falló.</td>\
      <td>SSH intenta inicialmente el método none como una opción predeterminada, pero usualmente no está permitido.</td>\
    </tr>\
    <tr>\
      <td>ALLOWED METHODS: PUBLICKEY,PASSWORD</td>\
      <td>Métodos de autenticación permitidos: clave pública y contraseña.</td>\
      <td>Esto indica las opciones disponibles según la configuración del servidor SSH.</td>\
    </tr>\
    <tr>\
      <td>TRYING NONE</td>\
      <td>Intento inicial de autenticación sin usar ningún método.</td>\
      <td>Esto ocurre antes de usar métodos como clave pública o contraseña.</td>\
    </tr>\
    <tr>\
      <td>BEGINNING AUTHENTICATION OF 'BUKSFTP'</td>\
      <td>Inicio del proceso de autenticación para el usuario buksftp.</td>\
      <td>Identifica al usuario que intenta conectarse.</td>\
    </tr>\
    <tr>\
      <td>EXCHANGING KEYS</td>\
      <td>Intercambio de claves para establecer un canal seguro.</td>\
      <td>Este proceso utiliza algoritmos como ECDH para establecer cifrado.</td>\
    </tr>\
    <tr>\
      <td>* LANGUAGE_SERVER:</td>\
      <td>Sin especificar el idioma del servidor SSH.</td>\
      <td>Esto generalmente indica que no se negoció un idioma específico para mensajes SSH del servidor.</td>\
    </tr>\
    <tr>\
      <td>* LANGUAGE_CLIENT:</td>\
      <td>Sin especificar el idioma del cliente SSH.</td>\
      <td>De manera similar al servidor, no se definió un idioma para el cliente SSH.</td>\
    </tr>\
    <tr>\
      <td>* COMPRESSION_SERVER: NONE</td>\
      <td>El servidor no usa compresión para la transmisión de datos.</td>\
      <td>La compresión puede reducir el uso de ancho de banda, pero puede no ser necesaria dependiendo del caso.</td>\
    </tr>\
    <tr>\
      <td>* COMPRESSION_CLIENT: NONE</td>\
      <td>El cliente no usa compresión para la transmisión de datos.</td>\
      <td>La compresión es opcional en conexiones SSH.</td>\
    </tr>\
    <tr>\
      <td>* HMAC_SERVER: HMAC-SHA2-512-ETM@OPENSSH.COM</td>\
      <td>El servidor utiliza HMAC-SHA2-512 para la autenticación de mensajes.</td>\
      <td>HMAC (Hash-Based Message Authentication Code) asegura la integridad de los mensajes.</td>\
    </tr>\
    <tr>\
      <td>* HMAC_CLIENT: HMAC-SHA2-512-ETM@OPENSSH.COM</td>\
      <td>El cliente utiliza HMAC-SHA2-512 para la autenticación de mensajes.</td>\
      <td>Coincidir en los métodos HMAC asegura compatibilidad entre cliente y servidor.</td>\
    </tr>\
    <tr>\
      <td>* ENCRYPTION_CLIENT: AES256-CTR</td>\
      <td>El cliente usa AES-256 en modo CTR para cifrar datos.</td>\
      <td>AES-256 es un algoritmo de cifrado robusto, y CTR (Counter Mode) ofrece alta seguridad y rendimiento.</td>\
    </tr>\
    <tr>\
      <td>* ENCRYPTION_SERVER: AES256-CTR</td>\
      <td>El servidor usa AES-256 en modo CTR para cifrar datos.</td>\
      <td>Ambos lados deben acordar el algoritmo de cifrado para establecer una conexión segura.</td>\
    </tr>\
    <tr>\
      <td>* HOST_KEY: SSH-ED25519</td>\
      <td>El servidor utiliza una clave host ED25519 para autenticación.</td>\
      <td>ED25519 es un esquema de clave pública rápido y seguro basado en curvas elípticas.</td>\
    </tr>\
    <tr>\
      <td>* KEX: ECDH-SHA2-NISTP521</td>\
      <td>El intercambio de claves utiliza ECDH con SHA-2 y la curva NIST P-521.</td>\
      <td>ECDH (Elliptic Curve Diffie-Hellman) es un método eficiente y seguro para generar claves compartidas.</td>\
    </tr>\
    <tr>\
      <td>NEGOTIATED:</td>\
      <td>Algoritmos de seguridad negociados para la sesión SSH.</td>\
      <td>Incluye cifrado, autenticación y verificación de integridad.</td>\
    </tr>\
    <tr>\
      <td>NEGOTIATING ALGORITHMS</td>\
      <td>El cliente y el servidor están negociando los algoritmos para la conexión SSH.</td>\
      <td>Este proceso define cómo se autenticarán y cifrarán los datos en la sesión.</td>\
    </tr>\
    <tr>\
      <td>GOT KEXINIT FROM SERVER</td>\
      <td>El servidor envió un paquete KEXINIT para iniciar el intercambio de claves.</td>\
      <td>Este paquete define las preferencias de algoritmos del servidor.</td>\
    </tr>\
    <tr>\
      <td>RECEIVED PACKET NR 0 TYPE 20 LEN 1076</td>\
      <td>El cliente recibió el primer paquete SSH del servidor con tipo 20 y longitud 1076.</td>\
      <td>El tipo 20 corresponde a un paquete KEXINIT, que inicia la negociación de algoritmos de intercambio de claves.</td>\
    </tr>\
    <tr>\
      <td>READ 1080 BYTES</td>\
      <td>El cliente leyó 1080 bytes de datos del servidor.</td>\
      <td>Esta es una operación de lectura de datos brutos desde el socket de la conexión TCP.</td>\
    </tr>\
    <tr>\
      <td>SENT 856 BYTES</td>\
      <td>El cliente envió 856 bytes al servidor.</td>\
      <td>El paquete probablemente contiene información para continuar con la negociación de algoritmos.</td>\
    </tr>\
    <tr>\
      <td>QUEUEING PACKET NR 0 TYPE 20 LEN 852</td>\
      <td>El cliente puso en cola el paquete número 0, de tipo 20 y longitud 852 para ser enviado.</td>\
      <td>La longitud menor indica que el cliente envió un paquete más compacto, quizás con preferencias específicas.</td>\
    </tr>\
    <tr>\
      <td>SENDING KEXINIT</td>\
      <td>Envío del paquete KEXINIT al servidor.</td>\
      <td>Este paquete incluye las preferencias del cliente para el intercambio de claves.</td>\
    </tr>\
    <tr>\
      <td>REMOTE IS 'SSH-2.0-OPENSSH_8.2P1 UBUNTU-4UBUNTU0.11'</td>\
      <td>El servidor usa OpenSSH versión 8.2p1.</td>\
      <td>La versión ayuda a identificar posibles vulnerabilidades o configuraciones específicas.</td>\
    </tr>\
    <tr>\
      <td>LOCAL IS 'SSH-2.0-RUBY/NET::SSH_7.2.1 X86_64-LINUX'</td>\
      <td>El cliente usa Ruby Net::SSH versión 7.2.1.</td>\
      <td>Especifica el software cliente y su versión.</td>\
    </tr>\
    <tr>\
      <td>NEGOTIATING PROTOCOL VERSION</td>\
      <td>Negociación de la versión del protocolo SSH.</td>\
      <td>Generalmente, SSH usa la versión 2.0.</td>\
    </tr>\
    <tr>\
      <td>CONNECTION ESTABLISHED</td>\
      <td>Conexión inicial establecida con éxito.</td>\
      <td>Indica que la conexión TCP al servidor fue aceptada y está lista para iniciar SSH.</td>\
    </tr>\
    <tr>\
      <td>ESTABLISHING CONNECTION TO 18.228.40.92:998</td>\
      <td>Iniciando conexión al servidor en la dirección IP 18.228.40.92 y puerto 998.</td>\
      <td>El puerto 998 es un puerto no estándar; el predeterminado para SSH es el puerto 22.</td>\
    </tr>\
  </tbody>\
</table>"
],
    "enlacesDocumentacion": [
        {
            "nombre": "LOGS SFTP",
            "url": "https://docs.google.com/document/d/1SxbkmYYhMHrbSN3sJg1ldQmgL94PCEPm/edit?usp=sharing&ouid=114187329860437263985&rtpof=true&sd=true"
        }
    ]
}
  
];




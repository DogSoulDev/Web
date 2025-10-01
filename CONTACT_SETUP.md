# 📧 Contact Form Setup - Formspree

## IMPORTANTE: Configuración del Formulario de Contacto

El formulario de contacto usa **Formspree** (servicio gratuito) para enviar emails directamente a tu correo.

### 🔧 Pasos para Activar el Formulario:

1. **Ve a Formspree**: https://formspree.io/
2. **Crea una cuenta gratuita** con tu email: dogsouldev@protonmail.com
3. **Crea un nuevo formulario**:
   - Click en "New Form"
   - Nombre: "Portfolio Contact Form"
   - Email: dogsouldev@protonmail.com
4. **Copia tu Form ID**:
   - Formspree te dará un ID único como: `xanyogkg`
   - La URL completa será: `https://formspree.io/f/xanyogkg`
5. **Actualiza el código**:
   - Abre: `js/views/contactView.js`
   - Busca la línea: `const response = await fetch('https://formspree.io/f/xanyogkg', {`
   - Reemplaza `xanyogkg` con tu Form ID real

### ✅ Características del Formulario:

- ✅ **Envío directo a tu email**: Los mensajes llegan a dogsouldev@protonmail.com
- ✅ **Seguridad completa**: Sanitización de inputs, validación, sin XSS
- ✅ **Sin página de servidor**: Todo funciona desde el cliente (GitHub Pages)
- ✅ **Fallback a mailto**: Si Formspree falla, abre el cliente de email
- ✅ **Información del usuario**: Incluye nombre, email y mensaje para responder

### 📨 Qué Recibe el Usuario:

Cuando alguien envía el formulario, tú recibes un email con:
- **From**: dogsouldev@protonmail.com (vía Formspree)
- **Reply-To**: email del usuario (puedes responder directamente)
- **Subject**: "Portfolio Contact from [nombre]"
- **Body**:
  ```
  Name: [nombre del usuario]
  Email: [email del usuario]
  
  Message:
  [mensaje del usuario]
  ```

### 🎁 Plan Gratuito de Formspree:

- ✅ 50 envíos por mes (suficiente para portfolio)
- ✅ Email notifications
- ✅ Spam filtering
- ✅ File uploads disabled (más seguro)
- ✅ AJAX submissions
- ✅ Custom confirmation messages

### 🔒 Seguridad Implementada:

1. **Sanitización**: Elimina HTML tags y caracteres peligrosos
2. **Validación**: Email regex, longitud de mensajes
3. **Rate limiting**: Formspree previene spam
4. **CORS**: Solicitudes solo desde tu dominio
5. **No file uploads**: Sin posibilidad de enviar archivos maliciosos

### 🚀 Una Vez Configurado:

El formulario funcionará automáticamente:
1. Usuario completa el formulario
2. Click en "SEND MESSAGE"
3. Se envía a Formspree
4. Formspree reenvía a dogsouldev@protonmail.com
5. Usuario ve mensaje de éxito
6. Tú recibes el email con toda la información

---

**Nota**: He usado un ID de ejemplo (`xanyogkg`). Debes reemplazarlo con tu Form ID real de Formspree.

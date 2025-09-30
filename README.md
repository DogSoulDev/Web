# DogSoulDev Web Portfolio

Web personal con temática hacker, oscura y divertida. Portfolio, proyectos, reseñas y más.

## Estructura del Proyecto (MVC)

```
Web/
│  index.html           # Entrada principal, conecta con el controlador JS
│  README.md            # Documentación del proyecto
│  .gitignore           # Archivos ignorados por Git
│
├─ assets/
│   ├─ css/
│   │    style.css      # Estilos globales y de componentes (View)
│   ├─ js/
│   │    main.js        # Controlador principal (Controller)
│   │    models.js      # Modelos de datos (Model)
│   │    views.js       # Renderizado de vistas (View)
│   │    controllers/   # Controladores específicos (Controller)
│   └─ img/             # Imágenes y recursos
```

## Patrón de Arquitectura: MVC
- **Model**: Estructura y gestión de datos (proyectos, reseñas, usuario, etc.)
- **View**: Renderizado y actualización de la interfaz (HTML/CSS/JS)
- **Controller**: Lógica de interacción, validación y comunicación entre Model y View

## Buenas Prácticas
- Principios SOLID, DRY, KISS
- Código limpio, modular y seguro
- Validación y escape de entradas de usuario
- Preparado para escalabilidad y actualizaciones

## Objetivo
Crear una web moderna, segura y sorprendente para mostrar mi experiencia y proyectos, cumpliendo 100% el patrón MVC.

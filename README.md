# Cyberpunk Hacker Portfolio# Portfolio Web README



Portfolio profesional para experto en ciberseguridad, inspirado en la arquitectura de [said7388/developer-portfolio](https://github.com/said7388/developer-portfolio), pero con temática hacker/cyberpunk y sin dependencias externas (solo HTML, CSS y JS puro).



## CaracterísticasEsta web sigue la estructura de los portfolios más populares en GitHub, optimizada para GitHub Pages y con arquitectura MVC.

- Arquitectura escalable y modular (MVC)

- Código seguro, sin posibilidad de inyección ni ataques comunes

- Buenas prácticas: SOLID, DRY, KISS

- Compatible con GitHub Pages## Estructura

- Efectos visuales cyberpunk/hacker

- Ejemplos de proyectos, skills, experiencia y contacto- index.html



## Estructura de carpetas- style.css

```

assets/         # Recursos estáticos (fuentes, SVG, etc.)- js/

css/            # Hojas de estilo

js/             # Lógica principal  - main.js

  controllers/  # Controladores MVC

  models/       # Modelos de datos  - models/

  views/        # Vistas

img/            # Imágenes  - views/

icons/          # Iconos SVG

index.html      # Página principal  - controllers/

README.md       # Información del proyecto

```- assets/



## Seguridad  - images/

- Validación estricta de datos en formularios

- Escape de contenido dinámico  - icons/

- Sin eval, innerHTML ni funciones inseguras

- Sin dependencias externas

- Uso de Content Security Policy (CSP)

## Secciones

## Buenas prácticas

- Código limpio, comentado y modular- Home (nombre, foto, tagline)# DogSoulDev Web Portfolio

- Principios SOLID, DRY, KISS

- Separación de responsabilidades- Proyectos

- Estructura MVC

- Experiencia/EducaciónWeb personal con temática hacker, oscura y divertida. Portfolio, proyectos, reseñas y más.

## Despliegue

- Listo para GitHub Pages- Skills



## Autor- Contacto## Estructura del Proyecto (MVC)

DogSoulDev

- Social buttons

- Tema oscuro/claro```

- Animaciones y responsiveWeb/

│  index.html           # Entrada principal, conecta con el controlador JS

## Cómo desplegar en GitHub Pages│  README.md            # Documentación del proyecto

1. Haz push a la rama `main`.│  .gitignore           # Archivos ignorados por Git

2. Activa GitHub Pages en la configuración del repo.│

3. Selecciona la rama `main` como fuente.├─ assets/

│   ├─ css/

---│   │    style.css      # Estilos globales y de componentes (View)

Adaptado y automatizado por GitHub Copilot.│   ├─ js/

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

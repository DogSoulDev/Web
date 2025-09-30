# Portfolio Web README



Esta web sigue la estructura de los portfolios más populares en GitHub, optimizada para GitHub Pages y con arquitectura MVC.



## Estructura

- index.html

- style.css

- js/

  - main.js

  - models/

  - views/

  - controllers/

- assets/

  - images/

  - icons/



## Secciones

- Home (nombre, foto, tagline)# DogSoulDev Web Portfolio

- Proyectos

- Experiencia/EducaciónWeb personal con temática hacker, oscura y divertida. Portfolio, proyectos, reseñas y más.

- Skills

- Contacto## Estructura del Proyecto (MVC)

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

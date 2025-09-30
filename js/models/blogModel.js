// BlogModel - Datos de la sección Blog
export const BlogModel = {
  async getPosts() {
    // Ejemplo estático, puedes conectar a una API si lo deseas
    return [
      {
        title: 'Cómo dibujar tu primer avatar manga',
        url: 'https://akirayamada.dev/blog/avatar-manga',
        date: '2025-03-10',
        description: 'Guía paso a paso para crear un avatar manga en blanco y negro.'
      },
      {
        title: 'Seguridad digital en portafolios manga',
        url: 'https://akirayamada.dev/blog/seguridad-manga',
        date: '2025-04-02',
        description: 'Cómo proteger tu web y tu arte en el mundo digital.'
      },
      {
        title: 'Herramientas para interfaces dibujadas a mano',
        url: 'https://akirayamada.dev/blog/ui-manga',
        date: '2025-05-18',
        description: 'Recopilación de recursos y apps para crear UIs estilo manga.'
      }
    ];
  }
};

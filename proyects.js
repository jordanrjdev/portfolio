export const proyects = [
  {
    name: "Bot de Telegram 🤖",
    slug: "bot-telegram",
    description:
      "Este proyecto lo llevé a cabo ya que estaba muy intrigado de como se realizan los bots de telegram ya que recientemente habia leido un post de twitter en el cual explicaban como hacer esto era más fácil de lo quer parecia por lo cual quise llevarlo mas allá y ponerlo a prueba el código actualmente está en github. Este bot te permite hacer varias cosas como descargar videos de youtube ó convertirlos a mp3 con tan solo un link.",
    repository: "https://github.com/jordanrjdev/telegram-bot",
    technologies: ["Nodejs"],
  },
  {
    name: "Funsiba 📚",
    slug: "funsiba",
    description:
      "Este sistema es un proyecto el cual busca ayudar a la fundación Funsiba para fomentar la educación en sus integrantes lo cual es una buena causa y estamos poniendole mucho empeño para que este proyecto pueda estar en producción estas semanas. También hemos estado haciendo que el proyecto sea escalable y tenga buenas practicas de desarrollo tal como en el frontend y en el backend. Incluso los llamados a la base de datos se está haciendo mediante procedimientos almacenados",
    repository: "https://github.com/jordanrjdev/sinbarreras",
    technologies: ["Svelte", "Nodejs", "TypeScript", "MySql", "Docker"],
  },
  {
    name: "Wiki 🌎",
    slug: "wiki",
    description:
      "Wiki es una estension de google la cual te permite hacer busquedas a wikipedia sin salir de la página actual del navegador lo cual te sirve para hacer busquedas rapidas y eficientes con un breve resumen sin tener que entrar a los detalles de dicho artículo aunque si quieres tener mas detalles se puede ver el articulo completo de la wikipedia. ",
    repository: "https://github.com/jordanrjdev/wiki-extension",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    name: "Extensión de chat 🔔",
    slug: "extension-chat",
    description:
      "Esta extensión fue hecha para aprender mas de los sockets y como funcionaban por lo cual fué desarrollada para poder tener un chat en tiempo real sin salir de tu navegador donde manejamos autenticacion con jsonwebtokens tambien tiene un mini panel de administración donde puedes activar o desactivar a los usuarios. La aplicación esta hecha con fines educativos y el código es abierto en github.",
    repository: "https://github.com/JGurus/extensionCopia/",
    technologies: [
      "Nodejs",
      "Socket.io",
      "Reactjs",
      "MongoDb",
      "JsonWebTokens",
    ],
  },
  {
    name: "Nearest Space 🚀",
    slug: "nearest-space",
    description:
      "Con esta aplicación participé en la hackathon mas grande de todo el mundo Nasa Space Apps Challenge en el año 2020 y desarrollamos una aplicación la cual te permite registrate como un usuario cualquiera y buscar a mas personas para asi poder crear salas de chats e interactuar entre ustedes todo esto lo logramos a traves de los sockets los cuales queriamos profundizar mucho mas y el resultado final fue presentado a el jurado. Lamentablemente nos faltó transmitir mas el alcance de la aplicación pero esto nos incentivó a seguir mejorando en nuestra carrera a todo el equipo de trabajo",
    repository: "https://github.com/jordanrjdev/Nearest-Space",
    technologies: ["Nodejs", "Reactjs", "MongoDb", "JsonWebTokens"],
  },
  {
    name: "Pelis 🎥",
    slug: "pelis",
    description:
      "Aplicación que te permite buscar información acerca de tus peliculas favoritas. Esta aplicacion consume la api de TheMovieDb y la muestra al usuario donde tienes la cantidad de resultados de tu busqueda. Para el desarrollo de esta aplicación fue tomado muy en cuenta el uso de buenas prácticas de desarrollo y permitiendo que esta sea una aplicación facilmente escalable aplicando flujos de trabajo como redux.",
    repository: "https://github.com/jordanrjdev/pelis",
    technologies: ["Reactjs", "Redux", "TypeScript", "Axios"],
  },
  {
    name: "Futvel ⚽",
    slug: "futvel",
    description:
      "Este proyecto es una api rest contruida en php la cual aún se tiene en mente añadir nuevas características como version de pago y version gratuita. Esta api rest se puede ver muy sencila pero se ha aplicado buenas practicas a la hora de desarrollar como TDD relaciones tambien esta en proceso de construccion una vista para el ingreso masivo de data a través de archivos excel y csv. La aplicación se encuentra en github donde podras descargar el codigo donde están los respectivos test unitarios de cada endpoint.",
    repository: "https://github.com/jordanrjdev/futvel",
    technologies: ["Laravel", "MySql", "Vuejs"],
  },
];

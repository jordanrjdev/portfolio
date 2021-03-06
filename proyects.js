export const proyects = [
  {
    name: "JMark-Editor",
    slug: "jmark-editor",
    description:
      "Editor online markdown para escribir art铆culos de manera r谩pida y sencilla. Los cambios se reflejan en tiempo real en la que escribes, tambien tiene un detector sencillo de cambios en el que te permite guardar los cambios. Esto es almacenado en local storage para que puedas recuperarlos en cualquier momento de manera sencilla y sin necesidad de iniciar sesi贸n.",
    repository: "https://github.com/jordanrjdev/jmarkeditor",
    demo: "https://jmarkeditor.jordanjaramillo.co",
    technologies: ["Reactjs", "TypeScript"],
    image: "jmarker.png",
  },
  {
    name: "Pelis 馃帴",
    slug: "pelis",
    description:
      "Aplicaci贸n que te permite buscar informaci贸n acerca de tus peliculas favoritas. Esta aplicacion consume la api de TheMovieDb y la muestra al usuario donde tienes la cantidad de resultados de tu busqueda. Para el desarrollo de esta aplicaci贸n fue tomado muy en cuenta el uso de buenas pr谩cticas de desarrollo y permitiendo que esta sea una aplicaci贸n facilmente escalable aplicando flujos de trabajo como redux.",
    repository: "https://github.com/jordanrjdev/pelis",
    demo: "https://pelis.jordanjaramillo.co",
    technologies: ["Reactjs", "Redux", "TypeScript", "Axios"],
    image: "pelis.png",
  },
  {
    name: "Futvel 鈿?",
    slug: "futvel",
    description:
      "Este proyecto es una api rest contruida en php la cual a煤n se tiene en mente a帽adir nuevas caracter铆sticas como version de pago y version gratuita. Esta api rest se puede ver muy sencila pero se ha aplicado buenas practicas a la hora de desarrollar como TDD relaciones tambien esta en proceso de construccion una vista para el ingreso masivo de data a trav茅s de archivos excel y csv. La aplicaci贸n se encuentra en github donde podras descargar el codigo donde est谩n los respectivos test unitarios de cada endpoint.",
    repository: "https://github.com/jordanrjdev/futvel",
    technologies: ["Laravel", "MySql", "Vuejs"],
  },
  {
    name: "Sistema de evaluaci贸n 馃懆鈥嶐煄?",
    slug: "sistema-evaluacion",
    description:
      "Este sistema esta siendo desarrollado con el stack de tecnologias MERN para evitar la copia de los alumnos. Este proyecto lo que hace es mostrarte evaluaciones pendientes los cuales son generadas a traves de un admin panel por los maestros y podras elegir que pregunta responder la cual tendras tiempo de 30 segundos para responder. Tambien este sistema detecta cuando alguien se sale de la pesta帽a actual y te resta 1 punto por cada desonnestidad",
    repository: "https://github.com/jordanrjdev/sistemaevaluacion",
    image: "sistema-evaluacion.png",
    technologies: [
      "Reactjs",
      "Redux",
      "Webpack",
      "MongoDb",
      "JsonWebTokens",
      "Nodejs",
    ],
  },
  {
    name: "Webpack React App 鈿?",
    slug: "webpack-react-app",
    description:
      "Este es un template el cual configur茅 desde 0 react sin el t铆pico comando de create-react-app esto para entender como funsionaba por dentro esta misma herramienta a este proyecto le apliqu茅 varios plugins como la minificacion de archivos, plugins para usar svg y tambien la minificacion de imagenes. Este mismo lo use para desarrollar aplicaciones como el sistema de evaluacion que tambien esta hecho con webpack.",
    repository: "https://github.com/jordanrjdev/-webpack-react-app",
    demo: "https://webpack.jordanjaramillo.co/",
    technologies: ["Reactjs", "Webpack"],
    image: "webpack.png",
  },
  {
    name: "Bot de Telegram 馃",
    slug: "bot-telegram",
    description:
      "Este proyecto lo llev茅 a cabo ya que estaba muy intrigado de como se realizan los bots de telegram ya que recientemente habia leido un post de twitter en el cual explicaban como hacer esto era m谩s f谩cil de lo quer parecia por lo cual quise llevarlo mas all谩 y ponerlo a prueba el c贸digo actualmente est谩 en github. Este bot te permite hacer varias cosas como descargar videos de youtube 贸 convertirlos a mp3 con tan solo un link.",
    repository: "https://github.com/jordanrjdev/telegram-bot",
    technologies: ["Nodejs"],
  },
  {
    name: "Funsiba 馃摎",
    slug: "funsiba",
    description:
      "Este sistema es un proyecto el cual busca ayudar a la fundaci贸n Funsiba para fomentar la educaci贸n en sus integrantes lo cual es una buena causa y estamos poniendole mucho empe帽o para que este proyecto pueda estar en producci贸n estas semanas. Tambi茅n hemos estado haciendo que el proyecto sea escalable y tenga buenas practicas de desarrollo tal como en el frontend y en el backend. Incluso los llamados a la base de datos se est谩 haciendo mediante procedimientos almacenados",
    repository: "https://github.com/jordanrjdev/sinbarreras",
    technologies: ["Svelte", "Nodejs", "TypeScript", "MySql", "Docker"],
    image: "funsiba.png",
  },
  {
    name: "Wiki 馃寧",
    slug: "wiki",
    description:
      "Wiki es una estension de google la cual te permite hacer busquedas a wikipedia sin salir de la p谩gina actual del navegador lo cual te sirve para hacer busquedas rapidas y eficientes con un breve resumen sin tener que entrar a los detalles de dicho art铆culo aunque si quieres tener mas detalles se puede ver el articulo completo de la wikipedia. ",
    repository: "https://github.com/jordanrjdev/wiki-extension",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    name: "Extensi贸n de chat 馃敂",
    slug: "extension-chat",
    description:
      "Esta extensi贸n fue hecha para aprender mas de los sockets y como funcionaban por lo cual fu茅 desarrollada para poder tener un chat en tiempo real sin salir de tu navegador donde manejamos autenticacion con jsonwebtokens tambien tiene un mini panel de administraci贸n donde puedes activar o desactivar a los usuarios. La aplicaci贸n esta hecha con fines educativos y el c贸digo es abierto en github.",
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
    name: "Nearest Space 馃殌",
    slug: "nearest-space",
    description:
      "Con esta aplicaci贸n particip茅 en la hackathon mas grande de todo el mundo Nasa Space Apps Challenge en el a帽o 2020 y desarrollamos una aplicaci贸n la cual te permite registrate como un usuario cualquiera y buscar a mas personas para asi poder crear salas de chats e interactuar entre ustedes todo esto lo logramos a traves de los sockets los cuales queriamos profundizar mucho mas y el resultado final fue presentado a el jurado. Lamentablemente nos falt贸 transmitir mas el alcance de la aplicaci贸n pero esto nos incentiv贸 a seguir mejorando en nuestra carrera a todo el equipo de trabajo",
    repository: "https://github.com/jordanrjdev/Nearest-Space",
    technologies: ["Nodejs", "Reactjs", "MongoDb", "JsonWebTokens"],
    image: "nearest-space.png",
  },
  {
    name: "P谩gina web de servicios 馃檸",
    slug: "pagina-web-servicios",
    description:
      "Esta es una p谩gina web que fue hecha para mostrar los servicios que ofrece cualquier persona lo pueden usar como template para publicarlo en internet el dise帽o puede ser cambiado tambien se usa leaflet el cual es un mapa opensource para ser usado en los proyectos el cual puede competir con google maps. Tambien cuenta con envio de emails para contactar a la persona que promociona sus servicios pero esta deshabilitado de momento.",
    repository: "https://github.com/jordanrjdev/website",
    demo: "http://peaceful-island-71668.herokuapp.com/",
    technologies: ["Laravel", "Vuejs"],
    image: "website.png",
  },
];

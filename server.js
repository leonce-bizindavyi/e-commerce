const http = require("http");
const { Server } = require("socket.io");
const { v4: uuidv4 } = require("uuid");

const server = http.createServer();

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

let users = {};

let localTime = new Date();

const productList = [
  {
    id: 1,
    title: "Google Pixel - Black",
    img: "/img/product-1.png",
    preprice: 1.9,
    price: 10,
    company: "GOOGLE",
    info: "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
    inCart: false,
    count: 0,
    total: 0,
    sale: true,
    wishilist: false,
  },
  {
    id: 2,
    title: "Samsung S7",
    img: "/img/product-2.png",
    preprice: 4,
    price: 16,
    company: "SAMSUNG",
    info: "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
    inCart: false,
    count: 0,
    total: 0,
    sale: true,
    wishilist: false,
  },
  {
    id: 3,
    title: "HTC 10 - Black",
    img: "/img/product-3.png",
    preprice: 2,
    price: 8,
    company: "htc",
    info: "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
    inCart: false,
    count: 0,
    total: 0,
    sale: true,
    wishilist: false,
  },
  {
    id: 4,
    title: "HTC 10 - White",
    img: "/img/product-4.png",
    preprice: 10,
    price: 18,
    company: "htc",
    info: "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
    inCart: false,
    count: 0,
    total: 0,
    sale: false,
    wishilist: false,
  },
  {
    id: 5,
    title: "HTC Desire 626s",
    img: "/img/product-5.png",
    preprice: 85.2,
    price: 54,
    company: "htc",
    info: "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
    inCart: false,
    count: 0,
    total: 0,
    sale: false,
    wishilist: false,
  },
  {
    id: 6,
    title: "Vintage Iphone",
    img: "/img/product-6.png",
    preprice: 5,
    price: 17,
    company: "apple",
    info: "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
    inCart: false,
    count: 0,
    total: 0,
    sale: true,
    wishilist: false,
  },
  {
    id: 7,
    title: "Iphone 7",
    img: "/img/product-7.png",
    preprice: 62.3,
    price: 30.2,
    company: "apple",
    info: "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
    inCart: false,
    count: 0,
    total: 0,
    sale: false,
    wishilist: false,
  },
  {
    id: 8,
    title: "Smashed Iphone",
    img: "/img/product-8.png",
    preprice: 30,
    price: 54.5,
    company: "apple",
    info: "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
    inCart: false,
    count: 0,
    total: 0,
    sale: true,
    wishilist: false,
  },
  {
    id: 9,
    title: "Samsung Galaxy A03 Core",
    img: "/img/product-9.png",
    preprice: 50,
    price: 78.2,
    company: "Samsung",
    info: "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
    inCart: false,
    count: 0,
    total: 0,
    sale: true,
    wishilist: false,
  },
  {
    id: 10,
    title: "Montre bracelet cuir bleu",
    img: "/img/product-10.png",
    preprice: 50,
    price: 40.2,
    company: "Certus",
    info: "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
    inCart: false,
    count: 0,
    total: 0,
    sale: false,
    wishilist: false,
  },
  {
    id: 11,
    title: "Montre MINUIT",
    img: "/img/product-11.png",
    preprice: 80,
    price: 51.2,
    company: "Aelys",
    info: "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
    inCart: false,
    count: 0,
    total: 0,
    sale: false,
    wishilist: false,
  },
];

io.on("connection", (socket) => {
  socket.on("register", (infos) => {
    const { email, username, password } = infos;

    console.log(infos);

    users = {
      socketId: socket.id,
      username: username,
      email: email,
      password: password,
    };

    socket.emit("registration_successful", {
      message: "Vous avez été enregistré avec succès.",
      id: users.socketId,
      username: username,
    });

    console.log(
      `${username} has been registered with socket id of ${socket.id}`
    );
  });

  socket.on("login", (infos) => {
    const { email, password } = infos;

    console.log(infos);

    if (users.email !== email) {
      socket.emit("login_failed", "L'email d'utilisateur inexistant.");
    } else if (users.password !== password) {
      socket.emit("login_failed", "Mot de passe incorrect.");
    } else {
      socket.emit("login_successful", {
        email: email,
        id: socket.id,
      });

      console.log(`${email} has logged in with socket id of ${socket.id}`);
    }
  });

  io.emit("all_products", productList);

  socket.on("setinCart", (infos) => {
    console.log(infos);
  });

  socket.on("logout", (data) => {
    const { username } = data;
    console.log(username, "has been logged out");

    const userIndex = connectedClients.findIndex(
      (user) => user.username === username
    );

    // Supprimez l'utilisateur si trouvé
    if (userIndex !== -1) {
      connectedClients.splice(userIndex, 1);
    }

    // Informez tous les autres clients que cet utilisateur s'est déconnecté
    io.emit("update_clients", connectedClients);
    io.emit("user_loggout", username);
  });

  socket.on("disconnect", () => {
    // Trouvez l'utilisateur dans le tableau 'connectedClients' qui a la même socket.id que le client déconnecté
    const index = connectedClients.findIndex((user) => user.id === socket.id);

    if (index !== -1) {
      // Supprimez l'utilisateur du tableau
      connectedClients.splice(index, 1);

      // Émettez l'événement 'update_clients' pour mettre à jour la liste des clients sur tous les clients restants
      io.emit("update_clients", connectedClients);

      console.log(`User with socket id ${socket.id} has disconnected`);
    }
  });
});

server.listen(8000, () => {
  console.log("listening on * : 8000");
});


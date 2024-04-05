const http = require('http')
const { Server } = require('socket.io')

const server = http.createServer()

const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
})

let users = [
  {
    id: 1,
    username: 'admin',
    email: 'admin@gmail.com',
    password: '123456',
    address: 'Bujumbura'
  },
  {
    id: 2,
    username: 'Marie Martin',
    email: 'marie.martin@gmail.com',
    password: '123456',
    address: 'Gitega'
  },
  {
    id: 3,
    username: 'Pierre Lefevre',
    email: 'pierre.lefevre@gmail.com',
    password: '123456',
    address: 'Ngozi'
  },

  /*
  { id: 4, username: 'IsabelleBernard', email: 'isabelle.bernard@gmail.com', password: '123456', address: 'Ruyigi' },
  { id: 5, username: 'MichelDubois', email: 'michel.dubois@gmail.com', password: '123456', address: 'Cibitoke' },
  { id: 6, username: 'SophieThomas', email: 'sophie.thomas@gmail.com', password: '123456', address: 'Makamba'},
  { id: 7, username: 'NicolasRobert', email: 'nicolas.robert@gmail.com', password: '123456', address: 'Muramvya' },
  { id: 8, username: 'CatherineRichard', email: 'catherine.richard@gmail.com',password: '123456', address: 'Bubanza' },
  { id: 9, username: 'FrançoisPetit', email: 'francois.petit@gmail.com', password: '123456', address: 'Karuzi' },
  { id: 10, username: 'MartineDurand', email: 'martine.durand@gmail.com', password: '123456', address: 'Rutana' },
  { id: 11, username: 'PhilippeLeroy', email: 'philippe.leroy@gmail.com', password: '123456', address: 'Muyinga' },
  { id: 12, username: 'SylvieMoreau', email: 'sylvie.moreau@gmail.com', password: '123456', address: 'Kirundo' },
  { id: 13, username: 'ThomasSimon', email: 'thomas.simon@gmail.com', password: '123456', address: 'Kayanza' },
  { id: 14, username: 'SandrineLaurent', email: 'sandrine.laurent@gmail.com', password: '123456', address: 'Mwaro' },
  { id: 15, username: 'PaulineLefebvre', email: 'pauline.lefebvre@gmail.com', password: '123456', address: 'Cankuzo'  },
  { id: 16, username: 'OlivierGarcia', email: 'olivier.garcia@gmail.com',    password: '123456',    address: 'Rumonge'  },
  { id: 17, username: 'ChristineRoussel', email: 'christine.roussel@gmail.com',    password: '123456',    address: 'Mwaro'  },
  { id: 18, username: 'DavidGirard', email: 'david.girard@gmail.com',   password: '123456',  address: 'Cankuzo' },
  { id: 19, username: 'AnneRoy', email: 'anne.roy@gmail.com', password: '123456', address: 'Karuzi'},
  { id: 20, username: 'ÉricBonnet', email: 'eric.bonnet@gmail.com', password: '123456', address: 'Muyinga' } 
  */

]

let productList = [
  {
    id: 1,
    title: 'Google Pixel - Black',
    img: '/img/product-1.png',
    preprice: 1.9,
    price: 10,
    company: 'GOOGLE',
    info: 'Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.',
    inCart: false,
    count: 0,
    total: 23,
    sale: false,
    deadline: new Date('2024-03-22T17:15:45'),
    wishilist: false
  },
  {
    id: 2,
    title: 'Samsung S7',
    img: '/img/product-2.png',
    preprice: 4,
    price: 16,
    company: 'SAMSUNG',
    info: 'Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.',
    inCart: false,
    count: 0,
    total: 10,
    sale: false,
    deadline: new Date('2024-03-22T16:17:05'),
    wishilist: false
  },
  {
    id: 3,
    title: 'HTC 10 - Black',
    img: '/img/product-3.png',
    preprice: 2,
    price: 8,
    company: 'htc',
    info: 'Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.',
    inCart: false,
    count: 0,
    total: 15,
    sale: false,
    deadline: new Date('2024-04-23T07:00:00'),
    wishilist: false
  },
  {
    id: 4,
    title: 'HTC 10 - White',
    img: '/img/product-4.png',
    preprice: 10,
    price: 18,
    company: 'htc',
    info: 'Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.',
    inCart: false,
    count: 0,
    total: 32,
    sale: true,
    wishilist: false
  },
  {
    id: 5,
    title: 'HTC Desire 626s',
    img: '/img/product-5.png',
    preprice: 85.2,
    price: 54,
    company: 'htc',
    info: 'Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.',
    inCart: false,
    count: 0,
    total: 18,
    sale: true,
    wishilist: false
  },
  {
    id: 6,
    title: 'Vintage Iphone',
    img: '/img/product-6.png',
    preprice: 5,
    price: 17,
    company: 'apple',
    info: 'Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.',
    inCart: false,
    count: 0,
    total: 30,
    sale: false,
    deadline: new Date('2024-04-22T23:00:00'),
    wishilist: false
  },
  {
    id: 7,
    title: 'Iphone 7',
    img: '/img/product-7.png',
    preprice: 62.3,
    price: 30.2,
    company: 'apple',
    info: 'Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.',
    inCart: false,
    count: 0,
    total: 190,
    sale: true,
    wishilist: false
  },
  {
    id: 8,
    title: 'Smashed Iphone',
    img: '/img/product-8.png',
    preprice: 30,
    price: 54.5,
    company: 'apple',
    info: 'Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.',
    inCart: false,
    count: 0,
    total: 29,
    sale: false,
    deadline: new Date('2024-04-21T16:00:30'),
    wishilist: false
  },
  {
    id: 9,
    title: 'Samsung Galaxy A03 Core',
    img: '/img/product-9.png',
    preprice: 50,
    price: 78.2,
    company: 'Samsung',
    info: 'Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.',
    inCart: false,
    count: 0,
    total: 39,
    sale: false,
    deadline: new Date('2024-04-22T15:30:00'),
    wishilist: false
  },
  {
    id: 10,
    title: 'Montre bracelet cuir bleu',
    img: '/img/product-10.png',
    preprice: 50,
    price: 40.2,
    company: 'Certus',
    info: 'Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.',
    inCart: false,
    count: 0,
    total: 49,
    sale: true,
    wishilist: false
  },
  {
    id: 11,
    title: 'Montre MINUIT',
    img: '/img/product-11.png',
    preprice: 80,
    price: 51.2,
    company: 'Aelys',
    info: 'Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.',
    inCart: false,
    count: 0,
    total: 100,
    sale: true,
    wishilist: false
  }
]

let connectedClients = []

let groups = {}

let unreadCounts = {}

let localTime = new Date()
function generateRandomNumber() {
  return Math.floor(Math.random() * 90000) + 10000;
}
function removeProduct(productId, count) {
  const productIndex = productList.findIndex(product => product.id === parseInt(productId));
  if (productIndex !== -1) { // Check if product found
    const product = productList[productIndex];
    if (product.total === count) {
      productList.splice(productIndex, 1); // Remove product from the list
      console.log(`Product with ID ${productId} removed.`);
      return; // Exit function after successful removal
    } else {
      console.error(`Product with ID ${productId} has insufficient stock.`);
    }
  } else {
    console.error("Product with ID", productId, "not found");
  }
}

function addOffer (productId, value) {
  const product = productList.find(
    product => product.id === parseInt(productId)
  )
  if (product && product.price < parseInt(value)) {
    product.preprice = product.price
    product.price = parseInt(value)
  } else {
    console.error('Product with ID', productId, 'not found')
  }
  return productList
}

io.on('connection', socket => {
  socket.on('register', infos => {
    console.log('infos register : ', infos)
    const { username, email, password } = infos

    // Vérifier si un utilisateur avec le même email existe déjà
    const existingUser = users.find(user => user.email === email)

    if (existingUser) {
      // Utilisateur avec le même email existe déjà, renvoyer un message d'erreur
      socket.emit('registration_failed', {
        message: 'Un utilisateur avec cet email existe déjà.'
      })
    } else {
      // Trouver le dernier ID utilisé dans la liste users
      const lastUserId = users.length > 0 ? users[users.length - 1].id : 0

      // Incrémenter l'ID pour le nouvel utilisateur
      const newUserId = lastUserId + 1

      // Créer le nouvel utilisateur avec le nouvel ID
      const newUser = {
        id: newUserId,
        username: username,
        email: email,
        password: password
      }

      // Ajouter le nouvel utilisateur à la liste users
      users.push(newUser)

      socket.emit('registration_successful', {
        message: 'Vous avez été enregistré avec succès.',
        id: newUserId,
        username: username
      })

      console.log(`${username} has been registered with ID ${newUserId}`)
    }
  })

  socket.on('connected', data => {
    socket.emit('all_products', productList)
    socket.emit('admin_all_users', users)
  })
  socket.on('admin', data => {
    socket.emit('admin_all_users', users)
  })
  socket.on('test', infos => {
    console.log('test successsfully !!')
    socket.emit('testadmin')
  })

  socket.on('enchers', data => {
    console.log(data)
    let updated_products = addOffer(data.product,data.price)
    io.emit('all_products', updated_products)
  })
  socket.on('payrequest', ({products,method}) =>{
    products.forEach(product => {
      removeProduct(product.id,product.count)
    });
    const invoceId = 'INV'+generateRandomNumber()
    socket.emit('payresponse',{invoceId:invoceId})
    
    socket.emit('all_products', productList)
  })
  socket.on('login', infos => {
    const { email, password } = infos
    console.log(infos)
    if (
      users.find(
        user => user.email == infos.email && user.password == infos.password
      )
    ) {
      socket.emit('login_successfull', { email: email, password: password })
    }
  })

  socket.on('connectedClients', () => {
    io.emit('update_clients', connectedClients)
  })

  socket.on('admin_users', () => {
    socket.emit('admin_all_users', users)
  })

  io.emit('admin_all_users', users)
  socket.on('logout', data => {
    const { username } = data
    console.log(username, 'has been logged out')

    const userIndex = connectedClients.findIndex(
      user => user.username === username
    )

    // Supprimez l'utilisateur si trouvé
    if (userIndex !== -1) {
      connectedClients.splice(userIndex, 1)
    }

    // Informez tous les autres clients que cet utilisateur s'est déconnecté
    io.emit('update_clients', connectedClients)
    io.emit('user_loggout', username)
  })
  io.emit('all_products', productList)
  socket.on('disconnect', () => {
    // Trouvez l'utilisateur dans le tableau 'connectedClients' qui a la même socket.id que le client déconnecté
    const index = connectedClients.findIndex(user => user.id === socket.id)

    if (index !== -1) {
      // Supprimez l'utilisateur du tableau
      connectedClients.splice(index, 1)

      // Émettez l'événement 'update_clients' pour mettre à jour la liste des clients sur tous les clients restants
      io.emit('update_clients', connectedClients)

      console.log(`User with socket id ${socket.id} has disconnected`)
    }
  })
})

server.listen(8088, () => {
  console.log('listening on * : 8088')
})

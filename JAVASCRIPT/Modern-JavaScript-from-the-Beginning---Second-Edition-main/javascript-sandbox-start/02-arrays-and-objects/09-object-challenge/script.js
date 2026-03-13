const library = [
  {
    title: 'Boo yah',
    author: 'Zaid',
    status: {
        own: true,
        reading: false,
        read: false
    },
  },
  {
    title: 'Yoo yah',
    author: 'Anadff',
    status: {
        own: true,
        reading: false,
        read: false
    },
  },
  {
    title: 'Hoasdfh yah',
    author: 'sdf',
    status: {
        own: true,
        reading: false,
        read: false
    },
  },
];

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

const {title:firstBook} = library[0];

const jsonLibrary = JSON.stringify(library);
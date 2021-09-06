import { Author } from "../entities/author";

export const getAuthor = async (id) => {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    const response = await fetch(url);
    const author = await response.json();
    return new Author(author.id, author.name, author.username, author.email, author.address, author.phone, author.website, author.company)
  };

  //     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//       "street": "Kulas Light",
//       "suite": "Apt. 556",
//       "city": "Gwenborough",
//       "zipcode": "92998-3874",
//       "geo": {
//         "lat": "-37.3159",
//         "lng": "81.1496"
//       }
//     },
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//       "name": "Romaguera-Crona",
//       "catchPhrase": "Multi-layered client-server neural-net",
//       "bs": "harness real-time e-markets"
//     }
//   }
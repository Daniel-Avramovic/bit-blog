import { Author } from "../entities/author";

export const getAuthors = async () => {
    let result = []
    const url = `https://jsonplaceholder.typicode.com/users`;
    const response = await fetch(url);
    const authors = await response.json();
    authors.forEach(author => {
        result.push(new Author(author.id, author.name, author.username, author.email, author.address, author.phone, author.website, author.company))
    })
    return result;
  };
import { Address } from "../entities/author";

export const getAddress = async (id) => {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    const response = await fetch(url);
    const author = await response.json();
    return new Address(author.address.street, author.address.city, author.address.zipcode, author.address.geo)
    
  };
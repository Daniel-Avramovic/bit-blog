import { Company } from "../entities/author";

export const getCompany = async (id) => {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    const response = await fetch(url);
    const author = await response.json();
    return new Company(author.company.name, author.company.catchPhrase)
  };
export class Author {
    constructor(id, name, username, email, address, phone, website, company) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.address = address;
        this.phone = phone;
        this.website = website;
        this.company = company;
    }
};
export class Address {
    constructor(street, city, zipcode, geo){
        this.street = street;
        this.city = city;
        this.zipcode = zipcode;
        this.geo = geo;
    }
}

export class Geo{
    constructor(lat, lng){
    this.lat = lat;
    this.lng = lng;
    }
}
export class Company{
    constructor(name, slogan){
this.name = name;
this.slogan = slogan;
    }
}

// "address": {
//       "street": "Kulas Light",
//       "suite": "Apt. 556",
//       "city": "Gwenborough",
//       "zipcode": "92998-3874",
//       "geo": {
//         "lat": "-37.3159",
//         "lng": "81.1496"
//       }

import React from "react";
import { Link } from "react-router-dom";
import "./forAll.css";
const AuthorUi = ({ author, address, geo, company }) => {
    console.log(address)
  return (
    <main className="container">
        <Link to='/authors'>{`< back`}</Link>
      <div className="first">
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Elliot_Grieveson.png"
            alt="No img"
          />
        </div>
        <div>
          <h3>{author.name}</h3>
          <p>Username: {author.username}</p>
          <p>E-mail: {author.email}</p>
          <p>Phone: {author.phone}</p>
        </div>
      </div>
      <div className="second">
        <div>
          <h3>Address</h3>
          <p>Street: {address.street}</p>
          <p>City: {address.city}</p>
          <p>Zipcode: {address.zipcode}</p>
        </div>
        <div>
          <iframe
            width="100%"
            height="100%"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            title={address.street}
            frameBorder="0"
            style={{ border: 0 }}
            src={`https://maps.google.com/maps?q=${geo.lat},${geo.lng}&z=15&output=embed`}
          />
        </div>
      </div>
      <div>
        <h3>Company</h3>
        <p>Name: {company.name}</p>
        <p>Slogan: {company.slogan}</p>
      </div>
    </main>
  );
};

export default AuthorUi;

import React, { Fragment, useEffect, useState } from "react";
import { getAddress } from "../../services/getAddress";
import { getAuthor } from "../../services/getAuthor";
import { getCompany } from "../../services/getCompany";
import { getGeo } from "../../services/getGeo";
import Loader from "../loader/Loader";
import AuthorUi from "../UI/author";

const SingleAuthor = ({ match }) => {
  const [author, setAuthor] = useState({});
  const [authorAddress, setAuthorAddress] = useState({});
  const [geo, setGeo] = useState({});
  const [company, setCompany] = useState({});
  const [loading, setLoading] = useState(true);
  const onGetAuthor = () => {
    const getSingleAuthor = async () => {
      const author = await getAuthor(match.params.id);
      setAuthor(author);
      setLoading(false);
    };
    const getSingleAddress = async () => {
      const address = await getAddress(match.params.id);
      setAuthorAddress(address);
    };
    const getAuthorGeo = async () => {
      const geo = await getGeo(match.params.id);
      setGeo(geo);
    };
    const getAuthorCompany = async () => {
      const company = await getCompany(match.params.id);
      setCompany(company);
    };
    getAuthorCompany();
    getAuthorGeo();
    getSingleAddress();
    getSingleAuthor();
  };

  //   const onGetAddress = () => {
  //     const getSingleAddress = async () => {
  //       const address = await getAddress(match.params.id);
  //       setAuthorAddress(address);
  //       setLoading(false);
  //     };
  //     getSingleAddress();
  //   };

  useEffect(onGetAuthor, [match.params.id]);
  //   useEffect(onGetAddress, [match.params.id]);
  return (
    <Fragment>
      {loading && <Loader />}
      <AuthorUi
        author={author}
        address={authorAddress}
        geo={geo}
        company={company}
      />
    </Fragment>
  );
};

export default SingleAuthor;

import React, { Fragment, useEffect, useState } from "react";
import { getAuthors } from "../../services/getAuthors";
import AuthorsUi from '../UI/authors'
import Loader from "../loader/Loader";
const Authors = () => {
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(true);

  const allAuthors = async () => {
    const newAuthors = await getAuthors();
    console.log(newAuthors);
    setAuthors(newAuthors);
    setLoading(false);
  };

  useEffect(() => {allAuthors()},[])

  return (
      <Fragment>
          {loading && <Loader />}
          <AuthorsUi authors={authors} />
      </Fragment>
  )
};

export default Authors;

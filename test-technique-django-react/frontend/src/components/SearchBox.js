import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
function SearchBox() {
  const [keyword, setKeyword] = useState("");

  let history =
    useHistory();
  const submitHandler = (e) => {
    e.preventDefault();

    if (keyword) {
      history.push(`/?keyword=${keyword}&page=1`);
    } else {
      history.push(history.push(history.location.pathname));
    }
  };

  return (
    <Form onSubmit={submitHandler} className="d-flex">
      <Form.Control
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        className="mr-sm-2 ml-sm-5"
      ></Form.Control>

      <Button type="submit" variant="outline-success" className="p-2 mx-sm-2">
        Search
      </Button>
    </Form>
  );
}

export default SearchBox;

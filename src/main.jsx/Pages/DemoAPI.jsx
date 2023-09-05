import React, { useEffect, useState } from "react";
import axios from "axios";

const DemoAPI = () => {
  const [api, setApi] = useState();

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then( (response) => {
        setApi(response)
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return <div>hello</div>;
};

export default DemoAPI;

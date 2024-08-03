import axios from "axios";
import React, { useEffect, useState } from "react";

function Home({ shamim }) {
  const [name, setName] = useState("");
  const render = () => {
    console.log("server data: ", name);
  };
  useEffect(async () => {
    await axios.get("https://mern-backend-azure-tau.vercel.app").then((res) => {
      return setName(res.data.name);
    });
    return;
  }, []);

  return (
    <div>
      <div className="text-6xl capitalize text-red-400 text-center h-screen flex flex-col gap-6 items-center justify-center">
        {name}

        <button
          onClick={render}
          className="rounded bg-green-400 text-center text-sm py-3 px-4"
        >
          Render
        </button>

        <form action="https://mern-backend-azure-tau.vercel.app" method="post">
          <input type="text" name="name" placeholder="type your name" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Home;

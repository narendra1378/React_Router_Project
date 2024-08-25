// import React, { useEffect, useState } from "react";
// import { useLoaderData } from "react-router-dom";

// function Github() {
//   const data = useLoaderData();

//   //   const [data, setData] = useState(null); // Initialize as null
//   //   const [error, setError] = useState(null); // For error handling
//   //   const [loading, setLoading] = useState(true); // To handle loading state

//   //   useEffect(() => {
//   //     const fetchData = async () => {
//   //       try {
//   //         const response = await fetch(
//   //           "https://api.github.com/users/narendra1378"
//   //         );
//   //         if (!response.ok) {
//   //           throw new Error("Network response was not ok");
//   //         }
//   //         const result = await response.json();
//   //         setData(result);
//   //       } catch (error) {
//   //         setError(error.message);
//   //       } finally {
//   //         setLoading(false);
//   //       }
//   //     };

//   //     fetchData();
//   //   }, []);

//   //   if (loading) {
//   //     return (
//   //       <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
//   //         Loading...
//   //       </div>
//   //     );
//   //   }

//   //   if (error) {
//   //     return (
//   //       <div className="text-center m-4 bg-red-600 text-white p-4 text-3xl">
//   //         Error: {error}
//   //       </div>
//   //     );
//   //   }

//   return (
//     <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
//       Github followers: {data.followers}
//       <img src={data.avatar_url} alt="gitPicture" width={300} />
//     </div>
//   );
// }

// export default Github;

// export const githubInfoLoader = async () => {
//   const response = await fetch('"https://api.github.com/users/narendra1378"');
//   return response.json();
// };
import React from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl flex items-center ">
      <div className="m-4">Github followers: {data.followers}</div>
      <img src={data.avatar_url} alt="GitHub Avatar" width={300} />
    </div>
  );
}

export default Github;
export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/narendra1378");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

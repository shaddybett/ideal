import React, { useEffect, useState } from 'react';

export default function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json()) // Parse the response to JSON
      .then((result) => {
        setData(result.message); // The URL is under the 'message' property
      })
      .catch((error) => {
        console.error('Error', error);
      });
  }, []);

  return (
    <div>
      {data ? (
        <img src={data} alt="Random Dog" />
      ) : (
        <p>Loading data ...</p>
      )}
    </div>
  );
}

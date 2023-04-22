import React from "react";
import { useQuery } from "react-query";

export default function InfoCard({ url }) {
  const { isLoading, isError, data, error } = useQuery(url, async () => {
    const stuff = await fetch(`https://swapi.dev/api/${url}`);
    return await stuff.json();
  });

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div className="thing">
      <h3>{url}</h3>
      <div>{data.results.length}</div>
    </div>
  );
}

import React, { useState, useEffect } from "react";

const Grid = ({ staticContext, match, fetchInitialData }) => {
  const [data, setData] = useState(() => {
    if (__isBrowser__) {
      const data = window.__INITIAL_DATA__;
      delete window.__INITIAL_DATA__;
      return data || [];
    } else {
      return staticContext.data;
    }
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("Here");
    setLoading(true);
    fetchInitialData(match.params.id)
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(err => console.error(err));
  }, [match.params.id]);

  if (loading) return <h2>Loading...</h2>;

  return (
    <ul style={{ display: "flex", flexWrap: "wrap" }}>
      {data.map(({ name, owner, stargazers_count, html_url }) => (
        <li key={name} style={{ margin: 30 }}>
          <ul>
            <li>
              <a href={html_url}>{name}</a>
            </li>
            <li>@{owner.login}</li>
            <li>{stargazers_count} stars</li>
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default Grid;

import React from 'react'

import loading from "../assets/loading.gif"

export const Loading = () => {
  return (
    <div className="d-flex justify-content-center align-items-center loading">
      <img height={"50%"} width={"50%"} src={loading} alt="loading" />
    </div>
  );
}

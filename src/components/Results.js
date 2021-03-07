import React from "react";
import Artists from './Artists.js';

const Results = () => {
// If artist is clicked on, we need to render Albums instead

  return (
    <div className="resultContainer">
      <Artists />
      {/* Use react fragments here for album */}
    </div>

  )
};

export default Results;
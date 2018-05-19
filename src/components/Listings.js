import React from "react";

export default ({ listings }) =>
  <div>
    <h1>Listings</h1>
    <ul>
      {listings.map((listing, i) => (
        <li key={i}>{listing.prompt} - ${listing.reward} for {listing.minSources} sources</li>
      ))}
    </ul>
  </div>;

import React from "react";

const ListingCard = ({ listing }) => {
  return (
    <div className="card">
      <h2>{listing.Description}</h2>
      <p>Price: ${listing.ListPrice}</p>
      <p>Type: {listing.Type}</p>
      <p>SubType: {listing.SubType}</p>
      <p>Bedrooms: {listing.BedroomCount}</p>
      <p>Bathrooms: {listing.BathroomCount}</p>
      <p>
        Address: {listing.Address_StreetNumber} {listing.Address_StreetName}{" "}
        {listing.Address_StreetSuffix}, {listing.Address_City},{" "}
        {listing.Address_StateOrProvince} {listing.Address_PostalCode}
      </p>
      {/* Add more fields as needed */}
    </div>
  );
};

export default ListingCard;

import React from "react";
import "./ListingCard.css";

const ListingCard = ({ listing }) => {
  return (
    <div className="card">
      <div className="card-header">
        <img
          src="https://via.placeholder.com/300x200"
          alt="Property"
          className="card-image"
        />
        <div className="card-banner">Recently listed properties</div>
      </div>
      <div className="card-body">
        <h2 className="address">
          {listing.Address_StreetNumber} {listing.Address_StreetName}{" "}
          {listing.Address_StreetSuffix}, {listing.Address_City},{" "}
          {listing.Address_StateOrProvince} {listing.Address_PostalCode}
        </h2>
        <p className="price">${listing.ListPrice}</p>
        <p className="description">{listing.Description}</p>
        <p>Type: {listing.Type}</p>
        <p>SubType: {listing.SubType}</p>
        <p>Bedrooms: {listing.BedroomCount}</p>
        <p>Bathrooms: {listing.BathroomCount}</p>
        <p>Year Built: {listing.YearBuilt}</p>
        <p>Parking: {listing.ParkingFeatures}</p>
        <p>Community Features: {listing.CommunityFeatures}</p>
        <p>Listing Agent: {listing.ListingAgent_Name}</p>
        <p>Contact: {listing.ListingAgent_Email}</p>
      </div>
    </div>
  );
};

export default ListingCard;

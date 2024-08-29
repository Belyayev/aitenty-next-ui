import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setListings } from "./listingsSlice";

const Listings = () => {
  const dispatch = useDispatch();
  const listings = useSelector((state) => state.listings.items);

  useEffect(() => {
    fetch(
      "http://127.0.0.1:3000/listings?SubType=Apartment&Address_City=Calgary&ArchitecturalStyle=Apartment"
    )
      .then((response) => response.json())
      .then((data) => dispatch(setListings(data)));
  }, [dispatch]);

  return (
    <div>
      <h1>Listings</h1>
      <ul>
        {listings.map((listing) => (
          <li key={listing.id}>
            {listing.AddressCity} - {listing.ListPrice}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Listings;

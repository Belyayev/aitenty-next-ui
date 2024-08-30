import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setListings } from "./listingsSlice";
import ListingCard from "./ListingCard";
import "./styles.css";

const Listings = () => {
  const dispatch = useDispatch();
  const listings = useSelector((state) => state.listings.items);

  useEffect(() => {
    fetch(
      "https://aigenty-node.azurewebsites.net/listings?SubType=Apartment&Address_City=Calgary&ArchitecturalStyle=Apartment"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => dispatch(setListings(data)))
      .catch((error) => console.error("Fetch error:", error));
  }, [dispatch]);

  return (
    <div>
      <h1>Listings</h1>
      <div className="listings-container">
        {listings.map((listing) => (
          <ListingCard key={listing.Id} listing={listing} />
        ))}
      </div>
    </div>
  );
};

export default Listings;

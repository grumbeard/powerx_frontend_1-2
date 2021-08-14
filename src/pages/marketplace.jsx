import * as React from "react";
import { ListingItem } from "../components/listing-item";
import { ListingForm } from "../components/listing-form";

function getListings() {
  return fetch(
    `https://ecomm-service.herokuapp.com/marketplace?page=1&limit=9`
  ).then((res) => res.json());
}

function handleDelete(id) {
  fetch(`https://ecomm-service.herokuapp.com/marketplace/${id}`, {
    method: "DELETE",
  });
}

export function Marketplace() {
  const [listings, setListings] = React.useState(undefined);

  function loadListings() {
    getListings().then((data) => setListings(data));
  }

  React.useEffect(() => {
    loadListings();
  }, []);

  return (
    <main class="bg-gray-50 lg:flex">
      <div class="flex-1">
        <div class="max-w-7xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:px-8">
          <div class="sm:flex sm:flex-col sm:align-center mb-12">
            <h1 class="text-5xl font-extrabold text-gray-900 sm:text-center">
              Marketplace
            </h1>
          </div>
          <div
            class="
              grid
              md:grid-cols-2
              gap-x-4 gap-y-8
              xl:grid-cols-3 xl:gap-x-6
            "
          >
            {listings &&
              listings.map((listing) => (
                <ListingItem
                  id={listing._id}
                  title={listing.title}
                  description={listing.description}
                  price={listing.price}
                  condition={listing.condition}
                  imageUrl={listing.imageUrl}
                  availability={listing.availability}
                  numOfStock={listing.numOfStock}
                  handleDelete={handleDelete}
                />
              ))}
          </div>
        </div>
      </div>

      <div
        class="
          flex-initial
          bg-white
          w-full
          lg:max-w-md
          border-b border-gray-100
        "
      >
        <ListingForm />
      </div>
    </main>
  );
}

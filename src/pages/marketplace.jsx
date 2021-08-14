import * as React from "react";
import { ListingItem } from "../components/listing-item";
import { ListingForm } from "../components/listing-form";

const defaultImageUrl =
  "https://images.unsplash.com/photo-1577280467823-02b253474d06?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=543&h=384&q=80";

function getListings() {
  return fetch(
    `https://ecomm-service.herokuapp.com/marketplace?page=1&limit=9`
  ).then((res) => res.json());
}

function deleteListing(id) {
  return fetch(`https://ecomm-service.herokuapp.com/marketplace/${id}`, {
    method: "DELETE",
  });
}

function addListing(data) {
  return fetch(`https://ecomm-service.herokuapp.com/marketplace`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
}

function editListing(data) {
  return fetch(`https://ecomm-service.herokuapp.com/marketplace/${data.id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
}

export function Marketplace() {
  const [isEditing, setIsEditing] = React.useState(false);
  const [listings, setListings] = React.useState(undefined);
  const [listing, setListing] = React.useState({
    id: "",
    title: "",
    condition: "new",
    description: "",
    availability: "in-stock",
    imageUrl: defaultImageUrl,
    numOfStock: "",
    price: "",
  });

  function loadListings() {
    getListings().then((data) => setListings(data));
  }

  function handleDelete(id) {
    deleteListing(id).then(() => loadListings());
  }

  function handleAdd(data) {
    return addListing(data)
      .then(() => loadListings())
      .then(() => resetListing());
  }

  function handleEditStart(listing) {
    setListing(listing);
    setIsEditing(true);
  }

  function handleEditEnd() {
    resetListing();
    setIsEditing(false);
  }

  function handleEdit(listing) {
    editListing(listing)
      .then(() => loadListings())
      .then(() => handleEditEnd());
  }

  function resetListing() {
    setListing({
      id: "",
      title: "",
      condition: "new",
      description: "",
      availability: "in-stock",
      imageUrl: "",
      numOfStock: "",
      price: "",
    });
  }

  React.useEffect(() => {
    loadListings();
  }, []);

  return (
    <main className="bg-gray-50 lg:flex">
      <div className="flex-1">
        <div className="max-w-7xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:px-8">
          <div className="sm:flex sm:flex-col sm:align-center mb-12">
            <h1 className="text-5xl font-extrabold text-gray-900 sm:text-center">
              Marketplace
            </h1>
          </div>
          <div
            className="
              grid
              md:grid-cols-2
              gap-x-4 gap-y-8
              xl:grid-cols-3 xl:gap-x-6
            "
          >
            {listings &&
              listings.map((item) => (
                <ListingItem
                  key={item._id}
                  id={item._id}
                  title={item.title}
                  description={item.description}
                  price={item.price}
                  condition={item.condition}
                  imageUrl={item.imageUrl}
                  availability={item.availability}
                  numOfStock={item.numOfStock}
                  deleteListing={handleDelete}
                  editListing={handleEditStart}
                  stopEditListing={handleEditEnd}
                  isEditing={item._id === listing.id}
                />
              ))}
          </div>
        </div>
      </div>

      <div
        className="
          flex-initial
          bg-white
          w-full
          lg:max-w-md
          border-b border-gray-100
        "
      >
        <ListingForm
          listing={listing}
          addListing={handleAdd}
          isEditing={isEditing}
          editListing={handleEdit}
        />
      </div>
    </main>
  );
}

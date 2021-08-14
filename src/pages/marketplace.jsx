import * as React from "react";
import { ListingItem } from "../components/listing-item";
import { ListingForm } from "../components/listing-form";

export function Marketplace() {
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
            <ListingItem />
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

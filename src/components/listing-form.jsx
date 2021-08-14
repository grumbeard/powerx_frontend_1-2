import React from "react";

export function ListingForm() {
  return (
    <form class="flex flex-col h-full">
      <div class="py-6 px-4 bg-pink-700 sm:px-6">
        <div class="flex items-center justify-between">
          <h2 class="text-lg font-medium text-white">New Listing</h2>
        </div>
        <div class="mt-1">
          <p class="text-sm text-pink-300">
            Get started by filling in the information below to create your new
            listing.
          </p>
        </div>
      </div>
      <div class="px-4 sm:px-6 pb-12">
        <div class="space-y-6 pt-6 pb-5">
          <div>
            <label
              for="listing-title"
              class="block text-sm font-medium text-gray-900"
            >
              Title
            </label>
            <div class="mt-1">
              <input
                type="text"
                name="listing-title"
                id="listing-title"
                required=""
                class="
                      block
                      w-full
                      shadow-sm
                      sm:text-sm
                      focus:ring-pink-500 focus:border-pink-500
                      border-gray-300
                      rounded-md
                    "
              />
            </div>
          </div>
          <div>
            <label
              for="listing-price"
              class="block text-sm font-medium text-gray-900"
            >
              Price
            </label>
            <div class="mt-1">
              <input
                type="number"
                name="listing-price"
                id="listing-price"
                required=""
                class="
                      block
                      w-full
                      shadow-sm
                      sm:text-sm
                      focus:ring-pink-500 focus:border-pink-500
                      border-gray-300
                      rounded-md
                    "
              />
            </div>
          </div>
          <div>
            <label
              for="description"
              class="block text-sm font-medium text-gray-900"
            >
              Description
            </label>
            <div class="mt-1">
              <textarea
                id="description"
                name="description"
                rows="4"
                required=""
                class="
                      block
                      w-full
                      shadow-sm
                      sm:text-sm
                      focus:ring-pink-500 focus:border-pink-500
                      border border-gray-300
                      rounded-md
                    "
              ></textarea>
            </div>
          </div>
          <div>
            <label
              for="listing-condition"
              class="block text-sm font-medium text-gray-900"
            >
              Condition
            </label>
            <div class="mt-1">
              <select
                id="listing-condition"
                name="listing-condition"
                required=""
                class="
                      block
                      w-full
                      pl-3
                      pr-10
                      py-2
                      text-base
                      border-gray-300
                      focus:outline-none
                      focus:ring-pink-500
                      focus:border-pink-500
                      sm:text-sm
                      rounded-md
                    "
              >
                <option value="new">New</option>
                <option value="used_like-new">Used (like new)</option>
                <option value="used_good">Used (good)</option>
                <option value="used_fair">Used (fair)</option>
              </select>
            </div>
          </div>
          <div>
            <label
              for="listing-availability"
              class="block text-sm font-medium text-gray-900"
            >
              Availability
            </label>
            <div class="mt-1">
              <select
                id="listing-availability"
                name="listing-availability"
                required=""
                class="
                      block
                      w-full
                      pl-3
                      pr-10
                      py-2
                      text-base
                      border-gray-300
                      focus:outline-none
                      focus:ring-pink-500
                      focus:border-pink-500
                      sm:text-sm
                      rounded-md
                    "
              >
                <option value="in-stock">In Stock</option>
                <option value="single-item">Single Item</option>
              </select>
            </div>
          </div>

          <div>
            <label
              for="num-of-stock"
              class="block text-sm font-medium text-gray-900"
            >
              Number of Available Stock
            </label>
            <div class="mt-1">
              <input
                type="number"
                name="num-of-stock"
                id="num-of-stock"
                required=""
                class="
                      block
                      w-full
                      shadow-sm
                      sm:text-sm
                      focus:ring-pink-500 focus:border-pink-500
                      border-gray-300
                      rounded-md
                    "
              />
            </div>
          </div>
        </div>
      </div>
      <div
        class="
              flex-shrink-0
              px-4
              py-4
              flex
              justify-end
              border-t border-gray-200
            "
      >
        <button
          type="submit"
          class="
                ml-4
                inline-flex
                justify-center
                py-2
                px-4
                border border-transparent
                shadow-sm
                text-sm
                font-medium
                rounded-md
                text-white
                bg-pink-600
                hover:bg-pink-700
                focus:outline-none
                focus:ring-2
                focus:ring-offset-2
                focus:ring-pink-500
              "
        >
          ADD
        </button>
      </div>
    </form>
  );
}

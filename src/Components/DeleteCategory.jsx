import React from "react";

export const DeleteCategory = () => {
  const handleDelete = async (foodItemId) => {
    try {
      // Send DELETE request to Sanity.io API
      const response = await fetch(
        `https://craua8br.api.sanity.io/v2023-11-24/data/mutate/production`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer sksmWy45K67xNbBYFHhrYLS9Bp8P32HcPzdPTjTCGjONdlRXm8bNFdbdE9PDqzjSbd8JWcFS9cfe3nujp7qSyBQJJOkxNml55Lyr3IiW90TOaVYZnAYpQnDe4vBG2YKknTdpRlFVoNEc5p1QANriLeaVkTrBid1wVA3MPov0opww0cUTJ9R7`,
          },
          body: JSON.stringify({
            mutations: [
              {
                delete: {
                  _type: "foods",
                  where: {
                    name: foodItemId,
                  },
                },
              },
            ],
          }),
        }
      );

      if (response.ok) {
        // Handle successful response
        alert("Food item deleted successfully");
      } else {
        // Log error details to the console
        console.error("Error deleting food item. Status:", response.status);
        alert("Error deleting food item");
      }
    } catch (error) {
      // Log any unexpected errors to the console
      console.error("Unexpected error during delete:", error);
      alert("Unexpected error deleting food item");
    }
  };

  return (
    <>
      <form
        action="
  "
        method="post"
      >
        {/* delete image  */}
        <label>
          Image ID:
          <input type="text" name="imageId" onChange={handleChange} />
        </label>
        <button
          style={{
            backgroundColor: "red",
          }}
          onClick={() => handleDelete(foodItem.imageId)}
        >
          Delete Food Item
        </button>
      </form>
    </>
  );
};

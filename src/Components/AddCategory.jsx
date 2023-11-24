import React, { useState, useEffect } from "react";
function AddCategory() {
  const [foodItem, setFoodItem] = useState({
    foodName: "",
    foodDesc: "",
    foodImage: "",
    category: "",
  });
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    // Fetch categories from Sanity.io API
    fetch(
      'https://craua8br.api.sanity.io/v2021-06-07/data/query/production?query=*[_type == "category"]'
    )
      .then((response) => response.json())
      .then((data) => setCategories(data.result));
  }, []);

  const handleChange = (event) => {
    if (event.target.type === "file") {
      setFoodItem({ ...foodItem, [event.target.name]: event.target.files[0] });
    } else {
      setFoodItem({ ...foodItem, [event.target.name]: event.target.value });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Create a copy of the foodItem state
    let foodItemCopy = { ...foodItem };

    // Check if foodImage is an empty object
    if (
      Object.keys(foodItemCopy.foodImage).length === 0 &&
      foodItemCopy.foodImage.constructor === Object
    ) {
      // If foodImage is an empty object, remove it from the payload
      delete foodItemCopy.foodImage;
    }
    // Send POST request to Sanity.io API
    const response = await fetch(
      "https://craua8br.api.sanity.io/v2021-06-07/data/mutate/production",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer skOCmy3yDS2oNWjIffLBrUCbHZSTCeUyAq1tqdI5kpv9WbidKRilc5dz1AgUJqDnRCmMZvyONZLALjnolOD55D1gdSyCSQNQEEAEIO6YU89RiFpyU5oGEemzl1WV8AeyKt53z5qhqhCluyV6asrjn6do9BC6ST3AsXYy6XPo4AxEWSopm9Bf`,
        },
        body: JSON.stringify({
          mutations: [
            {
              create: {
                _type: "foods",
                foodName: foodItem.foodName,
                foodDesc: foodItem.foodDesc,
                foodImage: foodItem.foodImage,
                foodItemCopy,
                category: {
                  _type: "reference",
                  _ref: foodItem.category,
                },
              },
            },
          ],
        }),
      }
    );
    console.log(foodItemCopy);
    if (response.ok) {
      // Handle successful response
      alert("Food item added successfully");
    } else {
      // Handle error
      alert("Error adding food item");
    }
    console.log(response);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <label>
        Food Name:
        <input type="text" name="foodName" onChange={handleChange} />
      </label>
      <label>
        Description:
        <input type="text" name="foodDesc" onChange={handleChange} />
      </label>
      <label>
        Food Image:
        <input type="file" name="foodImage" onChange={handleChange} />
      </label>
      <label>
        Category:
        <select name="category" onChange={handleChange}>
          {categories.map((category) => (
            <option key={category._id} value={category._id}>
              {category.title}
            </option>
          ))}
        </select>
      </label>

      <button
        type="submit"
        value="Submit"
        style={{
          backgroundColor: "blue",
        }}
      >
        Submit
      </button>
    </form>
  );
}

export default AddCategory;

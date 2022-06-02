import { createContext, useReducer } from "react";

export const Properties = [
  {
    id: (Date.now() * Math.random() * 12).toString() + "jdlkjsosaj",
    purchase: "Rent",
    type: "Apartment",
    img: "/20.jpg",
    localGov: "KATSINA",
    bedrooms: 3,
    bathroom: 2,
    kitchen: 1,
    plot: 1,
    price: 150000,
    description:
      "orem ipsum dolor sit amet consectetur adipisicing elit Perferendis voluptates amet animi tempora enim itaqu Perferendis voluptates amet animi tempora enim itaque expedita iusto magni praesentium maiores cumque quam eumorem ipsum dolor sit amet consectetur adipisicing elit Perferendis voluptates amet animi tempora enim itaqu Perferendis voluptates amet animi tempora enim itaque expedita iusto magni praesentium maiores cumque quam eum orem ipsum dolor sit amet consectetur adipisicing elit Perferendis voluptates amet animi tempora enim itaqu Perferendis voluptates amet animi tempora enim itaque expedita iusto magni praesentium maiores cumque quam eum",
  },
  {
    id: (Date.now() * Math.random() * 13).toString(),
    purchase: "Rent",
    type: "Apartment",
    img: "/8.jpg",
    localGov: "DAN MUSA",
    bedrooms: 4,
    bathroom: 3,
    kitchen: 2,
    plot: 1,
    price: 120000,
    description:
      "orem ipsum dolor sit amet consectetur adipisicing elit Perferendis voluptates amet animi tempora enim itaqu Perferendis voluptates amet animi tempora enim itaque expedita iusto magni praesentium maiores cumque quam eumorem ipsum dolor sit amet consectetur adipisicing elit Perferendis voluptates amet animi tempora enim itaqu Perferendis voluptates amet animi tempora enim itaque expedita iusto magni praesentium maiores cumque quam eum orem ipsum dolor sit amet consectetur adipisicing elit Perferendis voluptates amet animi tempora enim itaqu Perferendis voluptates amet animi tempora enim itaque expedita iusto magni praesentium maiores cumque quam eum",
  },
  {
    id: (Date.now() * Math.random() * 14).toString(),
    purchase: "Rent",
    type: "House",
    img: "/28.jpg",
    localGov: "MALUMFASHI",
    bedrooms: 5,
    bathroom: 4,
    kitchen: 1,
    plot: 2,
    price: 180000,
    description:
      "orem ipsum dolor sit amet consectetur adipisicing elit Perferendis voluptates amet animi tempora enim itaqu Perferendis voluptates amet animi tempora enim itaque expedita iusto magni praesentium maiores cumque quam eumorem ipsum dolor sit amet consectetur adipisicing elit Perferendis voluptates amet animi tempora enim itaqu Perferendis voluptates amet animi tempora enim itaque expedita iusto magni praesentium maiores cumque quam eum orem ipsum dolor sit amet consectetur adipisicing elit Perferendis voluptates amet animi tempora enim itaqu Perferendis voluptates amet animi tempora enim itaque expedita iusto magni praesentium maiores cumque quam eum",
  },
  {
    id: (Date.now() * Math.random() * 15).toString(),
    purchase: "Rent",
    type: "Apartment",
    img: "/32.jpg",
    localGov: "DAURA",
    bedrooms: 3,
    bathroom: 2,
    kitchen: 2,
    plot: 3,
    price: 250000,
    description:
      "orem ipsum dolor sit amet consectetur adipisicing elit Perferendis voluptates amet animi tempora enim itaqu Perferendis voluptates amet animi tempora enim itaque expedita iusto magni praesentium maiores cumque quam eumorem ipsum dolor sit amet consectetur adipisicing elit Perferendis voluptates amet animi tempora enim itaqu Perferendis voluptates amet animi tempora enim itaque expedita iusto magni praesentium maiores cumque quam eum orem ipsum dolor sit amet consectetur adipisicing elit Perferendis voluptates amet animi tempora enim itaqu Perferendis voluptates amet animi tempora enim itaque expedita iusto magni praesentium maiores cumque quam eum",
  },
  {
    id: (Date.now() * Math.random() * 15).toString(),
    purchase: "Rent",
    type: "House",
    img: "/25.jpg",
    localGov: "ZANGO",
    bedrooms: 2,
    bathroom: 1,
    kitchen: 1,
    plot: 3,
    price: 220000,
    description:
      "orem ipsum dolor sit amet consectetur adipisicing elit Perferendis voluptates amet animi tempora enim itaqu Perferendis voluptates amet animi tempora enim itaque expedita iusto magni praesentium maiores cumque quam eumorem ipsum dolor sit amet consectetur adipisicing elit Perferendis voluptates amet animi tempora enim itaqu Perferendis voluptates amet animi tempora enim itaque expedita iusto magni praesentium maiores cumque quam eum orem ipsum dolor sit amet consectetur adipisicing elit Perferendis voluptates amet animi tempora enim itaqu Perferendis voluptates amet animi tempora enim itaque expedita iusto magni praesentium maiores cumque quam eum",
  },
  {
    id: (Date.now() * Math.random() * 15).toString(),
    purchase: "Rent",
    type: "House",
    img: "/26.jpg",
    localGov: "DAN JA",
    bedrooms: 3,
    bathroom: 3,
    kitchen: 2,
    plot: 1,
    price: 150000,
    description:
      "orem ipsum dolor sit amet consectetur adipisicing elit Perferendis voluptates amet animi tempora enim itaqu Perferendis voluptates amet animi tempora enim itaque expedita iusto magni praesentium maiores cumque quam eumorem ipsum dolor sit amet consectetur adipisicing elit Perferendis voluptates amet animi tempora enim itaqu Perferendis voluptates amet animi tempora enim itaque expedita iusto magni praesentium maiores cumque quam eum orem ipsum dolor sit amet consectetur adipisicing elit Perferendis voluptates amet animi tempora enim itaqu Perferendis voluptates amet animi tempora enim itaque expedita iusto magni praesentium maiores cumque quam eum",
  },
  {
    id: (Date.now() * Math.random() * 15).toString(),
    purchase: "Rent",
    type: "Apartment",
    img: "/9.jpg",
    localGov: "FASKARI",
    bedrooms: 3,
    bathroom: 2,
    kitchen: 2,
    plot: 1,
    price: 150000,
    description:
      "orem ipsum dolor sit amet consectetur adipisicing elit Perferendis voluptates amet animi tempora enim itaqu Perferendis voluptates amet animi tempora enim itaque expedita iusto magni praesentium maiores cumque quam eumorem ipsum dolor sit amet consectetur adipisicing elit Perferendis voluptates amet animi tempora enim itaqu Perferendis voluptates amet animi tempora enim itaque expedita iusto magni praesentium maiores cumque quam eum orem ipsum dolor sit amet consectetur adipisicing elit Perferendis voluptates amet animi tempora enim itaqu Perferendis voluptates amet animi tempora enim itaque expedita iusto magni praesentium maiores cumque quam eum",
  },
  {
    id: (Date.now() * Math.random() * 15).toString(),
    purchase: "Rent",
    type: "Apartment",
    img: "/7.jpg",
    localGov: "MUSAWA",
    bedrooms: 2,
    bathroom: 2,
    kitchen: 2,
    plot: 1,
    price: 150000,
    description:
      "orem ipsum dolor sit amet consectetur adipisicing elit Perferendis voluptates amet animi tempora enim itaqu Perferendis voluptates amet animi tempora enim itaque expedita iusto magni praesentium maiores cumque quam eumorem ipsum dolor sit amet consectetur adipisicing elit Perferendis voluptates amet animi tempora enim itaqu Perferendis voluptates amet animi tempora enim itaque expedita iusto magni praesentium maiores cumque quam eum orem ipsum dolor sit amet consectetur adipisicing elit Perferendis voluptates amet animi tempora enim itaqu Perferendis voluptates amet animi tempora enim itaque expedita iusto magni praesentium maiores cumque quam eum",
  },
  {
    id: (Date.now() * Math.random() * 12).toString(),
    type: "House",
    purchase: "Buy",
    img: "/15.jpg",
    localGov: "KATSINA",
    bedrooms: 3,
    bathroom: 2,
    kitchen: 1,
    plot: 1,
    price: 150000,
    description:
      "orem ipsum dolor sit amet consectetur adipisicing elit Perferendis voluptates amet animi tempora enim itaqu Perferendis voluptates amet animi tempora enim itaque expedita iusto magni praesentium maiores cumque quam eumorem ipsum dolor sit amet consectetur adipisicing elit Perferendis voluptates amet animi tempora enim itaqu Perferendis voluptates amet animi tempora enim itaque expedita iusto magni praesentium maiores cumque quam eum orem ipsum dolor sit amet consectetur adipisicing elit Perferendis voluptates amet animi tempora enim itaqu Perferendis voluptates amet animi tempora enim itaque expedita iusto magni praesentium maiores cumque quam eum",
  },
  {
    id: (Date.now() * Math.random() * 13).toString(),
    type: "House",
    purchase: "Buy",
    img: "/17.jpg",
    localGov: "DAN MUSA",
    bedrooms: 4,
    bathroom: 2,
    kitchen: 2,
    plot: 1,
    price: 120000,
    description:
      "orem ipsum dolor sit amet consectetur adipisicing elit Perferendis voluptates amet animi tempora enim itaqu Perferendis voluptates amet animi tempora enim itaque expedita iusto magni praesentium maiores cumque quam eumorem ipsum dolor sit amet consectetur adipisicing elit Perferendis voluptates amet animi tempora enim itaqu Perferendis voluptates amet animi tempora enim itaque expedita iusto magni praesentium maiores cumque quam eum orem ipsum dolor sit amet consectetur adipisicing elit Perferendis voluptates amet animi tempora enim itaqu Perferendis voluptates amet animi tempora enim itaque expedita iusto magni praesentium maiores cumque quam eum",
  },
  {
    id: (Date.now() * Math.random() * 14).toString(),
    type: "House",
    purchase: "Buy",
    img: "/16.jpg",
    localGov: "MALUMFASHI",
    bedrooms: 2,
    bathroom: 2,
    kitchen: 1,
    plot: 2,
    price: 180000,
    description:
      "orem ipsum dolor sit amet consectetur adipisicing elit Perferendis voluptates amet animi tempora enim itaqu Perferendis voluptates amet animi tempora enim itaque expedita iusto magni praesentium maiores cumque quam eumorem ipsum dolor sit amet consectetur adipisicing elit Perferendis voluptates amet animi tempora enim itaqu Perferendis voluptates amet animi tempora enim itaque expedita iusto magni praesentium maiores cumque quam eum orem ipsum dolor sit amet consectetur adipisicing elit Perferendis voluptates amet animi tempora enim itaqu Perferendis voluptates amet animi tempora enim itaque expedita iusto magni praesentium maiores cumque quam eum",
  },
  {
    id: (Date.now() * Math.random() * 15).toString(),
    type: "House",
    purchase: "Buy",
    img: "/12.jpg",
    localGov: "DAURA",
    bedrooms: 4,
    bathroom: 3,
    kitchen: 2,
    plot: 3,
    price: 250000,
    description:
      "orem ipsum dolor sit amet consectetur adipisicing elit Perferendis voluptates amet animi tempora enim itaqu Perferendis voluptates amet animi tempora enim itaque expedita iusto magni praesentium maiores cumque quam eumorem ipsum dolor sit amet consectetur adipisicing elit Perferendis voluptates amet animi tempora enim itaqu Perferendis voluptates amet animi tempora enim itaque expedita iusto magni praesentium maiores cumque quam eum orem ipsum dolor sit amet consectetur adipisicing elit Perferendis voluptates amet animi tempora enim itaqu Perferendis voluptates amet animi tempora enim itaque expedita iusto magni praesentium maiores cumque quam eum",
  },
  {
    id: (Date.now() * Math.random() * 15).toString(),
    type: "House",
    purchase: "Buy",
    img: "/18.jpg",
    localGov: "ZANGO",
    bedrooms: 2,
    bathroom: 1,
    kitchen: 1,
    plot: 3,
    price: 220000,
    description:
      "orem ipsum dolor sit amet consectetur adipisicing elit Perferendis voluptates amet animi tempora enim itaqu Perferendis voluptates amet animi tempora enim itaque expedita iusto magni praesentium maiores cumque quam eumorem ipsum dolor sit amet consectetur adipisicing elit Perferendis voluptates amet animi tempora enim itaqu Perferendis voluptates amet animi tempora enim itaque expedita iusto magni praesentium maiores cumque quam eum orem ipsum dolor sit amet consectetur adipisicing elit Perferendis voluptates amet animi tempora enim itaqu Perferendis voluptates amet animi tempora enim itaque expedita iusto magni praesentium maiores cumque quam eum",
  },
  {
    id: (Date.now() * Math.random() * 15).toString(),
    type: "House",
    purchase: "Buy",
    img: "/13.jpg",
    localGov: "DAN JA",
    bedrooms: 5,
    bathroom: 3,
    kitchen: 2,
    plot: 1,
    price: 150000,
    description:
      "orem ipsum dolor sit amet consectetur adipisicing elit Perferendis voluptates amet animi tempora enim itaqu Perferendis voluptates amet animi tempora enim itaque expedita iusto magni praesentium maiores cumque quam eumorem ipsum dolor sit amet consectetur adipisicing elit Perferendis voluptates amet animi tempora enim itaqu Perferendis voluptates amet animi tempora enim itaque expedita iusto magni praesentium maiores cumque quam eum orem ipsum dolor sit amet consectetur adipisicing elit Perferendis voluptates amet animi tempora enim itaqu Perferendis voluptates amet animi tempora enim itaque expedita iusto magni praesentium maiores cumque quam eum",
  },
  {
    id: (Date.now() * Math.random() * 15).toString(),
    type: "House",
    purchase: "Buy",
    img: "/31.jpg",
    localGov: "FASKARI",
    bedrooms: 4,
    bathroom: 3,
    kitchen: 2,
    plot: 1,
    price: 150000,
    description:
      "orem ipsum dolor sit amet consectetur adipisicing elit Perferendis voluptates amet animi tempora enim itaqu Perferendis voluptates amet animi tempora enim itaque expedita iusto magni praesentium maiores cumque quam eumorem ipsum dolor sit amet consectetur adipisicing elit Perferendis voluptates amet animi tempora enim itaqu Perferendis voluptates amet animi tempora enim itaque expedita iusto magni praesentium maiores cumque quam eum orem ipsum dolor sit amet consectetur adipisicing elit Perferendis voluptates amet animi tempora enim itaqu Perferendis voluptates amet animi tempora enim itaque expedita iusto magni praesentium maiores cumque quam eum",
  },
  {
    id: (Date.now() * Math.random() * 15).toString(),
    type: "House",
    purchase: "Buy",
    img: "/15.jpg",
    localGov: "MUSAWA",
    bedrooms: 3,
    bathroom: 2,
    kitchen: 2,
    plot: 1,
    price: 150000,
    description:
      "orem ipsum dolor sit amet consectetur adipisicing elit Perferendis voluptates amet animi tempora enim itaqu Perferendis voluptates amet animi tempora enim itaque expedita iusto magni praesentium maiores cumque quam eumorem ipsum dolor sit amet consectetur adipisicing elit Perferendis voluptates amet animi tempora enim itaqu Perferendis voluptates amet animi tempora enim itaque expedita iusto magni praesentium maiores cumque quam eum orem ipsum dolor sit amet consectetur adipisicing elit Perferendis voluptates amet animi tempora enim itaqu Perferendis voluptates amet animi tempora enim itaque expedita iusto magni praesentium maiores cumque quam eum",
  },
];

export const PropertyContext = createContext({
  property: [],
  addProperty: ({
    purchase,
    localGov,
    bedrooms,
    type,
    bathroom,
    kitchen,

    description,
    plot,
    price,
    img,
  }) => {},
  deleteProperty: (id) => {},
  updateProperty: (
    id,
    {
      purchase,
      localGov,
      bedrooms,
      type,
      bathroom,
      kitchen,
      description,
      plot,
      price,
      img,
    }
  ) => {},
});

import React from "react";

function propertyReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case "UPDATE":
      const updatablePropertyIndex = state.findIndex(
        (property) => property.id === action.payload.id
      );
      const updatableProperty = state[updatablePropertyIndex];
      const updatedItem = { ...updatableProperty, ...action.payload.data };
      const updatedProperties = [...state];
      updatedProperties[updatablePropertyIndex] = updatedItem;
      return updatedProperties;
    case "DELETE":
      return state.filter((property) => property.id === action.payload);
  }
}
function PropertyContextProvider({ children }) {
  const [propertyState, dispatch] = useReducer(propertyReducer, Properties);
  function addProperty(propertyData) {
    dispatch({ type: "ADD", payload: propertyData });
  }
  function deleteProperty(id) {
    dispatch({ type: "DELETE", payload: id });
  }
  function updateProperty(id, propertyData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: propertyData } });
  }
  const value = {
    properties: propertyState,
    addProperty: addProperty,
    deleteProperty: deleteProperty,
    updateProperty: updateProperty,
  };
  return (
    <PropertyContext.Provider value={value}>
      {children}
    </PropertyContext.Provider>
  );
}

export default PropertyContextProvider;

export const categoryGroups = [
  {
    name: "Women's Wear",
    categories: ["Sarees", "Salwar Suits", "Kurtis & Kurtas", "Lehengas", "Dresses", "Tops & Tunics", "Jeans & Trousers", "Skirts", "Ethnic Wear", "Western Wear"],
  },
  {
    name: "Men's Wear",
    categories: ["Shirts", "T-Shirts", "Kurtas", "Trousers & Pants", "Jeans", "Blazers & Jackets", "Sherwanis", "Ethnic Wear", "Casual Wear", "Formal Wear"],
  },
  {
    name: "Kids Wear",
    categories: ["Boys Clothing", "Girls Clothing", "Infant / Baby Wear", "School & Occasion Wear", "Seasonal & Special Wear"],
  },
  {
    name: "Seasonal & Special Wear",
    categories: ["Winter Wear", "Summer Collection", "Festive Collection", "Wedding Collection", "Party Wear"],
  },
  {
    name: "Accessories",
    categories: ["Dupattas", "Stoles & Scarves"],
  },
];

export const productCategories = [...new Set(categoryGroups.flatMap((group) => group.categories))];

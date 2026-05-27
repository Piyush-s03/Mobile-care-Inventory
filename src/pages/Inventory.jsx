import { useState } from "react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Product from "../components/Product";

const Inventory = () => {

  const [products, setProducts] = useState([
    {
      id: 1,
      name: "iPhone 14 Display",
      category: "Display",
      stock: 10,
      price: 12000,
      image:
        "https://cdn-icons-png.flaticon.com/512/1041/1041886.png",
    },

    {
      id: 2,
      name: "Samsung Battery",
      category: "Battery",
      stock: 4,
      price: 3500,
      image:
        "https://cdn-icons-png.flaticon.com/512/1041/1041886.png",
    },
  ]);

  const [search, setSearch] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    stock: "",
    price: "",
    image: "",
  });

  /* ================= DELETE PRODUCT ================= */

  const deleteProduct = (id) => {

    const updatedProducts = products.filter(
      (item) => item.id !== id
    );

    setProducts(updatedProducts);
  };

  /* ================= ADD PRODUCT ================= */

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const addProduct = (e) => {

    e.preventDefault();

    if (
      !formData.name ||
      !formData.category ||
      !formData.stock ||
      !formData.price
    ) {
      alert("Please Fill All Fields");
      return;
    }

    const newProduct = {
      id: Date.now(),

      name: formData.name,

      category: formData.category,

      stock: Number(formData.stock),

      price: Number(formData.price),

      image:
        formData.image ||
        "https://cdn-icons-png.flaticon.com/512/1041/1041886.png",
    };

    setProducts([...products, newProduct]);

    setFormData({
      name: "",
      category: "",
      stock: "",
      price: "",
      image: "",
    });
  };

  /* ================= SEARCH ================= */

  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="layout">

      {/* Sidebar */}
      <Sidebar />

      <div className="main">

        {/* Navbar */}
        <Navbar />

        <div className="page-box">

          {/* Header */}
          <div className="inventory-header">

            <h2>Inventory Management</h2>

            <input
              type="text"
              placeholder="Search Product..."
              className="search-input"
              onChange={(e) => setSearch(e.target.value)}
            />

          </div>

          {/* Add Product Form */}

          <form
            className="add-product-form"
            onSubmit={addProduct}
          >

            <input
              type="text"
              name="name"
              placeholder="Product Name"
              value={formData.name}
              onChange={handleChange}
            />

            <input
              type="text"
              name="category"
              placeholder="Category"
              value={formData.category}
              onChange={handleChange}
            />

            <input
              type="number"
              name="stock"
              placeholder="Stock"
              value={formData.stock}
              onChange={handleChange}
            />

            <input
              type="number"
              name="price"
              placeholder="Price"
              value={formData.price}
              onChange={handleChange}
            />

            <input
              type="text"
              name="image"
              placeholder="Image URL"
              value={formData.image}
              onChange={handleChange}
            />

            <button type="submit">
              Add Product
            </button>

          </form>

          {/* Product Grid */}

          <div className="product-grid">

            {
              filteredProducts.map((item) => (
                <Product
                  key={item.id}
                  product={item}
                  onDelete={deleteProduct}
                />
              ))
            }

          </div>

        </div>

      </div>

    </div>
  );
};

export default Inventory;
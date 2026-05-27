import React from "react";

const Product = ({ product, onDelete }) => {
  return (
    <div className="product-card">

      <div className="product-image">
        <img
          src={
            product.image ||
            "https://cdn-icons-png.flaticon.com/512/1041/1041886.png"
          }
          alt={product.name}
        />
      </div>

      <div className="product-details">

        <h3>{product.name}</h3>

        <p>
          <strong>Category:</strong> {product.category}
        </p>

        <p>
          <strong>Stock:</strong> {product.stock}
        </p>

        <p>
          <strong>Price:</strong> ₹{product.price}
        </p>

        <div className="product-status">
          {
            product.stock <= 5 ? (
              <span className="low-stock">Low Stock</span>
            ) : (
              <span className="in-stock">In Stock</span>
            )
          }
        </div>

        <div className="product-buttons">

          <button className="edit-btn">
            Edit
          </button>

          <button
            className="delete-btn"
            onClick={() => onDelete(product.id)}
          >
            Delete
          </button>

        </div>

      </div>

    </div>
  );
};

export default Product;
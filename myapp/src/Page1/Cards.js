import React, { useEffect, useState } from "react";
import './Cards.css';
import Button from './Button';
import { Link } from 'react-router-dom';

export default function Pages() {
  const [content, setContent] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5; // Adjust as needed

  useEffect(() => {
    fetch("https://child.onrender.com/api/sciencefiction")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setContent(data);
      })
      .catch((error) => {
        setError(error.message || "An error occurred while fetching data");
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedContent = content.slice(startIndex, endIndex);

  const totalPages = Math.ceil(content.length / itemsPerPage);

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  };

  return (
    <div>
      <Button />
      <div className="CardsContainer">
        {displayedContent.length > 0 ? (
          displayedContent.map((item, index) => (
            <div key={index} className="Card">
              <img src={item.Image} alt="img" className="CardImage" />
              <h3>{item.Title}</h3>
              <button className="btn">{item.Status}</button>
            </div>
          ))
        ) : (
          <div>No data available</div>
        )}
      </div>
     
     
    </div>
  );
}

import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import '../styles.css';

const Home = () => {
  const { items, loading, error } = useSelector((state) => state.posts);
  const navigate = useNavigate();
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const handleCardClick = (id) => {
    navigate(`/item/${id}`);
  };

  return (
    <div className="home">
         
      {items.map((item) => (
        <div key={item.id} className="card" onClick={()=>handleCardClick(item.id)}>
          <img src={`https://picsum.photos/200?random=${item.id}`} alt="Random" />
          <h2>{item.title.slice(0, 20)}{item.title.length > 20 ? '...' : ''}</h2>
          <p>{item.body.slice(0, 100)}{item.body.length > 100 ? '... Read More' : ''}</p>
          
        </div>
      ))}
    </div>
  );
};

export default Home;

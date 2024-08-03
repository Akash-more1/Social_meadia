import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../styles.css';

const ItemDetail = () => {
  const { id } = useParams();
  const item = useSelector((state) =>
    state.posts.items.find((post) => post.id === parseInt(id))
  );

  if (!item) {
    return <p>Item not found</p>;
  }

  return (
    <div className="detail">
      <h2>Detail Page For Post with ID {item.id}</h2>
      <img src={`https://picsum.photos/200?random=${item.id}`} alt="Random" />
      <h2>User Id: {item.userId}</h2>
      <h2>Title: {item.title}</h2>
      <p> <h2>Body:</h2> {item.body}</p>
      
    </div>
  );
};

export default ItemDetail;

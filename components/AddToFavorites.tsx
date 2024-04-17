'use client';
import exp from 'constants';
import React from 'react'
import {HiMiniPlusCircle} from 'react-icons/hi2'

function FavoriteItems({ favorites }: { favorites: string[] }) {
  return (
    <div className="favorite-items">
      <h2 className='text-yellow-400'>Favorite Items</h2>
      <ul>
        {favorites.map((title, index) => (
          <li key={index}>{title}</li>
        ))}
      </ul>
    </div>
  );
}

export default FavoriteItems;
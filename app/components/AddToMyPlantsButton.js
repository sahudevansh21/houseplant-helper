"use client";

import { useState, useEffect } from 'react';

export default function AddToMyPlantsButton({ plantId, plantName, plantSlug, plantImage }) {
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    const myPlants = JSON.parse(localStorage.getItem('myPlants') || '[]');
    setIsAdded(myPlants.some(p => p.id === plantId));
  }, [plantId]);

  const handleToggleMyPlant = () => {
    let myPlants = JSON.parse(localStorage.getItem('myPlants') || '[]');

    if (isAdded) {
      myPlants = myPlants.filter(p => p.id !== plantId);
    } else {
      myPlants.push({
        id: plantId,
        name: plantName,
        slug: plantSlug,
        image: plantImage,
        tasks: {
          watered: false,
          fertilized: false,
          rotated: false,
          misted: false
        }
      });
    }
    localStorage.setItem('myPlants', JSON.stringify(myPlants));
    setIsAdded(!isAdded);
  };

  return (
    <button onClick={handleToggleMyPlant} className={`btn add-to-my-plants-btn ${isAdded ? 'btn-secondary' : ''}`}>
      {isAdded ? 'Remove from My Plants' : 'Add to My Plants'}
    </button>
  );
}

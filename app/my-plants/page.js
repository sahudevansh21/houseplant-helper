"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function MyPlantsDashboard() {
  const [myPlants, setMyPlants] = useState([]);

  useEffect(() => {
    const storedPlants = JSON.parse(localStorage.getItem('myPlants') || '[]');
    setMyPlants(storedPlants);
  }, []);

  const savePlants = (updatedPlants) => {
    setMyPlants(updatedPlants);
    localStorage.setItem('myPlants', JSON.stringify(updatedPlants));
  };

  const handleRemovePlant = (plantId) => {
    if (confirm('Are you sure you want to remove this plant from your collection?')) {
      const updatedPlants = myPlants.filter(plant => plant.id !== plantId);
      savePlants(updatedPlants);
    }
  };

  const handleToggleTask = (plantId, taskName) => {
    const updatedPlants = myPlants.map(plant =>
      plant.id === plantId
        ? { ...plant, tasks: { ...plant.tasks, [taskName]: !plant.tasks[taskName] } }
        : plant
    );
    savePlants(updatedPlants);
  };

  // Reset tasks for a plant
  const handleResetTasks = (plantId) => {
    const updatedPlants = myPlants.map(plant =>
      plant.id === plantId
        ? { ...plant, tasks: { watered: false, fertilized: false, rotated: false, misted: false } }
        : plant
    );
    savePlants(updatedPlants);
  };


  return (
    <div className="container">
      <h1 className="text-center">My Plants Dashboard</h1>
      {myPlants.length === 0 ? (
        <div className="glass-card text-center" style={{marginTop: '3rem', padding: '3rem'}}>
          <p>You haven't added any plants yet.</p>
          <Link href="/plant-library" className="btn" style={{marginTop: '1.5rem'}}>
            Browse Plants to Add
          </Link>
        </div>
      ) : (
        <div className="my-plants-list">
          {myPlants.map(plant => (
            <div key={plant.id} className="glass-card my-plant-item">
              <Link href={`/plant-library/${plant.slug}`}>
                <img src={plant.image} alt={plant.name} style={{width: '100%', height: '180px', objectFit: 'cover', borderRadius: '8px', marginBottom: '1rem'}} />
              </Link>
              <h3>{plant.name}</h3>
              <div className="care-tasks">
                <h4>Care Tasks:</h4>
                <div>
                  <input
                    type="checkbox"
                    id={`watered-${plant.id}`}
                    checked={plant.tasks.watered}
                    onChange={() => handleToggleTask(plant.id, 'watered')}
                  />
                  <label htmlFor={`watered-${plant.id}`}>Watered</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id={`fertilized-${plant.id}`}
                    checked={plant.tasks.fertilized}
                    onChange={() => handleToggleTask(plant.id, 'fertilized')}
                  />
                  <label htmlFor={`fertilized-${plant.id}`}>Fertilized</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id={`rotated-${plant.id}`}
                    checked={plant.tasks.rotated}
                    onChange={() => handleToggleTask(plant.id, 'rotated')}
                  />
                  <label htmlFor={`rotated-${plant.id}`}>Rotated</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id={`misted-${plant.id}`}
                    checked={plant.tasks.misted}
                    onChange={() => handleToggleTask(plant.id, 'misted')}
                  />
                  <label htmlFor={`misted-${plant.id}`}>Misted</label>
                </div>
              </div>
              <div className="action-buttons">
                <button onClick={() => handleResetTasks(plant.id)} className="btn btn-secondary">
                  Reset Tasks
                </button>
                <button onClick={() => handleRemovePlant(plant.id)} className="btn btn-secondary" style={{ backgroundColor: 'rgba(255, 0, 0, 0.2)', borderColor: 'rgba(255, 0, 0, 0.4)' }}>
                  Remove Plant
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

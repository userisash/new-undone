import React, { useState, useEffect } from 'react';

const Avatars = () => {
  const [avatars, setAvatars] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=10')
      .then(response => response.json())
      .then(data => {
        const avatars = data.results.map(result => ({
          name: `${result.name.first} ${result.name.last}`,
          image: result.picture.large
        }));
        setAvatars(avatars);
      });
  }, []);

  const handleFilterChange = event => {
    setFilter(event.target.value);
  };

  const filteredAvatars = avatars.filter(avatar =>
    avatar.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Random Avatars</h1>
      <input type="text" placeholder="Filter by name" value={filter} onChange={handleFilterChange} />
      {filteredAvatars.length === 0 ? <p>No avatars found</p> :
        <ul>
          {filteredAvatars.map((avatar, index) => (
            <li key={index}>
              <img src={avatar.image} alt={avatar.name} />
              <p>{avatar.name}</p>
            </li>
          ))}
        </ul>
      }
    </div>
  );
};

export default Avatars;

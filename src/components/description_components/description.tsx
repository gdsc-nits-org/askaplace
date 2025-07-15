import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Description() {
  // Default data
  const [place, setPlace] = useState({
    name: 'Haflong',
    description:
      'Haflong ipsum dolor sit amet consectetur adipisicing elit. Similique dignissimos tenetur vitae reiciendis, quia at a, labore itaque dolorum accusantium vero, cum laudantium mollitia distinctio voluptate repudiandae sequi. Excepturi, molestiae. Maiores facere consectetur, incidunt sed voluptatum consequuntur distinctio dicta harum aut amet molestias aspernatur sit delectus perspiciatis nemo ipsam et natus expedita accusamus quibusdam. Repellat tenetur accusamus optio blanditiis in? Aliquam hic dolorem veritatis quis. Placeat, doloremque id. Incidunt maiores alias consectetur minus similique dolore vitae atque! Placeat amet eum natus possimus repudiandae ex saepe dolore dolor, asperiores fuga ipsum!'
  });

  useEffect(() => {
    axios
      .get('https://askaplace-api-3.onrender.com/api/v1/place/')
      .then((res) => {
        // Use the first place from the response, or keep default if none
        if (res.data && res.data.length > 0) {
          setPlace({
            name: res.data[0].place || 'Unknown',
            description: res.data[0].description || 'No description available.'
          });
        }
      })
      .catch((err) => {
        // Optionally handle error, keep default data
        console.error('Error fetching place:', err);
      });
  }, []);

  return (
    <div>
      <div className='w-full my-10 mx-auto p-10 py-15 bg-green-500 text-white'>
        <p>
          <b className='underline'>{place.name}</b> {place.description}
        </p>
      </div>
    </div>
  );
}

export default Description;
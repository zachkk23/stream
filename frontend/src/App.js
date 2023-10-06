import React, { useState } from 'react';

const MyForm = () => {
  const [formData, setFormData] = useState({
    key2: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const url = 'http://localhost:5000/api/movies';

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    };
    fetch(url, requestOptions)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('POST request successful:', data);
    })
    .catch(error => {
      console.error('There was an error making the POST request:', error);
      })}
  const click = () => {
    fetch('http://localhost:5000/api/movies')
    .then(res => res.json())
    .then(data => re(data))
    .catch(error => console.error('An error occured',error))
  }
    
  function re(data){
    const dt = document.getElementById('data-container');
    data.forEach(movie => {
      const movieElement = document.createElement('div');
      movieElement.innerHTML = `
        <p>ID: ${movie.id}</p>
        <p>Movie: ${movie.name}</p>
      `;
      dt.appendChild(movieElement);
    })} 
  

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <input type="text" name="key2" value={formData.key2} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
    <button className="button" onClick={click}>SEND</button>
   <div id="data-container"></div> 
   </div>
  );
};

export default MyForm;




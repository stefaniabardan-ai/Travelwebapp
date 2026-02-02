//Fetch data from the travel_recommendation_api.json file

fetch('travel_recommendation_api.json')
    .then(response => response.json()) //Convert response to JSON
    .then(data => {
        console.log(data); //Log the data to the console for verification
    })
    .catch(error => {
        console.log('Error fetching travel recommendations:', error); //Log any errors to the console
    });

    
fetch('travel_recommendation_api.json')
    .then(response => response.json()) //Convert response to JSON
    .then(data => {
       console.log(data); //Log the data to the console for verification

       //Example: Display the travel recommendations on the webpage
       data.forEach(place => {
        //Create HTML elements to display the place information
        const placeDiv = document.createElement('div');
        placeDiv.innerHTML = `
            <h3>${place.name}</h3>
            <img src="${place.image_url}" alt="${place.name}" />
            <p>${place.description}</p>
            <p>Location: ${place.location}</p>
        `;

             //Append the placeDiv to a container element on the webpage
             document.getElementById('results').appendChild(placeDiv);
       });
    })
    .catch(error => {
        console.log('Error fetching travel recommendations:', error); //Log any errors to the console
    });
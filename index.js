fetch('db.json')
  .then(response => response.json())
  .then(data => {

    const items = data.data;
    console.log(items);
    let html = '';
    items.forEach(item => {
      console.log(item)
      document.getElementById("card-content").innerHTML += `
          <div class="card-content">
            <h2>${item.Name}</h2>
            <div class="card">        
            <img src="${item.image}" alt="${item.Name}" style="width: 1000px;">
            <p class="title">Business partners</p>               
            <p>${item.Email}</p>       
          </div>        
        </div> 
      `;
    });
  })
  .catch(error => console.error(error));

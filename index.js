console.log("say")
fetch('db.json')
.then(response => response.json())
.then(data => {

  //console.log (container)
  const items =data.data;
  console.log(items);
  let html = '';
  items.forEach(item => {
    console.log (item)
    //const container = document.getElementsByClassName('card-content');
    document.getElementById("card-content").innerHTML +=`<div class="card">        
    <div class="card">        
        <h2>${item.Name}</h2>        
       <p class="title">CEO & Founder</p>        
        <p>Opportunities don't happen, you create them.</p>        
        <p>hawishan@gmail.com</p> 
       <img src="images/pic2.jpeg" alt="Hawi" style="width:70%">          
        </div>        
    </div> `;
 

  });
})
.catch(error => console.error(error));
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];




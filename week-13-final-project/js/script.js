/** function createMap() {
      var element = document.getElementById('map');
    
      var mapOptions = {
        center: {lat: 38.8899, lng: -77.0192},
        zoom: 12,
        mapTypeId: 'hybrid'
      };
    
      map = new google.maps.Map(element, mapOptions);
      
      for(var i = 0; i < places.length; i++){
        addPlace(places[i]);
      }
    }
    
    function addPlace(place){
      var marker = new google.maps.Marker({
        position: place,
        map: map
      });
      
      marker.addListener('click', function() {
      });
    }
**/

function fillOutputs() {

  // Input 1
  const nameInput = document.getElementById('name-input');
  const name = nameInput.value;

  // Output 1
  const nameOutput = document.getElementById('name-output');
  nameOutput.innerText = name;
	
  // Input 1
  const emailInput = document.getElementById('email-input');
  const email = emailInput.value;

  // Output 1
  const emailOutput = document.getElementById('email-output');
  emailOutput.innerText = email;
	
  // Input 1
  const contactInput = document.getElementById('contact-input');
  const contact = contactInput.value;

  // Output 1
  const contactOutput = document.getElementById('contact-output');
  contactOutput.innerText = contact;
	

  // Get the output container element
  const outputDiv = document.getElementById('output');
  // Make the output container element visible
  outputDiv.style.display = 'block';
}
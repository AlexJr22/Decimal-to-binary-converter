function converter(num) {
  let dec = parseInt(num); 
  
  document.querySelector('#binary').innerHTML = dec.toString(2);
}
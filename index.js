var obj;

fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
  .then(response => response.json())
  .then(data => obj = data)
    .then(function(data) {
      var time = document.createElement("h7");
      var rate = document.createElement("h2");


      time.innerHTML = obj.time.updated;
      document.body.appendChild(time);  

      rate.innerHTML = obj.bpi.EUR.rate;
      document.body.appendChild(rate); 
      

    })






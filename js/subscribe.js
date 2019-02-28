$('#newsletter').submit(function (e) {
    e.preventDefault()
    const data = {
        email: document.getElementById('newsletter-email').value
    }
    console.log(data)
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://hooks.zapier.com/hooks/catch/2565501/pq92q9/",
        "method": "POST",
        "headers": {
          "Cache-Control": "no-cache",
          "Postman-Token": "25c02dc5-0bb9-838b-491f-62590526212a"
        },
        "data": JSON.stringify(data)
      }
      
      $.ajax(settings).done(function (response) {
        console.log(response);
      });
      
    document.getElementById("newsletter").reset();
    document.getElementById('newsletter').style.display = 'none';
    document.getElementById('newsletter-confirm').style.display = 'block';
   });




   
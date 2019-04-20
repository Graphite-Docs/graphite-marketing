$('#newsletter').submit(function (e) {
    e.preventDefault()
    const data = {
        email: document.getElementById('newsletter-email').value
    }
    console.log(data)
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://wt-3fc6875d06541ef8d0e9ab2dfcf85d23-0.sandbox.auth0-extend.com/email-subscribe",
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




   
"use strict";
function demo() {
    document.getElementById('demo').style.display = 'block';
    document.getElementById('demo-form').style.display = 'block';
    document.getElementById('modal-fade').style.display = 'block';
}

function closeModal() {
    document.getElementById('demo-form').style.display = 'none';
    document.getElementById('modal-fade').style.display = 'none';
    document.getElementById('demo-confirm').style.display = 'none';
}

$('#demo').submit(function (e) {
    e.preventDefault()
    const formData = {
        name: document.getElementById('demo-name').value, 
        orgName: document.getElementById('demo-org-name').value,
        email: document.getElementById('demo-email').value,
        message: document.getElementById('demo-message').value
    }
    console.log(formData)
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://wt-3fc6875d06541ef8d0e9ab2dfcf85d23-0.sandbox.auth0-extend.com/demo_requests",
        "method": "POST",
        "headers": {
          "Cache-Control": "no-cache",
          "Postman-Token": "25c02dc5-0bb9-838b-491f-62590526212a"
        },
        "data": JSON.stringify(formData)
      }
      
      $.ajax(settings).done(function (response) {
        console.log(response);
      });

    document.getElementById("demo").reset();
    document.getElementById('demo').style.display = 'none';
    document.getElementById('demo-confirm').style.display = 'block';
    // action='https://hooks.zapier.com/hooks/catch/2565501/as8r0w/' method='post' target='_self'
    
    // return false;
   });

   function largeImage() {
    document.getElementById('large-image').style.display = 'block';
    document.getElementById('modal-fade').style.display = 'block';
   }
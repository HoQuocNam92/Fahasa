fetch('header.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('header').innerHTML = html;  
    const script = document.createElement('script');
    script.src = 'search.js';
    document.body.appendChild(script);
     
    })
    .catch(error => console.error('Lỗi khi fetch header:', error));


 

    fetch('introduce.html')
    .then(response => response.text())
    .then(html => {
    document.getElementById('slider').innerHTML = html;  
    const script = document.createElement('script');
    script.src = 'introduce.js';
    document.body.appendChild(script);
     
    })
    .catch(error => console.error('Lỗi khi fetch header:', error));


 
 
    fetch('footer.html')
    .then(response => response.text())
    .then(html => {
    document.getElementById('footer').innerHTML = html;  
    const script = document.createElement('script');
    script.src = 'footer.js';
    document.body.appendChild(script);
     
    })
    .catch(error => console.error('Lỗi khi fetch header:', error));


 
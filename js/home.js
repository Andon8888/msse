fetch('data/home.json')
.then(res => res.json())
.then(data => {

// HERO
document.getElementById('hero').innerHTML = `     <div class="hero-text">       <h2>${data.hero.title}</h2>       <p>${data.hero.subtitle}</p>     </div>     <img src="${data.hero.image}" class="hero-img">
  `;

// NEWS
let newsHTML = '';
data.news.forEach(n=>{
newsHTML += `<p>${n}</p>`;
});
document.getElementById('news').innerHTML = newsHTML;

// EVENTS
let eventHTML = '';
data.events.forEach(e=>{
eventHTML += `     <a href="${e.link}" style="text-decoration:none;color:inherit;">       <div class="event-item">         <img src="${e.image}">         <p>${e.title}</p>       </div>     </a>
  `;
});
document.getElementById('events').innerHTML = eventHTML;


// IDEA
document.getElementById('idea').innerHTML = `     <h2>我們的理念</h2>     <p>${data.idea}</p>
  `;

// IP
document.getElementById('ip').innerHTML = `     <h2>性教育大使</h2>     <img src="${data.ip.image}" class="ip-main">     <p>${data.ip.text}</p>
  `;

});





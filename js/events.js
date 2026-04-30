fetch('data/events.json')
.then(res => res.json())
.then(data => {

let upcomingHTML = '';
let pastHTML = '';

data.forEach(e => {

```
let card = `
<div class="card">
  <img src="${e.image}">
  <div class="content">
    <h2>${e.title}</h2>
    <p>📅 ${e.date}</p>
    <p>${e.desc}</p>
`;

if(e.status === "upcoming"){
  card += `<a href="${e.link}" class="button" target="_blank">報名</a>`;
  card += `</div></div>`;
  upcomingHTML += card;
}

if(e.status === "past"){
  if(e.gallery){
    card += `<div class="gallery">`;
    e.gallery.forEach(img=>{
      card += `<img src="${img}">`;
    });
    card += `</div>`;
  }
  card += `</div></div>`;
  pastHTML += card;
}
```

});

document.getElementById('upcoming').innerHTML = upcomingHTML;
document.getElementById('past').innerHTML = pastHTML;

});

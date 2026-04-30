fetch('data/newsletter.json')
.then(res => res.json())
.then(data => {
let latest = '', old = '';

data.forEach(n => {
let html = `<div class="card">       <h3>${n.title}</h3>
      ${n.cover ? `<img src="${n.cover}" style="width:100%">` : ''}       <a href="${n.file}" class="button">下載</a>     </div>`;

```
if(n.latest){
  latest += html;
} else {
  old += html;
}
```

});

document.getElementById('latestNewsletter').innerHTML = latest;
document.getElementById('oldNewsletter').innerHTML = old;
});

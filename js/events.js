var data = [
{
id: "event1",
title: "親子性教育工作坊",
date: "2026-05-10",
desc: "透過互動活動學習健康性觀念",
image: "images/events/event1.jpg",
link: "https://forms.gle/xxxx",
status: "upcoming"
},
{
id: "event2",
title: "教師培訓講座",
date: "2026-03-01",
desc: "提升教學技巧與課程設計",
image: "images/events/event2.jpg",
status: "past",
gallery: [
"images/events/e2_1.jpg",
"images/events/e2_2.jpg"
]
},
{
id: "event3",
title: "教師培訓講座",
date: "2026-03-01",
desc: "提升教學技巧與課程設計",
image: "images/events/event2.jpg",
status: "past",
gallery: [
"images/events/e2_1.jpg",
"images/events/e2_2.jpg"
]
},
{
id: "event4",
title: "教師培訓講座",
date: "2026-03-01",
desc: "提升教學技巧與課程設計",
image: "images/events/event2.jpg",
status: "past",
gallery: [
"images/events/e2_1.jpg",
"images/events/e2_2.jpg"
]
}
];

// 🔥 自動排序（最新在前）
data.sort(function(a,b){
return new Date(b.date) - new Date(a.date);
});

var upcomingHTML = "";
var pastHTML = "";

for(var i = 0; i < data.length; i++){

var e = data[i];
var html = "";

html += "<div class='card'>";
html += "<img class='poster' src='" + e.image + "' onclick='openLightbox(this.src)'>";
html += "<div class='content'>";
html += '<h3 onclick="goDetail(\'' + e.id + '\')">' + e.title + '</h3>';

html += "<p class='date'>📅 " + e.date + "</p>";
html += "<p>" + e.desc + "</p>";

if(e.status === "upcoming"){
if(e.link){
html += "<a href='" + e.link + "' class='button' target='_blank'>報名</a>";
}
html += "</div></div>";
upcomingHTML += html;
}

if(e.status === "past"){
if(e.gallery){
html += "<div class='gallery'>";
for(var j = 0; j < e.gallery.length; j++){
html += "<img src='" + e.gallery[j] + "' onclick='openLightbox(this.src)'>";
}
html += "</div>";
}
html += "</div></div>";
pastHTML += html;
}

}

// 顯示
document.getElementById('upcoming').innerHTML = upcomingHTML;
document.getElementById('past').innerHTML = pastHTML;

// 🔥 Tab 切換
function showTab(tab){
document.getElementById('upcoming').style.display = tab === 'upcoming' ? 'block' : 'none';
document.getElementById('past').style.display = tab === 'past' ? 'block' : 'none';
}

// 🔥 詳情頁跳轉
function goDetail(id){
window.location.href = "event-detail.html?id=" + id;
}

// 🔥 Lightbox
function openLightbox(src){
document.getElementById("lightbox-img").src = src;
document.getElementById("lightbox").style.display = "flex";
}

function closeLightbox(){
document.getElementById("lightbox").style.display = "none";
}

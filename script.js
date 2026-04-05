// MAP
var map = L.map('map').setView([20, 0], 2);

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; OpenStreetMap & Carto'
}).addTo(map);

var markers = [];

// DATA (STRICTLY FROM YOUR LIST)
const tourData = [

    {city:"Goyang 🇰🇷", lat:37.6584, lng:126.8320, month:"April", stadium:"Goyang Stadium",
    dates:["Apr 9","Apr 11","Apr 12"]},

    {city:"Tokyo 🇯🇵", lat:35.6762, lng:139.6503, month:"April", stadium:"Tokyo Dome",
    dates:["Apr 17","Apr 18"]},

    {city:"Tampa 🇺🇸", lat:27.9506, lng:-82.4572, month:"April", stadium:"Raymond James Stadium",
    dates:["Apr 25","Apr 26","Apr 28"]},

    {city:"El Paso 🇺🇸", lat:31.7619, lng:-106.4850, month:"May", stadium:"Sun Bowl Stadium",
    dates:["May 2","May 3"]},

    {city:"Mexico City 🇲🇽", lat:19.4326, lng:-99.1332, month:"May", stadium:"Estadio GNP Seguros",
    dates:["May 7","May 9","May 10"]},

    {city:"Stanford 🇺🇸", lat:37.4275, lng:-122.1697, month:"May", stadium:"Stanford Stadium",
    dates:["May 16","May 17","May 19"]},

    {city:"Las Vegas 🇺🇸", lat:36.1699, lng:-115.1398, month:"May", stadium:"Allegiant Stadium",
    dates:["May 23","May 24","May 27","May 28"]},

    {city:"Busan 🇰🇷", lat:35.1796, lng:129.0756, month:"June", stadium:"Stay Tuned",
    dates:["Jun 12","Jun 13"]},

    {city:"Madrid 🇪🇸", lat:40.4168, lng:-3.7038, month:"June", stadium:"Riyadh Air Metropolitano",
    dates:["Jun 26","Jun 27"]},

    {city:"Brussels 🇧🇪", lat:50.8503, lng:4.3517, month:"July", stadium:"King Baudouin Stadium",
    dates:["Jul 1","Jul 2"]},

    {city:"London 🇬🇧", lat:51.5074, lng:-0.1278, month:"July", stadium:"Tottenham Hotspur Stadium",
    dates:["Jul 6","Jul 7"]},

    {city:"Munich 🇩🇪", lat:48.1351, lng:11.5820, month:"July", stadium:"Allianz Arena",
    dates:["Jul 11","Jul 12"]},

    {city:"Paris 🇫🇷", lat:48.8566, lng:2.3522, month:"July", stadium:"Stade de France",
    dates:["Jul 17","Jul 18"]},

    {city:"East Rutherford 🇺🇸", lat:40.8135, lng:-74.0745, month:"August", stadium:"MetLife Stadium",
    dates:["Aug 1","Aug 2"]},

    {city:"Foxborough 🇺🇸", lat:42.0654, lng:-71.2488, month:"August", stadium:"Gillette Stadium",
    dates:["Aug 5","Aug 6"]},

    {city:"Baltimore 🇺🇸", lat:39.2904, lng:-76.6122, month:"August", stadium:"M&T Bank Stadium",
    dates:["Aug 10","Aug 11"]},

    {city:"Arlington 🇺🇸", lat:32.7357, lng:-97.1081, month:"August", stadium:"AT&T Stadium",
    dates:["Aug 15","Aug 16"]},

    {city:"Toronto 🇨🇦", lat:43.6532, lng:-79.3832, month:"August", stadium:"Rogers Stadium",
    dates:["Aug 22","Aug 23"]},

    {city:"Chicago 🇺🇸", lat:41.8781, lng:-87.6298, month:"August", stadium:"Soldier Field",
    dates:["Aug 27","Aug 28"]},

    {city:"Los Angeles 🇺🇸", lat:34.0522, lng:-118.2437, month:"September", stadium:"SoFi Stadium",
    dates:["Sep 1","Sep 2","Sep 5","Sep 6"]},

    {city:"Bogotá 🇨🇴", lat:4.7110, lng:-74.0721, month:"October", stadium:"Estadio El Campín",
    dates:["Oct 2","Oct 3"]},

    {city:"Lima 🇵🇪", lat:-12.0464, lng:-77.0428, month:"October", stadium:"Estadio San Marcos",
    dates:["Oct 9","Oct 10"]},

    {city:"Santiago 🇨🇱", lat:-33.4489, lng:-70.6693, month:"October", stadium:"Estadio Nacional",
    dates:["Oct 16","Oct 17"]},

    {city:"Buenos Aires 🇦🇷", lat:-34.6037, lng:-58.3816, month:"October", stadium:"Estadio Único de La Plata",
    dates:["Oct 23","Oct 24"]},

    {city:"São Paulo 🇧🇷", lat:-23.5505, lng:-46.6333, month:"October", stadium:"Estádio do MorumBIS",
    dates:["Oct 28","Oct 30","Oct 31"]},

    {city:"Kaohsiung 🇹🇼", lat:22.6273, lng:120.3014, month:"November", stadium:"Stay Tuned",
    dates:["Nov 19","Nov 21","Nov 22"]},

    {city:"Bangkok 🇹🇭", lat:13.7563, lng:100.5018, month:"December", stadium:"Stay Tuned",
    dates:["Dec 3","Dec 5","Dec 6"]},

    {city:"Kuala Lumpur 🇲🇾", lat:3.1390, lng:101.6869, month:"December", stadium:"Stay Tuned",
    dates:["Dec 12","Dec 13"]},

    {city:"Singapore 🇸🇬", lat:1.3521, lng:103.8198, month:"December", stadium:"Stay Tuned",
    dates:["Dec 17","Dec 19","Dec 20","Dec 22"]},

    {city:"Jakarta 🇮🇩", lat:-6.2088, lng:106.8456, month:"December", stadium:"Stay Tuned",
    dates:["Dec 26","Dec 27"]},

    {city:"Melbourne 🇦🇺", lat:-37.8136, lng:144.9631, month:"February", stadium:"Stay Tuned",
    dates:["Feb 12","Feb 13"]},

    {city:"Sydney 🇦🇺", lat:-33.8688, lng:151.2093, month:"February", stadium:"Stay Tuned",
    dates:["Feb 20","Feb 21"]},

    {city:"Hong Kong 🇭🇰", lat:22.3193, lng:114.1694, month:"March", stadium:"Stay Tuned",
    dates:["Mar 4","Mar 6","Mar 7"]},

    {city:"Manila 🇵🇭", lat:14.5995, lng:120.9842, month:"March", stadium:"Stay Tuned",
    dates:["Mar 13","Mar 14"]}
];


// MARKERS
tourData.forEach(place => {

    var marker = L.circleMarker([place.lat, place.lng], {
    radius: 8,
    color: "#a855f7",
    fillColor: "#c084fc",
    fillOpacity: 0.9
}).addTo(map);

// HOVER EFFECT
marker.on('mouseover', function () {
    this.setStyle({
        radius: 12,
        fillColor: "#d8b4fe"
    });
});

marker.on('mouseout', function () {
    this.setStyle({
        radius: 8,
        fillColor: "#c084fc"
    });
});

    marker.month = place.month;
    marker.title = place.city.toLowerCase();

    marker.bindTooltip(place.city);

    // ADD YEAR TO EACH DATE
    let dateList = place.dates.map(d => {
        if (d.startsWith("Feb") || d.startsWith("Mar")) {
            return d + " 2027";
        } else {
            return d + " 2026";
        }
    }).join(", ");

   let venueText = "";
let exploreButton = "";

// CONDITION
if (place.stadium === "Stay Tuned") {
    venueText = `<p><b>Venue: To be announced</b></p>`;
    exploreButton = ""; // no button
} else {
    venueText = `<p><b>${place.stadium}</b></p>`;
    exploreButton = `
        <a href="https://www.google.com/search?q=${place.stadium}">
            <button style="
                padding:8px;
                background:purple;
                color:white;
                border:none;
                border-radius:6px;
                cursor:pointer;
            ">
                Explore Area 🔍
            </button>
        </a>
    `;
}

marker.bindPopup(`
    <div style="text-align:center;">
        <h3>${place.city}</h3>

        ${venueText}

        <p>${dateList}</p>

        ${exploreButton}
    </div>
`);

    markers.push(marker);
});


// FILTER
function filterMonth(month) {
    markers.forEach(marker => {
        if (month === "All" || marker.month === month) {
            if (!map.hasLayer(marker)) marker.addTo(map);
        } else {
            if (map.hasLayer(marker)) map.removeLayer(marker);
        }
    });
}


// SEARCH
function searchPlace() {
    var input = document.getElementById("searchBox").value.toLowerCase();

    markers.forEach(marker => {
        if (marker.title.includes(input)) {
            map.setView(marker.getLatLng(), 6);
            marker.openPopup();
        }
    });
}


var iconRed = L.icon({
  iconUrl: '../imagem/muda.png',
  iconSize:    [38, 38],
  shadowSize:  [50, 64],
  iconAnchor:  [22, 64],
  shadowAnchor:[4, 62],
  popupAnchor: [-3, -76]
});


var baseLat = -23.5505;
var baseLng = -46.6333;

// Conversão grau para radiano
function toRadians(deg) {
  return deg * (Math.PI / 180);
}

// Conversão de metros para graus
function metersToLat(m) {
  return m * 0.000009;
}

function metersToLng(m, lat) {
  return m * 0.000009 / Math.cos(lat * Math.PI / 180);
}


var spacing = 2;
var angleDeg = 30; 
var angleRad = toRadians(angleDeg);


for (let row = 0; row < 8; row++) {
  for (let col = 0; col < 8; col++) {
    // Calcula a posição original em metros
    let x = col * spacing;
    let y = row * spacing;

    // Aplica a rotação
    let xRot = x * Math.cos(angleRad) - y * Math.sin(angleRad);
    let yRot = x * Math.sin(angleRad) + y * Math.cos(angleRad);

    // Converte de metros para graus
    let latOffset = metersToLat(yRot);
    let lngOffset = metersToLng(xRot, baseLat);

    let lat = baseLat + latOffset;
    let lng = baseLng + lngOffset;

    // Cria o marcador
    L.marker([lat, lng], { icon: iconRed })
     .addTo(map)
     .bindPopup(`Linha: ${row + 1}, Coluna: ${col + 1}`);
  }
}

let yr = new Date().getFullYear();
let lastModified = document.lastModified;
let author = "🇺🇸 Dakota Raul Hancock 🇺🇸 USA";
let place = "United States of America";

document.getElementById("copywrite").innerHTML = `\u00A9 ${yr} | ${author} | ${place}`;
document.getElementById("modified").innerHTML = `Last Modified: ${lastModified}`;
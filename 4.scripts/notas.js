const notas = [
   { texto: "Régimen de la Amazonía ", 
 fecha: new Date("2025-10-27"), 
 url: "../2.pages/amazonia.html"},
  { texto: "Syncthing ", 
 fecha: new Date("2025-10-11"), 
 url: "../2.pages/syncthing.html"},

];

function renderNotas(filtro = "") {
 const lista = document.getElementById("nota-lista");
lista.innerHTML = "";

let notasFiltradas = notas.filter(n => n.texto.toLowerCase().includes(filtro.toLowerCase()));

for (const nota of notasFiltradas) {
 const li = document.createElement("li");
 const a = document.createElement("a");
a.textContent = nota.texto;
 a.href = nota.url;
  li.appendChild(a);
 lista.appendChild(li);
 }
 }

function sortNotas() {
notas.sort((a, b) => b.fecha - a.fecha); // Más reciente primero
  renderNotas(document.getElementById("searchInput").value);
}

document.addEventListener("DOMContentLoaded", function() {
 document.getElementById("searchInput").addEventListener("input", function() {
  renderNotas(this.value);
 });

  renderNotas(); // Mostrar al cargar
});

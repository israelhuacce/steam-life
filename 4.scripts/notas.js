// const notas = [
//   { texto: "📅 Calendario de Obligaciones tributarias", 
//     fecha: new Date("2024-06-01"), 
//     url: "calendario.html" },
//   { texto: "🔍 Consulta RUC - masiva", 
//     fecha: new Date("2024-06-15"), 
//     url:"consultaruc.html" }
// ];

// function renderNotas(filtro = "") {
//   const lista = document.getElementById("nota-lista");
//   lista.innerHTML = "";

//   let notasFiltradas = notas.filter(n => n.texto.toLowerCase().includes(filtro.toLowerCase()));

//   for (const nota of notasFiltradas) {
//     const li = document.createElement("li");
//     const a = document.createElement("a");
//     a.textContent = nota.texto;
//     a.href = nota.url;
//     li.appendChild(a);
//     lista.appendChild(li);
//   }
// }

// function sortNotas() {
//   notas.sort((a, b) => b.fecha - a.fecha); // Más reciente primero
//   renderNotas(document.getElementById("searchInput").value);
// }

// document.addEventListener("DOMContentLoaded", function() {
//   document.getElementById("searchInput").addEventListener("input", function() {
//     renderNotas(this.value);
//   });

//   renderNotas(); // Mostrar al cargar
// });

// Writes this year in the footer, so you never have to update it
document.addEventListener('DOMContentLoaded', function () {
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
});

var date = new Date();

var format = {weekday: 'short', day: 'numeric', month: 'short', year:'numeric'};
document.getElementById('datetoday').textContent = date.toLocaleDateString('en-us', format);


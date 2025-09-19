// Tehtävä 1
let nappi1 = document.querySelector("button"); // ottaa ekan napin
nappi1.addEventListener("click", function () {
    alert("Klikkasit minua!");
});

// Tehtävä 2
let nappi2 = document.querySelectorAll("button")[1]; // ottaa toisen napin
nappi2.addEventListener("click", showTable);

function showTable() {
    let taulukko = `
        <table border="1" cellpadding="6">
            <tr><th>Nimi</th><th>Tehtävä</th><th>Palkka</th></tr>
            <tr><td>Tiger Nixon</td><td>System Architect</td><td>$320,800</td></tr>
            <tr><td>Garrett Winters</td><td>Accountant</td><td>$170,750</td></tr>
            <tr><td>Ashton Cox</td><td>Junior Technical Author</td><td>$86,000</td></tr>
            <tr><td>Cedric Kelly</td><td>Senior Javascript Developer</td><td>$433,060</td></tr>
            <tr><td>Airi Satou</td><td>Accountant</td><td>$162,700</td></tr>
        </table>
    `;

    document.querySelector("#taulukonPaikka").innerHTML = taulukko;
}

//Tehtävä 3

const ex2 = document.querySelectorAll('h2')[1];

ex2.addEventListener('mouseover', () => {
  console.log('Stepped over my a mouse!');
});

const ex1 = document.querySelectorAll('h2')[0];
if (ex1) {
  ex1.addEventListener('click', () => {
    ex1.style.color = 'red';
    ex1.textContent = 'Bye bye mouse!';
  });
}

//TEhtävä 4
document.addEventListener('DOMContentLoaded', () => {
  const ta = document.getElementById('textdata');      // <textarea id="textdata">
  const counter = document.getElementById('charcount'); // <span id="charcount">
  const form = document.querySelector('form');
  const submitBtn = form.querySelector('button');
  const MAX = 200;


  ta.addEventListener('focus', () => {
    ta.setAttribute('placeholder', 'Please fill in the form with proper data.');
    ta.style.backgroundColor = '#fffbe6';
  });
  ta.addEventListener('blur', () => {
    ta.style.backgroundColor = '';
  });

  
  ta.addEventListener('keydown', () => setTimeout(updateCountAndState, 0));

  
  function updateCountAndState() {
    const len = ta.value.length;
    counter.textContent = `${len}/${MAX}`;
    counter.style.color = len > MAX ? 'red' : '';
    submitBtn.disabled = len === 0 || len > MAX;
  }
  updateCountAndState(); 


  form.addEventListener('submit', (e) => {
    const len = ta.value.trim().length;
    if (len === 0) {
      e.preventDefault();
      alert('KEnttä on tyhjä. Täytä kenttä.');
      return;
    }
    if (len > MAX) {
      e.preventDefault();
      alert(`Liikaa merkkejä (${len}/${MAX}). Lyhennä tekstiä.`);
      return;
    }
    
    e.preventDefault();
    alert('Homma ookoo');
  });
});

//tehtävä 5

const area = document.getElementById('coordinates');
const out  = document.getElementById('coords') || area;

if (area) {
  area.addEventListener('mousemove', (e) => {
    const r = area.getBoundingClientRect();
    const x = Math.round(e.clientX - r.left);
    const y = Math.round(e.clientY - r.top);
    console.log(`x:${x}, y:${y}`);
    out.innerHTML = `x: ${x}, y: ${y}`;
  });

  area.addEventListener('mouseleave', () => {
    out.innerHTML = '—';
  });
}

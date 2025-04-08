const button = document.querySelector(".button");

function GetRandomNumTable(min, max) {
  const MyArray = new Array(30);
  for (let i = 0; i < MyArray.length; i++) {
    MyArray[i] = Math.floor(Math.random() * (max - min + 1)) + min;
  }
  tbody(MyArray);
}

function tbody(MyArray) {
  for (let i = 0; i <= 5; i++) {
    const tbody = document.querySelector("tbody");
    tbody.innerHTML += "<tr></tr>";

    for (let i = 0; i <= 4; i++) {
      const tr = tbody.lastElementChild;
      tr.innerHTML += "<td></td>";
      const td = tbody.lastElementChild.lastElementChild;
      const deleteNum = MyArray.shift();
      td.innerHTML = deleteNum;

      if (deleteNum >= 50) {
        td.style.backgroundColor = "orange";
      }
    }
  }
}

function foo(min, max) {
  const tbody = document.querySelector("tbody");
  if (tbody.lastElementChild.children.length === 5) {
    const tbody = document.querySelector("tbody");
    tbody.innerHTML += "<tr></tr>";
  }
  fill(tbody, min, max);
}

function fill(tbody, min, max) {
  const tr = tbody.lastElementChild;
  tr.innerHTML += "<td></td>";
  const rand = Math.floor(Math.random() * (max - min + 1)) + min;
  tr.lastElementChild.innerHTML += rand;
  if (rand >= 50) {
    tr.lastElementChild.style.backgroundColor = "orange";
  }
}

function CleaR() {
  const Doc = document.querySelectorAll("tr");
  for (tr of Doc) {
    const tr = document.querySelector("tr");
    const parent = tr.parentNode;
    parent.removeChild(tr);
  }
}

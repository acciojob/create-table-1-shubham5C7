
 const tbody = document.querySelector("#sampleTable tbody");

function insert_Row() {
   
     const tr = document.createElement("tr");
   const td1 = document.createElement("td");
   td1.textContent = "New Cell1"

   const td2 = document.createElement("td");
   td2.textContent = "New Cell2"
    tr.append(td1,td2);
   
  tbody.prepend(tr); 
}

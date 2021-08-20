document.querySelector('#generateNames').addEventListener('submit', loadNames);

function loadNames(event) {
     event.preventDefault();

     const region = document.getElementById("country").value;
     const gender = document.getElementById("genre").value;
     const amount = document.getElementById("amount").value;

     // make url
     let url = "http://uinames.com/api/?";
     if (region !== " ") url += `region = ${region}&`;
     if (gender !== " ") url += `gender = ${gender}&`;
     if (amount !== " ") url += `amount = ${amount}&`;
     console.log(url);

     // ajax
     const xhr = new XMLHttpRequest();

     xhr.open("GET", url, true);

     xhr.onload = function () {
          if (this.status === 200) {
               const names = JSON.parse(this.responseText);
                  console.log(names);

               // insert into html
               let html = "<h2>Generated Names: </h2>";
               html += '<ul class="list" > ';
               names.forEach(function (name) {
                    html += `
                <li> ${name.name} </li>
                `;
               });
               html += "<ul/>";
               document.querySelector("#result").innerHtml = html;
          }
     }; //end of xhr func

     //  send
     xhr.send();
} // end of loadNames func

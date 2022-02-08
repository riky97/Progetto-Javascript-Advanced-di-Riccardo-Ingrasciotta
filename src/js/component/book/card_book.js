import axios from "axios";
//import default_cover from "../../../images/icons/default-cover.jpg";

let collection_book = JSON.parse(sessionStorage.getItem("collectionBook"));
if (collection_book !== null) {
  async function get_book(id) {
    let image = await axios
      .get(`https://covers.openlibrary.org/b/id/${id.img}-M.jpg`, {
        responseType: "arraybuffer",
      })
      .then((response) => {
        let image = btoa(
          new Uint8Array(response.data).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            ""
          )
        );
        return `data:${response.headers[
          "content-type"
        ].toLowerCase()};base64,${image}`;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        return "./images/default-cover.jpg";
      });

    let card = `
    <div class="card mb-3" style="max-witdh:500px">
    <div class="row g-0">
      <div class="col-md-4">
      <img src="${image}" class="img-fluid rounded-start img" alt="" >
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${id.title}</h5>
          <small class="text-muted">By: ${author(id)}</small>
         
        </div>
      </div>
      </div>
      </div>
      `;
    let a = document.createElement("a");
    a.href = `book.html?id=${id.key}`;
    a.innerHTML = card;

    let container_book = document.getElementById("containerBook");
    let div_col = document.createElement("div");
    div_col.classList.add("col-6");
    div_col.append(a);
    container_book.append(div_col);
  }

  function author(ele) {
    let arr = [];
    ele.authors.forEach((data) => {
      arr.push(data.name);
    });
    return arr.join("/ ");
  }

  collection_book.forEach((element) => {
    get_book(element);
  });
}

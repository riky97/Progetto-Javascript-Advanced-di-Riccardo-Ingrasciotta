import axios from "axios";

let URL = window.location.href;
function get_URL(URL) {
  let key_work = URL.split("=")[1];
  return key_work;
}
//console.log(get_URL(URL));

async function get_description_book(ele) {
  let book = await axios
    .get(`https://openlibrary.org${ele}.json`)
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
  //console.log(book);
  let id_img;
  console.log(JSON.parse(sessionStorage.getItem("collectionBook")));
  if (book.covers !== undefined) {
    id_img = book.covers[0];
  } else {
    for (
      let i = 0;
      i < JSON.parse(sessionStorage.getItem("collectionBook")).length;
      i++
    ) {
      const ele = JSON.parse(sessionStorage.getItem("collectionBook"))[i];
      if (ele.title == book.title) {
        id_img = ele.img;
        break;
      }
    }
  }
  let img = await axios
    .get(`https://covers.openlibrary.org/b/id/${id_img}-L.jpg`, {
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

  Promise.all([book, img]).then((value) => {
    let obj_book = value[0];
    let str_img = value[1];
    let description = "";
    if (typeof obj_book.description === "object") {
      description = obj_book.description.value;
    } else {
      description = obj_book.description;
    }
    let card = `
    <div class="card mb-3" >
    <div class="row g-0">
      <div class="col-md-4">
      <img src="${str_img}" class="img-fluid rounded-start img_book" alt="" >
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${obj_book.title}</h5>
          <p class="card-text"><small class="text-muted">First publish: ${obj_book.first_publish_date}</small></p>
          <p class="card-text">${description}</p>
        </div>
      </div>
      </div>
      </div>
      `;
    let container = document.getElementById("idContainer");
    container.innerHTML = card;
  });
}
get_description_book(get_URL(URL));

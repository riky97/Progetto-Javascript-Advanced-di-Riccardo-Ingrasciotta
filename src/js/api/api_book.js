import axios from "axios";
const _ = require("lodash");

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
      //console.log(_.get(response, "data"));
      return _.get(response, "data");
    })
    .catch((error) => {
      console.log(error);
      return undefined;
    });
  //console.log(book);
  let id_img;

  if (_.get(book, "covers") !== undefined) {
    id_img = _.get(book, "covers[0]");
  } else {
    for (
      let i = 0;
      i < JSON.parse(sessionStorage.getItem("collectionBook")).length;
      i++
    ) {
      const ele = JSON.parse(sessionStorage.getItem("collectionBook"))[i];
      if (_.get(ele, "title") == _.get(book, "title")) {
        id_img = _.get(ele, "img");
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
    if (typeof _.get(obj_book, "description") === "object") {
      description = _.get(obj_book, "description.value");
    } else {
      description = _.get(obj_book, "description");
    }
    if (description !== undefined) {
      if (description.indexOf("----------")) {
        let arr_descr = description.split("----------");
        description = arr_descr[0];
      }
    }
    console.log(obj_book);
    let card = `
    <div class="card mb-3" style="min-width:100%">
    <div class="row g-0">
      <div class="col-md-4">
      <img src="${str_img}" class="img-fluid rounded-start img_book" alt="" >
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${_.get(obj_book, "title")}</h5>
          <p class="card-text"><small class="text-muted">First publish: ${
            _.get(obj_book, "first_publish_date") === undefined
              ? "No first date publish"
              : _.get(obj_book, "first_publish_date")
          }</small></p>
         
          
          <ul class="m-d expand-list">
            <li data-md-content="200">
              <label name="tab" for="tab1" tabindex="-1" class="tab_lab" role="tab"
                >Book description</label
              >
              <input type="checkbox" checked class="tab" id="tab1" tabindex="0" />
              <span class="open-close-icon">
                <i class="fas fa-plus"></i>
                <i class="fas fa-minus"></i>
              </span>
              <div class="content">
              ${description === undefined ? "No description yet!" : description}
              </div>
            </li>
            <li data-md-content="200">
              <label name="tab" for="tab2" tabindex="-1" class="tab_lab" role="tab"
                >Subjects</label
              >
              <input type="checkbox" class="tab" id="tab2" tabindex="0" />
              <span class="open-close-icon"
                ><i class="fas fa-plus"></i><i class="fas fa-minus"></i
              ></span>
              <div class="content">
                <em>${subjects(obj_book.subjects)}</em>
                
              </div>
            </li>
          </ul>
        </div>
      </div>
      </div>
      </div>
      `;
    let container = document.getElementById("idContainer");
    container.innerHTML = card;
  });
}
function subjects(ele) {
  let arr = [];
  console.log(ele);

  return ele.join("/ ");
}
get_description_book(get_URL(URL));

/*
${
            description === undefined ? "No description yet!" : description
          }
*/

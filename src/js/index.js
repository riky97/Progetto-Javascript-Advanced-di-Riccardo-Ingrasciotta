import "../css/home.scss";
import "../css/main.scss";
import "../css/category.scss";

/* 
<div
      class="position-absolute top-0"
      style="width: 100%; display: none"
      id="alert_category"
    >
      <div class="alert alert-danger" role="alert" style="text-align: center">
        The research returned no results
      </div>
    </div>

    <section class="hero">
      <div class="card" style="width: 20rem">
        <div class="card-body">
          <h1 class="card-title">ONLINE BOOK</h1>
          <h6 class="card-subtitle mb-2 text-muted">
            Welcome, search books by category
          </h6>
          <form method="get" action="" name="search_category" class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="fantasy, horror etc.."
              aria-label="Search"
              name="category"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
            <!--onclick="getBookCategory(document.getElementById('category').value)"-->
          </form>
        </div>
      </div>
      <div style="height: 10em"></div>
    </section>
*/

/*let img = axios
        .get(`https://covers.openlibrary.org/b/id/${ele.cover_id}-M.jpg`, {
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
        });
      Promise.all([img]).then((values) => {
        arrayBook.push({
          title: ele.title,
          key: ele.key,
          authors: ele.authors,
          image: values[0],
        });
      });*/
/*let author = axios
    .get(`https://openlibrary.org${response[1].key}.json`)
    .then((response) => {
      return response.data;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });

  let img = axios
    .get(`https://covers.openlibrary.org/b/id/${author.covers[3]}-M.jpg`, {
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
    });*/

/*Promise.all([response /*, author, img]).then((value) => {
    console.log(typeof value[0]);
    if (value[0].lenght === 0) {
      return false;
    } else {
      let arrayBook = [];
      value[0].foarech((ele) => {
        arrayBook.push({ title: ele.title, key: ele.key, authors: ele.authors });
      });
      for (const [key, values] of Object.entries(value[0])) {
        let title = "";
        let workId = "";
        let author = [];
        if (key === "title") {
          title = values;
        }
        if (key === "key") {
          workId = values;
        }
        if (key === "authors") {
          author = values;
        }
        // arrayBook.push({ title: title, key: workId, authors: author });
      }
      console.log(arrayBook);
      /*let image = document.createElement("img");
      image.src = value[2];
  
      document.body.appendChild(image);
    }
  });*/

// Ricerca libri
/*
async function getImg(ele) {
  let img = await axios
    .get(`https://covers.openlibrary.org/b/id/${ele}-M.jpg`, {
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
    });
  //console.log("ss", img);
  return img;
}*/

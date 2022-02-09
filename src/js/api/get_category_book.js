import axios from "axios";
// Load the full build.
const _ = require("lodash");

export default async function getCategoryBook() {
  let form = document.forms.search_category;
  let category = form.elements.category.value;
  category = category.toLowerCase();
  if (category === "") {
    category = undefined;
  }
  let response = await axios
    .get(`https://openlibrary.org/subjects/${category}.json`)
    .then(function (res) {
      // handle success
      //console.log(res.data.works);
      return _.get(res, "data.works");
    })
    .catch(function (error) {
      // handle error
      console.log(error);
      return undefined;
    });

  if (response.length === 0 || response == undefined) {
    return false;
  } else {
    let arrayBook = [];

    response.forEach((ele) => {
      arrayBook.push({
        category: category,
        title: _.get(ele, "title"),
        key: _.get(ele, "key"),
        authors: _.get(ele, "authors"),
        img: _.get(ele, "cover_id"),
      });
    });

    sessionStorage.setItem("collectionBook", JSON.stringify(arrayBook));
    //console.log(JSON.parse(sessionStorage.getItem("collectionBook")));
    return true;
  }
}

import axios from "axios";

export default async function getCategoryBook() {
  let form = document.forms.search_category;
  let category = form.elements.category.value.ToLowerCase();
  console.log(category);
  if (category === "") {
    category = undefined;
  }
  let response = await axios
    .get(`https://openlibrary.org/subjects/${category}.json`)
    .then(function (res) {
      // handle success
      //console.log(res.data.works);
      return res.data.works;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
  console.log(response);
  if (response.length === 0 || response == undefined) {
    return false;
  } else {
    let arrayBook = [];

    response.forEach((ele) => {
      arrayBook.push({
        category: category,
        title: ele.title,
        key: ele.key,
        authors: ele.authors,
        img: ele.cover_id,
      });
    });

    sessionStorage.setItem("collectionBook", JSON.stringify(arrayBook));
    //console.log(JSON.parse(sessionStorage.getItem("collectionBook")));
    return true;
  }
}

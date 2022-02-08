import getCategoryBook from "./get_category_book";
("./get_category_book");
let form = document.forms.search_category;
form.addEventListener("submit", (event) => {
  event.preventDefault();
  async function category() {
    let res = await getCategoryBook();
    if (res === true) {
      window.location.href = `/category.html?id=${form.elements[0].value}`;
    } else {
      let alert = document.getElementById("alert_category");
      alert.style.display = "block";
    }
  }
  category();
});

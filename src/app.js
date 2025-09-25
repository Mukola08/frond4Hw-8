const input = document.querySelector("#bookmarkInput");
const addbBtn = document.querySelector("#addBookmarkBtn");
const listRef = document.querySelector("#bookmarkList");

let urlList = JSON.parse(localStorage.getItem("url")) || [];
const render = function () {
    listRef.innerHTML = urlList.map(
        (url, index) => `
      <li>
        <a href="${url}" target="_blank">${url}</a>
<button type="button" class = "delete" data-index ="${index}">Видалити</button>
<button type="button" class = "edit" data-index ="${index}">Редагувати</button>
</li>`
    )
        .join("");
}

const save = function () {
    localStorage.setItem("url", JSON.stringify(urlList));
    render()
}

addbBtn.addEventListener("click", () => {
    const url = input.value.trim();
    if (url) {
        urlList.push(url);
        input.value = "";
        save()
    }
});

listRef.addEventListener("click", (evt) => {
    const index = evt.target.dataset.index;
    if (evt.target.nodeName !== "BUTTON") {
        return;
    };
    if (evt.target.classList.contains("edit")) {
        const newUrl = prompt("редагуйте посилання!", urlList[index]);
        if (newUrl) {
            urlList[index] = newUrl;
            save();
        }
    }

    if (evt.target.classList.contains("delete")) {
        urlList.splice(index, 1);
        save()
    }
    
})







const userName = document.querySelector("#username");
const password = document.querySelector("#password");
const saveBtn = document.querySelector("#saveBtn");

userName.value = localStorage.getItem("userName") || ""
password.value = localStorage.getItem("password") || ""

userName.addEventListener("input", function() {
return localStorage.setItem("userName", userName.value)
})

password.addEventListener("input", function () {
  return localStorage.setItem("password", password.value);
});

saveBtn.addEventListener("click", () => {
    localStorage.removeItem("userName");
    localStorage.removeItem("password");
    userName.value = "";
    password.value = "";
})
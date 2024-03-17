
const inputSearch = document.getElementById("searchfield");
const btn = document.getElementById("btn");
const phoneContainer = document.getElementById("phoneContainer");
const phoneDetails = document.getElementById("phoneDetails");

async function showResult(showMore) {
 
  let response = await fetch(
    "https://openapi.programming-hero.com/api/phones?search=" +
      inputSearch.value
  );
  let data = await response.json();
  console.log(data);

  phoneContainer.innerHTML = "";
  for (let i = 0; i < 15; i++) {
    let card = phones(data.data[i]);
  }
}

function phones(data) {
  const phone = data;
  console.log(phone);

  let div = document.createElement("div");
  div.classList.add(
    "bg-slate-500",
    "flex",
    "flex-col",
    "justify-center",
    "items-center",
    "gap-5",
    "p-5",
    "rounded-3xl",
    "shadow-xl",
    "rounded-lg"
  );
  div.innerHTML = `
    <img src="${phone.image}" class="rounded-lg">
    <h1 class="text-2xl font-bold">${phone.phone_name}</h1>
    <a class="text-center w-[360px] text-l cursor-pointer">${phone.image}</a>
    <p class="text-center w-[360px] text-xl">${phone.slug}</p>
    
    <button class="show-details-button bg-violet-700 text-white p-5 rounded-lg text-xs font-bold hover:bg-violet-800">SHOW DETAILS</button>
    `;
  phoneContainer.appendChild(div);
}

btn.addEventListener("click", function (event) {
  event.preventDefault(); 
  showResult(false);
});

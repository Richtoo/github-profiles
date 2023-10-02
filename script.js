import accounts from "./accounts.js";

const init = () => {
  const cardWrapper = document.getElementById("card-wrapper");

  let cardContent = "";

  accounts.forEach((account) => {
    cardContent += `
    <a href="${account.url}" class="p-5 rounded-lg border border-slate-600 bg-slate-700 shadow flex items-center gap-5">
        <img src="${account.avatar}" alt="Github Profile" class="rounded-full w-24">
        <div>
              <h3 class="text-xl text-white font-bold">${account.name}</h3>
              <p class="text-white"><code>@${account.username}</code></p>
        </div>
    </a>
    `;
  });

  cardWrapper.innerHTML = cardContent;
};

init();

const makeRequestModal = document.querySelector("#make_request");

const accordion = document.getElementsByClassName("accordion");

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", () => {
    let panel = document.querySelector(`.panel${[i]}`);

    if (panel.style.display == "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

const func = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      makeRequestModal.showModal();
      document.body.style.overflow = "hidden";
    }
  });
};

const options = {
  rootMargin: "0px",
  threshold: 0.3,
};

const observer = new IntersectionObserver(func, options);
observer.observe(document.querySelector("#point"));

function openModal() {
  makeRequestModal.showModal();
}

function closeModal() {
  document.body.style.overflow = "";
  makeRequestModal.close();
}

const form = document.getElementById("make_request_form");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const emailInput = form.querySelector('input[name="email"]');
  const email = emailInput.value.trim();

  try {
    const response = await fetch("https://dummyjson.com/products/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (response.ok) {
      alert("Успешно!");
    } else {
      alert("Что-то не так");
    }
  } catch (error) {
    console.log(error);
  }
});

const favor = document.getElementById("favors");
const link = document.getElementById("link_expand__content");
const header = document.getElementById("container header__content");

favor.addEventListener("mouseenter", () => {
  link.style.display = "block";
});

header.addEventListener("mouseleave", () => {
  link.style.display = "none";
});

const navbar = document.querySelector(".navbar");
const navbarUl = document.querySelector(".navbar ul");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("navbar-scrolled");
    navbarUl.classList.remove("active");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
});

document.querySelector(".navbar img").addEventListener("click", () => {
  navbarUl.classList.toggle("active");
});

navbarUl.querySelectorAll("li").forEach((li) => {
  li.addEventListener("click", () => {
    navbarUl.classList.remove("active");
  });
});

const frontEndPrograms = document.querySelectorAll(".program.front-end");
const backEndPrograms = document.querySelectorAll(".program.back-end");
const frontEndBtn = document.getElementById("front-end-btn");
const backEndBtn = document.getElementById("back-end-btn");

frontEndBtn.addEventListener("click", () => {
  frontEndPrograms.forEach((program) => {
    program.classList.remove("hidden");
  });
  backEndPrograms.forEach((program) => {
    program.classList.add("hidden");
  });
});

backEndBtn.addEventListener("click", () => {
  frontEndPrograms.forEach((program) => {
    program.classList.add("hidden");
  });
  backEndPrograms.forEach((program) => {
    program.classList.remove("hidden");
  });
});

const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("open");
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contact-form");

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = {
      nama: document.getElementById("name").value,
      email: document.getElementById("email").value,
      pesan: document.getElementById("message").value
    };

    console.log(formData);

    fetch("https://be-balikpapan-12-production.up.railway.app/contact", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("Server response:", data);
        alert('Berhasil Submit');
        window.location.reload();
      })
      .catch((error) => {
        alert('Gagal Submit');
        console.error("Fetch error:", error);
        window.location.reload();
      });
  });
});

function redirectYoutube(url) {
  if (url) {
      window.open(url, '_blank');
  }
}

const url = '/classes';
const programContainer = document.getElementById('programContainer');

fetch("https://be-balikpapan-12-production.up.railway.app/class") 
    .then(response => {
        return response.json();
    })
    .then(data => {
      console.log(data)
        data.forEach(item => {
            const programElement = document.createElement('div');
            programElement.classList.add('program');
            programElement.classList.add(item.kategori);
            programElement.innerHTML = `<p onclick="redirectYoutube('${item.gambar_kelas}')">${item.nama_kelas}</p>`;
            programContainer.appendChild(programElement);
        });
    })
    .catch(error => {
        console.error('Fetch error:', error);
    });

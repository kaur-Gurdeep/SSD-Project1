document.addEventListener("DOMContentLoaded", function () {
  // Function to handle navbar toggle
  function setupNavbarToggle() {
    const body = document.body;
    const btn = document.getElementById("menu-btn");

    if (btn) {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        body.classList.toggle("show");
      });

      btn.addEventListener("mousedown", (e) => {
        e.preventDefault();
      });
    }
  }

  // Function for event page navigation
  function setupEventPageNavigation() {
    const eventPage = document.getElementsByClassName("home-header");
    if (eventPage && eventPage.length > 0) {
      console.log("on event page");
      const eventMenuBtn = document.querySelectorAll("nav li a");
      eventMenuBtn.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          e.preventDefault();
          document.body.classList.toggle("show");
          const href = e.target.getAttribute("href");
          const section = document.getElementsByName(href?.substring(1))[0];
          const padding = 8;
          const navbar = document.querySelector(".home-header .nav-bar");
          window.scrollTo({
            top: section?.offsetTop - navbar?.offsetHeight - padding || 0,
            behavior: "smooth",
          });
        });
      });
    }
  }

  // Function to show information about a team member
  function setupTeamMemberInfo() {
    function showInfo(name, description, imageUrl) {
      const teamInfo = document.getElementById("team-info");
      if (teamInfo) {
        teamInfo.innerHTML = `
          <h3>${name}</h3>
          <div id="image-container">
            <img src="${imageUrl}" alt="${name}">
          </div>
          <p>${description}</p>
        `;
        teamInfo.style.margin = "20px";
      }
    }

    const gurdeep = document.getElementById("team-member-gurdeep");
    const trudy = document.getElementById("team-member-trudy");
    const iryna = document.getElementById("team-member-iryna");

    if (gurdeep) {
      gurdeep.addEventListener("click", function () {
        showInfo(
          "Gurdeep Kaur",
          "I love spending my vacations in Whistler, enjoying the gondola rides, stunning waterfalls, and the breathtaking Grouse Mountain. I’m passionate about outdoor adventures and exploring local vegetarian cuisine. I can’t wait to share my Whistler experiences and tips with fellow travelers!",
          "images/gurdeep.jpg"
        );
      });
    }

    if (trudy) {
      trudy.addEventListener("click", function () {
        showInfo(
          "Trudy Wong",
          "Trudy is interested in health and wellness. She doesn't do snow sports at Whistler, but she has tried snowboarding at Cypress and Grouse mountain in the past. She appreciates the brave and adventurous spirits of the people who do snow sports. She enjoys hiking and scenic adventures around BC.",
          "images/trudy.jpg"
        );
      });
    }

    if (iryna) {
      iryna.addEventListener("click", function () {
        showInfo(
          "Iryna Yampolska",
          "Iryna enjoys discovering new places and connecting with nature through outdoor activities. She has a keen interest in travel, food, and exploring unique local experiences. Iryna looks forward to sharing her journey and recommendations with other adventurers!",
          "images/placeholder-profile.jpg"
        );
      });
    }
  }

  // Function to simulate a random click on a team member
  function simulateRandomClick() {
    const teamContainer = document.getElementById("team");
    if (teamContainer) {
      const listLength = Array.from(teamContainer.children).length;
      const randomNumber = Math.floor(Math.random() * listLength);

      if (randomNumber === 0) {
        document.getElementById("team-member-gurdeep")?.click();
      } else if (randomNumber === 1) {
        document.getElementById("team-member-trudy")?.click();
      } else {
        document.getElementById("team-member-iryna")?.click();
      }
    }
  }

  // Initial setup based on page content
  setupNavbarToggle();
  setupEventPageNavigation();
  setupTeamMemberInfo();
  simulateRandomClick();

  // Optional automatic cycling
  // setInterval(simulateRandomClick, 10000);
});

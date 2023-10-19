const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", () => {
      console.log("clicked");
      navLinks.classList.toggle("Iactive");
    });

    function createButtonsFn(ArrOfstr) {
      const buttonContainer = document.getElementById("buttonContainer");

      for (let i = 0; i < ArrOfstr.length; i++) {
        const button = document.createElement("button");
        button.innerText = ArrOfstr[i];
        button.classList.add("custom-button");
        button.classList.add("btnFn");

        button.addEventListener("click", function () {
          const buttons = document.querySelectorAll(".custom-button");

          for (let j = 0; j < buttons.length; j++) {
            console.log(j);
            buttons[j].style.backgroundColor = "lightgray";
          }
          console.log("aaa");
          button.style.backgroundColor = "#335ff4";
        });

        buttonContainer.appendChild(button);
      }
    }

    function createButtonsFn1(ArrOfstr) {
      const buttonContainer = document.getElementById("buttonContainerFirst");

      for (let i = 0; i < ArrOfstr.length; i++) {
        const button = document.createElement("button");
        button.innerText = ArrOfstr[i];
        button.classList.add("custom-button");
        button.classList.add("btnFn");

        button.addEventListener("click", function () {
          const buttons = document.querySelectorAll(".custom-button");

          for (let j = 0; j < buttons.length; j++) {
            console.log(j);
            buttons[j].style.backgroundColor = "lightgray";
          }
          console.log("aaa");
          button.style.backgroundColor = "#335ff4";
        });

        buttonContainer.appendChild(button);
      }
    }

    createButtonsFn(["Community", "Courses", "Consultation"]);
    createButtonsFn1(["Community", "Courses", "Consultation"]);

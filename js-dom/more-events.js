document.getElementById("delete-btn").addEventListener("click", function () {
  document.getElementById("secrete-info").style.display = "none";
});

// focus
document
  .getElementById("delete-confirm")
  .addEventListener("focus", function () {
    document.body.style.backgroundColor = "lightcoral";
  });

// blur
document.getElementById("delete-confirm").addEventListener("blur", function () {
  document.body.style.backgroundColor = "white";
});

// keydown
/*
document
  .getElementById("delete-confirm")
   .addEventListener("keydown", function () {
      const deleteField = document.getElementById("delete-confirm");
      console.log(deleteField.value);
  });

// keypress
document
  .getElementById("delete-confirm")
  .addEventListener("keypress", function () {
    const deleteField = document.getElementById("delete-confirm");
    console.log(deleteField.value);
  });
*/

// keyup
document
  .getElementById("delete-confirm")
  .addEventListener("keyup", function (event) {
    const deleteBtn = document.getElementById("delete-btn");
    if (event.target.value == "delete") {
      deleteBtn.removeAttribute("disabled");
    } else {
      deleteBtn.setAttribute("disabled", true);
    }
  });

// changeEvent
document
  .getElementById("delete-confirm")
  .addEventListener("change", function () {
    const deleteField = document.getElementById("delete-confirm");
    console.log(deleteField.value);
  });

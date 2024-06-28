document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("planEventForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Event planned successfully!");
    form.reset();
  });
});

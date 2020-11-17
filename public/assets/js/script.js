$(document).ready(function () {

  // devour button
  $(".devoured-btn").on("click", function (event) {

    // get ID of burger
    const id = $(this).data("id");
    const newDevoured = $(this).data("devoured");

    const newDevouredState = {
      devoured: newDevoured
    };

    // Send the PUT request.
    $.ajax("/api/burger/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(() => {
      // Reload the page to get the updated list
      location.reload();
    }
    );

  });

  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#br").val().trim(),
      devoured: false,
    };

    // Send the POST request.
    $.ajax("/api/burger", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("created new cat");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });






});
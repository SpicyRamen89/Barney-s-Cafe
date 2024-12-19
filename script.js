document.addEventListener("DOMContentLoaded", function() {
  const buttons = document.querySelectorAll(".add-to-order");
  const orderModal = new bootstrap.Modal(document.getElementById('order-confirmation-modal'));
  const sentModal = new bootstrap.Modal(document.getElementById('order-sent-modal'));
  const mealName = document.getElementById("meal-name");
  const mealCalories = document.getElementById("meal-calories");

  buttons.forEach(button => {
    button.addEventListener("click", function() {
      // Get the meal details from the button's data attributes
      const meal = button.getAttribute("data-meal");
      const calories = button.getAttribute("data-calories");

      // Show the modal with meal details
      mealName.textContent = meal;
      mealCalories.textContent = calories;

      // Show the confirmation modal
      orderModal.show();

      // Handle the confirmation action
      document.getElementById("confirm-order").addEventListener("click", function() {
        // Hide the confirmation modal
        orderModal.hide();

        // Show confirmation message (using the second modal)
        sentModal.show();

        // Simulate sending an email (can be done through backend)
        sendOrderEmail(meal, calories);
      });
    });
  });
});


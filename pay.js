$(document).ready(function() {
    $("#flip").click(function() {
        $("#panel").slideToggle("slow");
    });

    $("#flip1").click(function() {
        $("#panel1").slideToggle("slow");
    });

    $("#flip2").click(function() {
        $("#panel2").slideToggle("slow");
    });

    var modal = $("#orderModal");
    var btn = $("#placeOrderBtn");

    btn.click(function() {
        modal.show();
        // Simulate order processing for 3 seconds
        setTimeout(function() {
            modal.hide(); // Hide the modal
            showMessage("Order placed successfully!"); // Display success message
        }, 3000);
    });

    // Function to display a message
    function showMessage(message) {
        var messageElement = $("<div></div>").text(message).addClass("success-message");
        $("body").append(messageElement);

        // Remove the message after 2 seconds
        setTimeout(function() {
            messageElement.remove();
        }, 2000);
    }
});
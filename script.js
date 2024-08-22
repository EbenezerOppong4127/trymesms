$(document).ready(function() {
    $('#sendMessage').on('click', function() {
        // Get numbers from the input field and split by commas
        const numbers = $('#numbers').val().split(',');
        // Get the message from the input field
        const message = $('#message').val();

        // Check if numbers and message are valid
        if (numbers.length === 0 || !message) {
            $('#response').html('<p style="color: red;">Please enter valid numbers and message.</p>');
            return;
        }

        // Create JSON object with cleaned numbers and message
        const smsData = {
            numbers: numbers.map(number => number.trim()), // Clean up whitespace
            message: message
        };

        // Perform AJAX request
        $.ajax({
            url: 'https://ebenezeroppong4127.github.io/trymesms/send-sms', // Update this if using a different API endpoint
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(smsData),
            success: function(response) {
                $('#response').html('<p style="color: green;">Message sent successfully!</p>');
            },
            error: function(xhr, status, error) {
                $('#response').html('<p style="color: red;">Failed to send message. Status: ' + status + '</p>');
            }
        });
    });
});

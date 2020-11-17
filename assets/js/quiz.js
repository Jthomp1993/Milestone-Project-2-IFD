// This variable sets the score to 0
var score = 0;

// This function occurs when the DOM has been loaded
$(document).ready(function () {

    // This function changes the background color of the answers depending on if they are true or false
    $('.answers-btn').click(function () {
        if ($(this).hasClass('true')) {
            $(this).addClass('btn-correct');
        } else {
            $(this).addClass('btn-incorrect');
        }
    });

    $('.quiz-answers').click(function () {
        $(this).siblings('.quiz-answers').addClass('disabled');
    });


    // This function changes the background color of the submit button
    $('.submit-btn').click(function () {
        if ($(this).hasClass('true')) {
            $(this).addClass('btn-correct');
        }
    });

    // If the answer is correct this function will increase the users score by 1
    $('.answers-btn').click(function () {
        if ($(this).hasClass('true')) {
            score++;
        }
    });

    // When the user clicks the try again button this function refreshes the page
    $('.refresh-button').click(function () {
        location.reload();
        location = location.href;
    });

    // This function hides the results and try again button until the user clicks submit
    $('.submit-button').click(function () {
        $('.hide-element').show();
    });
    // This function provides the user with there results and a comment on how they did
    $('.submit-button').click(function () {
        $('#total-score').text('You scored ' + score + ' out of 5');
        if (score === 5) {
            $('#result-text').text('You must be a big fan of Tourist');
        } else if (score >= 3) {
            $('#result-text').text('Good effort');
        } else if (score < 3) {
            $('#result-text').text('Better luck next time');
        }
    });


});
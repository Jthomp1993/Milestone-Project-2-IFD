var score = 0;

$(document).ready(function() {
 
    $('.answers-btn').click(function() {
        if($(this).hasClass('true')) {
            $(this).addClass('btn-correct');
        }
        else { $(this).addClass('btn-incorrect');
    }
});

    $('.submit-btn').click(function() {
        if ($(this).hasClass('true')) {
            $(this).addClass('btn-correct');
        }
    });

    $('.answers-btn').click(function() {
        if($(this).hasClass('true')) {
            score ++;
        }
    });

    $('.refresh-button').click(function() {
        location.reload();
        location = location.href
    });

    $('.submit-button').click(function() {
        $('.hide-element').show();
    });

    $('.submit-button').click(function() {
        $('#total-score').text('You scored ' + score + ' out of 5')
        if (score === 5) {
            $('#result-text').text('You must be a big fan of Tourist');
        }
        else if (score >= 3) {
            $('#result-text').text('Good effort');
        }
        else if (score < 3) {
            $('#result-text').text('Better luck next time');
        }
    });


});
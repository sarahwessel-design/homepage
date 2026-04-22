$(document).ready(function(){
  const textArray = ["Don’t count on it","My reply is no","My sources say no","Outlook not so good","Very doubtful","You wish","Nah"]

  $("#myText").click(function(){
    const randomIndex = Math.floor(Math.random() * textArray.length);
    $(this).text(textArray[randomIndex]);
  });
});

$(document).ready(function() {
    $('#mySVG2').on('click', function() {
        // Set the animation style
        $(this).css({
            'animation': 'shake 0.5s'
        });

        setTimeout(() => {
            $(this).css('animation', '');
        }, 500); // Match this time to the length of the animation
    });
});
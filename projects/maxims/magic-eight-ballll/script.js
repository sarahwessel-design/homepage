$(document).ready(function(){
  const textArray = ["It is certain", "It is decidedly so", "Without a doubt", "Yes – definitely", "You may rely on it","As I see it, yes","Most likely","Outlook good","Yes","Replay hazy,try again","Ask again,later","Better not tell you now","Cannot predict now","Try again","Don’t count on it","My reply is no","My sources say no","Outlook not so good","Very doubtful"]

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
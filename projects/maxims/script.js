$(document).ready(function () {
  var websites = [
    "https://sarahwessel-design.github.io/homepage/projects/maxims/magic-eight-balll/index.html",
    "https://sarahwessel-design.github.io/homepage/projects/maxims/magic-eight-ball/index.html",
    "https://sarahwessel-design.github.io/homepage/projects/maxims/magic-eight-ballll/index.html",
  ];

  $("#mySVG").click(function () {
    var randomIndex = Math.floor(Math.random() * websites.length);
    window.location.href = websites[randomIndex];
  });
});

$(document).ready(function () {
  var websites = [
    "https://sarahwessel-design.github.io/homepage/projects/maxims/magic-eight-ballll/index.html",
    "https://sarahwessel-design.github.io/homepage/projects/maxims/magic-eight-balll/index.html",
    "https://sarahwessel-design.github.io/homepage/projects/maxims/magic-eight-ball/index.html",
  ];

  $("#mySVG2").click(function () {
    var randomIndex = Math.floor(Math.random() * websites.length);
    window.location.href = websites[randomIndex];
  });
});

$(document).ready(function () {
  var websites = [
    "https://sarahwessel-design.github.io/homepage/projects/maxims/magic-eight-ballll/index.html",
    "https://sarahwessel-design.github.io/homepage/projects/maxims/magic-eight-ball/index.html",
    "https://sarahwessel-design.github.io/homepage/projects/maxims/magic-eight-balll/index.html",
  ];

  $("#mySVG3").click(function () {
    var randomIndex = Math.floor(Math.random() * websites.length);
    window.location.href = websites[randomIndex];
  });
});

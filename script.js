setTimeout(function () {
  $("#bootScreen").fadeOut(800, function () {
    $(this).remove();
  });

  $(".window").fadeIn(800);
}, 2000);

$("#startYes").click(function () {
  $(".window").hide();
  $(".loading").show();

  setTimeout(function () {
    $(".loading").hide();
    $(".nav").fadeIn();
    $(".imageclass").fadeIn();
  }, 1500);
});
document.addEventListener("click", function (e) {
  console.log("CLICKED ELEMENT:", e.target);
});

$(document).ready(function () {
  setTimeout(function () {
    $("#bootScreen").fadeOut(800);
    $(".window").fadeIn(800);
  }, 2000);

  // PROJECTS MENU (FIXED)
  $(document).ready(function () {
    $("#myButton").click(function (e) {
      e.preventDefault();

      // close other accidental states
      $("#myProjects").removeClass("show");

      // toggle properly
      $("#myProjects").toggleClass("show");
    });
  });
  $(document).click(function (e) {
    if (!$(e.target).closest("#myProjects, #myButton").length) {
      $("#myProjects").removeClass("show");
    }
  });


  const yesBtn = document.getElementById("startYes");
  const noBtn = document.getElementById("startNo");
  const projects = document.getElementById("myProjects"); // your projects div
  
  // YES → open projects div
  yesBtn.onclick = () => {
    projects.style.display = "block";
  };
  
  // NO → go to Google
  noBtn.onclick = () => {
    window.location.href = "https://www.google.com";
  };
  // COLLECTION
  $("#myButton7, #myButton6").click(function (e) {
    e.preventDefault();
    $("#myCollection").toggle();
  });

  const goButton = document.getElementById("GoButton");

  goButton.onclick = () => {
    window.location.href = "https://9jkzzl.csb.app/projects/pick-10/bunnies/index.html";
  };

  
document.getElementById("myhomebutton").addEventListener("click", function () {
  document.getElementById("myContact").style.display = "block";
});

const contact = document.getElementById("myContact");
const closeBtn = document.getElementById("closeContact");

closeBtn.onclick = () => {
  if (contact.style.display === "block") {
    contact.style.display = "none";
  } else {
    contact.style.display = "block";
  }
};

  // PORTFOLIO
  $("#myButton8, #myButton9").click(function (e) {
    e.preventDefault();
    $("#myPortfolio").toggle();
  });

  // RESUME
  $("#resumeShortcut").click(function () {
    $("#myResume").show();
  });

  $("#myResumeClose").click(function () {
    $("#myResume").hide();
  });

  // BIO
  $("#myButtonInfo, #myBioClose").click(function () {
    $("#myBio").toggle();
  });


});

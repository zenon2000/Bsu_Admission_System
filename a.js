  // Default tab
  $(".tab").css("display", "none");
  $("#tab-1").css("display", "block");

  function run(hideTab, showTab) {
    if (hideTab < showTab) {
      // Validation if press next button
      var currentTab = 0;
      x = $('#tab-' + hideTab);
      y = $(x).find("input");
      for (i = 0; i < y.length; i++) {
        if (y[i].value == "") {
          $(y[i]).css("background", "#ffdddd");
          return false;
        }
      }
    }

    // Progress bar
    for (i = 1; i < showTab; i++) {
      $("#step-" + i).css("opacity", "1");
    }

    // Switch tab
    $(".tab").css("display", "none");
    $("#tab-" + showTab).css("display", "block");
    $("input").css("background", "#fff");
  }

  function submitForm() {
    // Perform any additional validation if needed
    // Then submit the form
    document.getElementById("myForm").submit();
  }
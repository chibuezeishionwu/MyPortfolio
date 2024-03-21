  $(document).ready(function() {
    // on single click
    $("#first-image").click(function() {
      window.open("https://chibuezeishionwu.github.io/PortfolioRebuild/assets/code-quiz/code-quiz.html", "_blank");
    });

    $("#second-image").click(function() {
      window.open("https://chibuezeishionwu.github.io/PortfolioRebuild/assets/password-generator/password-generator.html", "_blank");
    });

    $("#third-image").click(function() {
      window.open("https://chibuezeishionwu.github.io/PortfolioRebuild/assets/task-board/task-board.html", "_blank");
    });

    $("#fourth-image").click(function() {
      window.open("https://chibuezeishionwu.github.io/Console-Finances/", "_blank");
    });
  });

  $(document).ready(function() {
    $("#theme-toggle").change(function() {
      if ($(this).is(":checked")) {
        //Light theme
        $(".hero-section").addClass("light-hero-section");
        $(".about-me-section, .contact-section").addClass("light-theme");
        $(".projects-section").addClass("light-projects-section");
        $(".footer-section").addClass("light-footer-section");
        $(".name h1, .name h5").addClass("text-dark");
        $(".about-me-text h2, .about-me-text p").addClass("text-dark");
        $(".contact-me-text h2, contact-me-text li, .contact-me-text a").addClass("text-dark");
        $(".projects-text h2, .projects-text li, .projects-text a").addClass("text-dark");
        $(".footer-text p").addClass("text-dark");
        $(".toggle-text p, .toggle-text h4").addClass("text-dark");

      } else {
        // Dark theme
        $(".hero-section").removeClass("light-hero-section");
        $(".about-me-section, .contact-section").removeClass("light-theme");
        $(".projects-section").removeClass("light-projects-section");
        $(".footer-section").removeClass("light-footer-section");
        $(".name h1,.name h5").removeClass("text-dark");
        $(".about-me-text h2,.about-me-text p").removeClass("text-dark");
        $(".contact-me-text h2, contact-me-text li,.contact-me-text a").removeClass("text-dark");
        $(".projects-text h2, .projects-text li, .projects-text a").removeClass("text-dark");
        $(".footer-text p").removeClass("text-dark");
        $(".toggle-text p,.toggle-text h4").removeClass("text-dark");
      }
    });
  });
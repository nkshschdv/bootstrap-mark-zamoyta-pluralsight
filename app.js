  // For Bacground video and youtube videos
  $(function () {
    $(window).on("load resize", function () {
        $(".fill-screen").css("height", window.innerHeight);
    })
    // $("#video-wallpaper").wallpaper({
    //     source: {
    //         video: "https://www.youtube.com/embed/xOqH8yHtFRc",
    //         // ,
    //         // webm: "http://example.com/video.mp4",
    //         // ogg: "http://example.com/video.ogv"
    //     }
    // });

    //Add Bootstrap Scrollspy
    $("body").scrollspy({ 
        target: '.navbar',
        offset: 160
     });
//Smooth Scrolling
     $('nav a, .down-button a').on('click', function(){
        $('html, body').stop().animate({
            scrollTop:$(this.hash).offset().top - 100
        },2000,'easeInOutExpo');
        event.preventDefault();
     });

     //Parallex Scrolling with Steller.js
     $(window).stellar();
});
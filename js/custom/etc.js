//Change button value Show/Hide
          $('#showHide').click(function(e){
              $key = $("#showHide").text();
              if ($key == 'Show Post') {
                $('#showHide').text('Hide Post');
              }else{
                $('#showHide').text('Show Post');
              }
          });
        //portfolio
            $('.portfolio-thumbnail1').on({
                'mouseenter' : function(){
                   $(this).css("opacity","1") 
                },
                'mouseleave' : function(){
                   $(this).css("opacity","0") 
                }
            });  

// When the user scrolls down 20px from the top of the document, show the button
      window.onscroll = function() {scrollFunction()};

      function scrollFunction() {
        if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
          document.getElementById("toTop").style.display = "block";
        } else {
          document.getElementById("toTop").style.display = "none";
        }
      }
      // When the user clicks on the button, scroll to the top of the document
      function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }

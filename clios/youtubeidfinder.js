
        $("#add").click(function() {
            var link;
            var utubeLink = "https://www.youtube.com/watch?v=";
            link = utubeLink + $("#get").val();
            $("#display").text(link);
            console.log(link);
          });
          
          $("#go").click(function() {
            var utubeLink = "https://www.youtube.com/watch?v=";
            link = utubeLink + $("#get").val();
            window.open(link);
          })

 
 $(document).ready(function() {
  callJx();
   function run(e){
          $("#env").html("<blockquote class='blockquote text-center'>"+e.quoteText+"</blockqquote>"+ "<footer class='blockquote-footer'>"+e.quoteAuthor+"</footer>");
        }
   

    $("#next").on("click", function (){   
       callJx()});
   
      function callJx(){
      $.ajax({
        type:"GET",
        url:"https://api.forismatic.com/api/1.0/?",
        data:"method=getQuote&format=jsonp&lang=en&jsonp=?",
        dataType: "jsonp",
        success: run
      });
      }
      
});
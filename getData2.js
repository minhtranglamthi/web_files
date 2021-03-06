 //Browser Support Code
$(function (){
   $('#submit_button').on('click', function(e){
       e.preventDefault();
       var ajaxRequest;  // The variable that makes Ajax possible!

       try{
         // Opera 8.0+, Firefox, Safari, Chrome
         ajaxRequest = new XMLHttpRequest();
       }catch (e){
         // Internet Explorer Browsers
         try{
            ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
         }catch (e) {
            try{
               ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
            }catch (e){
               // Something went wrong
               alert("Your browser broke!");
               return false;
            }
         }
       }
       // Create a function that will receive data 
       // sent from the server and will update
       // div section in the same page.
       ajaxRequest.onreadystatechange = function(){
         if(ajaxRequest.readyState == 4){
            var ajaxDisplay = document.getElementById('rate_container');
            ajaxDisplay.innerHTML = ajaxRequest.responseText;
         }
       }
       // Now get the value from user and pass it to
       // server script.
       var target_name = document.getElementById('target_name').value;
       var CCY_pair = document.getElementById('CCY_pair').value;
       var from_date = document.getElementById('from_date').value;
       var to_date = document.getElementById('to_date').value;
       var queryString = "?target_name=" + target_name + "&CCY_pair=" + CCY_pair ;
       queryString +=  "&from_date=" + from_date + "&to_date=" + to_date ;
       ajaxRequest.open("GET", "js/getData2.php" + 
                                    queryString, true);
       ajaxRequest.send(null);
    });
});
// redirect to search results
document.querySelector(".productSearchForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const searchQuery = document.querySelector("#productSearchInput").value.trim();

  document.location.replace(`/search?query=${searchQuery}&page=1`);
});



/*
           __________                                 
         .'----------`.           /\_____/\                   
         | .--------. |          /  o   o  \                   
         | | HOW TO | |         ( ==  ^  == )  why are you in here            
         | | CODE?? | |          )         (
.--------| `--------' |---------(           )---------.
|        `----,-.-----'        ( (  )   (  ) )        | 
|       ______|_|_______      (__(__)___(__)__)       | 
|      /  %%%%%%%%%%%%  \                             | 
|     /  %%%%%%%%%%%%%%  \                            | 
|     ^^^^^^^^^^^^^^^^^^^^                            | 
+-----------------------------------------------------+
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ 
*/
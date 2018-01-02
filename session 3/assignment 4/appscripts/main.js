require(
	[],

	function () {
        console.log("yo");
        /* assign3: center header text using javascript */
        document.getElementById("headerID").style.textAlign = "center";

        /* assign3: font family for article in JavaScript */
        document.getElementById("articleID").style.fontFamily = "Comic Sans MS, cursive, sans-serif"; //"Impact,Charcoal,sans-serif"; 

        //Get your sliders from the DOM using the id's you gave them in the html document
        var mySliderOpacity = document.getElementById("mySlider");
        var mySliderHue = document.getElementById("mySlider1");
        var mySliderSaturation = document.getElementById("mySlider2");
        var mySliderLightness = document.getElementById("mySlider3");
        // get your article id from the dom
        var articleBox = document.getElementById("articleID");

 
        //--------------------------------------------------------------
        /*Define a function named it "hslString and gave it 3 arguments" */
 	var hslString = function(h, s, l) {
                /*Use the arguments in function to construct the hsl string*/
		var constructHslString = "hsl("+ h + "," + s + "%," + l + "%)";
                /*Your function returns the string I created*/
		return constructHslString;
 		}
                /*Print the string that the function returns out to the console */
 		console.log("hslString is" + hslString);

 	// Let the user adjust the opacity through slider	
	mySlider.addEventListener("input", function(ev){
                articleBox.style.opacity = mySlider.value;
                });
        //Let the user adjust the background color
      
        
        //give articleBox an eventlistener to Make it completely opaque while the mouse is down, and set it back to the
        //opacity slider setting when the mouse is up.
        articleBox.addEventListener("mousedown", mouseDown);
        articleBox.addEventListener("mouseup", mouseUp);

        function mouseDown() {
                articleBox.style.opacity = 0;
        }

        function mouseUp(){
                articleBox.style.opacity = 100;
        }

 		
 		


 	 		
                }
        );
require(
	[],

	function () {
        console.log("yo");
        /* assign3: center header text using javascript */
        document.getElementById("headerID").style.textAlign = "center";

        /* assign3: font family for article in JavaScript */
        document.getElementById("articleID").style.fontFamily = "Comic Sans MS, cursive, sans-serif"; //"Impact,Charcoal,sans-serif"; 

        var mySliderHue = document.getElementById("mySlider1");
        var mySliderSaturation = document.getElementById("mySlider2");
        var mySliderLightness = document.getElementById("mySlider3");
        // I get my sliders from the DOM usong the id's I gave them in the html document
        var articleBox = document.getElementById("articleID");

 
        //--------------------------------------------------------------

 		var hslString = function(h, s, l) {
 		/*I defined a function named it "hslString and gave it 3 arguments" */

 			var constructHslString = "hsl("+ h + "," + s + "%," + l + "%)";
 			/*I used the arguments in function to construct the hsl string*/
 			return constructHslString;
 			/*My function returns the string I created*/
 		}
 		console.log("hslString is" + hslString);
 		/*I print the string that the function returns out to the console */
		articleBox.style.backgroundColor = hslString(0, 50%, 100%);

 		mySlider1.addEventListener("input", function (ev){
 			articleBox.style.backgroundColor = hslString;
 		})
 		


 	 		
});
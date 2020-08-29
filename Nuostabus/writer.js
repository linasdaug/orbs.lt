function Writer() {


	this.init = function(selector) {

		var texts = document.getElementsByTagName(selector);
		var txt = [];
		var tim;
		var i = 0;
		var speed = 45;
	    var restOfText = "";
	    var typedText = "";


		for (let j = 0; j < texts.length; j++) {
		    txt[j] = texts[j].textContent;

		    texts[j].addEventListener("mouseover", function(e){
		        e.stopPropagation();
		        restOfText = "";
		        typedText = "";
		        tim = setTimeout(function(){
		        	typeWriterStart(j);
		        }, 500);
		    }); 

		    texts[j].addEventListener("mouseout", function(){
		        clearTimeout(tim);
		        texts[j].innerHTML = txt[j];
		    }); 
		};

		var typeWriterStart = function(j) {
			i = 0;
	        for (var y = 0; y < txt[j].length; y++) {
	        	restOfText += whiteOut(txt[j].charAt(y));
	        }
	        texts[j].innerHTML = restOfText;
	        typeText(j);
	    };

		var typeText = function (j) {
	        if (i < txt[j].length) {
	        	restOfText = restOfText.substring(whiteSliceBy(txt[j].charAt(i)));
     	        typedText += txt[j].charAt(i);
		        texts[j].innerHTML = typedText + restOfText;

		        i++;
		        tim = setTimeout(function(){
		        	typeText(j);
		        }, speed);
	        }
	    };


	    /* text is replaced by spaces to fill paragraph container */
	    var whiteOut = function(chr) {
	    	var white = "";
	    	var skinnyChars = "iIjl1,;.!:";

	    	if (chr == " ") {
	    		white = " ";
	    	} else if (skinnyChars.indexOf(chr) > -1) {
	    		white = "\xa0";
	    	} else {
	    		white = "\xa0\xa0";
	    	}
	    	return white;
	    };

	    var whiteSliceBy = function(chr) {
	    	var by = 0;
	    	var skinnyChars = "iIjl1,;.!:";

	    	if (chr == " ") {
	    		by = 1;
	    	} else if (skinnyChars.indexOf(chr) > -1) {
	    		by = 1;
	    	} else {
	    		by = 2;
	    	}
	    	return by;
	    }


	};
};



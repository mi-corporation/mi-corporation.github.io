
$(document).ready(function(){
	
    //Set the size of the background image
    var windowWidth = $(window).width();
    var imageHeight = windowWidth/4;
    $("#header_wrap").css("background-size", windowWidth);
    $("#header_wrap").css("height", imageHeight);

    //Resize the background image when the window size changes
    $( window ).resize(function() {
        windowWidth = $(window).width();
        imageHeight = windowWidth/4;
        $("#header_wrap").css("background-size", windowWidth);
        $("#header_wrap").css("height", imageHeight);
    });

    //Highlight social media icons when mouseover and mouseout
    $("#facebook_icon").mouseover(function(){
    	$("#facebook_icon").fadeTo(0, 1);
    });
    $("#facebook_icon").mouseout(function(){
    	$("#facebook_icon").fadeTo(0, 0.4);
    });

    $("#twitter_icon").mouseover(function(){
    	$("#twitter_icon").fadeTo(0, 1);
    });
    $("#twitter_icon").mouseout(function(){
    	$("#twitter_icon").fadeTo(0, 0.4);
    });

    $("#linkedin_icon").mouseover(function(){
    	$("#linkedin_icon").fadeTo(0, 1);
    });
    $("#linkedin_icon").mouseout(function(){
    	$("#linkedin_icon").fadeTo(0, 0.4);
    });

    $("#youtube_icon").mouseover(function(){
    	$("#youtube_icon").fadeTo(0, 1);
    });
    $("#youtube_icon").mouseout(function(){
    	$("#youtube_icon").fadeTo(0, 0.4);
    });


    //Perform the search when the button is clicked
    //Hide the examples that are not in the search result
    $("#search_button").click(function(){
        var searchKeyword = $("#search_input").val().toLowerCase();
        var examples=SearchExample(searchKeyword);
        for(var i = 0; i < examples.length; i++){
            $(examples[i]).hide();
        }
    });

    //Go to mi-corporation.com when clicking on the header
    $("#header_wrap").click(function(){
        location.href='http://mi-corporation.com';
    });
});


//Search function
//Go through the "class" of each examples and check if the search key word is 
//a substring of the class. All class name are converted to lower cases.
function SearchExample(str) {
    var examples = new Array();
    var allExamples = document.getElementsByClassName("examples");
    for (var i = 0; i < allExamples.length; i++){
        var className = $(allExamples[i]).attr('class').toLowerCase();
        //if not a substring
        if (className.indexOf(str) == -1){
            examples.push(allExamples[i]);
        }
        //if is a substring
        else{
            $(allExamples[i]).show();
        }
    }
    return examples;
}

//This function is called in the index.html when the input box is submitted by
//using the "Enter" key.
//Refer to element #search_group in index.html
function submitSearch(){
    var searchKeyword = $("#search_input").val().toLowerCase();
    var examples=SearchExample(searchKeyword);
    for(var i = 0; i < examples.length; i++){
        $(examples[i]).hide();
    }
}




/**************************************************************/
//Revision History
//  Date        Person              Reason
//  4/14/2015   Lin Lin             Initial development

/**************************************************************/
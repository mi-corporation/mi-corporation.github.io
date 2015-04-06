
$(document).ready(function(){
	
    var windowWidth = $(window).width();
    var imageHeight = windowWidth/4;
    $("#header_wrap").css("background-size", windowWidth);
    $("#header_wrap").css("height", imageHeight);


    $( window ).resize(function() {
        windowWidth = $(window).width();
        imageHeight = windowWidth/4;
        $("#header_wrap").css("background-size", windowWidth);
        $("#header_wrap").css("height", imageHeight);
    });

    /***Social media icons when mouseover***/
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


    /***Search***/
    $("#search_button").click(function(){
        var searchKeyword = $("#search_input").val().toLowerCase();
        var examples=SearchExample(searchKeyword);
        for(i = 0; i < examples.length; i++){
            $(examples[i]).hide();
        }
    });



});


/***Search function***/
function SearchExample(str) {
    var examples = new Array();
    var allExamples = document.getElementsByClassName("examples");
    for (i = 0; i < allExamples.length; i++){
        var className = $(allExamples[i]).attr('class');
        if (className.indexOf(str) == -1){
            examples.push(allExamples[i]);
        }
        else{
            $(allExamples[i]).show();
        }
    }
    return examples;
}


function submitSearch(){
    var searchKeyword = $("#search_input").val().toLowerCase();
    var examples=SearchExample(searchKeyword);
    for(i = 0; i < examples.length; i++){
        $(examples[i]).hide();
    }
}



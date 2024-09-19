
$(document).ready(function(){
    samTransformProductOptions_OC_Page('.review__item--options');
    samHideEmptyMgf('.review__item--info');
});

//Note: There a function called samTransformProductOptions exists in gtsamchkoutfooter_js.js
function samTransformProductOptions_OC_Page(ulName) {
    for (var i = 0; i < $(ulName + ' li').length; i++) {
        //Convert To LowerCase
        $(ulName + ' li:eq( ' + i + ')').html($(ulName + ' li:eq( ' + i + ')').html().toLowerCase());
        $(ulName + ' li:eq( ' + i + ')').css("text-transform", "capitalize");

        //Remove unwanted characters from Option
        if ($(ulName + ' li:eq( ' + i + ')').html().toLowerCase().indexOf("_") > 0) {
            $(ulName + ' li:eq( ' + i + ')').html(
                $(ulName + ' li:eq( ' + i + ')').html().replace(/_/g, " ")
            );
        }
    }
}
function samHideEmptyMgf(ulName) {
    for (var i = 0; i < $(ulName + ' li').length; i++) {
        //Hide Mfg if Empty
        if ($(ulName + ' li:eq( ' + i + ')').html().toLowerCase() == "<span>mfg#:</span> ") {
            $(ulName + ' li:eq( ' + i + ') span').html("Mfg#: N/A");
        }
        
    }
}



var samTmpZoomImgURL = "https://prod.uspatriottactical.com/photos/styles/USPT_FW1056_1500_1.jpg";


//Check if HD image exists
fetch(samTmpZoomImgURL, { method: 'HEAD' })
.then(
    function (samX) {
        if (samX.ok) {
            //FOUND
            $("#samTestDiv").html(samTmpZoomImgURL + " FOUND");
        } else {
            //NOT FOUND
            $("#samTestDiv").html(samTmpZoomImgURL + " NOT FOUND");
        }
    }
).catch();
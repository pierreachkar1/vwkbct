
var samTmpUPC = [["IMAGE PATH", "STATUS"]];


//Read Excel File from file upload
function checkPath() {
    //Reference the FileUpload element.
    var fileUpload = document.getElementById("fileUpload");

    //Validate whether File is valid Excel file.
    var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.xls|.xlsx|.csv)$/;
    if (regex.test(fileUpload.value.toLowerCase())) {

        var reader = new FileReader();
        if (fileUpload.files.length == 1) {

            
            reader.onload = function (e) {
                ProcessUploadedFile(e.target.result);
            };
            reader.readAsBinaryString(fileUpload.files[0]);

        } 
        
    } else {
        alert("Please upload a valid Excel file.");
    }

}


function ProcessUploadedFile(data) {
    //Read the Excel File data.
    var workbook = XLSX.read(data, {
        type: 'binary'
    });

    //IN JSON FORMAT
    workbook.SheetNames.forEach(function(sheetName) {
        //Here is your object
        var XL_row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
        var json_object = JSON.stringify(XL_row_object);
        var samMyJSONArr = JSON.parse(json_object);
        

        //Convert JSON to "array of arrays"
        var result = samMyJSONArr.map(function(e) {
            return Object.keys(e).map(function(k) {
                return e[k]
            })
        })

        
        var samImgURL = "";
        const img = new Image();
        for (var i = 0; i < result.length; i++) {
            //samTmpUPC.push([result[i][0],"STATUS"]);
            samImgURL = result[i][0];
            checkIfImageExists(samImgURL, (exists) => {
                if (exists) {
                    //samTmpUPC.push([samImgURL, "SUCCESS"]);
                } else {
                    //samTmpUPC.push([samImgURL, "FAIL"]);
                }
            });


        }


        showWait("B");
        let samDone = false;
        var intervalId = setInterval(function() {
            if(samTmpUPC.length < i) {
                clearInterval(intervalId);
            } else {
                if (samDone == false) {
                    CreateExcelFile(samTmpUPC);
                    samDone = true;
                    hideWait();
                }
            }
        }, 1000);


        
    })
};

// CHECK IF IMAGE EXISTS
function checkIfImageExists(url, callback) {
    const img = new Image();
    img.src = url;
    
    if (img.complete) {
      callback(true);
    } else {
        img.onload = () => {
            samTmpUPC.push([url, "SUCCESS"]);
            callback(true);
        };
      
        img.onerror = () => {
            samTmpUPC.push([url, "FAIL"]);
            callback(false);
        };
    }
}
  

//Create Excel File from JSON Array
function CreateExcelFile(createXLSLFormatObj) {

    /* File Name */
    var filename = "File_Name.xlsx"; 

    /* Sheet Name */
    var ws_name = "Sheet1";
   
    var wb = XLSX.utils.book_new(),
        ws = XLSX.utils.aoa_to_sheet(createXLSLFormatObj);
        

    /* Add worksheet to workbook */
    XLSX.utils.book_append_sheet(wb, ws, ws_name);
    

    /* Write workbook and Download */
    XLSX.writeFile(wb, filename);

    hideWait();

}







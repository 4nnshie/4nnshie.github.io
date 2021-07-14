
$(() => {
    function addedSuccess(data){
        console.log(data)
        console.log(data.response)
        $("#question").val(data.response);
    }
    function noSuccess(data){
        $("#msg").text("Unable to reach server");
    }

    $(document).on("click",".8ball",function(){

        const dataq = {
            question: $("#question").val(),
        };

        $.ajax({ "url": "/8ball",
            "type": "get",
            "data": JSON.stringify(dataq),
            "contentType": "application/json; charset=utf-8",
            "success": addedSuccess,
            "error": noSuccess
        });
    });
});
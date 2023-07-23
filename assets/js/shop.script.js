$(document).ready((e)=>{
    e.preventDefault
    console.log ("Init");
    const productArray = ["101", "102", "103", "104", "105", "106", "107", "108", "109"]
    
    let showProductArray = productArray;

    let saleProductArray = []


    $("#all-btn").click(()=>{
        productArray.forEach(element => {
            domId = "#"+element
            $(domId).addClass("show").removeClass("hide")
        });

        $("#all-btn").addClass("btn-primary").removeClass("btn-outline-primary")
        $("#sale-btn").addClass("btn-outline-primary").removeClass("btn-primary")
    })

    $("#sale-btn").click(()=>{
        productArray.forEach(element => {
            domId = "#"+element
    
            if ($(domId + " .card-body .discount").text() != "") {
                $(domId).addClass("show").removeClass("hide")
            } else {
                $(domId).addClass("hide").removeClass("show")
            }
        });

        $("#sale-btn").addClass("btn-primary").removeClass("btn-outline-primary")
        $("#all-btn").addClass("btn-outline-primary").removeClass("btn-primary")
    })
});
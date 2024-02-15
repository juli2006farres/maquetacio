$(function() {

    var patata =0
    $(".especial").click(function() {
        
        if (patata == 0) {
            $(".patata").show(".patata")
            patata = patata + 1
        }

        else if (patata == 1) {
            $(".patata").hide()
            patata-- 
        }
        
    })
    

});    
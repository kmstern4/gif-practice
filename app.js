

$("#commbtn").on("click", function() {
    $("#comm").attr("src", "images/commslash.gif");
    setTimeout(function(){$("#comm").attr("src", "images/commidle.png")}, 1500);
});

$("#skullbtn").on("click", function() {
    $("#slash").attr("src", "images/skullslash.gif");
    setTimeout(function(){$("#slash").attr("src", "images/Idle_000.png")}, 1500);
});
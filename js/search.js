$(document).ready(function() {
    $("#search-filter-icon").click(function(){
$(".filter-column").slideToggle("slow");
    });

    $("input:checkbox").click(function () {
        var $box = $(this);

        if($box.is(":checked")) {
        var groub = "input:checkbox[name='" + $box.attr("name") + "']";
        $(groub).prop("checked", false);
        $box.prop("checked", true);
        }
    });
});
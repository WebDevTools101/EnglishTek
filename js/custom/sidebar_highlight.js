//Sidebar Highlight
var str = location.href.toLowerCase();
$(".sidebar li a").each(function () {
    if (str.indexOf(this.href.toLowerCase()) > -1) {
        $(".sidebar li.active").removeClass("active");
        $(this).parent().addClass("active");
    }
});
$(".sidebar li.active").parents().each(function () {
    if ($(this).is("li")) {
        $(this).addClass("active");
    }
});

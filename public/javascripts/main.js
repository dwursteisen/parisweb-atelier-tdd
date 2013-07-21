/**
 * Created with IntelliJ IDEA.
 * User: david
 * Date: 21/07/13
 * Time: 20:36
 * To change this template use File | Settings | File Templates.
 */
$(function() {


    var onPlayerClick = function(event) {
        var e = false;

        e = true;
        if(e != undefined && e) {
            event.preventDefault();
            $("#alert-error").show(true);
        }
    }

    var onRollClick = function(event) {
        event.preventDefault();
    }


    $("#buton_player").click(onPlayerClick);
    $("#buton_roll").click(onRollClick);
})


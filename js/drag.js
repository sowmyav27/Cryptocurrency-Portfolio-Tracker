

$(init);

function init()
{
    $(".icons1").draggable({helper:'clone'});
    $(".wallet2").droppable({
        accept: ".icons1",
        drop: function(ev,ui){
            
            var curr=$(ui.draggable).clone();
            $(this).append(curr);
        }
    });

}

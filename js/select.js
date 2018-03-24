

$(init);

function init()
{
    $("#selectable").selectable({
        stop: function(){
            var result='';
            $('.ui-selected').each(function(){
                if($(this).text()=='BTC')
                result+=$(this).text()+'<br/>';
            });
            $('.result').html(result);
        }
    });

}


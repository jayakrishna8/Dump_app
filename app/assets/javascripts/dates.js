function add_magazine() {
    $('#add_magazine').click(function (e) {
        alert('HI');
        var magazine_value, magazine_container_array, magazine_container_value;
        magazine_value = $('#magazine_value').val();
        magazine_container_value = $('#container_for_magazine').val();
        magazine_container_array = $.unique($('#container_for_magazine').val().split('`'));
        alert(magazine_value);
        alert(magazine_container_value);
        alert(magazine_container_array);
        e.preventDefault();
        if (magazine_value.length != 0 && magazine_value.length <= 10 && $.isNumeric(magazine_value) && isInteger(magazine_value)) {
            if (magazine_container_value.length == 0) {
                $('#container_for_magazine').val(magazine_value);
            } else if ($.inArray(magazine_value, magazine_container_array) >= 0) {
                $('#magazine_error').fadeIn(300).html('Same Billboard Duration Second already added').addClass('error').delay(1500).fadeOut(300);
                return;
            } else {
                $('#container_for_magazine').val(magazine_container_value + '`' + magazine_value);
            }
            $('#magazine_display').prepend('<tr id="magazine_' + magazine_value + '"><td width="86%" style="word-wrap: break-word;">' + $('#magazine_value').val() + '</td>' +
                '<td><a id="magazine_value' + magazine_value + '" href= "#" class="glyphicon glyphicon-remove" title="Remove"></a></td></tr>');
            $('#magazine_value').val('');
//            deleteBillboardDurationSec(magazine_value);
        }
    });
}

function deleteBillboardDurationSec(magazine_value){
    $("#magazine_value_"+ magazine_value).click(function(e){
        var magazine_container_array;
        e.preventDefault();
        magazine_container_array = $.unique($('#container_for_magazine').val().split('`'));
        if($.inArray(magazine_value, magazine_container_array) >= 0) {
            if(confirm('Are you sure you want to delete?')){
                magazine_container_array.splice($.inArray(magazine_value, magazine_container_array),1);
                $('#container_for_magazine').val(magazine_container_array + "");
                $('table#magazine_display tr#billboard_duration_' + magazine_value).delay(300).fadeOut();
            }

        }
    });
}

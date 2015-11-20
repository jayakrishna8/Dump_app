//-------------------------------------------------------------------------------------------------
/* Write all the Jquery function related to the application. It will be included in application.js.*/
//-------------------------------------------------------------------------------------------------

// Common Date Picker Function which will handle date picker calendar in entire application

function common_date_picker(){
    $(".date_picker" ).datepicker({
        showOn : "both",
        dateFormat : "mm/dd/yy",
        buttonText: '<i class="glyphicon glyphicon-calendar"></i>'
    }).next(".ui-datepicker-trigger").addClass('mrgn_lft_1 mrgn_top_1 cursor_styling');
}

function deleteEmail(delete_id,field_id,container_id){
    $('#'+field_id+'_delete_'+delete_id).click(function(e){
        e.preventDefault();
        if(confirm('Are you Sure?')){
            $('#'+field_id+'_'+delete_id).delay(300).fadeOut().hide();
            var container = $('#'+container_id).val() + ',' + delete_id;
            $('#'+container_id).val(container);
        }

    })
}



// delete the foreign languages from the table
function deleteForeignLanguage(lang_id){
    $("#foreign_language_value_"+ lang_id).click(function(e){
        var container_array;
        e.preventDefault();
        container_array = $.unique($('#container_for_foreign_language').val().split(','));
        if($.inArray(lang_id, container_array) >= 0) {
            if(confirm('Are you Sure?')){
                container_array.splice($.inArray(lang_id, container_array),1);
                $('#container_for_foreign_language').val(container_array + "");
                $('table#foreign_language_display tr#foreign_language_' + lang_id).delay(300).fadeOut();
            }

        }
    })
}

// Jquery to count number of character entered in Comment section
function check_character_count(field_id, div_id, char_count){
    $("#"+ field_id).keyup(function(){
        var box=$(this).val();
        var count= char_count - box.length;
        if(box.length <= char_count){
            $('#'+ div_id + ' ' +'span.count').html(count + ' ').css('color','#66afe9');
            $('#'+ div_id + ' ' +'span.character').html('Character Left').css('color','black');
        }else{
            $('#'+ div_id + ' ' +'span.character').html('Limit Exceeded').css('color','red');
            $('#'+ div_id + ' ' +'span.count').html('');
        }
    });

}

function enableFormely(){
    if ($('#title_formerly').val().length == 0){
        $('#title_formerly_expire_on').attr('disabled','disabled');
        $('#title_formerly_expire_on').datepicker("disable");
    }else{
        $('#title_formerly_expire_on').removeAttr('disabled');
        $('#title_formerly_expire_on').datepicker("enable");
        common_date_picker();
    }
}

//Allow user to enter only specified digits after decimal
function check_decimal_parsing(num)
{
    $('.decimal_field').keyup(function(){
        if($(this).val().indexOf('.')!=-1){
            if($(this).val().split(".")[1].length > num){
                if( isNaN( parseFloat( this.value ) ) ) return;
                this.value = parseFloat(this.value).toFixed(num);
            }
        }
        return this; //for chaining
    });
}


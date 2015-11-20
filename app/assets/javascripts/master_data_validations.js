function addMultipleValues(click_id,field_id,container_id,display){
    $('#'+click_id).click(function(e){
        var current_value, container_value, container_array;
        current_value = $('#'+field_id).val();
        container_value = $('#'+container_id).val();
        container_array = $.unique($('#'+container_id).val().split(','));
        e.preventDefault();
        if(current_value.length != 0){
            if(container_value.length == 0){
                $('#'+container_id).val(current_value);
            }else if($.inArray(current_value, container_array) >= 0) {
                $('#'+field_id).val('');
                return;
            }else{
                $('#'+container_id).val(container_value + ',' + current_value);
            }

            $('#'+display).append('<tr id='+field_id+'_' +current_value + '>' +
                '<td class="col-xs-10">'+ $('#'+field_id+' option:selected').text() + '</td>' +
                '<td  id='+field_id+'_delete_'+current_value +'><a href="#" class="glyphicon glyphicon-remove" title="Remove">' +
                '</a></td></tr>');
            $('#'+field_id).val('');
        }
        deleteMultipleValues(field_id,current_value,container_id,display);
    });
}

function deleteMultipleValues(field_id,delete_id,container_id,display_id){
    $('#'+field_id+'_delete_'+delete_id).click(function(e){
        var container_array;
        e.preventDefault();
        container_array = $.unique($('#'+container_id).val().split(','));
        if($.inArray(delete_id, container_array) >= 0){
            if(confirm('Are you Sure?')){
                container_array.splice($.inArray(delete_id, container_array),1);
                $('#'+container_id).val(container_array.join(',') + "");
                $('table#'+display_id+' tr#'+field_id+'_'+delete_id).delay(300).fadeOut().remove();
            }

        }
    });
}

var address_validation_options = {
    rules: {
        "address[line_1]": {
            maxlength: 100
        },
        "address[line_2]": {
            maxlength: 100
        },
        "address[county]": {
            maxlength: 50
        },
        "address[state_province]": {
            maxlength: 50
        },
        "address[zip]": {
            maxlength: 20
        },
        "address[city]": {
            maxlength: 50
        },
        "address[country]": {
            maxlength: 50
        }

    },
    highlight: function (element) {
        $(element).removeClass('error');
    },
    errorPlacement: function(error, element) {
        error.insertAfter(element);
    }
};

var person_validation_options = {
    rules: {
        'person[first_name]': {required: true, maxlength: 150},
        'person[last_name]':  {required: true,  maxlength: 150},
        'person[job_title]': {maxlength: 150},
        'person[middle_name]': {maxlength: 50}
    },
    messages: {
        'person[first_name]': { maxlength: 'Maxlength is 150 characters' },
        'person[last_name]': {  maxlength: 'Maxlength is 150 characters' },
        'person[job_title]': {maxlength: 'Maxlength is 150 characters'},
        'person[middle_name]': {maxlength: 'Maxlength is 50 characters'}
    },
    highlight: function (element) {
        $(element).removeClass('error');
    },
    errorPlacement: function(error, element) {
        error.insertAfter(element);
    }
};

var address_phone_validation_options = {
    rules: {
        "phone[phone_number]": {
            required: {
                depends: function(element){
                    return $('#address_phone_extension').val().length > 0;
                }
            },
            digits: true,
            maxlength: 35
        },
        "phone[extension]": {
            digits: true,
            maxlength: 5
        },
        "phone[phone_type_cdlk_id]": {
            required: true
        },
        "phone[country_code]": {
            required:  {
                depends: function(element){
                    return $('#address_phone_number').val().length > 0;
                }
            },
            digits: true,
            maxlength: 5
        }
    },
    messages:{
        "phone[country_code]": {maxlength: 'Maxlength 5', digits: 'Only integer'},
        "phone[extension]": {maxlength: 'Maxlength 5', digits: 'Only integer'},
        "phone[phone_number]": {digits: 'Only integer', maxlength: 'Maximum 35 digit allowed'}
    },
    highlight: function (element) {
        $(element).removeClass('error');
    },
    errorPlacement: function(error, element) {
        error.insertAfter(element);
    }
};

var person_phone_validation_options = {
    rules: {
        "phone[phone_number]": {
            required: {
                depends: function(element){
                    return $('#person_phone_extension').val().length > 0;
                }
            },
            maxlength: 35,
            digits: true
        },
        "phone[extension]": {digits: true,maxlength: 5 },
        "phone[phone_type_cdlk_id]": {required: true},
        "phone[country_code]": {
            maxlength: 5,
            digits: true,
            required:  {
                depends: function(element){
                    return $('#person_phone_number').val().length > 0;
                }
            }
        }
    },
    messages: {
        "phone[phone_number]": {
            digits: 'Only integer',
            maxlength: 'Maximum 35 digit allowed'
        },
        "phone[country_code]": {
            digits: 'Only integer',
            maxlength: 'Maxlength 5'
        },
        "phone[extension]": {
            digits: 'Only integer',
            maxlength: 'Maxlength 5'
        }
    },
    highlight: function (element) {
        $(element).removeClass('error');
    },
    errorPlacement: function(error, element) {
        error.insertAfter(element);
    }
};

var email_validation_options = {
    rules: {
        'email[email_type_cdlk_id]': {required: true},
        'email[email]': {required: true,email: true }
    },
    highlight: function (element) {
        $(element).removeClass('error');
    },
    errorPlacement: function(error, element) {
        error.insertAfter(element);
    }
};


var url_validation_options = {
    rules: {
        'url[url_type_cdlk_id]': {required: true},
        'url[url]': {required: true,url: true }
    },
    highlight: function (element) {
        $(element).removeClass('error');
    },
    errorPlacement: function(error, element) {
        error.insertAfter(element);
    }
};
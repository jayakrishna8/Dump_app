//Profile segment JQuery to store multiple values for single column of another table
function addMultipleValues(click_id,field_id,container_id,display,error_id){
    $('#'+click_id).click(function(e){
        if($('#'+field_id).val().length <= 150){
            $('#'+error_id+' label.error').text('');
            var current_value, container_value, container_array;
            current_value = $('#'+field_id).val();
            var random_val = Math.floor(Math.random() * 1000) + 1;
            container_value = $('#'+container_id).val();
            container_array = $.unique($('#'+container_id).val().split('`'));
            var dot_string = '';
            if (current_value.length > 20) {
                dot_string = '...'
            }
            e.preventDefault();
            if(current_value.length != 0){
                if(container_value.length == 0){
                    $('#'+container_id).val(current_value);
                }else if($.inArray(current_value, container_array) >= 0) {
                    $('#'+field_id).val('');
                    return;
                }else{
                    $('#'+container_id).val(container_value + '`' + current_value);
                }

                if(field_id == 'dnt_profile_facade_specialities_input'){
                    $('#'+display).prepend('<tr id='+field_id+'_' + random_val + '>' +
                        '<td class="col-xs-10">'+ $('#'+field_id+' option:selected').text() + '</td>' +
                        '<td  id='+field_id+'_delete_'+random_val +'><a href="#" class="glyphicon glyphicon-remove" title="Remove">' +
                        '</a></td></tr>');
                }
                else{
                    $('#'+display).prepend('<tr id='+field_id+'_' + random_val + '>' +
                        '<td class="col-xs-10" title="'+ current_value+'" >'+ jQuery.trim(current_value).substr(0,20).trim(this) + dot_string +
                        '</td>' + '<td  id='+field_id+'_delete_'+random_val +'><a href="#" class="glyphicon glyphicon-remove" title="Remove">' +
                        '</a></td></tr>');
                }
                $('#'+field_id).val('');
            }
        }
        else{
            e.preventDefault();
            $('#'+display).append($('#'+error_id).text());
        }
        deleteMultipleValues(field_id,current_value,container_id,display,random_val);
    })
}

function deleteMultipleValues(field_id,delete_id,container_id,display_id,identify_id){
    $('#'+field_id+'_delete_'+identify_id).click(function(e){
        var container_array;
        e.preventDefault();
        container_array = $.unique($('#'+container_id).val().split('`'));
        if($.inArray(delete_id, container_array) >= 0){
            if(confirm('Are you Sure?')){
                container_array.splice($.inArray(delete_id, container_array),1);
                $('#'+container_id).val(container_array.join('`') + "");
                $('table#'+display_id+' tr#'+field_id+'_'+identify_id).delay(300).fadeOut().remove();
            }

        }
    })
}

var profile_validation_options = {
    rules: {
        "profile[profile_desc]": {require: true},
        "dnt_profile_facade[profile_desc]": { require: true},
        "dig_profile_facade[profile_desc]": { require: true},
        "dm_list_profile_facade[profile_desc]": { require: true},
        "profile[effidia_id]": {number: true, maxlength: 8, min: 0, digits: true},
        "dnt_profile_facade[speciality_others_input]": {maxlength: 150},
        "dnt_profile_facade[target_others_input]": {maxlength: 150}
    },
    messages:{
        "profile[effidia_id]": {
            number: 'Effidia must be number',
            maxlength: 'Please enter not more than 8 digit',
            min: 'Must be positive integer'
        },
        "dnt_profile_facade[speciality_others_input]": {maxlength: 'Please enter not more than 150 char'},
        "dnt_profile_facade[target_others_input]": {maxlength: 'Please enter not more than 150 char'}
    },
    highlight: function (element) {
        $(element).removeClass('error');
    },
    errorPlacement: function(error, element) {
        error.insertAfter(element);
    }


};
// options for client side validations
var validation_options = {
    rules: {
        'title[title_name]': {required: true},
        'title[established_year]':
        { required: true, number: true, minlength: 4, maxlength: 4 },
        'title[when_published]': {required: true},
        'title[published_yyyy]': { number: true, required: true, minlength: 4, maxlength: 4 },
        'title[published_mm]': {
            number: true,
            minlength: 2,
            maxlength: 2,
            range: [01,12],
            required: {
                depends: function(element) {
                    return $('#title_published_dd').val().length > 0;
                }
            }
        },
        'title[published_dd]':{
            number: true, minlength: 2, maxlength: 2, range: [01,31] },
        'title[comments]': {maxlength: 150},
        'title[subtitle_name]':{maxlength: 150},
        'title[sort_name]': {maxlength: 150},
        'title[search_name]': {maxlength: 150},
        'title[formerly]': {maxlength: 150},
    },

    messages: {
        'title[title_name]': "Title Name can't be blank",
        'title[established_year]':{
            required: 'Established Year must be present',
            number: 'Established Year must be number',
            minlength: jQuery.format('Established Year should be of 4 digit')
        },

        'title[when_published]': "When Published can't be blank",
        'title[published_yyyy]':{
            number: 'Year is not a number', required: 'Year must be present' },
        'title[published_mm]': {
            number: 'Month is not a number', required: 'Month must be present' },
        'title[published_dd]': {number: 'Date is not a number'}
    },

    highlight: function (element)
    { $(element).removeClass('error'); },

    errorPlacement: function(error, element) {
        if (element.attr('name') == 'title[published_yyyy]')
            $('#error_tr td:nth-child(2)').html(error);
        else if (element.attr('name') == 'title[published_mm]')
            $('#error_tr td:nth-child(3)').html(error);
        else if (element.attr('name') == 'title[published_dd]')
            $('#error_tr td:nth-child(4)').html(error);
        else error.insertAfter(element);
    }
};

var list_source_validation_options = {
    rules: {
        'direct_marketing_list_source[percentage]':{number: true, maxlength:2},
        'direct_marketing_list_source[source_other]':{maxlength:150}
    },
    messages: {
        'direct_marketing_list_source[percentage]': {number: 'Must be number', maxlength:'Max 2 digit'},
        'direct_marketing_list_source[source_other]': 'Max 150 characters'
    },
    highlight: function (element) {
        $(element).removeClass('error');
    },

    errorPlacement: function(error, element) {
        if (element.attr('name') == 'direct_marketing_list_source[percentage]')
            $('#list_source_error_validations td:nth-child(1)').html(error);
        else if (element.attr('name') == 'direct_marketing_list_source[source_other]')
            $('#list_source_error_validations td:nth-child(3)').html(error);
        else
            error.insertAfter(element);
    }
};


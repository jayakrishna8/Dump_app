var digital_spot_delivery_validation_options = {
    rules: {
        'digital_spot_delivery[code_lookup_id]' : {required: true}
    },
    messages:{
        'digital_spot_delivery[code_lookup_id]' : 'Please Select digital spot delivery Value.'
    },
    highlight: function (element) {
        $(element).removeClass('error');
    }
};

// options for client side validations
var tape_validation_options = {
    rules: {
        'tape[code_lookup_id]' : {required: true}
    },
    messages:{
        'tape[code_lookup_id]' : 'Please Select Tape Value.'
    },
    highlight: function (element) {
        $(element).removeClass('error');
    }
};
var mechanical_requirements_validation_options = {
    ignore: [],
    rules: {
        'mechanical_requirement[trim_size_width_inch]': {number: true, digits: true, min:1,maxlength: 3 },
        'mechanical_requirement[trim_size_width_numerator]': {
            number: true,
            digits: true,
            min: 1,
            maxlength: 2,
            required:{
                depends: function(element){
                    return $('#mechanical_requirement_trim_size_width_denominator').val().length > 0;
                }
            }
        },
        'mechanical_requirement[trim_size_width_denominator]': {
            number: true,
            digits: true,
            maxlength: 2,
            min: 1,
            required:{
                depends: function(element){
                    return $('#mechanical_requirement_trim_size_width_numerator').val().length > 0;
                }
            }
        },
        'mechanical_requirement[trim_size_depth_inch]': {number: true, digits: true,min: 1,maxlength: 3 },
        'mechanical_requirement[trim_size_depth_numerator]': {
            number: true,
            digits: true,
            min: 1,
            maxlength: 2,
            required:{
            depends: function(element){
                return $('#mechanical_requirement_trim_size_depth_denominator').val().length > 0;
            }
            }
        },
        'mechanical_requirement[trim_size_depth_denominator]': {
            number: true,
            digits: true,
            maxlength: 2,
            min: 1,
            required:{
                depends: function(element){
                    return $('#mechanical_requirement_trim_size_depth_numerator').val().length > 0;
                }
            }
        },
        'mechanical_requirement[trim_size_metric_width]': {number: true, digits: true,min: 1,maxlength: 3},
        'mechanical_requirement[trim_size_metric_depth]': {number: true, digits: true,min: 1,maxlength: 3},
        'mechanical_requirement[trim_size_column_1]': {number: true, digits: true,min: 1,maxlength: 3},
        'mechanical_requirement[trim_size_column_2]': {number: true, digits: true,min: 1,maxlength: 3},
        'mechanical_requirement[trim_size_decimal_depth]': {number: true, min: 1,max:999.999},
        'mechanical_requirement[trim_size_decimal_width]': {number: true, min: 1, max:999.999},

        'mechanical_requirement[exception_issue_1]': {maxlength:10},
        'mechanical_requirement[exception_issue_2]': {maxlength:10},
        'mechanical_requirement[exception_issue_3]': {maxlength:10},
        'mechanical_requirement[print_other_desc]': {
            maxlength: 20,
            required: {
                depends: function (element) {
                    return ($('#fullrun_print :checked').val() == 'Other') || ($('#regional_print :checked').val() == 'Other') || ($('#cover_print :checked').val() == 'Other')
                }
            }
        },
        'mechanical_requirement[cover_other_desc]': {maxlength:20},
        'mechanical_requirement[color_other_desc]': {maxlength:20},
        'mechanical_requirement[bind_method_other]': {
            maxlength:20,
            required:{
                depends: function(element){
                    return ($('#binding_method :checked').val() == 'Other')
                }
            }
        },
        'mechanical_requirement[exception_bind_method_desc_1]': {maxlength:20},
        'mechanical_requirement[exception_bind_method_desc_2]': {maxlength:20},
        'mechanical_requirement[exception_bind_method_desc_3]': {maxlength:20}
    },
    messages: {

        'mechanical_requirement[trim_size_width_inch]': {
            number: 'Must be number',
            digits: 'Only integer',
            min: 'should be > 0',
            maxlength: 'Max is 3 digit'
        },
        'mechanical_requirement[trim_size_column_1]': {
            number: 'Must be number',
            digits: 'Only integer',
            min: 'should be > 0',
            maxlength: 'Max is 3 digit'
        },
        'mechanical_requirement[trim_size_column_2]': {
            number: 'Must be number',
            digits: 'Only integer',
            min: 'should be > 0',
            maxlength: 'Max is 3 digit'
        },
        'mechanical_requirement[trim_size_width_numerator]': {
            number: 'Must be number',
            digits: 'Only integer',
            min: 'should be > 0',
            required: 'must be present',
            maxlength: 'Max is 2 digit'
        },
        'mechanical_requirement[trim_size_width_denominator]': {
            number: 'Must be number',
            digits: 'Only integer',
            min: 'should be > 0',
            required: 'must be present',
            maxlength: 'Max is 2 digit'
        },
        'mechanical_requirement[trim_size_depth_inch]': {
            number: 'Must be number',
            digits: 'Only integer',
            min: 'should be > 0',
            maxlength: 'Max is 3 digit'
        },
        'mechanical_requirement[trim_size_depth_numerator]': {
            number: 'Must be number',
            digits: 'Only integer',
            min: 'should be > 0',
            required: 'must be present',
            maxlength: 'Max is 2 digit'
        },
        'mechanical_requirement[trim_size_depth_denominator]': {
            number: 'Must be number',
            digits: 'Only integer',
            min: 'should be > 0',
            required: 'must be present',
            maxlength: 'Max is 2 digit'
        },
        'mechanical_requirement[trim_size_metric_width]': {
            number: 'Must be number',
            digits: 'Only integer',
            min: 'should be > 0',
            maxlength: 'Max is 3 digit'
        },
        'mechanical_requirement[trim_size_metric_depth]': {
            number: 'Must be number',
            digits: 'Only integer',
            min: 'should be > 0',
            maxlength: 'Max is 3 digit'
        },
        'mechanical_requirement[trim_size_decimal_depth]': {
            number: 'Must be decimal',
            min: 'should be > 0',
            max: 'Must be in [3,3]'
        },
        'mechanical_requirement[trim_size_decimal_width]': {
            number: 'Must be decimal',
            min: 'should be > 0',
            max: 'Must be in[3,3]'
        },

        'mechanical_requirement[exception_issue_1]': 'Maximum Length is 10 character',
        'mechanical_requirement[exception_issue_2]': 'Maximum Length is 10 character',
        'mechanical_requirement[exception_issue_3]': 'Maximum Length is 10 character',
        'mechanical_requirement[print_other_desc]': {maxlength: 'Maximum Length is 20 character', required: "Required for 'Other' printing method"},
        'mechanical_requirement[other]': 'Maximum Length is 20 character',
        'mechanical_requirement[bind_method_other]': {maxlength: 'Maximum Length is 20 character', required: "Required for 'Other' binding method"},
        'mechanical_requirement[exception_bind_method_desc_1]': 'Maximum Length is 20 character',
        'mechanical_requirement[exception_bind_method_desc_2]': 'Maximum Length is 20 character',
        'mechanical_requirement[exception_bind_method_desc_3]': 'Maximum Length is 20 character'
    },
    highlight: function (element) {
        $(element).removeClass('error');
    },
    errorPlacement: function(error, element) {
        if (element.attr('name') == 'mechanical_requirement[trim_size_width_inch]')
            $('#fraction_error_width td:nth-child(2)').html(error);
        else if (element.attr('name') == 'mechanical_requirement[trim_size_width_numerator]')
            $('#fraction_error_width td:nth-child(3)').html(error);
        else if (element.attr('name') == 'mechanical_requirement[trim_size_width_denominator]')
            $('#fraction_error_width td:nth-child(4)').html(error);
        else if (element.attr('name') == 'mechanical_requirement[trim_size_depth_inch]')
            $('#fraction_error_depth td:nth-child(2)').html(error);
        else if (element.attr('name') == 'mechanical_requirement[trim_size_depth_numerator]')
            $('#fraction_error_depth td:nth-child(3)').html(error);
        else if (element.attr('name') == 'mechanical_requirement[trim_size_depth_denominator]')
            $('#fraction_error_depth td:nth-child(4)').html(error);
        else if (element.attr('name') == 'mechanical_requirement[trim_size_decimal_width]')
            $('#trim_decimal_width_error').html(error);
        else if (element.attr('name') == 'mechanical_requirement[trim_size_decimal_depth]')
            $('#trim_decimal_depth_error').html(error);
        else if (element.attr('name') == 'mechanical_requirement[trim_size_metric_width]')
            $('#trim_metric_width_error').html(error);
        else if (element.attr('name') == 'mechanical_requirement[trim_size_metric_depth]')
            $('#trim_metric_depth_error').html(error);
        else if (element.attr('name') == 'mechanical_requirement[color_other_desc]')
            $('#mechanical_color_other_error').html(error);
         else if (element.attr('name') == 'mechanical_requirement[cover_other_desc]')
            $('#mechanical_cover_other_error').html(error);
        else
            error.insertAfter(element);
    }
};
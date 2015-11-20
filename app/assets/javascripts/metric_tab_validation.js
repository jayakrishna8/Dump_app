// options for client side validations
var dnt_reach_validation_options = {
    rules: {
        'dnt_reach[source]': {maxlength: 50},
        'dnt_reach[period]': {maxlength: 50},
        'dnt_reach[platform_display_pct]': {number: true, min: 0, max: 100},
        'dnt_reach[platform_video_pct]': {number: true, min: 0, max: 100},
        'dnt_reach[platform_mobile_pct]': {number: true, min: 0, max: 100}
    },
    messages: {
        'dnt_reach[source]': 'Enter 50 chars or less',
        'dnt_reach[period]': 'Enter 50 chars or less',
        'dnt_reach[platform_display_pct]': {
            number: 'Must be integer',
            min: 'Only positive',
            max: 'Must be < 100'
        },
        'dnt_reach[platform_video_pct]': {
            number: 'Must be integer',
            min: 'Only positive',
            max: 'Must be < 100'
        },
        'dnt_reach[platform_mobile_pct]': {
            number: 'Must be integer',
            min: 'Only positive',
            max: 'Must be < 100'
        }

    },
    highlight: function (element) {
        $(element).removeClass('error');
    },
    errorPlacement: function(error, element) {
        if (element.attr('name') == 'dnt_reach[platform_display_pct]')
            $('#reach_display_error td:nth-child(1)').html(error);
        else if (element.attr('name') == 'dnt_reach[platform_video_pct]')
            $('#reach_video_error td:nth-child(1)').html(error);
        else if (element.attr('name') == 'dnt_reach[platform_mobile_pct]')
            $('#reach_mobile_error td:nth-child(1)').html(error);
        else
            error.insertAfter(element);
    }
};
jQuery(document).ready(function($) {
    $('#searchform').submit(function(){
        var search_query = $('#s').val();
        $.ajax({
            url: ajax_object.ajax_url,
            type: 'POST',
            data: {
                action: 'search_books',
                query: search_query
            },
            success: function(response) {
                $('#search-results').html(response);
            }
        });
        return false;
    });
});
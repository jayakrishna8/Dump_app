<% if @keyword.errors.any? -%>
  $("#keyword_flash_notice").hide(300);
  $("#keyword_errors").html("<%= j render 'keywords/errors', object: @keyword  %>").show();
<% else -%>
  $("#keyword_form").html("<%= j render 'keywords/form'%>");
  $("#keyword_errors").hide(300);
  $("#keyword_flash_notice").html("<%= j render 'keywords/flash_mesg' %>").show(300).delay(1000).hide(300);
<% end -%>

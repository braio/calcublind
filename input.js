<script>


$(document).ready(function () {

// Check if the user's web browser supports HTML5 Speech Input API
  if(document.createElement('input').webkitSpeech == undefined) {
    $(".answer").append("We are sorry but Dictation requires Google Chrome.");
  }
  else {

// Get the default locale of the user's browser (e.g. en-US, or de)
    var language = window.navigator.userLanguage || window.navigator.language;
    $("#speech").attr("lang", language).focus();

// Make the text region editable to easily fix transcription errors
    $(".answer").click(function () {
       $('.answer').attr('contentEditable', 'true');
    });
  }

// This is called when Chrome successfully transcribes the spoken word
  $("#speech").bind("webkitspeechchange", function (e) {
     var val = $(this).val();

// Did the user say Delete? Then clear the canvas.
     if(val == "delete everything") {
       $(".answer").text("");
       return;
     }

// For "new line" commands, add double line breaks.
     if(val == "new line") 
        val = "<br /><br />";
     else {

// Capitalize the first letter of the sentence.
        val = val.substr(0, 1).toUpperCase() + val.substr(1);

// If the last letter is a alphanumeric character, add a period (full stop)
        if(val.match(/[a-zA-Z]$/)) 
           val = val + ".";
     }

// Append the transcribed text but set the focus to the hidden speech input.
// This enables keyboard shortcut Ctrl+Shift+Period (.) for speech mode.
     $(".answer").append(val + " ").fadeIn();
     $(this).val("").focus();
   });
});
</script>
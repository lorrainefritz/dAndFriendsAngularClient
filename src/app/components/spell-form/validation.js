$ (function(){
  var $spellForm= $("#spellForm ");
  if ($spellForm.length){
    $spellForm.validate({
      rules: {
        title: {
          required: true
        }
      },
      messages:{
        title: {
          required:'title is required'
        }
      }
    })
  }
  /*.validate({

    }
    }

  );*/
});

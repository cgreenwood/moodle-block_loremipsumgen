window.onload = function() {
  console.log('Lorem Ipsum Javascript loaded.')
  document.querySelectorAll('button.block_loremipsumgen')[0].onclick = function() {
    var sel = document.querySelectorAll('select.block_loremipsumgen')[0]
    var num_of_p = sel.value;
    console.log('Number of paragraphs -> ' + num_of_p);
    document.querySelectorAll('textarea.block_loremipsumgen')[0].value = generate_lorem_ipsum_paragraph(num_of_p);
  };
  $("textarea.block_loremipsumgen").focus(function() {
    var $this = $(this);
    $this.select();
    // Work around Chrome's little problem
    $this.mouseup(function() {
        // Prevent further mouseup intervention
        $this.unbind("mouseup");
        return false;
    });
  });
};

// Paragraph = 10 sentences.
function generate_lorem_ipsum_sentence() {
  var sentences = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
                   "Duis sed urna placerat elit interdum sollicitudin. ",
                   "Aenean vel blandit urna, ac consectetur nulla. ",
                   "Sed ac egestas ipsum, sit amet egestas ipsum. ",
                   "Suspendisse venenatis, purus sed euismod mollis, purus augue sollicitudin lorem, vitae faucibus eros est quis lacus. ",
                   "Nunc sed massa molestie purus porta iaculis in ac quam. ",
                   " Duis sed finibus libero, nec gravida lacus. ",
                   "Aliquam quis ex ut justo porttitor laoreet. ",
                   "Vestibulum quis ante ut erat maximus porttitor nec quis neque. ",
                   "Curabitur tincidunt dapibus arcu sed vulputate. ",
                   "Vestibulum sit amet est ornare nisi porta varius id sed mi. ",
                   "Nam ac porta justo, quis iaculis nisi. ",
                   "Phasellus nibh arcu, viverra ut eleifend a, viverra eu tellus. ",
                   "Nunc luctus, elit sit amet pharetra mollis, erat mauris mollis neque, vel euismod ipsum urna vel nulla. ",
                   "Donec vitae cursus leo. ",
                   "Cras ligula dolor, ullamcorper ac metus vel, fringilla aliquam tellus. ",
                   "Nunc venenatis malesuada diam quis iaculis.",
                   "Sed non consectetur libero. ",
                   "Aenean sit amet semper dui. ",
                   "Fusce sed cursus dolor. ",
                   "Aenean faucibus sit amet mauris id venenatis. ",
                   "Quisque feugiat, nulla et egestas congue, ex orci viverra sem, ut egestas lectus dolor id massa. ",
                   "In interdum faucibus venenatis. ",
                   "Phasellus egestas erat sit amet massa eleifend, in volutpat neque dapibus. ",
                   "Duis dictum enim at neque bibendum, dictum bibendum dolor ultricies. ",
                   "Etiam nec purus eget felis mattis suscipit. ",
                   "Sed laoreet odio non lobortis fringilla. ",
                   "Nam eu euismod massa. ",
                   "Integer ut leo volutpat, iaculis mi eget, iaculis quam. ",
                   "Mauris eu lorem vitae nibh fringilla porttitor eget faucibus ex. ",
                   "Nullam laoreet eget tellus congue luctus. ",
                   "Vestibulum sed fermentum purus. ",
                   "Pellentesque dui ante, aliquet vel ante sed, egestas dapibus arcu. ",
                   "Mauris ut orci dolor. "];
  return sentences[Math.floor((Math.random() * sentences.length))];
}

function generate_lorem_ipsum_paragraph(num_of_p) {
  var paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ";
  for (var i = 0; i < 9; i++ ) {
    paragraph += generate_lorem_ipsum_sentence();
  }

  for (var j = 0; j < (parseInt(num_of_p) - 1); j++) {
    paragraph += "\n";
    for (var i = 0; i < 10; i++ ) {
      paragraph += generate_lorem_ipsum_sentence();
    };
  };
  return paragraph;
}

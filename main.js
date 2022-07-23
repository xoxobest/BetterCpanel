setTimeout(function() {
  var editor = ace.edit("codewindow");
  editor.setTheme("ace/theme/tomorrow_night");
  document.getElementById('btnReOpen').value = (document.getElementById('path').value).slice(15);
    
}, 100);

document.onkeydown = (e) => {
  if (e.ctrlKey && e.key === 's') {
    e.preventDefault();
    document.getElementById('sform_submit').click();
  }
}

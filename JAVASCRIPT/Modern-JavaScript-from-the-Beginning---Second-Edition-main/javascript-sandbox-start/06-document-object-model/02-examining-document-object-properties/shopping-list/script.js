let output;

output = document.all;
output = document.all[11];
output = document.documentElement;
output = document.head;
output = document.body;
output = document.head.children;

output = document.doctype;
output = document.doctype;
output = document.characterSet;
output = document.contentType;
output = document.forms[0];
output = document.forms[0].action;
document.forms[0].id = 'new-form';

// Links
output = document.links;
output = document.links[0];
output = document.links[0].href;

output = document.links[0].classList;

output = document.images;

console.log(output);

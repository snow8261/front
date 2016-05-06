function convert(str) {
  var newstr=str.replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/'/g,'&apos;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  return newstr;
}

console.log(convert("Dolce & Gabbana"));
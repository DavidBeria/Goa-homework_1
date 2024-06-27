// let band = "Beatles";
// let song = "Yesterday";
// song = "Let it be";
// console.log(song);
// console.log(band);
// let hi = prompt("hello")
function allnumericplusminus(inputtxt)
   {
      var numbers = prompt("number");
      if(inputtxt.value.match(numbers))
      {
      alert('Correct...Try another');
      document.form1.text1.focus();
      return true;
      }
      else
      {
      alert('Please input correct format');
      document.form1.text1.focus();
      return false;
      }
   }

allnumericplusminus()
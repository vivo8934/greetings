var greeting = function(radioChoice, firstName){

  var Name = (firstName.substr(0, 1).toUpperCase() + firstName.substr(1).toLowerCase());

  if(radioChoice == 'English'){

    return "Hello, " + Name;
  }
  else if(radioChoice == 'Mandarin'){

    return "Ni hao, " + Name;
  }
  else if(radioChoice == 'IsiXhosa'){

    return "Molweni, " + Name;
  }
   else if (!firstName && !radioChoice) {
     return "invalid selection";
   }

}

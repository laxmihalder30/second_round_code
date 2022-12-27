function parseBirthday( remarkString ) {
    var regex = /year(?<year>\d{4}).*month(?<month>\d{1,2}).*day(?<day>\d{1,2})/gmi;
    let m;
    var formattedDate = '';
    while ((m = regex.exec(remarkString)) !== null) {
      if (m.index === regex.lastIndex) {
          regex.lastIndex++;
      }
      formattedDate = m.groups.year + '/' + m.groups.month + '/' + m.groups.day 
    }
    return formattedDate; 
  }
  console.log(parseBirthday("yearYEAR2020monmonth3DATE12ABU1234DAY5"));

 //export function parseBirthday (remarkString){
    //   var regex = </ year /month /day>;
    //   let m ;
    //   var formattedDate
    //   while ((m= regex.exec(remarkString)) !== null) 
    //   {
    //       if (m.Index === regex.lastIndex){
    //           regex.lastIndex++
    //           formattedDate = m[1];
    //       }
    //       return formattedDate
    //   }
    // }
    
    
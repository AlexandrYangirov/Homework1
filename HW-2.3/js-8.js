function getSeason(month) {
  month=+month
    if (month === 1 || month === 2 || month === 12) {
      alert('зима') ;
    } else if (month === 3 || month === 4 || month === 5) {
      alert('весна') ;
    } else if (month === 6 || month === 7 || month === 8) {
      alert('лето') ;
    } else if (month === 9 || month === 10 || month === 11) {
      alert('осень') ;
    } else {
      alert('неправильный параметр') ;
    }
  }
  
  //console.log(getSeason(6)); // 'лето'
  //console.log(getSeason(9)); // 'осень'
  //console.log(getSeason(13)); // 'неправильный параметр'
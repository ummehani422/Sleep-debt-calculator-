//Sleep debt Calculator

const getSleepHour = day =>{
  switch(day){
    case 0:
    return 'Monday';
    break;
    case 1:
    return 'Tuesday';
    break;
    case 2:
    return 'Wednesday'
    break;
    case 3:
    return 'Thursday'
    break;
    case 4:
    return 'Friday'
    break;
    case 5:
    return 'Saturday'
    break;
    case 6:
    return 'Sunday'
    break;
  }
}

const getActualSleepHours = () => {
  return getSleepHour('Monday') + getSleepHour ('Tuesday') + getSleepHour ('Wednesday') + getActualSleepHours('Thursday') + getSleepHour('Friday') + getSleepHour('Saturday') + getSleepHour('Sunday');
}

const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7;
}

const calculateSleepDebt = () =>{
  const actualSleeper = getActualSleepHours();
  let idealSleeper = getIdealSleepHours();
  
  if(actualSleeper === idealSleeper){
    console.log(`you have got ${actualSleeper} this week , it is a perfect amount.`)
  }  
  if(actualSleeper > idealSleeper){
    console.log(`You got  ${actualSleepHours - idealSleepHours} hours more sleep than you needed this week.`)
  }
  if(actualSleeper < idealSleeper){
    console.log(`You got ${idealSleepHours - actualSleepHours} hours less sleep than you needed this week. Get some rest.`)
  }
}
calculateSleepDebt();

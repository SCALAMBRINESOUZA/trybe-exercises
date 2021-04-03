function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;

const diasMes = () => {
  const days = document.getElementById('days');

  for(let day = 0; day < dezDaysList.length; day += 1 ) {
      const daysMonth = dezDaysList[day];
      const daysItem = document.createElement('li');
      daysItem.setAttribute('class', 'day');
      daysItem.innerHTML = daysMonth;
      days.appendChild(daysItem);

      if (daysItem.innerHTML == 24 || daysItem.innerHTML == 31) {
          daysItem.setAttribute('class', 'day holiday');   
        }
 
      if (daysItem.innerHTML == 4 || daysItem.innerHTML == 11 || daysItem.innerHTML == 18) {
          daysItem.setAttribute('class', 'day friday');  
        }
        
      if (daysItem.innerHTML == 25) {
          daysItem.setAttribute('class', 'day holiday friday');
      }  
  
  }

}
    diasMes();
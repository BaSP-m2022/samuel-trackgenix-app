const Page = require('./page');

/* eslint-disable prettier/prettier */
class HomePage extends Page{
  //geters
  get textTitle() { return $('#root>div>div>section>h2');}
  get buttonTimesheet() { return $('#root>div>nav>ul>li:nth-child(5)>a');}
  get buttonTask() { return $('#root>div>nav>ul>li:nth-child(6)>a');}
  //GETERS TO TABLE TIMESHEET
  get btnAddTimrsheet () { return $('//*[@id="root"]/div/div/section/div[1]/button');}
  get btnEditTimesheet() { return $('//*[@id="62a61d11311ddf33163e7bbb"]/td[7]/button');}
  get btnDeleteTimesheet () { return $('//*[@id="62a61d11311ddf33163e7bbb"]/td[8]/button');}
  //GETTERS TO FORM timesheet TO INPUT
  get inputProyect () { return $('#project');}
  get inputEmployee () { return $('#employee');}
  get inputWeeksprint () { return $('#weekSprint');}
  get inputDate() { return $('#date');}
  get inputHoursWorked() { return $('#hoursWorked');}
  get inputProjectHours () { return $('#hoursProject');}
  get inputDescription() { return $('#workDescription');}
  get btnSubmit() { return $('#root>div>div>div>div>form>fieldset>button');}
  get btnBackFormTimeshet () { return $('#root>div>div>div>div>button');};
  // GETTERS TO TASK
  get btnAddTask(){ return $('#root>div>div>section>div>button');}
  get btnEditTask() { return $('//*[@id="62a64a725267602bfc3d0e96"]/td[6]/button');}
  get btnDeleteTask () { return $('//*[@id="62a614ebc48b95ed30dd5c84"]/td[7]/button');}
  //getters form task edit
  get inputDescriptioTask() { return $('#description');}
  get inputWeekTask() { return $('#week');}
  get inputDayTask() { return $('#day');}
  get inputHoursTask() { return $('#hours');}
  get modalSuccesfull() { return $('#root>div>div>div>div.modal_modalOverlay__3su40>div>div>h1')}
  
  //Seter to form edit task
  async setDescription(descriptionTask){
    await this.inputDescriptioTask.setValue(descriptionTask);
  }
  async setWeekTask (weekTask){
    await this.inputWeekTask.setValue(weekTask);
  }
  async setDayTask(dayTask) {
    await this.inputDayTask.setValue(dayTask);
  }
  async setHoursTask (hoursTask) {
    await this.inputHoursTask.setValue(hoursTask);
  }
  
  
  //methods
  async goToTasks() { 
    await this.buttonTask.click();
  }
  async goToTimesheet () {
    await this.buttonTimesheet.click();
  }
  async editTask (descriptionTask, weekTask, dayTask, hoursTask){
    await this.setDescription(descriptionTask);
    await this.setWeekTask(weekTask);
    await this.setDayTask(dayTask);
    await this.setHoursTask(hoursTask);
  }

};

module.exports = new HomePage();

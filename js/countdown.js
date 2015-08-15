/*-----------------------------------------------------------------------------
Quiz Application created To test Javascript programming knowledge
Program written by Ajose Stephen For the Funaab Post UTME Practice!
*/
//the first code will be the timer code for each question. 
function Countdown() {
    this.start_time = "05:00";
    this.target_id = "#timer";
    this.name = "timer";
    this.tickID;
    this.formSubmitted = false;
    this.submitForm = function () {
        this.formSubmitted = true;
        document.getElementById('submit-button').click();
    };
}
//calling the tick function every second

Countdown.prototype.init = function () {
    this.reset();
    this.tickID = setInterval(this.name + '.tick()', 1000);
}
//parsing out the start time

Countdown.prototype.reset = function () {
    time = this.start_time.split(":");
    this.minutes = parseInt(time[0]);
    this.seconds = parseInt(time[1]); //parseInt takes the string and converts to an integer
    this.update_target();
}

Countdown.prototype.tick = function () {
    if (this.minutes == 0 && this.seconds == 0) {
        // The timer has expired. Stop the tick.
        clearInterval(this.tickID);

        // submit the form
        this.submitForm();

        return;
    }

    if (this.seconds > 0 || this.minutes > 0) {
        if (this.seconds == 0) { //if seconds is equals to zero, decrement the minute and reset the second to 59.
            this.minutes = this.minutes - 1;
            this.seconds = 59;
        } else {
            this.seconds = this.seconds - 1; //decrementing the seconds.
        }

    }
    this.update_target();
}
Countdown.prototype.update_target = function () {
    //cloning the values
    seconds = this.seconds;
    if (seconds < 10) seconds = "0" + seconds;
    $(this.target_id).val(this.minutes + ":" + seconds) //attaching a zero to single values.
}
// End of the Countdown Program.



//I transferred all the questions and the script to run the file on the question.js file
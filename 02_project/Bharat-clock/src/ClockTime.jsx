function ClockTime(){
    let time = new Date();
    return (
          <p>This the curent time : {time.toLocaleDateString()} - {time.toLocaleTimeString()}</p>
    )
}
export default ClockTime;
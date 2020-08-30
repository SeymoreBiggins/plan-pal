var time;
var momentCurrentDate;

var updateDate = function() {
  var momentCurrentDate =  moment().format('MMMM Do YYYY, h:mm:ss a');
  $("#currentDate").text(momentCurrentDate);
}

setInterval(function() {
  updateDate(); 
}, 1000);

var generateTimeBlocks = function () {
  for (var i = 0; i < 17; i++) {
    var tempID = i + 6;
    var timeFrom = moment().startOf('day').fromNow();
    var timeFromStr = parseInt(timeFrom.replace(/\D/g, ""), 10);

    if (timeFromStr === tempID) {
      $('#containerTimeBlock').append(
        $('<div/>')
        .attr("id", "row" + tempID)
        .attr("class", "row" + tempID + " row border present")
      );
    } else if (timeFromStr < tempID) {
      $('#containerTimeBlock').append(
        $('<div/>')
        .attr("id", "row" + tempID)
        .attr("class", "row" + tempID + " row border future")
      );
    } else {
      $('#containerTimeBlock').append(
        $('<div/>')
        .attr("id", "row" + tempID)
        .attr("class", "row" + tempID + " row border past")
      );
    }
    
    var tempID2 = "row" + tempID;

    if (tempID < 12) {
      time = tempID + ":00am"
    } else if (tempID === 12) {
      time = tempID + ":00pm"
    } else {
      time = tempID - 12 + ":00pm"
    }

    $('#' + tempID2).append(
      $('<span/>')
      .attr("id","row" + tempID + "col" + 1)
      .attr("class","col-md-2" + " hour m-auto text-center border-right")
      .text(time),
      $('<span/>')
      .attr("id","row" + tempID + "col" + 2)
      .attr("class","col-md-8" + " textarea m-auto text-wrap text-center")
      .text(""),
      $('<button/>')
      .attr("id","row" + tempID + "col" + 3)
      .attr("class","col-md-2" + " text-center saveBtn")
      .text("save")
    );
  };
};



generateTimeBlocks();
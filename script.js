// Initialize FullCalendar
$(document).ready(function() {
    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        events: [],
        selectable: true,
        selectHelper: true,
        select: function(start, end) {
            $('#eventForm').show();
            $('#eventDate').val(moment(start).format('YYYY-MM-DDTHH:mm'));
        }
    });

    // Show the event form when the "Add Event" button is clicked
    $('#addEventBtn').click(function() {
        $('#eventForm').show();
    });

    // Save the event
    $('#eventFormDetails').submit(function(event) {
        event.preventDefault();

        var title = $('#eventTitle').val();
        var date = $('#eventDate').val();
        var description = $('#eventDesc').val();

        if (title && date) {
            $('#calendar').fullCalendar('renderEvent', {
                title: title,
                start: date,
                description: description
            });
            $('#eventForm').hide();
            clearForm();
        } else {
            alert('Please fill in all fields!');
        }
    });

    // Cancel the event creation
    $('#cancelBtn').click(function() {
        $('#eventForm').hide();
        clearForm();
    });

    // Function to clear the form fields
    function clearForm() {
        $('#eventTitle').val('');
        $('#eventDate').val('');
        $('#eventDesc').val('');
    }
});

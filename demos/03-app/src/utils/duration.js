import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';

momentDurationFormatSetup(moment);

function getDuration(start, end) {

    if(!start || !end) {
        return 0;
    }

    var diff = moment(end).diff(moment(start));
    return diff;
}

function getDurationString(start, end) {
    var duration = moment.duration(getDuration(start, end));
    return duration.format('HH:mm:ss', {
        trim: false
    });
}

export { getDuration, getDurationString };
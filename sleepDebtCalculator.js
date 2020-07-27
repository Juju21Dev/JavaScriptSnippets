// Program Sleep Debt Calculator
// calculates the amount of sleep you need
// date : 27/07/2020
// author : Julien Violette

const getSleepHours = day => {
    switch (day) {
        case 'monday':
            return 5;
            break;
        case 'tuesday':
            return 7;
            break;
        case 'wednesday':
            return 4;
            break;
        case 'thursday':
            return 6;
            break;
        case 'friday':
            return 5;
            break;
        case 'saturday':
            return 8;
            break;
        case 'sunday':
            return 8;
            break;
        default:
            return 'Error!';
    };
};

const getActualSleepHours = () => {
    return 5 + 7 + 4 + 6 + 5 + 8 + 8;
};

const getIdealSleepHours = idealHours => idealHours * 7;

const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours(8);
    if (actualSleepHours === idealSleepHours) {
        console.log('You\'ve got the perfect amount of sleep.');
    } else if (actualSleepHours > idealSleepHours) {
        console.log('You\'ve ' + (actualSleepHours - idealSleepHours) + ' more hours of sleep this week.');
    } else if (actualSleepHours < idealSleepHours) {
        console.log('You should get some rest because you\'ve slept ' + (idealSleepHours - actualSleepHours) + ' hours less than you should have this week.');
    } else {
        console.log('Error! Something went wrong, check your code.');
    };
};

calculateSleepDebt();
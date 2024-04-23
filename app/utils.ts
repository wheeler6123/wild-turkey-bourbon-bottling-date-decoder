export interface DateResultObject {
    month: string;
    day: string;
    year: string;
}

export const getDates = (code: string) => {
    code = formatCode(code);
    let month, day, year;
    const len = code.length;

    if (len === 6) {
        if(code[0].toLowerCase() === 'l') {
            day = code.slice(3);
            year = '199' + code[2];
        } else {
            month = code.slice(0, 2);
            day = code.slice(2, 4);
            year = '19' + code.slice(4);
        }
    } else if (len === 8) {
        if(code[0].toLowerCase() === 'l') {
            day = code.slice(5);
            year = code[4] === '9' ? '1999' : '200' + code[4];
        } else {
            month = code.slice(0, 2);
            day = code.slice(2, 4);
            year = code.slice(4);
        }
    } else if (len === 9 || len === 11) {
        year = +code[1] >= 6 ? '200' + code[1] : '201' + code[1];
        day = code.slice(2, 5);
    } else if (len === 10) {
        const yearCode = code[2].toUpperCase();
        const indexedYear = 13 + yearCode.charCodeAt(0) - 66;
        year = '20' + indexedYear.toString();
        month = letterToMonth(code[3]).toString();
        day = code.slice(4, 6);
    } else {
        alert('Invalid code');
    }

    console.log('month: ', month, 'day: ', day, 'year: ', year);

    if (month === undefined) {
        const convertedDate = getMonthDay(day!, year!);
        month = convertedDate.month.toString();
        day = convertedDate.day.toString();
    }

    console.log('month: ', month, 'day: ', day, 'year: ', year);

    if(month && day && year) {
        const date: DateResultObject = {month, day, year};

        console.log(date);

        return date;
    }

    return null;
   
};

function formatCode(code: string) {
    return code.replace(/[\s~`!@#$%^&*(){}\[\];:"'<,.>?\/\\|_+=-]/g, '');
}

function getMonthDay(day: string, year: string) {
    const baseDate = new Date(+year, 0, 1 + (+day -1));

    const month = baseDate.getMonth() + 1;
    const dayNum = baseDate.getDate();

    return {month, day: dayNum};
}

function letterToMonth(letter: string) {
    const normalizedLetter = letter.toLowerCase();

    const month = normalizedLetter.charCodeAt(0) - 'a'.charCodeAt(0) + 1;

    return month;
}
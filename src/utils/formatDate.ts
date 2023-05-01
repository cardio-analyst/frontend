export const formatDate = (dateToString: string) => {
    const date = new Date(dateToString);

    const dd = addZero(date.getDate());
    const mm = addZero(date.getMonth() + 1);
    const yy = date.getFullYear();

    return `${dd}.${mm}.${yy}`;
};

function addZero(num: number) {
    if (num >= 0 && num <= 9) {
        return '0' + num;
    } else {
        return num;
    }
}

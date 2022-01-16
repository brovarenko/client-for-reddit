export const getTime = (time) => {
    let date = Date.now() - time.created_utc * 1000
    const min = Math.round(date / (1000 * 60))
    const hour = Math.round(date / (1000 * 60 * 60))
    const day = Math.round(date / (1000 * 60 * 60 * 24))
    const month = Math.round(date / (1000 * 60 * 60 * 24 * 30.5))
    const year = Math.round(date / (1000 * 60 * 60 * 24 * 30 * 365))
    if (year > 1) {
        return year + " years ago"
    } else if (year === 1) {
        return year + " year ago"
    } else if (month === 1) {
        return month + " month ago"
    } else if (month > 1) {
        return month + " months ago"
    } else if (day === 1) {
        return day + " day ago"
    } else if (day > 1) {
        return day + " days ago"
    } else if (hour === 1) {
        return hour + " hour ago"
    } else if (hour > 1) {
        return hour + " hours ago"
    }  else if (min === 1) {
        return min + " minute ago"
    } else if (min > 1) {
        return min + " minutes ago"
    } 
}

export const getNumber = (number)=> {
    if (number > 1000000){
        return (number/1000000).toFixed(1) + "m";
    } else if (number > 1000) {
        return (number/1000).toFixed(1) + "k";
    } else return number;
}

export const getCreatedDate = (time) => {
    const date = new Date(time*1000);
    return  date.toLocaleDateString()
}
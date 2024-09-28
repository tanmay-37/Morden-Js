//dates and time
const now = new Date();

console.log(now);

console.log(typeof(now))

//year, months, day, times
console.log('getFullyear : ',now.getFullYear())
console.log('getMonth : ',now.getMonth())
console.log('getDate : ',now.getDate())
console.log('getDay : ',now.getDay())
console.log('getHours : ',now.getHours())
console.log('getMinutes : ',now.getMinutes())
console.log('getSeconds : ',now.getSeconds())

//timestamps
console.log('Timestamps : ',now.getTime())
console.log(now.toDateString())
console.log(now.toTimeString())
console.log(now.toLocaleString())


const before = new Date('September 27 2024 7:30:59')

console.log(now.getTime(), before.getTime())

const diff = now.getTime() - before.getTime();
console.log(diff)


const mins = Math.round(diff/1000/60);
const hours = Math.round(mins/60)
const days = Math.round(hours/24)

console.log(mins);
console.log(hours);
console.log(days);


//converting timestamps to date objects

const timestamp = 1727497285968;
console.log(new Date(1727402459000))
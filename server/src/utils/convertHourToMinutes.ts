export default function convertHourToMinutes(time: string) {
    const [hour, minutes] = time.split(':').map(Number);
    const convertedMinutes = (hour * 60) + minutes;

    return convertedMinutes;
}
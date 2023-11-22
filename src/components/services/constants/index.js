export const apiUrl = 'https://if-student-api.onrender.com';

export const buildHotelsApiUrl = (searchValue, selectedDate) => {
    return `${apiUrl}/api/hotels?search=${searchValue}&checkin=${selectedDate}`;
};

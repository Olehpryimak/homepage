$(document).ready(function(){
    document.getElementById('age').innerText = (parseInt(getAge('1946-06-14')));
});
function getAge(date) {
    return ((new Date().getTime() - new Date(date)) / (24 * 3600 * 365.25 * 1000));
}

const headerTxt = document.querySelectorAll('.card-header .current-date');
if (headerTxt) {
    headerTxt.forEach((element, index) => {
        const today = new Date();
        element.innerText = `${today.toLocaleString('default', {month: 'short'})} ${today.getDate()} ${today.getFullYear()}`;
    })
}
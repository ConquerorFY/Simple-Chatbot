export const getCurrentDateTime = () => {
    const currentDate = new Date();
    const date = currentDate.getDate().toString().length < 2 ? `0${currentDate.getDate()}` : currentDate.getDate();
    const month = (currentDate.getMonth() + 1).toString().length < 2 ? `0${currentDate.getMonth() + 1}` : currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    const hour = currentDate.getHours().toString().length < 2 ? `0${currentDate.getHours()}` : currentDate.getHours();
    const minute = currentDate.getMinutes().toString().length < 2 ? `0${currentDate.getMinutes()}` : currentDate.getMinutes();
    const second = currentDate.getSeconds().toString().length < 2 ? `0${currentDate.getSeconds()}` : currentDate.getSeconds();
    return `${date}/${month}/${year} ${hour}:${minute}:${second}`;
}

export const clearInput = () => {
    txtMessage.value = "";
}
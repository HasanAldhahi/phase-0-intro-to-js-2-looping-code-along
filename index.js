// Code your solutions in this file


function writeCards(arr) {

    let arr2 = []
    for (let i = 0; i < arr.length; i++) {

        arr2.push(`Thank you, ${arr[i]}, for the wonderful surprise gift!`);
    }
    return arr2;


}


function countDown(num) {

    for (let i = num; i >= 0; i -= 1) {

        console.log(i);
    }
}






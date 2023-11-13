let year = +prompt('Nhap vao nam: ');
let isLeapYear = false;
let divisibleBy4 = year % 4 ==0;
if (divisibleBy4){
    let divisibleBy100 = year %100 == 0;
    if (divisibleBy100){
        let divisibleBy400 = year%400==0;
        if (divisibleBy400){
            isLeapYear = true;
        }
    }else {
        isLeapYear = true;
    }
}
if (isLeapYear){
    alert(year + 'la nam nhuan');
    }else{
    alert(year + 'ko la nam nhuan');
}
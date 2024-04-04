
//setTimeout(cb, timeout, args);
//1 minut= 60*1000
//5 minut= 5*60*1000
//1 h= 60*60*1000
//5 h= 5*60*60*1000
//1 d= 24*60*60*1000
//7 d= 7*24*60*60*1000
function fn(a, b, c) {
	console.log(a,b,c);	
}
function fn2(a, b, c) {
	console.log(a,b,c);	
}
const clearIt=setTimeout(fn, 0, 1, 2, 3);
/*timeout default 1 boladi agar 0 qilin qoysak ham va max numberdan kop time out raqam kiritsak ham default birga qaytarib qoyadi...*/
clearTimeout(clearIt, 2);
/** set time out timeout id qaytaradi shuni clearTimeoutga berib ochirib yuboramiz, clearTimeoutga beradigan time vaqtimiz kamida setTimeout vaqtidan  kop bolishi kerak */
const id = setInterval(fn2, 20*1000, "a", "b", "c");
setTimeout(() => {
	clearInterval(id);
}, 2*60 * 1000);
/*  */
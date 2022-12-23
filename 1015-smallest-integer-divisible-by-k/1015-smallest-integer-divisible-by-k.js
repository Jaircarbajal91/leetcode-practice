/**
 * @param {number} k
 * @return {number}
 */
var smallestRepunitDivByK = function(K) {
    if(K % 2== 0 && K % 5 ==0) return -1;
    let prevR =0;
    for(let i=1;i<=K;i++){
        prevR = (prevR * 10 +1) % K
        if(prevR ==0) return i;
    }
    return -1
};
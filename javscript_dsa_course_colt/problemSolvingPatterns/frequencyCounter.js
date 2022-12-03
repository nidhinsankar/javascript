// function validAnagram(str1,str2){
//     let frequencyStr1 = {}
//     let frequencyStr2 = {}
    
//     // add whatever parameters you deem necessary - good luck!
//     for(let i = 0;i<=str1.length;i++){
//         frequencyStr1[i] = 
//     }
//   }

/* 
    this same function has N^2 quadratic loop because it is a nested loop
*/
// function same(arr1,arr2) { 

//     let values = {}
//     if(arr1.length !== arr2.length){
//         return false;
//     }
//     for(let i = 0;i<=arr1.length;i++){
//         let currentValue = arr2.indexOf(arr1[i]**2)

//         if(currentValue === -1){
//             return false;
//         }

//         arr2.splice(currentValue,1)
//     }   
//     return true
// }

/**
 * 
 */

// function same(arr1,arr2) {
//     if(arr1.length !== arr2.length){
//         return false;
//     }

//     let frequencyArr1 = {}
//     let frequencyArr2 = {}

//     for(let i of arr1){
//         frequencyArr1[i] = (frequencyArr1[i] || 0) + 1
//     }

//     for(let i of arr2){
//         frequencyArr2[i] = (frequencyArr2[i] || 0) + 1
//     }

//     console.log(frequencyArr1,frequencyArr2);

//     for(let key in frequencyArr1){
//         console.log('!(key ** 2 in frequencyArr2)',!(key ** 2 in frequencyArr2));
//         console.log('(frequencyArr2[key ** 2] !== frequencyArr1[key]',frequencyArr2[key ** 2],frequencyArr1[key]);
//         if(!(key ** 2 in frequencyArr2)){
//            return false 
//         }
        
//         if(frequencyArr2[key ** 2] !== frequencyArr1[key]){
//             return false
//         }
//     }
//     return true
// }

// console.log(same([2,2,3,4],[4,16,9,4]));


function NameAnagram(str1,str2) {
    const arr1 = [...str1]
    const arr2 = [...str2]
    let frequencyArr1 = {}
    let frequencyArr2 = {}
    if(arr1.length !== arr2.length){
        return false
    }

    for(let i of arr1){
        frequencyArr1[i] = (frequencyArr1[i] || 0) + 1
    }

    for (let i of arr2){
        frequencyArr2[i] = (frequencyArr2[i] || 0) + 1
    }

    console.log(frequencyArr1,frequencyArr2);

    for(let key in frequencyArr1){
        if(!(key in frequencyArr2)){
            return false
        }

        if(frequencyArr2[key] !== frequencyArr1[key]){
            return false
        }
    }

    return true
}

console.log(NameAnagram('namaa','emnaa'));
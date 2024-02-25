import icons from "./icons";
const {AiOutlineStar, AiFillStar} = icons;
export const createSlug = ((string) =>{
    return string.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").split(" ").join('-')
})
export const formatMoney = (number) =>{
    return Number(number.toFixed(2)).toLocaleString()
}
export const renderStarFromNumber = (number, size) =>{
    // 5 => [1,1,1,1,1]
    // 4 => [1,1,1,1,0]
    // 3 => [1,1,1,0,0]
    // 2 => [1,1,0,0,0]
    // 1 => [1,0,0,0,0]
    if(number === "0") {
        return
    }
    const stars = [];
    for (let i = 0; i < number; i++) {
       stars.push(<AiFillStar color="orange" size={size ||16}/>)
    }
    for(let i = 5 ; i > number; i--) {
        stars.push(<AiOutlineStar color="orange" aize={size ||16}/>)
    } 
    return stars;
}
export function secondsToHms(d){
    d = Number(d) / 1000;
    const h = Math.floor(d/ 3600);
    const m = Math.floor(d % 3600 / 60);
    const s = Math.floor(d % 3600 % 60);
    return ({h, m,s});
}
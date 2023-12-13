
const gitgubInfoLoader = async ()=>{
    const res = await fetch(`https://api.github.com/users/dhaval73`)
    console.log(res);
    return res
  } 
  export default gitgubInfoLoader;
// const getImagePromise =()=>{
//     const promesa = new Promise((resolve,reject)=>{
//         resolve('http://kajshdkasjdh.com')
//     })
//     return promesa;
// }
// getImagePromise().then(console.log)

const getImage = async() =>{

    try {
        
        const apiKey = 'sKlQsMNoNxRV3ZmTWQpQkITUpCEV040Q';
        const peticion = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);    
        const {data} = await peticion.json();
        const {url} = await data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
        console.log(url)
    } catch (error) {
        console.error(error)
    }
}

getImage()
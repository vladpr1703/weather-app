export async function getWallaper(){
    let response = await fetch('https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&query=nature&client_id=-MEcVl8njG5s_ojPfj1zLaiVb461L_KVrDtaW-DCPto');
    let data = await response.json();
    document.body.style.background = `url(${data.urls.regular})`
    document.body.style.backgroundSize = 'cover';
}
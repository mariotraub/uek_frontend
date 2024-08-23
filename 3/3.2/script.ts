const add = document.getElementById("add")!!;
const remove = document.getElementById("remove")!!;
const imgContainer = document.getElementsByClassName("img-container")[0]!!;

add.onclick = () => {
    const imgs: HTMLImageElement[] = [];
    for (let i = 0; i < 3; i++) {
        const img = document.createElement("img");
        img.src = `https://loremflickr.com/480/480/cd,album,cover?random=${Math.trunc(Math.random() * 1000)}`;
        imgs.push(img);
    }
    imgContainer.append(...imgs);
}

remove.onclick = () => {
    const imgs = [].slice.call(imgContainer.querySelectorAll("img"));
    imgs.slice(0, 3)
        .forEach((img: HTMLImageElement) => img.remove());
}
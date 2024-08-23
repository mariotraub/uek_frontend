function isInViewport(element: HTMLDivElement) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

const trackedElements = document.querySelectorAll(".tracked") as NodeListOf<HTMLDivElement>;
const checkTracked = () => {
    trackedElements.forEach((element) => {
        if (isInViewport(element)) {
            element.classList.add("visible");
        } else {
            element.classList.remove("visible");
        }
    });
}
checkTracked();
document.addEventListener("scroll", checkTracked);
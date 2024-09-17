function scrappingIcons(className) {
    const elements = document.querySelectorAll(.${className});

    elements.forEach((element, index) => {
        console.log(Elemento ${index + 1}:, element.textContent.trim());
    });
}

scrappingIcons('icon-tab-label');





const elements = document.querySelectorAll('.sc-ce9b75fd-0.lmZfRs');

elements.forEach((element, index) => {
    console.log(`Elemento ${index + 1}:`, element.textContent.trim());
});





function ChangeStyle(className, bgColor, padding, borderRadius) {
    const elements = document.querySelectorAll(`.${className}`);

    elements.forEach((element, index) => {
        element.style.backgroundColor = bgColor;
        element.style.padding = padding;
        element.style.borderRadius = borderRadius;

    });
}

ChangeStyle('icon-tab-label', 'blue', '15px', '5px');

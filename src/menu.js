export default function menuContent (){
    const contentDiv = document.getElementById('content');

    // Menu Item 1
    const harmonyOfTheSea = document.createElement('h3');
    harmonyOfTheSea.textContent = 'Harmony of the Sea';
    contentDiv.appendChild(harmonyOfTheSea);
    const harmonyOfTheSeaPrice = document.createElement('h4');
    harmonyOfTheSeaPrice.textContent = '$25';
    contentDiv.appendChild(harmonyOfTheSeaPrice);
    const harmonyOfTheSeaAbout = document.createElement('p');
    harmonyOfTheSeaAbout.textContent = 'Succulent shrimp, tender calamari, and delicate fish fillets seasoned with aromatic herbs and spices, then grilled to perfection. Served alongside a melody of roasted vegetables and drizzled with a zesty citrus-infused sauce.';
    contentDiv.appendChild(harmonyOfTheSeaAbout);

    //Menu Item 2
    const saffronSunsetRisotto = document.createElement('h3');
    saffronSunsetRisotto.textContent = 'Saffron Sunset Risotto';
    contentDiv.appendChild(saffronSunsetRisotto);
    const saffronSunsetRisottoPrice = document.createElement('h4');
    saffronSunsetRisottoPrice.textContent = '$18';
    contentDiv.appendChild(saffronSunsetRisottoPrice);
    const saffronSunsetRisottoAbout = document.createElement('p');
    saffronSunsetRisottoAbout.textContent = 'Creamy Arborio rice infused with golden hues of saffron, topped with plump grilled chicken breast, roasted cherry tomatoes, and a sprinkling of Parmesan cheese.';
    contentDiv.appendChild(saffronSunsetRisottoAbout);

    //Menu Item 3
    const symphonyBaklavaTower = document.createElement('h3');
    symphonyBaklavaTower.textContent = 'Symphony Baklava Tower';
    contentDiv.appendChild(symphonyBaklavaTower);
    const symphonyBaklavaTowerPrice = document.createElement('h4');
    symphonyBaklavaTowerPrice.textContent = '$15';
    contentDiv.appendChild(symphonyBaklavaTowerPrice);
    const symphonyBaklavaTowerAbout = document.createElement('p');
    symphonyBaklavaTowerAbout.textContent = 'Layers of flaky phyllo pastry delicately brushed with butter and layered with a symphony of crushed nuts, aromatic spices, and sweet honey syrup.';
    contentDiv.appendChild(symphonyBaklavaTowerAbout);

}
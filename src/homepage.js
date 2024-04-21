export default function homepageContent() {
   const contentDiv = document.getElementById('content');

    const title = document.createElement('h1');
    title.textContent = 'Saffron Symphony';
    contentDiv.appendChild(title);

    const titleImg = document.createElement('img');
    titleImg.setAttribute("src", "https://www.foodrepublic.com/img/gallery/most-of-the-worlds-saffron-comes-from-one-country-and-its-not-india/intro-1697654855.jpg");
    contentDiv.appendChild(titleImg);

    const aboutBlurb = document.createElement('p');
    aboutBlurb.textContent = "Welcome to Saffron Symphony, where culinary artistry meets melodious indulgence. From the enchanting aroma of saffron-infused dishes to the symphony of tastes dancing on your palate, every bite tells a tale of passion and precision. Join us for an unforgettable culinary symphony that celebrates the essence of Mediterranean cuisine fused with the magic of music."
    contentDiv.appendChild(aboutBlurb);

}



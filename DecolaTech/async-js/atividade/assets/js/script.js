const BASE_URL = "https://thatcopy.pw/catapi/rest/";

const getCat = async () => {
  try {
    const data = await fetch(BASE_URL)
    const jsonData = data.json();

    return jsonData.webpurl;
  } catch(err) {
    console.log(`Error: ${err}`);
  };
};

const loadImg = async () => {
  let img = document.getElementsByTagName("img")[0];
  let src = await getCat();
  img.setAttribute("src", src);

  console.log(img, img.src);
};

loadImg();

const button = document.getElementById("changeCat");
button.addEventListener("click", loadImg);
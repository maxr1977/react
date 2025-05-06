import '../styles/App.css'
import React, { useState } from "react";
import CityCard from "./CityCard";
import CitySelector from "./CitySelector";
import MathQuiz from './MathQuiz';


const citiesData = [
  {
    name: "Токио",

    description:
      "Столица Японии, известная своими неоновыми огнями, многолюдностью и современной архитектурой.",

    imageUrl:
      "https://www.topmagazine.cz/wp-content/uploads/2021/06/tokio-1024x576.jpg",

    facts: [
      "Токио - самый населенный мегаполис в мире.",

      "Здесь расположена самая высокая башня в Японии - Токийская башня.",

      "В Токио проходят множество культурных событий и фестивалей.",
    ],
  },

  {
    name: "Киото",

    description:
      "Город на острове Хонсю, известный своими многочисленными классическими буддийскими храмами, а также садами, императорскими дворцами, синтоистскими святилищами и традиционными деревянными домами.",

    imageUrl:
      "https://media-cdn.tripadvisor.com/media/photo-s/1c/ef/40/e9/kyoto-is-the-capital.jpg",

    facts: [
      "В Киото насчитывается более 1600 буддийских храмов.",

      "Этот город был столицей Японии более тысячи лет.",
    ],
  },

  {
    name: "Осака",

    description:
      "Город в центральной части острова Хонсю, известен своими современными достопримечательностями и активной ночной жизнью.",

    imageUrl: "https://abt.ua/uploads/images/city/osaka1.jpg",

    facts: [
      "Осака известна своим замком, который играл ключевую роль в объединении Японии в XVI веке.",

      "Город является кулинарной столицей Японии.",
    ],
  },

  {
    name: "Хоккайдо",

    description:
      "Самый северный остров Японии, известный своей природой, снежными фестивалями и уникальной культурой.",

    imageUrl:
      "https://jpnews.ru/wp-content/uploads/2022/01/ostrov-khokkaydo_191.jpg",

    facts: [
      "Хоккайдо предлагает отличные условия для зимних видов спорта, особенно для лыжного спорта и сноубординга.",

      "Летом остров привлекает туристов своими цветущими лавандовыми полями.",
    ],
  },

  {
    name: "Нагоя",

    description:
      "Город в центре Хонсю, известен своим отраслевым влиянием и историческими достопримечательностями.",

    imageUrl:
      "https://www.jalan.net/jalan/images/pict3L/Y1/Y329551/Y329551055.jpg",

    facts: [
      "Нагоя - один из важнейших промышленных городов Японии, центр автомобилестроения.",

      "Здесь находится известный Нагойский замок с позолоченными делфинами на крыше.",
    ],
  },
];

function App() {
  const [selectedCity, setSelectedCity] = useState(null);
  return (
    <div className="App">
      <div className="city-cards">
        <CitySelector
          cities={citiesData}
          onCitySelect={(cityName) =>
            setSelectedCity(citiesData.find((city) => city.name === cityName))
          }
        />
        <CityCard city={selectedCity} />
      </div>
      <div className="math-quiz">
        <MathQuiz />
      </div>
    </div>
  );
}

export default App;

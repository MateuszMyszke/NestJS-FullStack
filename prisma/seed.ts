import { PrismaClient } from '@prisma/client';
const db = new PrismaClient();

function getProduct(){
  return [
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17201',
      name: 'Assassins Creed Origins',
      category: 'RPG',
      information: 'Kolejna odsłona bestsellerowego cyklu, stanowiąca niejako nowe otwarcie dla serii. Dzieło firmy Ubisoft przenosi graczy do starożytnego Egiptu, gdzie swoje początki miało bractwo tytułowych Asasynów.',
      price: 259,
      image: 'ass.jpg',
      publisherId: 'pu105551-0f0d-4a9f-bc41-c559c8a17202',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17202',
      name: 'Dragon Age: Inkwizycja',
      category: 'RPG',
      information: 'Dragon Age: Inquisition jest trzecią częścią cyklu cRPG, zapoczątkowanego w 2009 roku grą Dragon Age: Origins. Dewelopingu tytułu kolejny raz podjęło się studio BioWare we współpracy z koncernem Electronic Arts.',
      price: 199,
      image: 'dragon.jpg',
      publisherId: 'pu105551-0f0d-4a9f-bc41-c559c8a17206',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17203',
      name: 'Far Cry 6',
      category: 'FPS',
      information: 'W Far Cry 6 trafiamy do tropikalnej Yary, a naszym głównym zadaniem jest odsunięcie od władzy krwawego dyktatora  Antona Castillo. Największą nowością w grze jest olbrzymia metropolia, czyli stolica Yary  Esperanza.',
      price: 219,
      image: 'far.jpg',
      publisherId: 'pu105551-0f0d-4a9f-bc41-c559c8a17202',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17204',
      name: 'FIFA 22',
      category: 'Sports',
      information: 'IFA 22 to kolejna odsłona corocznego cyklu gier piłkarskich autorstwa studia EA Sports. W grze ponownie bierzemy udział w meczach i turniejach piłki nożnej, próbując zajść na szczyt. Tytuł zawiera autentyczne drużyny, ligi i zawodników.',
      price: 119,
      image: 'fifa.jpg',
      publisherId: 'pu105551-0f0d-4a9f-bc41-c559c8a17206',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17205',
      name: 'Final Fantasy XIV Online',
      category: 'MMOROG',
      information: 'Czternasta odsłona legendarnej serii jRPG, zrealizowana w formie gry MMO. W Final Fantasy XIV Online wcielamy się w bohaterów ruszających na ratunek krainie Eorzea, która podnosi się z kolan po spustoszeniu wywołanym przez demona Bahamuta.',
      price: 69,
      image: 'final.jpg',
      publisherId: 'pu105551-0f0d-4a9f-bc41-c559c8a17205',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17206',
      name: 'God of War: Ragnarok',
      category: 'RPG',
      information: 'Przygodowa gra akcji TPP, będąca piątą częścią serii God of War. W God of War Ragnarok ponownie wcielamy się w Kratosa, który wraz z synem Atreusem przemierza wszystkie dziewięć światów, starając się uniknąć udziału w tytułowym konflikcie nordyckich bogów i olbrzymów.',
      price: 319,
      image: 'god.jpg',
      publisherId: 'pu105551-0f0d-4a9f-bc41-c559c8a17204',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17207',
      name: 'Grand Theft Auto V',
      category: 'GTA 5 to piąta pełnoprawna odsłona niezwykle popularnej serii gier akcji, nad której rozwojem pieczę sprawuje studio Rockstar North we współpracy z koncernem Take Two Interactive. Miejscem akcji Grand Theft Auto V jest fikcyjne miasto Los Santos wzorowane na Los Angeles.',
      information: 'FPS',
      price: 99,
      image: 'gta.jpg',
      publisherId: 'pu105551-0f0d-4a9f-bc41-c559c8a17203',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17208',
      name: 'Might & Magic: Heroes VII',
      category: 'RTS',
      information: 'Siódma odsłona jednej z najpopularniejszych turowych strategii fantasy, zapoczątkowanej w 1995 roku. Za powstanie gry odpowiada niemieckie studio Limbic Entertainment, które ma na swoim koncie dodatki do poprzedniej części serii oraz RPG-owy Might & Magic X: Legacy.',
      price: 79,
      image: 'hero.jpg',
      publisherId: 'pu105551-0f0d-4a9f-bc41-c559c8a17202',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17209',
      name: 'Naruto Shippuden: Ultimate Ninja Storm 4',
      category: 'Platformer',
      information: 'Czwarta pełnoprawna część popularnej serii bijatyk, osadzonej w uniwersum mangi oraz anime Naruto i rozwijanej od 2008 roku pod skrzydłami koncernu Namco Bandai Games.',
      price: 129,
      image: 'naruto.jpg',
      publisherId: 'pu105551-0f0d-4a9f-bc41-c559c8a17201',
    }
  ]
}

  function getImages() {
    return [
      {
        image: 'ass.jpg',
        productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17201'
      },
      {
        image: 'dragon.jpg',
        productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17202'
      },
      {
        image: 'far.jpg',
        productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17203'
      },
      {
        image: 'fifa.jpg',
        productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17204'
      },
      {
        image: 'final.jpg',
        productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17205'
      },
      {
        image: 'god.jpg',
        productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17206'
      },
      {
        image: 'gta.jpg',
        productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17207'
      },
      {
        image: 'hero.jpg',
        productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17208'
      },
      {
        image: 'naruto.jpg',
        productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17209'
      },
    ]
}

function getPublisher() {
  return [
    {
      id: 'pu105551-0f0d-4a9f-bc41-c559c8a17201',
      name: 'Bandai Namco Entertainment' 
    },
    {
      id: 'pu105551-0f0d-4a9f-bc41-c559c8a17202',
      name: 'Ubisoft' 
    },
    {
      id: 'pu105551-0f0d-4a9f-bc41-c559c8a17203',
      name: 'Rockstar Games' 
    },
    {
      id: 'pu105551-0f0d-4a9f-bc41-c559c8a17204',
      name: 'Sony Interactive Entertainment' 
    },
    {
      id: 'pu105551-0f0d-4a9f-bc41-c559c8a17205',
      name: 'Square Enix' 
    },
    {
      id: 'pu105551-0f0d-4a9f-bc41-c559c8a17206',
      name: 'Electronic Arts Inc.' 
    },
  ]
}

async function seed_products() {
  await Promise.all(
    getProduct().map((product) => {
      return db.product.create({ data: product });
    }),
  );
}

async function seed_images() {
  await Promise.all(
    getImages().map((image) => {
      return db.images.create({ data: image });
    }),
  );
}

async function seed_publisher() {
  await Promise.all(
    getPublisher().map((publisher) => {
      return db.publisher.create({ data: publisher });
    }),
  );
}

seed_publisher();
seed_images();
seed_products();


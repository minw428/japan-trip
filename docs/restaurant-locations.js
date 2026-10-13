// Static restaurant coordinates from each linked Tabelog branch's public JSON-LD.
// No live geocoding and no visitor location is sent to a server.
const restaurantLocations={
  "kasagi": {
    "latitude": 34.99814474788058,
    "longitude": 135.78082425027844,
    "name": "Kasagiya",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "Masuyacho Higashiyama-ku Kyoto Kyoto",
      "addressRegion": "Kyoto",
      "postalCode": "6050826",
      "addressCountry": "JP"
    },
    "source": "https://tabelog.com/en/kyoto/A2601/A260301/26000596/",
    "checked": "2026-10-13"
  },
  "kagizen": {
    "latitude": 35.00397854787494,
    "longitude": 135.7747523903416,
    "name": "Kagizen Yoshifusa Shijou honten",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "Gionmachi Kitagawa Higashiyama-ku Kyoto Kyoto",
      "addressRegion": "Kyoto",
      "postalCode": "6050073",
      "addressCountry": "JP"
    },
    "source": "https://tabelog.com/en/kyoto/A2601/A260301/26001887/",
    "checked": "2026-10-13"
  },
  "shinpachi": {
    "latitude": 35.01383140783786,
    "longitude": 135.67799060050893,
    "name": "Shinpachi Chaya",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "Sagatenryuji Tsukurimichicho Ukyo-ku Kyoto Kyoto",
      "addressRegion": "Kyoto",
      "postalCode": "6168384",
      "addressCountry": "JP"
    },
    "source": "https://tabelog.com/en/kyoto/A2601/A260403/26001309/",
    "checked": "2026-10-13"
  },
  "arabica": {
    "latitude": 35.013550317837556,
    "longitude": 135.6764443905072,
    "name": "Arabica Kyoto Arashiyama",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "Sagatenryuji Susukinobabacho Ukyo-ku Kyoto Kyoto",
      "addressRegion": "Kyoto",
      "postalCode": "6168385",
      "addressCountry": "JP"
    },
    "source": "https://tabelog.com/en/kyoto/A2601/A260403/26025913/",
    "checked": "2026-10-13"
  },
  "inarifutaba": {
    "latitude": 34.96844080789628,
    "longitude": 135.77088995998534,
    "name": "Inari Futaba",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "Fushimi-ku Kyoto Kyoto",
      "addressRegion": "Kyoto",
      "postalCode": "6120000",
      "addressCountry": "JP"
    },
    "source": "https://tabelog.com/en/kyoto/A2601/A260601/26007559/",
    "checked": "2026-10-13"
  },
  "suzuki": {
    "latitude": 35.6825658887157,
    "longitude": 139.76809795439675,
    "name": "Tonkatsu Suzuki",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "Marunouchi Chiyoda Tokyo",
      "addressRegion": "Tokyo",
      "postalCode": "1000005",
      "addressCountry": "JP"
    },
    "source": "https://tabelog.com/en/tokyo/A1302/A130201/13155684/",
    "checked": "2026-10-13"
  },
  "rokurin": {
    "latitude": 35.68006005871722,
    "longitude": 139.76785499437162,
    "name": "Rokurinsha Toukyou eki toukyou raamen sutorii to",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "Marunouchi Chiyoda Tokyo",
      "addressRegion": "Tokyo",
      "postalCode": "1000005",
      "addressCountry": "JP"
    },
    "source": "https://tabelog.com/en/tokyo/A1302/A130201/13093047/",
    "checked": "2026-10-13"
  },
  "ikaruga": {
    "latitude": 35.68047435871699,
    "longitude": 139.7679831743757,
    "name": "Tokyo Eki Ikaruga",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "Marunouchi Chiyoda Tokyo",
      "addressRegion": "Tokyo",
      "postalCode": "1000005",
      "addressCountry": "JP"
    },
    "source": "https://tabelog.com/en/tokyo/A1302/A130201/13124609/",
    "checked": "2026-10-13"
  },
  "kaneko": {
    "latitude": 35.68538643791082,
    "longitude": 139.77527538325842,
    "name": "Nihonbashi Ten-don Kaneko Hannosuke Honten",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "Nihonbashimuromachi Chuo Tokyo",
      "addressRegion": "Tokyo",
      "postalCode": "1030022",
      "addressCountry": "JP"
    },
    "source": "https://tabelog.com/en/tokyo/A1302/A130202/13118694/",
    "checked": "2026-10-13"
  },
  "tsujihan": {
    "latitude": 35.68072574871798,
    "longitude": 139.77158657437573,
    "name": "Nihonbashi Kaisen-don Tsujihan Nihonbashi hon ten",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "Nihonbashi Chuo Tokyo",
      "addressRegion": "Tokyo",
      "postalCode": "1030027",
      "addressCountry": "JP"
    },
    "source": "https://tabelog.com/en/tokyo/A1302/A130202/13146590/",
    "checked": "2026-10-13"
  },
  "bairin": {
    "latitude": 35.66957723791685,
    "longitude": 139.76268108310757,
    "name": "Ginza Bairin Honten",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "Ginza Chuo Tokyo",
      "addressRegion": "Tokyo",
      "postalCode": "1040061",
      "addressCountry": "JP"
    },
    "source": "https://tabelog.com/en/tokyo/A1301/A130101/13261638/",
    "checked": "2026-10-13"
  },
  "bincho": {
    "latitude": 35.674374508720035,
    "longitude": 139.76536325431593,
    "name": "Hitsumabushi Nagoya Bincho Maroniegeeto ginza 1 ten",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "Ginza Chuo Tokyo",
      "addressRegion": "Tokyo",
      "postalCode": "1040061",
      "addressCountry": "JP"
    },
    "source": "https://tabelog.com/en/tokyo/A1301/A130101/13042857/",
    "checked": "2026-10-13"
  },
  "bazoku": {
    "latitude": 35.70947212330401,
    "longitude": 139.79458372331075,
    "name": "Bazoku Asakusa ten",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "Kaminarimon Taito Tokyo",
      "addressRegion": "Tokyo",
      "postalCode": "1110034",
      "addressCountry": "JP"
    },
    "source": "https://tabelog.com/en/tokyo/A1311/A131102/13003665/",
    "checked": "2026-10-13"
  },
  "ginzatei": {
    "latitude": 35.668051598723316,
    "longitude": 139.7630522242537,
    "name": "Chuka Ginza Tei",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "Ginza Chuo Tokyo",
      "addressRegion": "Tokyo",
      "postalCode": "1040061",
      "addressCountry": "JP"
    },
    "source": "https://tabelog.com/en/tokyo/A1301/A130101/13054334/",
    "checked": "2026-10-13"
  },
  "kyubey": {
    "latitude": 35.668476568722475,
    "longitude": 139.76127915425923,
    "name": "Ginza Kyubee Ginza honten",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "Ginza Chuo Tokyo",
      "addressRegion": "Tokyo",
      "postalCode": "1040061",
      "addressCountry": "JP"
    },
    "source": "https://tabelog.com/en/tokyo/A1301/A130103/13002611/",
    "checked": "2026-10-13"
  },
  "hikiniku": {
    "latitude": 35.659319158708,
    "longitude": 139.69756198421138,
    "name": "Hikiniku to Kome Shibuya",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "Dogenzaka Shibuya Tokyo",
      "addressRegion": "Tokyo",
      "postalCode": "1500043",
      "addressCountry": "JP"
    },
    "source": "https://tabelog.com/en/tokyo/A1303/A130301/13257261/",
    "checked": "2026-10-13"
  },
  "moheji": {
    "latitude": 35.658326858710126,
    "longitude": 139.70224130419808,
    "name": "MOHEJI Shibuya sukuranburu sukuea",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "Shibuya Shibuya Tokyo",
      "addressRegion": "Tokyo",
      "postalCode": "1500002",
      "addressCountry": "JP"
    },
    "source": "https://tabelog.com/en/tokyo/A1303/A130301/13241004/",
    "checked": "2026-10-13"
  },
  "toritake": {
    "latitude": 35.65804006870927,
    "longitude": 139.6989832241975,
    "name": "Tori Take Souhonten",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "Dogenzaka Shibuya Tokyo",
      "addressRegion": "Tokyo",
      "postalCode": "1500043",
      "addressCountry": "JP"
    },
    "source": "https://tabelog.com/en/tokyo/A1303/A130301/13001702/",
    "checked": "2026-10-13"
  },
  "sama": {
    "latitude": 35.67021956870392,
    "longitude": 139.70647358431523,
    "name": "SAMA Meiji jingumae ten",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "Jingumae Shibuya Tokyo",
      "addressRegion": "Tokyo",
      "postalCode": "1500001",
      "addressCountry": "JP"
    },
    "source": "https://tabelog.com/en/tokyo/A1306/A130601/13225112/",
    "checked": "2026-10-13"
  },
  "misaki": {
    "latitude": 35.684972738719175,
    "longitude": 139.78378768441007,
    "name": "Edomae Sushi Misaki Souhonten",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "Nihonbashiningyocho Chuo Tokyo",
      "addressRegion": "Tokyo",
      "postalCode": "1030013",
      "addressCountry": "JP"
    },
    "source": "https://tabelog.com/en/tokyo/A1302/A130204/13301870/",
    "checked": "2026-10-13"
  },
  "katsukami2": {
    "latitude": 35.67003169872196,
    "longitude": 139.76272674427392,
    "name": "Ginza Katsukami Ni",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "Ginza Chuo Tokyo",
      "addressRegion": "Tokyo",
      "postalCode": "1040061",
      "addressCountry": "JP"
    },
    "source": "https://tabelog.com/en/tokyo/A1301/A130101/13296366/",
    "checked": "2026-10-13"
  },
  "newtorigin": {
    "latitude": 35.67119789568972,
    "longitude": 139.7634586260221,
    "name": "New Torigin",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "Ginza Chuo Tokyo",
      "addressRegion": "Tokyo",
      "postalCode": "1040061",
      "addressCountry": "JP"
    },
    "source": "https://tabelog.com/en/tokyo/A1301/A130101/13031483/",
    "checked": "2026-10-13"
  },
  "poppy": {
    "latitude": 35.70479118871125,
    "longitude": 139.7984363046,
    "name": "Cafe&amp;Bar popi",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "Honjo Sumida Tokyo",
      "addressRegion": "Tokyo",
      "postalCode": "1300004",
      "addressCountry": "JP"
    },
    "source": "https://tabelog.com/en/tokyo/A1311/A131103/13301350/",
    "checked": "2026-10-13"
  },
  "hanamaru": {
    "latitude": 35.67936899338851,
    "longitude": 139.765018120294,
    "name": "Nemuro Hanamaru KITTE marunouchi ten",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "Marunouchi Chiyoda Tokyo",
      "addressRegion": "Tokyo",
      "postalCode": "1000005",
      "addressCountry": "JP"
    },
    "source": "https://tabelog.com/en/tokyo/A1302/A130201/13153777/",
    "checked": "2026-10-13"
  },
  "imahan": {
    "latitude": 35.71394379870346,
    "longitude": 139.7922371646968,
    "name": "Asakusa Imahan Kokusai dori honten",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "Nishiasakusa Taito Tokyo",
      "addressRegion": "Tokyo",
      "postalCode": "1110035",
      "addressCountry": "JP"
    },
    "source": "https://tabelog.com/en/tokyo/A1311/A131102/13003649/",
    "checked": "2026-10-13"
  },
  "grill": {
    "latitude": 35.716996208703215,
    "longitude": 139.7975601647239,
    "name": "grill GRAND",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "Asakusa Taito Tokyo",
      "addressRegion": "Tokyo",
      "postalCode": "1110032",
      "addressCountry": "JP"
    },
    "source": "https://tabelog.com/en/tokyo/A1311/A131102/13008702/",
    "checked": "2026-10-13"
  },
  "kibun": {
    "latitude": 35.711597238705984,
    "longitude": 139.7954709046708,
    "name": "Kibun Zushi",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "Asakusa Taito Tokyo",
      "addressRegion": "Tokyo",
      "postalCode": "1110032",
      "addressCountry": "JP"
    },
    "source": "https://tabelog.com/en/tokyo/A1311/A131102/13016811/",
    "checked": "2026-10-13"
  },
  "urin": {
    "latitude": 35.71561603789915,
    "longitude": 139.7989284835472,
    "name": "Urinbo",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "Hanakawado Taito Tokyo",
      "addressRegion": "Tokyo",
      "postalCode": "1110033",
      "addressCountry": "JP"
    },
    "source": "https://tabelog.com/en/tokyo/A1311/A131102/13008579/",
    "checked": "2026-10-13"
  },
  "umikaze": {
    "latitude": 35.715344568702754,
    "longitude": 139.79281081471052,
    "name": "Kaidashi Raamen Umikaze Asakusa ten",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "Asakusa Taito Tokyo",
      "addressRegion": "Tokyo",
      "postalCode": "1110032",
      "addressCountry": "JP"
    },
    "source": "https://tabelog.com/en/tokyo/A1311/A131102/13257871/",
    "checked": "2026-10-13"
  },
  "tonkatsujp": {
    "latitude": 35.664433818708716,
    "longitude": 139.71000030425432,
    "name": "tonkatsu.jp Omotesando",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "Kitaaoyama Minato Tokyo",
      "addressRegion": "Tokyo",
      "postalCode": "1070061",
      "addressCountry": "JP"
    },
    "source": "https://tabelog.com/en/tokyo/A1306/A130602/13264557/",
    "checked": "2026-10-13"
  },
  "junchan": {
    "latitude": 35.66960307870729,
    "longitude": 139.71581472430248,
    "name": "Tonkatsu Junchan",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "Kitaaoyama Minato Tokyo",
      "addressRegion": "Tokyo",
      "postalCode": "1070061",
      "addressCountry": "JP"
    },
    "source": "https://tabelog.com/en/tokyo/A1306/A130603/13300422/",
    "checked": "2026-10-13"
  },
  "menchira": {
    "latitude": 35.666508038705835,
    "longitude": 139.7051008842787,
    "name": "Men Chirashi",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "Jingumae Shibuya Tokyo",
      "addressRegion": "Tokyo",
      "postalCode": "1500001",
      "addressCountry": "JP"
    },
    "source": "https://tabelog.com/en/tokyo/A1306/A130601/13225567/",
    "checked": "2026-10-13"
  },
  "burger": {
    "latitude": 35.66623054870589,
    "longitude": 139.7046958942762,
    "name": "THE GREAT BURGER",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "Jingumae Shibuya Tokyo",
      "addressRegion": "Tokyo",
      "postalCode": "1500001",
      "addressCountry": "JP"
    },
    "source": "https://tabelog.com/en/tokyo/A1306/A130601/13042654/",
    "checked": "2026-10-13"
  },
  "chao": {
    "latitude": 35.66746902870558,
    "longitude": 139.70620681428764,
    "name": "Chao! bamboo",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "Jingumae Shibuya Tokyo",
      "addressRegion": "Tokyo",
      "postalCode": "1500001",
      "addressCountry": "JP"
    },
    "source": "https://tabelog.com/en/tokyo/A1306/A130602/13009408/",
    "checked": "2026-10-13"
  },
  "kuroda": {
    "latitude": 35.65967623790161,
    "longitude": 139.69505028305497,
    "name": "Yakiniku Kuroda",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "Maruyamacho Shibuya Tokyo",
      "addressRegion": "Tokyo",
      "postalCode": "1500044",
      "addressCountry": "JP"
    },
    "source": "https://tabelog.com/en/tokyo/A1303/A130301/13235527/",
    "checked": "2026-10-13"
  },
  "kanekobbq": {
    "latitude": 35.649719558714565,
    "longitude": 139.6990217641134,
    "name": "Daikanyama Yakiniku Kaneko",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "Sarugakucho Shibuya Tokyo",
      "addressRegion": "Tokyo",
      "postalCode": "1500033",
      "addressCountry": "JP"
    },
    "source": "https://tabelog.com/en/tokyo/A1303/A130303/13178613/",
    "checked": "2026-10-13"
  },
  "ino": {
    "latitude": 35.00132362648616,
    "longitude": 135.76695110001438,
    "name": "Menya Inoichi",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "Ebisunocho Shimogyo-ku Kyoto Kyoto",
      "addressRegion": "Kyoto",
      "postalCode": "6008033",
      "addressCountry": "JP"
    },
    "source": "https://tabelog.com/en/kyoto/A2601/A260201/26032368/",
    "checked": "2026-10-13"
  },
  "omen": {
    "latitude": 35.00393841505734,
    "longitude": 135.77085843289893,
    "name": "Omen NIPPON Shijou pontochou ten",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "-",
      "addressRegion": "Kyoto",
      "postalCode": "6048014",
      "addressCountry": "JP"
    },
    "source": "https://tabelog.com/en/kyoto/A2601/A260201/26001805/",
    "checked": "2026-10-13"
  },
  "hafuu": {
    "latitude": 35.01542136786476,
    "longitude": 135.7656179204636,
    "name": "Hafuu Honten",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "-",
      "addressRegion": "Kyoto",
      "postalCode": "6040983",
      "addressCountry": "JP"
    },
    "source": "https://tabelog.com/en/kyoto/A2601/A260202/26000943",
    "checked": "2026-10-13"
  },
  "roku": {
    "latitude": 34.9989499578783,
    "longitude": 135.7752897702904,
    "name": "Gion Karoku",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "-",
      "addressRegion": "Kyoto",
      "postalCode": "6050811",
      "addressCountry": "JP"
    },
    "source": "https://tabelog.com/en/kyoto/A2601/A260301/26002425/",
    "checked": "2026-10-13"
  },
  "yoshimura": {
    "latitude": 35.01365511783775,
    "longitude": 135.6772733905077,
    "name": "Arashiyama Yoshimura",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "Sagatenryuji Susukinobabacho Ukyo-ku Kyoto Kyoto",
      "addressRegion": "Kyoto",
      "postalCode": "6168385",
      "addressCountry": "JP"
    },
    "source": "https://tabelog.com/en/kyoto/A2601/A260403/26000403/",
    "checked": "2026-10-13"
  },
  "hirokawa": {
    "latitude": 35.016968007835644,
    "longitude": 135.67725101054117,
    "name": "Unagiya Hirokawa",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "Sagatenryuji Kitatsukurimichicho Ukyo-ku Kyoto Kyoto",
      "addressRegion": "Kyoto",
      "postalCode": "6168374",
      "addressCountry": "JP"
    },
    "source": "https://tabelog.com/en/kyoto/A2601/A260403/26000921/",
    "checked": "2026-10-13"
  },
  "shoraian": {
    "latitude": 35.01445574783497,
    "longitude": 135.67014083052075,
    "name": "Shorai An",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "Sagakamenoocho Ukyo-ku Kyoto Kyoto",
      "addressRegion": "Kyoto",
      "postalCode": "6168386",
      "addressCountry": "JP"
    },
    "source": "https://tabelog.com/en/kyoto/A2601/A260403/26003826/",
    "checked": "2026-10-13"
  },
  "saganoyu": {
    "latitude": 35.01705032783691,
    "longitude": 135.68139995053906,
    "name": "Sagano Yu",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "Sagatenryuji Imahoricho Ukyo-ku Kyoto Kyoto",
      "addressRegion": "Kyoto",
      "postalCode": "6168366",
      "addressCountry": "JP"
    },
    "source": "https://tabelog.com/en/kyoto/A2601/A260403/26005250/",
    "checked": "2026-10-13"
  },
  "yamamoto": {
    "latitude": 35.00667220787407,
    "longitude": 135.77740803036696,
    "name": "Yamamoto Kissa",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "-",
      "addressRegion": "Kyoto",
      "postalCode": "6050066",
      "addressCountry": "JP"
    },
    "source": "https://tabelog.com/en/kyoto/A2601/A260201/26018288/",
    "checked": "2026-10-13"
  },
  "smart": {
    "latitude": 35.00946175786901,
    "longitude": 135.76709057040236,
    "name": "Smart Coffee",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "-",
      "addressRegion": "Kyoto",
      "postalCode": "6048081",
      "addressCountry": "JP"
    },
    "source": "https://tabelog.com/en/kyoto/A2601/A260201/26000647/",
    "checked": "2026-10-13"
  },
  "inoda": {
    "latitude": 35.00811258786864,
    "longitude": 135.76320225039146,
    "name": "INODA COFFEE Honten",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "-",
      "addressRegion": "Kyoto",
      "postalCode": "6048118",
      "addressCountry": "JP"
    },
    "source": "https://tabelog.com/en/kyoto/A2601/A260202/26000412/",
    "checked": "2026-10-13"
  },
  "petit": {
    "latitude": 35.01129864786465,
    "longitude": 135.75706025042797,
    "name": "Le Petitmec Oike ten",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "Nakagyo-ku Kyoto Kyoto",
      "addressRegion": "Kyoto",
      "postalCode": "6040000",
      "addressCountry": "JP"
    },
    "source": "https://tabelog.com/en/kyoto/A2601/A260202/26005029/",
    "checked": "2026-10-13"
  },
  "walden": {
    "latitude": 34.993355077878,
    "longitude": 135.76317044024242,
    "name": "Walden Woods Kyoto",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "Sakaecho Shimogyo-ku Kyoto Kyoto",
      "addressRegion": "Kyoto",
      "postalCode": "6008194",
      "addressCountry": "JP"
    },
    "source": "https://tabelog.com/en/kyoto/A2601/A260101/26030010/",
    "checked": "2026-10-13"
  },
  "ajinoya": {
    "latitude": 34.6680732780011,
    "longitude": 135.50098462714055,
    "name": "Ajinoya Honten",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "Nanba Chuo-ku Osaka Osaka",
      "addressRegion": "Osaka",
      "postalCode": "5420076",
      "addressCountry": "JP"
    },
    "source": "https://tabelog.com/en/osaka/A2702/A270202/27001439/",
    "checked": "2026-10-13"
  },
  "mizuno": {
    "latitude": 34.66836287800162,
    "longitude": 135.5032303471419,
    "name": "Mizuno",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "Dotonbori Chuo-ku Osaka Osaka",
      "addressRegion": "Osaka",
      "postalCode": "5420077",
      "addressCountry": "JP"
    },
    "source": "https://tabelog.com/en/osaka/A2701/A270202/27001278/",
    "checked": "2026-10-13"
  },
  "fukutaro": {
    "latitude": 34.66560043800379,
    "longitude": 135.5045467171131,
    "name": "Fukutarou Honten",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "Sennichimae Chuo-ku Osaka Osaka",
      "addressRegion": "Osaka",
      "postalCode": "5420074",
      "addressCountry": "JP"
    },
    "source": "https://tabelog.com/en/osaka/A2701/A270202/27002665/",
    "checked": "2026-10-13"
  },
  "ippo": {
    "latitude": 34.66239360800557,
    "longitude": 135.50373308708126,
    "name": "Ippotei Honten",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "Nanbanaka Naniwa-ku Osaka Osaka",
      "addressRegion": "Osaka",
      "postalCode": "5560011",
      "addressCountry": "JP"
    },
    "source": "https://tabelog.com/en/osaka/A2701/A270202/27001213/",
    "checked": "2026-10-13"
  },
  "joroku": {
    "latitude": 34.66368004800512,
    "longitude": 135.50486925709345,
    "name": "Menya Joroku Nanba ten",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "Nanbasennichimae Chuo-ku Osaka Osaka",
      "addressRegion": "Osaka",
      "postalCode": "5420075",
      "addressCountry": "JP"
    },
    "source": "https://tabelog.com/en/osaka/A2701/A270202/27084754/",
    "checked": "2026-10-13"
  },
  "imai": {
    "latitude": 34.66864193800129,
    "longitude": 135.50272211714508,
    "name": "Dotonbori Imai Honten",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "Dotonbori Chuo-ku Osaka Osaka",
      "addressRegion": "Osaka",
      "postalCode": "5420077",
      "addressCountry": "JP"
    },
    "source": "https://tabelog.com/en/osaka/A2702/A270202/27001289/",
    "checked": "2026-10-13"
  },
  "daruma": {
    "latitude": 34.667823838001645,
    "longitude": 135.50223006713716,
    "name": "Kushikatsu Daruma - Namba Main Shop",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "Nanba Chuo-ku Osaka Osaka",
      "addressRegion": "Osaka",
      "postalCode": "5420076",
      "addressCountry": "JP"
    },
    "source": "https://tabelog.com/en/osaka/A2701/A270202/27012813/",
    "checked": "2026-10-13"
  },
  "hide": {
    "latitude": 34.66391654800469,
    "longitude": 135.50400213709645,
    "name": "Sushi Hidezou",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "Nanbasennichimae Chuo-ku Osaka Osaka",
      "addressRegion": "Osaka",
      "postalCode": "5420075",
      "addressCountry": "JP"
    },
    "source": "https://tabelog.com/en/osaka/A2701/A270202/27094403/",
    "checked": "2026-10-13"
  },
  "kuchibashi": {
    "latitude": 35.00218273787241,
    "longitude": 135.76322228033158,
    "name": "Kuchibashi Modern",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "Nagaharacho Shimogyo-ku Kyoto Kyoto",
      "addressRegion": "Kyoto",
      "postalCode": "6008073",
      "addressCountry": "JP"
    },
    "source": "https://tabelog.com/en/kyoto/A2601/A260201/26022582/",
    "checked": "2026-10-13"
  },
  "kyounawa": {
    "latitude": 35.00429231787118,
    "longitude": 135.76356652035264,
    "name": "Kyo Unawa Honten",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "Yaoyacho (Rokkakudori) Nakagyo-ku Kyoto Kyoto",
      "addressRegion": "Kyoto",
      "postalCode": "6048072",
      "addressCountry": "JP"
    },
    "source": "https://tabelog.com/en/kyoto/A2601/A260201/26034563/",
    "checked": "2026-10-13"
  },
  "kiraku": {
    "latitude": 35.00717085465242,
    "longitude": 135.77129130367723,
    "name": "Pontocho Yakiniku Kiraku",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "Nakagyo-ku Kyoto Kyoto",
      "addressRegion": "Kyoto",
      "postalCode": "6040000",
      "addressCountry": "JP"
    },
    "source": "https://tabelog.com/en/kyoto/A2601/A260301/26041041/",
    "checked": "2026-10-13"
  },
  "inohanare": {
    "latitude": 34.99998956787382,
    "longitude": 135.76326869030936,
    "name": "Menya Inoichi Hanare",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "-",
      "addressRegion": "Kyoto",
      "postalCode": "6008076",
      "addressCountry": "JP"
    },
    "source": "https://tabelog.com/en/kyoto/A2601/A260201/26029810/",
    "checked": "2026-10-13"
  },
  "hikinikukyoto": {
    "latitude": 35.00510532787417,
    "longitude": 135.77458386035312,
    "name": "Hikiniku to Kome Kyoto",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "Kiyomotocho Higashiyama-ku Kyoto Kyoto",
      "addressRegion": "Kyoto",
      "postalCode": "6050084",
      "addressCountry": "JP"
    },
    "source": "https://tabelog.com/en/kyoto/A2601/A260301/26038349/",
    "checked": "2026-10-13"
  },
  "gihey": {
    "latitude": 35.004132087875625,
    "longitude": 135.77720260034144,
    "name": "Hachidaime Gihey",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "Gionmachi Kitagawa Higashiyama-ku Kyoto Kyoto",
      "addressRegion": "Kyoto",
      "postalCode": "6050073",
      "addressCountry": "JP"
    },
    "source": "https://tabelog.com/en/kyoto/A2601/A260301/26014418/",
    "checked": "2026-10-13"
  },
  "uokeya": {
    "latitude": 35.002097167876016,
    "longitude": 135.77437193032287,
    "name": "Gion Uokeya U",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "Higashiyama-ku Kyoto Kyoto",
      "addressRegion": "Kyoto",
      "postalCode": "6050000",
      "addressCountry": "JP"
    },
    "source": "https://tabelog.com/en/kyoto/A2601/A260301/26001387/",
    "checked": "2026-10-13"
  },
  "moritaya": {
    "latitude": 35.00947304787014,
    "longitude": 135.77063350039998,
    "name": "Morita Ya Kiya machi ten",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "Kiyacho Nakagyo-ku Kyoto Kyoto",
      "addressRegion": "Kyoto",
      "postalCode": "6040961",
      "addressCountry": "JP"
    },
    "source": "https://tabelog.com/en/kyoto/A2601/A260202/26000410/",
    "checked": "2026-10-13"
  }
};
Object.assign(restaurantLocations,{
 shiki:{latitude:35.001898937873605,longitude:135.76641366032644,name:'Udon Shiki Kyoto Udon',source:'https://tabelog.com/en/kyoto/A2601/A260201/26043904/',checked:'2026-10-13'},
 madrague:{latitude:35.012300656138656,longitude:135.75562634199613,name:'Kissa Madrague',source:'https://tabelog.com/en/kyoto/A2601/A260202/26019438/',checked:'2026-10-13'}
});

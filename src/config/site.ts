export const siteConfig = {
  name: "有限会社フレックス湘南",
  title: "フレックス湘南｜湘南・片瀬海岸のヨガ・フィットネス・指圧・日焼け",
  description:
    "神奈川県藤沢市片瀬海岸のフレックス湘南。ヨガ・フィットネス、指圧、日焼けマシーン、サウナ、トレーニングジムをご用意。江ノ島・片瀬江ノ島駅から徒歩圏内。ご予約・ご相談はお気軽にどうぞ。",
  url: "https://flexshonan.pages.dev/",
  ogImage: "/ogp.png",
  lang: "ja",
  locale: "ja_JP",
  telephone: "+81-90-4451-7608",
  address: {
    postalCode: "251-0035",
    region: "神奈川県",
    locality: "藤沢市",
    streetAddress: "片瀬海岸3丁目14-5",
  },
  geo: {
    latitude: 35.3123096,
    longitude: 139.480892,
  },
  openingHours: {
    opens: "09:30",
    closes: "16:30",
    days: ["Monday", "Tuesday", "Thursday", "Friday", "Saturday", "Sunday"],
  },
  sns: {
    line: "https://line.me/ti/p/zdm9EJsAvz",
    facebook: "https://www.facebook.com/profile.php?id=100057608222658",
    website: "https://flexshonan.pages.dev/",
    x: "",
  },
} as const;

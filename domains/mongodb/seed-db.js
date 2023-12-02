
const SeedDB = {
  user: {
    email: "admin@invitation.com",
    username: "admin",
    password: "$2b$10$VhmfGtzS9/IZPQuLQhmXkeTZmXrHYjIV2HCRfsOEp66Yk/OJiwow2", //123qwe
    password_confirm: "$2b$10$VhmfGtzS9/IZPQuLQhmXkeTZmXrHYjIV2HCRfsOEp66Yk/OJiwow2",
    role: "admin"
  },
  dataConfig: {
    male: {
      name: "Hoàng Văn Đoàn",
      parent: {
        father: "Hoàng Văn Điến",
        mother: "Phạm Thị Thủy"
      },
      location: {
        text: "Minh Quang - Trực Đại - Trực Ninh - Nam Định",
        map: "https://maps.app.goo.gl/x2aG3JgsmEV7Eqnt7"
      },
      time_start: {
        date: {
          lunar: {
            day: "24",
            month: "12",
            year: "2023"
          },
          day_of_week: "7",
          solar: {
            day: "13",
            month: "11",
            year: "2023"
          }
        },
        time: {
          hour: "13",
          minute: "00"
        }
      },
      finances: [{
        "provider_name": "VIB",
        "provider_number": "260696888",
        "holder_name": "HOANG VAN DOAN"
      },
      {
        "provider_name": "Vietcombank",
        "provider_number": "0351001084283",
        "holder_name": "HOANG VAN DOAN"
      },
      {
        "provider_name": "Momo",
        "provider_number": "0962370118",
        "holder_name": "HOANG VAN DOAN"
      },
      {
        "provider_name": "ZaloPay",
        "provider_number": "0962370118",
        "holder_name": "HOANG VAN DOAN"
      }],
      email: "doan.hv2606@gmail.com",
      phone: "0962370118",
      bg: '/assets/images/bg.jpg',
      bg_fb: '/assets/images/bg-fb.jpg'
    },
    female: {
      name: "Nguyễn Thị Thúy Linh",
      parent: {
        father: "Nguyễn Đức Thịnh",
        mother: "Bùi Thị Thúy Biên"
      },
      location: {
        text: "Đỗ Xuyên - Thanh Ba - Phú Thọ",
        map: "https://maps.app.goo.gl/psYRjSWdyCZdhZbT6"
      },
      time_start: {
        date: {
          lunar: {
            day: "23",
            month: "12",
            year: "2023"
          },
          day_of_week: "7",
          solar: {
            day: "13",
            month: "11",
            year: "2023"
          }
        },
        time: {
          hour: "16",
          minute: "00"
        }
      },
      finances: [{
        "provider_name": "VIB",
        "provider_number": "007527827",
        "holder_name": "NGUYEN THI THUY LINH"
      },
      {
        "provider_name": "MB Bank",
        "provider_number": "xxxxxxxxxxx",
        "holder_name": "NGUYEN THI THUY LINH"
      },
      {
        "provider_name": "Momo",
        "provider_number": "0364612727",
        "holder_name": "NGUYEN THI THUY LINH"
      },
      {
        "provider_name": "ZaloPay",
        "provider_number": "0364612727",
        "holder_name": "NGUYEN THI THUY LINH"
      }],
      email: "inhlinh.dx98@gmail.com",
      phone: "0364612727",
      bg: '/assets/images/bg.jpg',
      bg_fb: '/assets/images/bg-fb.jpg'
    },
    default: true
  }
};

module.exports = SeedDB;

export class Phone {
  constructor() {
    this.display = document.querySelector(".jsDisplay");
    this.pad = document.querySelectorAll(".pad");
    this.delBtn = document.querySelector(".del"); 
  }
  show() {
    this.pad.forEach(item => {
      item.addEventListener("click", () => {
        if (window.navigator.vibrate) {
          // vibrates when touched
          window.navigator.vibrate(100);
          this.flag(item);
        } else {
          //for devices with no vibrate support 
          this.flag(item);
        }
      });
    });
  }
  flag(item) {
    this.display.value += "";
    // show flag
     
      
     this.display.value += item.dataset.number;
    // const show = info.split('-', 1)
    const value = parseInt(this.display.value);
    const photo = document.querySelector(".photo");
    const popup = document.querySelector(".popup");
    flags.forEach(flag => {
      const id = flag.id;
      if (id.valueOf() === value) {
        photo.classList.add("d-block");
        photo.src = flag.flag;
        popup.innerHTML = flag.country;
      }
    });
  }
  del() {
    this.delBtn.addEventListener("click", () => {
      const value = this.display.value;
      let i = 0;
      while (i < value.length) {
        let del = value.slice(0, value.length - 1);
        this.display.value = del;
        i++;
      }
    });
  }
}
const flags = [
  {
    "id": 33,
    "country": "France",
    "flag": "http://flags.fmcdn.net/data/flags/h40/fr.png"
  },
  {
    "id": 2,
    "country": "Canada",
    "flag": "http://flags.fmcdn.net/data/flags/h40/ca.png"
  },
  {
    "id": 1,
    "country": "USA",
    "flag": "http://flags.fmcdn.net/data/flags/h40/us.png"
  },
  {
    "id": 228,
    "country": "Togo",
    "flag": "http://flags.fmcdn.net/data/flags/h40/tg.png"
  },
  {
    "id": 233,
    "country": "Ghana",
    "flag": "http://flags.fmcdn.net/data/flags/h40/gh.png"
  },
  {
    "id": 52,
    "country": "togo",
    "flag": "http://flags.fmcdn.net/data/flags/h40/mx.png"
  },
  {
    "id": 81,
    "country": "Japan",

    "flag": "http://flags.fmcdn.net/data/flags/h40/jp.png"
  },
  {
    "id": 55,
    "country": "Brazil",
    "flag": "http://flags.fmcdn.net/data/flags/h40/br.png"
  },
  {
    "id": 229,
    "country": "Benin",
    "flag": "http://flags.fmcdn.net/data/flags/h40/bj.png"
  },
  {
    "id": 44,
    "country": "UK",
    "flag": "http://flags.fmcdn.net/data/flags/h40/gb.png"
  },
  {
    "id": 971,
    "country": "Saudi Arabia",
    "flag": "http://flags.fmcdn.net/data/flags/h40/sa.png"
  },
  {
    "id": 7,
    "country": "Russia",
    "flag": "http://flags.fmcdn.net/data/flags/h40/ru.png"
  },
  {
    "id": 86,
    "country": "Saudi Arabia",
    "flag": "http://flags.fmcdn.net/data/flags/h40/cn.png"
  }
];

export class Phone {
  constructor() {
    this.display = document.querySelector(".jsDisplay");
    this.pad = document.querySelectorAll(".pad");
    this.delBtn = document.querySelector(".del");
    this.apiKey = "https://5d372adcf898950014c51b33.mockapi.io/flags";
  }
  fetchData() {
    fetch(this.apiKey)
      .then(response => response.json())
      .then(data => this.myshow(data));
    
  }

  myshow(_raw) {
    this.pad.forEach(item => {
      item.addEventListener("click", () => {
        if (window.navigator.vibrate) {
          // vibrates when touched
          window.navigator.vibrate(100);
          this.display.value += "";
          // show flag
       
          this.display.value += item.dataset.number;
          const value = parseInt(this.display.value);
          const photo = document.querySelector(".photo");
          const popup = document.querySelector(".popup");
          _raw.forEach(data => {
            const { id, country, flag: img_src } = data;

            if (id.valueOf() === value) {
              photo.classList.add("d-block");
              photo.src = img_src;
              popup.innerHTML = country;
            }
          });
        }
        else { this.display.value += "";
               // show flag

               this.display.value += item.dataset.number;
               const value = parseInt(this.display.value);
               const photo = document.querySelector(".photo");
               const popup = document.querySelector(".popup");
               _raw.forEach(data => {
                 const { id, country, flag: img_src } = data;

                 if (id.valueOf() === value) {
                   photo.classList.add("d-block");
                   photo.src = img_src;
                   popup.innerHTML = country;
                 }
               });}
      })
    ;
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

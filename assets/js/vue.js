const app = Vue.createApp({
  data() {
    return {
      name: "",
      email: "",
      jop: "",
      phone: "",
      projects: [
        { name: "alemnishokran", url: "https://alemnishokran.vercel.app/", img: "assets/img/portfolio/alimen.jpg", class: " filter-website" },
        { name: "dachbored", url: "https://color-dachbored.vercel.app/", img: "assets/img/portfolio/dachbored.jpg", class: " filter-webapplication" },
        { name: "elkebash", url: "https://ezwp.dvtst.com/athar/", img: "assets/img/portfolio/elkepash.jpg", class: " filter-website filter-webdesign" },
        { name: "elkebash", url: "https://he-store-shams.vercel.app/", img: "assets/img/portfolio/shams-store.png", class: " filter-website" },
        { name: "round-base", url: "https://round-base-three.vercel.app/", img: "assets/img/portfolio/round-base.png", class: " filter-webapplication" },
        { name: "elkebash", url: "https://twision.agency/", img: "assets/img/portfolio/twistion.png", class: " filter-website" },
        { name: "elkebash", url: "https://todopazar.com/", img: "assets/img/portfolio/todoStroe.png", class: " filter-website" },
        { name: "elkebash", url: "https://ex.dvtst.com/", img: "assets/img/portfolio/explore.png", class: " filter-website" },
        { name: "elkebash", url: "https://gash.vercel.app/", img: "assets/img/portfolio/gash.png", class: " filter-website" },
        { name: "myBlog", url: "https://my-blog-gamma.vercel.app/", img: "assets/img/portfolio/myBlog.jpg", class: " filter-website filter-webdesign" },
        { name: "dOOGarnala", url: "https://doog-arnala-bpky4yuvz-ezzeldem.vercel.app/", img: "assets/img/portfolio/DOOGarnala.jpg", class: "filter-website" },
        { name: "face-ditaction", url: "https://face-ditaction.vercel.app/", img: "assets/img/portfolio/faceDitiction.jpg", class: " filter-webapplication"},
        { name: "khozamnew", url: "https://khozamnew.netlify.app", img: "assets/img/portfolio/khozam.jpg", class: "  filter-website" },
        { name: "yallam", url: "https://www.yallam.com/HOME", img: "assets/img/portfolio/youssef.jpg", class: " filter-website" },
        { name: "midstr", url: "https://midstr.vercel.app/", img: "assets/img/portfolio/midester.jpg", class: "filter-website filter-webdesign" },
        { name: "find-you", url: "https://find-you.vercel.app/https://face-ditaction.vercel.app/", img: "assets/img/portfolio/find-you.jpg", class: "filter-websiteVue" },
        { name: "store-demo", url: "https://storelanding.vercel.app/", img: "assets/img/portfolio/demo.jpg", class: "filter-website filter-webdesign" },
        { name: "moon-two", url: "https://moon-two.vercel.app/", img: "assets/img/portfolio/moon.png", class: " filter-website" },
        { name: "mariamtest", url: "https://mariam-lyart.vercel.app/", img: "assets/img/portfolio/mariam.jpg", class: " filter-website filter-webdesign" },
        { name: "arm", url: "https://arm-five.vercel.app/", img: "assets/img/portfolio/arm.png", class: "  filter-webapplication filter-webdesign" },
        { name: "elfahd", url: "https://elfahdstore.vercel.app/", img: "assets/img/portfolio/elfahd.jpg", class: " filter-website filter-webdesign" },
        { name: "fasaani", url: "https://thelean.vercel.app/", img: "assets/img/portfolio/thelean.png", class: "filter-website" },
        { name: "naturetest", url: "https://nature-mu.vercel.app/", img: "assets/img/portfolio/nature.jpg", class: " filter-website filter-webdesign" },
        { name: "afro-arab-digital", url: "https://afro-arab-digital2.vercel.app/", img: "assets/img/portfolio/bakkahlean.png", class: " filter-website filter-webdesign" },
        { name: "dr-rania", url: "https://drrnia.vercel.app/", img: "assets/img/portfolio/drRania.jpg", class: " filter-website filter-webdesign" },
        { name: "vangoux", url: "https://van-goux.vercel.app/", img: "assets/img/portfolio/vangoux.jpg", class: " filter-website" },
        { name: "surveydemo", url: "https://survey-gray.vercel.app/", img: "assets/img/portfolio/survey.jpg", class: "filter-webapplication filter-webdesign" },
        { name: "fasaani", url: "https://fasaani.vercel.app/", img: "assets/img/portfolio/fasa.jpg", class: "filter-website" },
        { name: "arabx", url: "https://arabx.vercel.app/", img: "assets/img/portfolio/arabicks.jpg", class: "filter-website" },
        { name: "elnaggar", url: "https://elnaggar.vercel.app/", img: "assets/img/portfolio/elnaga.jpg", class: "filter-website" },
        { name: "afro-arab-digital2", url: "https://afro-arab-digital.vercel.app/", img: "assets/img/portfolio/omline.jpg", class: "filter-website filter-webdesign" },
        { name: "oral", url: "https://oralsite.vercel.app/", img: "assets/img/portfolio/oral.jpg", class: "filter-website" },
        // { name: "designertest1", url: "https://designertest1.netlify.app/", img: "assets/img/portfolio/desion.jpg", class: "filter-website" },
        { name: "islah", url: "https://islah.vercel.app/", img: "assets/img/portfolio/islah.jpg", class: "filter-website" },
        { name: "makhazen", url: "https://makhazen.vercel.app", img: "assets/img/portfolio/makhazen.jpg", class: " filter-website" },
        { name: "non-profit", url: "https://nonprofit-one.vercel.app/", img: "assets/img/portfolio/non.jpg", class: " filter-website" },
        { name: "heraj", url: "https://heraj.vercel.app/", img: "assets/img/portfolio/herag.jpg", class: "filter-webapplication" },
        { name: "digisolution", url: "https://digisolution.vercel.app/", img: "assets/img/portfolio/digisolution.jpg", class: "filter-website" },
        { name: "front-endt", url: "https://demosite-fhosnqviy-ezzeldem.vercel.app/", img: "assets/img/portfolio/front.jpg", class: "filter-website  filter-webdesign" },
      ]
    }
  }
});



app.mount("#projects_id")



const contactApp = Vue.createApp({
  data() {
    return {
      name: "",
      email: "",
      jop: "",
      phone: "",
      message: "",
      isValed: true
    }
  },
  methods: {
    callMeFu() {
      fetch('https://meport-22366-default-rtdb.firebaseio.com/contact.json',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: this.name,
            email: this.email,
            jop: this.jop,
            phone: this.phone,
            message: this.message,
          }),
        }
      )
        .then((response) => {
          if (response.ok) {
            // ...
          } else {
            throw new Error('faild to send data ');
          }
        })
        .catch(() => {
          this.error = 'faild to send data ';
        });

      this.name = "",
        this.email = "",
        this.phone = "",
        this.jop = "",
        this.message = "",
        this.isValed = false
    },
    newmassege() {
      this.isValed = true;
    }
  }
});



contactApp.mount("#contactMe")
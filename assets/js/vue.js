const app = Vue.createApp({
  data() {
    return {
      projects: [
        { name: "alemnishokran", url: "https://alemnishokran.vercel.app/", img: "assets/img/portfolio/alimen.jpg", class: " filter-website" },
        { name: "dachbored", url: "https://color-dachbored.vercel.app/", img: "assets/img/portfolio/dachbored.jpg", class: " filter-webapplication" },
        { name: "face-ditaction", url: "https://face-ditaction.vercel.app/", img: "assets/img/portfolio/faceDitiction.jpg", class: " filter-webapplication" },
        { name: "round-base", url: "https://round-base-three.vercel.app/", img: "assets/img/portfolio/round-base.png", class: " filter-webapplication" },
        { name: "moon-two", url: "https://moon-two.vercel.app/", img: "assets/img/portfolio/moon.png", class: " filter-website" },
        { name: "elkebash", url: "http://ezwp.dvtst.com/elkebash", img: "assets/img/portfolio/elkepash.jpg", class: " filter-website filter-webdesign" },
        { name: "khozamnew", url: "https://khozamnew.netlify.app", img: "assets/img/portfolio/khozam.jpg", class: "  filter-website" },
        { name: "arm", url: "https://arm-five.vercel.app/", img: "assets/img/portfolio/arm.png", class: "  filter-webapplication filter-webdesign" },
        { name: "elfahd", url: "https://elfahd.netlify.app/", img: "assets/img/portfolio/elfahd.jpg", class: " filter-website filter-webdesign" },
        { name: "naturetest", url: "https://naturetest.netlify.app", img: "assets/img/portfolio/nature.jpg", class: " filter-website filter-webdesign" },
        { name: "afro-arab-digital", url: "https://afro-arab-digital2.vercel.app/", img: "assets/img/portfolio/bakkahlean.png", class: " filter-website filter-webdesign" },
        { name: "portdemo", url: "https://portdemo.netlify.app/", img: "assets/img/portfolio/drRania.jpg", class: " filter-website filter-webdesign" },
        { name: "vangoux", url: "https://vangoux.netlify.app/", img: "assets/img/portfolio/vangoux.jpg", class: " filter-website" },
        { name: "surveydemo", url: "https://surveydemo.netlify.app", img: "assets/img/portfolio/survey.jpg", class: "filter-webapplication filter-webdesign" },
        { name: "midstr", url: "https://midstr.vercel.app/", img: "assets/img/portfolio/midester.jpg", class: "filter-website filter-webdesign" },
        { name: "store-demo", url: "https://store-demo.netlify.app/", img: "assets/img/portfolio/demo.jpg", class: "filter-website filter-webdesign" },
        { name: "heraj", url: "https://heraj.vercel.app/", img: "assets/img/portfolio/herag.jpg", class: "filter-webapplication" },
        { name: "fasaani", url: "https://fasaani.vercel.app/", img: "assets/img/portfolio/fasa.jpg", class: "filter-website" },
        { name: "arabx", url: "https://arabx.vercel.app/", img: "assets/img/portfolio/arabicks.jpg", class: "filter-website" },
        { name: "elnaggar", url: "https://elnaggar.vercel.app/", img: "assets/img/portfolio/elnaga.jpg", class: "filter-website" },
        { name: "afro-arab-digital2", url: "https://afro-arab-digital.vercel.app/", img: "assets/img/portfolio/omline.jpg", class: "filter-website filter-webdesign" },
        { name: "oral", url: "https://oral.netlify.app/", img: "assets/img/portfolio/oral.jpg", class: "filter-website" },
        { name: "digisolution", url: "https://digisolution.netlify.app/", img: "assets/img/portfolio/digisolution.jpg", class: "filter-website" },
        { name: "designertest1", url: "https://designertest1.netlify.app/", img: "assets/img/portfolio/desion.jpg", class: "filter-website" },
        { name: "front-endt", url: "https://front-endt.netlify.app/", img: "assets/img/portfolio/front.jpg", class: "filter-website  filter-webdesign" },
        { name: "islah", url: "https://islah.vercel.app/", img: "assets/img/portfolio/islah.jpg", class: "filter-website" },
        { name: "makhazen", url: "https://makhazen.vercel.app", img: "assets/img/portfolio/makhazen.jpg", class: " filter-website" },
        { name: "yallam", url: "https://www.yallam.com/HOME", img: "assets/img/portfolio/youssef.jpg", class: " filter-website" },
        { name: "non-profit", url: "https://non-profit.netlify.app/", img: "assets/img/portfolio/non.jpg", class: " filter-website" },
      ]
    }
  }
});



app.mount("#projects_id")
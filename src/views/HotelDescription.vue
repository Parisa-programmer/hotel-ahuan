<template>
  <div class="mt-6 mt-sm-12 pt-12">
    <header-site style="z-index: 2" />
    <div class="widthAll relative" style="z-index: 1">
      <div class="absolute" id="about-england" style="top: -100px"></div>
      <v-row justify="center" align="center">
        <div class="indexDiv">
          <v-row class="mb-md-12">
            <div class="px-1 relative">
              <div class="absolute commasParent" style="">
                <img
                  src="@/assets/image/inverted-commas.png"
                  alt=""
                  class="commas"
                />
              </div>
              <div style="z-index: 222">
                <h2
                  class="font-small-title-xs mb-3 mt-3 mt-md-0 rokh"
                  style="color: #2b3490"
                >
                  کروکی قسمت‌های مختلف هتل
                </h2>
                <img
                  class="firstImageParent widthAll cursorPointer"
                  @click="showImage = true"
                  src="@/assets/image/کروکی1.jpg"
                  alt=""
                  style="z-index: 2"
                />
                <span
                  class="bold d-block text-center grey--text text--darken-2"
                  style="font-size: 11px"
                  >برای بزرگنمایی تصویر کلیک کنید!</span
                >
              </div>
            </div>
          </v-row>
          <v-row>
            <p class="text-justify mt-6 mx-3 answerText">
              <b style="color: #2b3490">-</b>
              لطفاً در هنگام دوچرخه سواری نکات ایمنی را رعایت فرمایید ضمنا جهت
              انجام ورزش اسکیت از زمینی که به همین منظور احداث شده است استفاده
              نمایید و به منظور رعایت مسائل ایمنی از تردد با اسکیت در معابر
              خودداری کنید.
            </p>
            <p class="text-justify mt-2 mt-sm-6 mx-3 answerText widthAll">
              <b style="color: #2b3490">-</b>
              درصورت تمایل می‌توانید برای اطلاع از تخفیف‌های خدمات مختلف آهوان
              ما را در اینستاگرام دنبال کنید.
              <a
                href="https://www.instagram.com/ahuan.ir/"
                style="color: #2b3490"
              >
                Ahuan.ir
              </a>
            </p>
            <p class="text-justify mt-2 mt-sm-6 mx-3 answerText widthAll">
              <b style="color: #2b3490">-</b>
              به دلیل عدم پاک سازی ساحل از شنا کردن در دریا خودداری کرده و در
              اماکن عمومی با لباس شنا تردد نفرمائید.
            </p>
            <p class="text-justify mt-2 mt-sm-6 mx-3 answerText widthAll">
              <b style="color: #2b3490">-</b>
              سالن ورزشی شامل امکانات فوتسال، تنیس روی میز، فوتبال‌دستی، دارت و
              والیبال می باشد.
            </p>
            <p class="text-justify mt-2 mt-sm-6 mx-3 answerText widthAll">
              <b style="color: #2b3490">-</b>
              درب ساحل دریا پس از اذان مغرب بسته خواهد شد.
            </p>
          </v-row>
          <v-dialog v-model="showImage">
            <v-card class="px-2 pb-6">
              <v-row class="py-2">
                <v-icon @click="showImage = false">mdi-close</v-icon>
              </v-row>
              <img
                class="d-md-none firstImageParent widthAll"
                src="@/assets/image/کروکی2.jpg"
                alt=""
                style="z-index: 2"
              />
              <img
                class="d-none d-md-block firstImageParent widthAll"
                src="@/assets/image/کروکی1.jpg"
                alt=""
                style="z-index: 2"
              />
            </v-card>
          </v-dialog>
        </div>
      </v-row>
    </div>
  </div>
</template>

<style scoped>
.commasParent {
  top: -130px;
  right: 0px;
  z-index: 1;
}

.commas {
  width: 120px;
}

@media (max-width: 599px) {
  .commasParent {
    top: -18px;
  }

  .commas {
    width: 23px;
  }
}
</style>

<script>
import HeaderSite from "@/components/HeaderSite.vue";

export default {
  name: "hotel-description",
  data() {
    return {
      showImage: false,
    };
  },
  components: {
    HeaderSite,
  },
  computed: {},
  methods: {},
};
</script>
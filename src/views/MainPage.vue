<template>
  <div class="back1" style="min-height: 100vh">
    <header-site :isMain="isMain" style="z-index: 10" />
    <div
      class="widthAll heightAll fixed"
      style="z-index: 0; background: url('pattern site.png')"
    ></div>
    <v-row
      class=""
      justify="center"
      :style="{ opacity: opacity2 }"
      style="min-height: 100vh; z-index: 9"
    >
      <div
        class="widthAll mt-md-12"
        style="height: 40px"
        data-aos="fade-right"
        data-aos-duration="2000"
      >
        <b
          class="d-none d-md-block text-center rokh mt-12 pt-2"
          :style="{ fontSize: fontSizeTitle2 + 'px' }"
          style="color: #2b3490"
        >
          خدمات هتل آهوان
        </b>
      </div>
      <div
        class="widthAll"
        style="max-width: 900px"
        data-aos="fade-right"
        data-aos-duration="2000"
      >
        <v-row class="d-md-none px-4" align="center" justify="space-between">
          <h2
            class="text-center widthAll pt-5 rokh"
            style="color: #2b3490; text-shadow: 0 0 #deb887; z-index: 9"
          >
            خدمات هتل آهوان
          </h2>
          <v-col cols="12" md="3" class="pa-2">
            <router-link to="/rules">
              <v-card class="widthAll relative rounded-xl hideOver Elevation-0">
                <v-img
                  height="230"
                  class="widthAll rounded-xl"
                  style=""
                  src="@/assets/image/hotel/rules.jpg"
                >
                </v-img>
                <div class="absolute widthAll" style="bottom: 0px; padding: 1%">
                  <v-row class="widthAll" align="center">
                    <div>
                      <h4
                        class="d-inline-block white--text px-3 rounded-lg rokh"
                        style="
                          margin: 2% 0;
                          white-space: nowrap;
                          background: #2b3490;
                        "
                      >
                        قوانین و نکات ضروری
                      </h4>
                    </div>
                  </v-row>
                </div>
              </v-card>
            </router-link>
          </v-col>
          <v-col cols="12" md="3" class="">
            <router-link to="/time-hotel">
              <v-card class="widthAll relative rounded-xl hideOver Elevation-0">
                <v-img
                  height="230"
                  class="widthAll rounded-xl"
                  style=""
                  src="@/assets/image/hotel/time.jpg"
                >
                </v-img>
                <div class="absolute widthAll" style="bottom: 0px; padding: 1%">
                  <v-row class="widthAll" align="center">
                    <div>
                      <h4
                        class="d-inline-block white--text px-3 rounded-lg rokh"
                        style="
                          margin: 2% 0;
                          white-space: nowrap;
                          background: #2b3490;
                        "
                      >
                        ساعات کاری اماکن مختلف
                      </h4>
                    </div>
                  </v-row>
                </div>
              </v-card>
            </router-link>
          </v-col>
          <v-col cols="12" md="3" class="">
            <router-link to="/hotel-description">
              <v-card class="rounded-xl hideOver">
                <v-img
                  height="230"
                  class="rounded-xl widthAll"
                  style=""
                  src="@/assets/image/hotel/map.jpg"
                />
                <div class="absolute widthAll" style="bottom: 0px; padding: 1%">
                  <v-row class="widthAll" align="center">
                    <div>
                      <h4
                        class="d-inline-block white--text px-3 rounded-lg rokh"
                        style="
                          margin: 2% 0;
                          white-space: nowrap;
                          background: #2b3490;
                        "
                      >
                        کروکی قسمت‌های مختلف هتل
                      </h4>
                    </div>
                  </v-row>
                </div>
              </v-card>
            </router-link>
          </v-col>
          <v-col cols="12" md="3" class="">
            <router-link to="/contact-us">
              <v-card class="rounded-xl hideOver">
                <v-img
                  height="230"
                  class="rounded-xl widthAll"
                  style=""
                  src="@/assets/image/hotel/tech-support-1.jpg"
                />
                <div class="absolute widthAll" style="bottom: 0px; padding: 1%">
                  <v-row class="widthAll" align="center">
                    <div>
                      <h4
                        class="d-inline-block white--text px-3 rounded-lg rokh"
                        style="
                          margin: 2% 0;
                          white-space: nowrap;
                          background: #2b3490;
                        "
                      >
                        شماره‌های بخش‌های مختلف هتل
                      </h4>
                    </div>
                  </v-row>
                </div>
              </v-card>
            </router-link>
          </v-col>
          <v-col cols="12" md="3" class="">
            <router-link to="/tourist-attractions">
              <v-card class="rounded-xl hideOver">
                <v-img
                  height="230"
                  class="rounded-xl widthAll"
                  style=""
                  src="@/assets/image/hotel/gilan-dress.jpg"
                />
                <div class="absolute widthAll" style="bottom: 0px; padding: 1%">
                  <v-row class="widthAll" align="center">
                    <div>
                      <h4
                        class="d-inline-block white--text px-3 rounded-lg rokh"
                        style="
                          margin: 2% 0;
                          white-space: nowrap;
                          background: #2b3490;
                        "
                      >
                        جاذبه‌های گردشگری منطقه
                      </h4>
                    </div>
                  </v-row>
                </div>
              </v-card>
            </router-link>
          </v-col>
          <v-col cols="12" md="3" class="">
            <router-link to="/weekly-markets">
              <v-card class="rounded-xl hideOver">
                <v-img
                  height="230"
                  class="rounded-xl widthAll"
                  style=""
                  src="@/assets/image/hotel/بازار.jpg"
                />
                <div class="absolute widthAll" style="bottom: 0px; padding: 1%">
                  <v-row class="widthAll" align="center">
                    <div>
                      <h4
                        class="d-inline-block white--text px-3 rounded-lg rokh"
                        style="
                          margin: 2% 0;
                          white-space: nowrap;
                          background: #2b3490;
                        "
                      >
                        بازارهای هفتگی منطقه
                      </h4>
                    </div>
                  </v-row>
                </div>
              </v-card>
            </router-link>
          </v-col>
          <v-col cols="12" md="3" class="">
            <router-link to="/local-foods">
              <v-card class="rounded-xl hideOver">
                <v-img
                  height="230"
                  class="rounded-xl widthAll"
                  style=""
                  src="@/assets/image/hotel/card2p.jpg"
                />
                <div class="absolute widthAll" style="bottom: 0px; padding: 1%">
                  <v-row class="widthAll" align="center">
                    <div>
                      <h4
                        class="d-inline-block white--text px-3 rounded-lg rokh"
                        style="
                          margin: 2% 0;
                          white-space: nowrap;
                          background: #2b3490;
                        "
                      >
                        غذاهای محلی گیـــلان
                      </h4>
                    </div>
                  </v-row>
                </div>
              </v-card>
            </router-link>
          </v-col>
          <v-col cols="12" md="3" class="">
            <router-link to="/safety-tips">
              <v-card class="widthAll relative rounded-xl hideOver Elevation-0">
                <v-img
                  height="230"
                  class="widthAll rounded-xl"
                  style=""
                  src="@/assets/image/hotel/standard-quality-control-concept-m.jpg"
                >
                </v-img>
                <div class="absolute widthAll" style="bottom: 0px; padding: 1%">
                  <v-row class="widthAll" align="center">
                    <div>
                      <h4
                        class="d-inline-block white--text px-3 rounded-lg rokh"
                        style="
                          margin: 2% 0;
                          white-space: nowrap;
                          background: #2b3490;
                        "
                      >
                        نکات ایمنی
                      </h4>
                    </div>
                  </v-row>
                </div>
              </v-card>
            </router-link>
          </v-col>
          <v-col cols="12" md="3" class="">
            <router-link to="/ahuan-services">
              <v-card class="widthAll relative rounded-xl hideOver Elevation-0">
                <v-img
                  height="230"
                  class="widthAll rounded-xl"
                  style=""
                  src="@/assets/image/hotel/آهوان-.jpg"
                >
                </v-img>
                <div class="absolute widthAll" style="bottom: 0px; padding: 1%">
                  <v-row class="widthAll" align="center">
                    <div>
                      <h4
                        class="d-inline-block white--text px-3 rounded-lg rokh"
                        style="
                          margin: 2% 0;
                          white-space: nowrap;
                          background: #2b3490;
                        "
                      >
                        خدمات مسافرتی آهوان
                      </h4>
                    </div>
                  </v-row>
                </div>
              </v-card>
            </router-link>
          </v-col>
        </v-row>
        <v-row
          class="d-none d-md-flex px-4"
          align="center"
          justify="space-between"
        >
          <v-col cols="4" class="pa-2">
            <router-link to="/rules">
              <v-card class="widthAll relative rounded-xl hideOver Elevation-0">
                <v-img
                  height="230"
                  class="widthAll rounded-xl"
                  style=""
                  src="@/assets/image/hotel/rules.jpg"
                >
                </v-img>
                <div class="absolute widthAll" style="bottom: 0px; padding: 1%">
                  <v-row class="widthAll" align="center">
                    <div>
                      <h4
                        class="d-inline-block white--text px-3 rounded-lg rokh"
                        style="
                          margin: 2% 0;
                          white-space: nowrap;
                          background: #2b3490;
                        "
                      >
                        قوانین و نکات ضروری
                      </h4>
                    </div>
                  </v-row>
                </div>
              </v-card>
            </router-link>
          </v-col>
          <v-col cols="4" class="pa-2">
            <router-link to="/time-hotel">
              <v-card class="widthAll relative rounded-xl hideOver Elevation-0">
                <v-img
                  height="230"
                  class="widthAll rounded-xl"
                  style=""
                  src="@/assets/image/hotel/time.jpg"
                >
                </v-img>
                <div class="absolute widthAll" style="bottom: 0px; padding: 1%">
                  <v-row class="widthAll" align="center">
                    <div>
                      <h4
                        class="d-inline-block white--text px-3 rounded-lg rokh"
                        style="
                          margin: 2% 0;
                          white-space: nowrap;
                          background: #2b3490;
                        "
                      >
                        ساعات کاری اماکن مختلف
                      </h4>
                    </div>
                  </v-row>
                </div>
              </v-card>
            </router-link>
          </v-col>
          <v-col cols="4" class="pa-2">
            <router-link to="/hotel-description">
              <v-card class="rounded-xl hideOver">
                <v-img
                  height="230"
                  class="rounded-xl widthAll"
                  style=""
                  src="@/assets/image/hotel/map.jpg"
                />
                <div class="absolute widthAll" style="bottom: 0px; padding: 1%">
                  <v-row class="widthAll" align="center">
                    <div>
                      <h4
                        class="d-inline-block white--text px-3 rounded-lg rokh"
                        style="
                          margin: 2% 0;
                          white-space: nowrap;
                          background: #2b3490;
                        "
                      >
                        کروکی قسمت‌های مختلف هتل
                      </h4>
                    </div>
                  </v-row>
                </div>
              </v-card>
            </router-link>
          </v-col>
          <v-col cols="4" class="pa-2">
            <router-link to="/tourist-attractions">
              <v-card class="rounded-xl hideOver">
                <v-img
                  height="230"
                  class="rounded-xl widthAll"
                  style=""
                  src="@/assets/image/hotel/gilan-dress.jpg"
                />
                <div class="absolute widthAll" style="bottom: 0px; padding: 1%">
                  <v-row class="widthAll" align="center">
                    <div>
                      <h4
                        class="d-inline-block white--text px-3 rounded-lg rokh"
                        style="
                          margin: 2% 0;
                          white-space: nowrap;
                          background: #2b3490;
                        "
                      >
                        جاذبه‌های گردشگری منطقه
                      </h4>
                    </div>
                  </v-row>
                </div>
              </v-card>
            </router-link>
          </v-col>
          <v-col cols="4" class="pa-2">
            <router-link to="/weekly-markets">
              <v-card class="rounded-xl hideOver">
                <v-img
                  height="230"
                  class="rounded-xl widthAll"
                  style=""
                  src="@/assets/image/hotel/بازار.jpg"
                />
                <div class="absolute widthAll" style="bottom: 0px; padding: 1%">
                  <v-row class="widthAll" align="center">
                    <div>
                      <h4
                        class="d-inline-block white--text px-3 rounded-lg rokh"
                        style="
                          margin: 2% 0;
                          white-space: nowrap;
                          background: #2b3490;
                        "
                      >
                        بازارهای هفتگی منطقه
                      </h4>
                    </div>
                  </v-row>
                </div>
              </v-card>
            </router-link>
          </v-col>
          <v-col cols="4" class="pa-2">
            <router-link to="/local-foods">
              <v-card class="rounded-xl hideOver">
                <v-img
                  height="230"
                  class="rounded-xl widthAll"
                  style=""
                  src="@/assets/image/hotel/card2p.jpg"
                />
                <div class="absolute widthAll" style="bottom: 0px; padding: 1%">
                  <v-row class="widthAll" align="center">
                    <div>
                      <h4
                        class="d-inline-block white--text px-3 rounded-lg rokh"
                        style="
                          margin: 2% 0;
                          white-space: nowrap;
                          background: #2b3490;
                        "
                      >
                        غذاهای محلی گیـــلان
                      </h4>
                    </div>
                  </v-row>
                </div>
              </v-card>
            </router-link>
          </v-col>
          <v-col cols="4" class="pa-2">
            <router-link to="/contact-us">
              <v-card class="rounded-xl hideOver">
                <v-img
                  height="230"
                  class="rounded-xl widthAll"
                  style=""
                  src="@/assets/image/hotel/tech-support-1.jpg"
                />
                <div class="absolute widthAll" style="bottom: 0px; padding: 1%">
                  <v-row class="widthAll" align="center">
                    <div>
                      <h4
                        class="d-inline-block white--text px-3 rounded-lg rokh"
                        style="
                          margin: 2% 0;
                          white-space: nowrap;
                          background: #2b3490;
                        "
                      >
                        شماره‌های بخش‌های مختلف هتل
                      </h4>
                    </div>
                  </v-row>
                </div>
              </v-card>
            </router-link>
          </v-col>
          <v-col cols="4" class="pa-2">
            <router-link to="/safety-tips">
              <v-card class="widthAll relative rounded-xl hideOver Elevation-0">
                <v-img
                  height="230"
                  class="widthAll rounded-xl"
                  style=""
                  src="@/assets/image/hotel/standard-quality-control-concept-m.jpg"
                >
                </v-img>
                <div class="absolute widthAll" style="bottom: 0px; padding: 1%">
                  <v-row class="widthAll" align="center">
                    <div>
                      <h4
                        class="d-inline-block white--text px-3 rounded-lg rokh"
                        style="
                          margin: 2% 0;
                          white-space: nowrap;
                          background: #2b3490;
                        "
                      >
                        نکات ایمنی
                      </h4>
                    </div>
                  </v-row>
                </div>
              </v-card>
            </router-link>
          </v-col>
          <v-col cols="4" class="pa-2">
            <router-link to="/ahuan-services">
              <v-card class="widthAll relative rounded-xl hideOver Elevation-0">
                <v-img
                  height="230"
                  class="widthAll rounded-xl"
                  style=""
                  src="@/assets/image/hotel/آهوان-.jpg"
                >
                </v-img>
                <div class="absolute widthAll" style="bottom: 0px; padding: 1%">
                  <v-row class="widthAll" align="center">
                    <div>
                      <h4
                        class="d-inline-block white--text px-3 rounded-lg rokh"
                        style="
                          margin: 2% 0;
                          white-space: nowrap;
                          background: #2b3490;
                        "
                      >
                        خدمات مسافرتی آهوان
                      </h4>
                    </div>
                  </v-row>
                </div>
              </v-card>
            </router-link>
          </v-col>
        </v-row>
      </div>
    </v-row>
  </div>
</template>

<style>
.src2Step .v-image__image {
  background-position: top right !important;
  /* background-position: -2599px -1130px !important; */
}
</style>

<style scoped>
.row2 {
  /* transition: all 500ms; */
}

.card2 {
  /* height: 40%; */
  width: 90%;
  margin-bottom: 10%;
}

.v-sheet.v-card:not(.v-sheet--outlined) {
  /* box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.2) !important */
}

* {
  transition: all 1s;
}

.widthAll {
  width: 100% !important;
}

.lineCards {
  /* transition: all 3s; */
}

.notTransition {
  /* transition: none; */
}
</style>

<script>
// import QuestionAnswer from '@/components/QuestionAnswer.vue'
const $ = require("jquery");
import axios from "axios";
axios.defaults.headers.common["Client-Token"] = "Ahuan-Wapi?123";
import HeaderSite from "@/components/HeaderSite.vue";

export default {
  name: "main-page",
  metaInfo: {
    // title: 'خدمات گردشگری آهوان',
    // meta: [
    //   { name: 'description', content: '' },
    // ]
  },
  components: {
    HeaderSite,
  },
  watch: {
    // windowTop: {
    //   immediate: true,
    //   handler(newVal, oldVal) {
    //     if (this.loadingScroll == false) {
    //       if (newVal > oldVal) {
    //         this.handleScrollBottom()
    //       } else {
    //         this.handleScrollTop()
    //       }
    //     }
    //   },
    // }
  },
  data: () => ({
    opacity1: 0.1,
    transform1: "matrix(2, 0, 0, 2, 0, 0)",
    transform1first: 2,
    transform1next: 2,
    transform2: "matrix(1, 0, 0, 1, 0, 0)",
    transform2first: 1,
    transform2next: 1,
    windowTop: window.top.scrollY,
    show2: false,
    size2: 140,
    fontSizeTitle2: 32,
    fontSize2: 22,
    fontSize3: 16,
    opacity2: 1,
    lineCardsBackground: "#000000",
    lineCardsWidth: "20%",
    show3: false,
    opacity3: 1,
    src2: "image1",
    image1: "",
    image2: "",
    image3: "",
    image4: "",
    image5: "",
    src2Step: 1,
    loadingScroll: false,
    sizeImage2: 100,
    opacity4: 0,
    show4: false,
    transition1: "all 1s",
    isMain: true,
  }),
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    handleScrollBottom() {
      //
    },
    handleScrollTop(event) {
      //
    },
    onScroll(e) {
      // this.windowTop = window.top.scrollY /* or: e.target.documentElement.scrollTop */
    },
  },
  created() {
    window.scrollTo(0, 0);
  },
};
</script>
https://divar.ir/v/QZAYDnfW

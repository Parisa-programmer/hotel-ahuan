<template>
  <div class="mt-sm-12 pt-12">
    <header-site style="z-index: 2" />
    <div class="widthAll relative" style="z-index: 1">
      <div class="absolute" id="about-england" style="top: -100px"></div>
      <v-row justify="center" align="center" class="px-12">
        <div class="indexDiv">
          <v-row class="mt-md-12 mb-md-12">
            <v-col cols="12" md="6" class="order-2 order-md-1">
              <v-row class="heightAll" align="center">
                <div class="px-6 relative">
                  <div class="absolute commasParent" style="">
                    <img
                      src="@/assets/image/inverted-commas.png"
                      alt=""
                      class="commas"
                    />
                  </div>
                  <div style="z-index: 222">
                    <h1
                      class="font-small-title-xs mb-3 rokh"
                      style="color: #2b3490"
                    >
                      ساعات کاری اماکن مختلف
                    </h1>
                    <p class="answerText mt-2 mt-md-6">
                      به منظور تسریع در گردش کار لطفاً،زمان خروج ساعت 10 و زمان
                      ورود ساعت 14 را مدنظر قرار دهید. همچنین کارت‌های پارکینگ
                      را از واحد پذیرش دریافت و در محل شیشه‌ جلوی ماشین نصب
                      نمایید.
                    </p>
                  </div>
                </div>
              </v-row>
            </v-col>
            <v-col cols="12" md="6" class="order-1 order-md-2">
              <v-row justify="center" class="mt-12">
                <div class="widthAll relative">
                  <div
                    class="absolute"
                    style="
                      width: 90%;
                      height: 80%;
                      left: -50px;
                      top: -50px;
                      z-index: 1;
                      background: #2b3490;
                    "
                  ></div>
                  <div class="widthAll" style="box-shadow: 0 0px 12px #c2c2c2">
                    <v-img
                      class="firstImageParent"
                      src="@/assets/image/hotel/time.jpg"
                      alt=""
                      style="z-index: 2"
                    />
                  </div>
                </div>
              </v-row>
            </v-col>
          </v-row>
          <v-row>
            <p class="text-justify mt-6 mx-3 answerText">
              <b style="color: #1cb4b2" class="rokh">رستوران</b>
              <br />
              سرو صبحانه از 7:30 الی 10
              <br />
              سرو ناهار از 12:30 الی 15
              <br />
              سرو شام در نیمه اول سال از 19:30 الی 23
              <br />
              سرو شام در نیمه دوم سال از 19 الی 21:30
            </p>
            <p class="text-justify mt-2 mt-sm-6 mx-3 answerText widthAll">
              <b class="rokh" style="color: #1cb4b2">کافی‌شاپ</b>
              <br />
              نیمه اول سال از 12 الی 23:30
              <br />
              نیمه دوم سال از 12 الی 22:30
            </p>
            <p class="text-justify mt-2 mt-sm-6 mx-3 answerText widthAll">
              <b class="rokh" style="color: #1cb4b2">سفره‌خانه سنتی</b>
              <br />
              از ساعت 12 الی 24
            </p>
            <p class="text-justify mt-2 mt-sm-6 mx-3 answerText widthAll">
              <b class="rokh" style="color: #1cb4b2">سالن ورزشی</b>
              <br />
              نیمه اول سال از 9 الی 23
              <br />
              نیمه دوم سال از 9 الی 22
            </p>
            <p class="text-justify mt-2 mt-sm-6 mx-3 answerText widthAll">
              <b class="rokh" style="color: #1cb4b2">بیلیارد</b>
              <br />
              نیمه اول سال از 9 الی 24
              <br />
              نیمه دوم سال از 9 الی 23
            </p>
            <p class="text-justify mt-2 mt-sm-6 mx-3 answerText widthAll">
              <b class="rokh" style="color: #1cb4b2">دوچرخه و موتورچهارچرخ</b>
              <br />
              از ساعت 9:30 الی 23
            </p>
            <p class="text-justify mt-2 mt-sm-6 mx-3 answerText widthAll">
              <b class="rokh" style="color: #1cb4b2">سینمای روباز</b>
              <br />
              از ساعت 21:30 الی 23
            </p>
            <p class="text-justify mt-2 mt-sm-6 mx-3 answerText widthAll">
              <b class="rokh" style="color: #1cb4b2">آرایشگاه مردانه</b>
              <br />
              پذیرش با تعیین وقت قبلی
            </p>
            <p class="text-justify mt-2 mt-sm-6 mx-3 answerText widthAll">
              <b class="rokh" style="color: #1cb4b2">مرکز ماساژ</b>
              <br />
              پذیرش با تعیین وقت قبلی
            </p>
            <p class="text-justify mt-2 mt-sm-6 mx-3 answerText widthAll">
              <b class="rokh" style="color: #1cb4b2">استخر روباز</b>
              <br />
              <span class="rokh" style="color: #deb887">روزهای زوج:</span>
              <br />
              8:30 الی 14 سانس آقایان
              <br />
              15 الی 20:30 سانس بانوان
              <br />
              <span class="rokh" style="color: #deb887">روزهای فرد:</span>
              <br />
              8:30 الی 14 سانس بانوان
              <br />
              15 الی 20:30 سانس آقایان
            </p>
          </v-row>
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
  name: "time-hotel",
  data() {
    return {};
  },
  components: {
    HeaderSite,
  },
  computed: {},
  methods: {},
};
</script>
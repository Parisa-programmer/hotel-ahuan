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
                    <h2
                      class="font-small-title-xs mb-3 rokh"
                      style="color: #2b3490"
                    >
                      بازارهای هفتگی منطقه
                    </h2>
                    <p class="answerText mt-2 mt-md-6">
                      بازارهای هفتگی، هر روز در یک محله و خیابان برپا می‌شود و
                      تفاوت عمده‌اش با سایر مراکز خرید، وجود غرفه‌های متعدد و
                      پایین بودن قیمت‌ها نسبت به سایر مراکز خرید و از همه مهم‌تر
                      رفت‌وآمد بیشتر اهالی در این بازارهاست.درگزارش زیر تعدادی
                      از بازارهای روز را معرفی کرده‌ایم. شما با خواندن این گزارش
                      می‌توانید از وضعیت بازارهای روز، راه‌های دسترسی، کیفیت،
                      قیمت اجناس و... با خبر شوید و برای خرید اجناس تصمیم بهتری
                      بگیرید.
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
                      src="@/assets/image/hotel/بازار.jpg"
                      alt=""
                      style="z-index: 2"
                    />
                  </div>
                </div>
              </v-row>
            </v-col>
          </v-row>
          <v-row>
            <p class="text-justify mt-2 mx-3 answerText widthAll">
              <b class="rokh" style="color: #2b3490">شنبه:</b>
              بندرانزلی، اسالم، پاشاکی سیاهکل پیربازار رشت، دهشال آستانه، رامسر،
              شبخوس لات املش، شیخعلی کلایه لاهیجان، گوراب پس فومن، ماسال
            </p>
            <p class="text-justify mt-2 mx-3 answerText widthAll">
              <b class="rokh" style="color: #2b3490">یکشنبه:</b>
              رودسر، چوبر تالش، خلیف‌آباد اسالم، خمام، دستک آستانه اشرفیه،
              کوچصفهان، گشت رودخان فومن، صومعه‌سرا
            </p>
            <p class="text-justify mt-2 mx-3 answerText widthAll">
              <b class="rokh" style="color: #2b3490">دوشنبه:</b>
              آستانه اشرفیه، خشکبیجار، رحیم‌آباد، سنگر، سیاهکل، شفت، ضیابر،
              کپورچال، کومله لنگرود، گوراب زرمیخ صومعه‌سرا، هندخاله صومعه‌سرا
            </p>
            <p class="text-justify mt-2 mx-3 answerText widthAll">
              <b class="rokh" style="color: #2b3490">سه‌شنبه:</b>
              اباتر صومعه‌سرا، املش، پره سر رضوانشهر، پاشاکی سیاهکل، چهارده
              آستانه اشرفیه، دهگاه آستانه اشرفیه، فومن، رامسر
            </p>
            <p class="text-justify mt-2 mx-3 answerText widthAll">
              <b class="rokh" style="color: #2b3490">چهارشنبه:</b>
              چابکسر، چوکام خمام،حسن رود خمام، رضوانشهر، کسما، واجارگاه، رودبنه،
              کوچصفهان، کیاشهر، لنگرود، پونل رضوانشهر، واجارگاه،آقاسیدشریف رشت
            </p>
            <p class="text-justify mt-2 mx-3 answerText widthAll">
              <b class="rokh" style="color: #2b3490">پنجشنبه:</b>
              کلاچای، آستانه اشرفیه، تولم شهر، خشکبیجار، زیباکنار، آلیان فومن،
              سیاهکل، شاقاچی، سنگر، شاندرمن، طاهر گوراب، تالش
            </p>
            <p class="text-justify mt-2 mx-3 answerText widthAll">
              <b class="rokh" style="color: #2b3490">جمعه:</b>
              رشت (سبزه‌میدان)
              <br />
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
  name: "weekly-markets",
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
<template>
  <div
    id="header"
    v-cloak
    class="widthAll fixed"
    style="top: 0; right: 0; z-index: 2"
  >
    <v-row
      class="header white hideOver"
      justify="center"
      style="box-shadow: 0 0 12px #cbcbcb"
    >
      <div class="indexDiv py-1">
        <v-row justify="space-between">
          <v-app-bar-nav-icon
            class="mt-2"
            @click.stop="showMenuSmall = !showMenuSmall"
            style="z-index: 1"
          ></v-app-bar-nav-icon>
          <v-navigation-drawer
            v-model="showMenuSmall"
            fixed
            right
            class="menue-list"
            temporary
            style="z-index: 2"
          >
            <v-list nav dense>
              <v-list-item-group
                v-model="activePage"
                active-class="red--text text--accent-4 "
              >
                <router-link to="/rules" class="text-decoration-none">
                  <v-list-item
                    @click="
                      showMenuSmall = false;
                      activeLinkMenuHeader = '';
                    "
                  >
                    <v-icon class="ml-2">mdi-script-text</v-icon>
                    <v-list-item-title> قوانین و نکات ضروری </v-list-item-title>
                  </v-list-item>
                </router-link>
                <router-link to="/time-hotel" class="text-decoration-none">
                  <v-list-item
                    @click="
                      showMenuSmall = false;
                      activeLinkMenuHeader = '';
                    "
                  >
                    <v-icon class="ml-2">mdi-hours-24</v-icon>
                    <v-list-item-title>
                      ساعات کاری اماکن مختلف
                    </v-list-item-title>
                  </v-list-item>
                </router-link>
                <router-link
                  to="/hotel-description"
                  class="text-decoration-none"
                >
                  <v-list-item
                    @click="
                      showMenuSmall = false;
                      activeLinkMenuHeader = '';
                    "
                  >
                    <v-icon class="ml-2">mdi-map-marker-path</v-icon>
                    <v-list-item-title>
                      کروکی قسمت‌های مختلف هتل
                    </v-list-item-title>
                  </v-list-item>
                </router-link>
                <router-link to="/contact-us" class="text-decoration-none">
                  <v-list-item
                    @click="
                      showMenuSmall = false;
                      activeLinkMenuHeader = '';
                    "
                  >
                    <v-icon class="ml-2">mdi-phone-in-talk</v-icon>
                    <v-list-item-title>
                      شماره‌های بخش‌های مختلف هتل
                    </v-list-item-title>
                  </v-list-item>
                </router-link>
                <router-link
                  to="/tourist-attractions"
                  class="text-decoration-none"
                >
                  <v-list-item
                    @click="
                      showMenuSmall = false;
                      activeLinkMenuHeader = '';
                    "
                  >
                    <v-icon class="ml-2">mdi-tsunami</v-icon>
                    <v-list-item-title>
                      جاذبه‌های گردشگری منطقه
                    </v-list-item-title>
                  </v-list-item>
                </router-link>
                <router-link to="/weekly-markets" class="text-decoration-none">
                  <v-list-item
                    @click="
                      showMenuSmall = false;
                      activeLinkMenuHeader = '';
                    "
                  >
                    <v-icon class="ml-2">mdi-basket-outline</v-icon>
                    <v-list-item-title>
                      بازارهای هفتگی منطقه
                    </v-list-item-title>
                  </v-list-item>
                </router-link>
                <router-link to="/local-foods" class="text-decoration-none">
                  <v-list-item
                    @click="
                      showMenuSmall = false;
                      activeLinkMenuHeader = '';
                    "
                  >
                    <v-icon class="ml-2">mdi-food-turkey</v-icon>
                    <v-list-item-title>
                      غذاهای محلی گیـــلان
                    </v-list-item-title>
                  </v-list-item>
                </router-link>
                <router-link to="/safety-tips" class="text-decoration-none">
                  <v-list-item
                    @click="
                      showMenuSmall = false;
                      activeLinkMenuHeader = '';
                    "
                  >
                    <v-icon class="ml-2">mdi-note-alert-outline</v-icon>
                    <v-list-item-title> نکات ایمنی </v-list-item-title>
                  </v-list-item>
                </router-link>
                <router-link to="/ahuan-services" class="text-decoration-none">
                  <v-list-item
                    @click="
                      showMenuSmall = false;
                      activeLinkMenuHeader = '';
                    "
                  >
                    <v-icon class="ml-2">mdi-airplane</v-icon>
                    <v-list-item-title> خدمات مسافرتی آهوان </v-list-item-title>
                  </v-list-item>
                </router-link>
              </v-list-item-group>
            </v-list>
          </v-navigation-drawer>
          <router-link to="/main-page">
            <img
              src="@/assets/image/logo-header.png"
              alt="صفحه اصلی"
              style="height: 40px"
            />
          </router-link>
          <span class="ml-3 mt-3 ml-sm-0 headerText grey--text text--darken-3">
            <a
              href="tel:0134205"
              class="grey--text text--darken-3 text-decoration-none"
              ><v-icon class="ml-2">mdi-phone-in-talk</v-icon></a
            >
          </span>
        </v-row>
      </div>
    </v-row>
    <!-- <v-row class="white top-bar hideOver" justify="center" align="center">
      <div class="indexDiv headerButtons my-3">
        <v-row
          align="center"
          justify="space-between"
          class="d-none d-md-flex px-2"
        >
          <v-skeleton-loader
            class="textLoader d-inline-block relative"
            type="chip"
            :loading="isLoading"
          >
            <v-skeleton-loader
              class="textLoader d-inline-block show-sub-menu-parent"
              type="chip"
              :loading="isLoading"
            >
              <router-link to="/rules" class="text-decoration-none">
                <span class="ml-2 ml-md-3 ml-lg-5 mb-2 mb-0"> قوانین هتل </span>
              </router-link>
            </v-skeleton-loader>
          </v-skeleton-loader>
          <v-skeleton-loader
            class="textLoader d-inline-block relative"
            type="chip"
            :loading="isLoading"
          >
            <v-skeleton-loader
              class="textLoader d-inline-block show-sub-menu-parent"
              type="chip"
              :loading="isLoading"
            >
              <router-link to="/time-hotel" class="text-decoration-none">
                <span class="ml-2 ml-md-3 ml-lg-5 mb-2 mb-0"> ساعات کاری </span>
              </router-link>
            </v-skeleton-loader>
          </v-skeleton-loader>
          <v-skeleton-loader
            class="textLoader d-inline-block relative"
            type="chip"
            :loading="isLoading"
          >
            <v-skeleton-loader
              class="textLoader d-inline-block show-sub-menu-parent"
              type="chip"
              :loading="isLoading"
            >
              <router-link to="/hotel-description" class="text-decoration-none">
                <span class="ml-2 ml-md-3 ml-lg-5 mb-2 mb-0"> کروکی هتل </span>
              </router-link>
            </v-skeleton-loader>
          </v-skeleton-loader>
          <v-skeleton-loader
            class="textLoader d-inline-block"
            type="chip"
            :loading="isLoading"
          >
            <router-link to="/contact-us" class="text-decoration-none">
              <span class="ml-2 ml-md-3 ml-lg-5 mb-2 mb-0">
                شماره‌های بخش‌ها
              </span>
            </router-link>
          </v-skeleton-loader>
          <v-skeleton-loader
            class="textLoader d-inline-block"
            type="chip"
            :loading="isLoading"
          >
            <router-link to="/tourist-attractions" class="text-decoration-none">
              <span class="ml-2 ml-md-3 ml-lg-5 mb-2 mb-0">
                جاذبه‌های گردشگری
              </span>
            </router-link>
          </v-skeleton-loader>
          <v-skeleton-loader
            class="textLoader d-inline-block"
            type="chip"
            :loading="isLoading"
          >
            <router-link to="/weekly-markets" class="text-decoration-none">
              <span class="ml-2 ml-md-3 ml-lg-5 mb-2 mb-0">
                بازارهای هفتگی
              </span>
            </router-link>
          </v-skeleton-loader>
          <v-skeleton-loader
            class="textLoader d-inline-block"
            type="chip"
            :loading="isLoading"
          >
            <router-link to="/local-foods" class="text-decoration-none">
              <span class="ml-0 mb-2 mb-0"> غذاهای محلی </span>
            </router-link>
          </v-skeleton-loader>
        </v-row>
        <v-row class="d-flex d-md-none humberger-header-menue"> </v-row>
      </div>
    </v-row> -->
    <!-- alert -->
    <v-alert
      v-if="showAlert"
      dark
      class="white--text fixed"
      :type="alertType"
      style="bottom: 0; right: 10px; min-width: 200px; z-index: 4444444444444"
      >{{ alertText }}</v-alert
    >
    <v-dialog
      v-if="loginDialog"
      class="rounded-lg loginDialog"
      v-model="loginDialog"
      style="z-index: 2"
      width="450"
    >
      <v-card class="pa-2 hideOver relative" style="border-radius: 10px">
        <div
          class="rounded-xl absolute grey lighten-4"
          style="height: 50px; width: 50px; bottom: 20px; right: -20px"
        ></div>
        <div
          class="rounded-circle absolute red lighten-5"
          style="height: 50px; width: 50px; top: -20px; left: -20px"
        ></div>
        <div
          class="rounded-xl absolute grey lighten-4"
          style="height: 45px; width: 106px; bottom: -38px; right: 50%"
        ></div>
        <v-icon
          class="absolute black--text"
          @click="loginDialog = false"
          style="top: 5px; right: 5px"
          >mdi-close</v-icon
        >
        <div class="my-6">
          <h3 v-if="loginStep == 2 && UserType == 1" class="text-center">
            تایید شماره موبایل
          </h3>
          <h3
            v-else-if="
              (loginType == 'login' &&
                loginStep != 3 &&
                UserType == 1 &&
                loginStep == 1 &&
                loginType == 'login') ||
              (UserType == 2 && loginStep == 1 && loginType == 'login')
            "
            class="text-center mt-6"
          >
            ورود به حساب کاربری
          </h3>
          <h4
            v-else-if="
              (loginStep != 3 && UserType == 1) ||
              (UserType == 2 && loginStep == 1 && loginType == 'register')
            "
            class="text-center mt-6"
          >
            ثبت نام در سایت گردشگری آهوان
          </h4>
          <span
            v-if="showAlert"
            class="widthAll text-center d-block caption mt-2"
            :class="alertType == 'error' ? 'red--text' : 'green--text'"
            style="font-family: Byekan !important"
            >{{ alertText }}</span
          >
        </div>
        <v-row v-if="loginStep == 1" justify="center">
          <div
            class="grey lighten-4 my-6 rounded-lg hideOver body-2"
            style="width: 240px; font-family: Byekan !important"
          >
            <v-row>
              <v-col
                class="py-3 text-center cursorPointer text-center"
                @click="UserType = 1"
                :class="UserType == 1 && 'red lighten-5'"
              >
                <h4
                  :class="
                    UserType == 1 ? 'red--text' : 'grey--text text--darken-1'
                  "
                >
                  مسافر
                </h4>
              </v-col>
              <v-col
                class="py-3 text-center cursorPointer"
                @click="UserType = 2"
                :class="UserType == 2 && 'red lighten-5'"
              >
                <h4
                  :class="
                    UserType == 2 ? 'red--text' : 'grey--text text--darken-1'
                  "
                >
                  شرکت
                </h4>
              </v-col>
            </v-row>
          </div>
        </v-row>
        <v-row v-show="loginStep == 1" justify="center">
          <v-form ref="loginForm" lazy-validation>
            <div v-if="UserType == 1">
              <v-text-field
                v-if="loginType == 'register'"
                outlined
                class="mt-2 rounded-xl"
                append-icon="mdi-account-outline"
                v-model="loginForm.name"
                label="نام"
                :rules="nameRules"
              ></v-text-field>
              <v-text-field
                v-if="loginType == 'register'"
                outlined
                class="mt-1 rounded-xl"
                append-icon="mdi-account-outline"
                v-model="loginForm.family"
                label="نام خانوادگی"
                :rules="familyRules"
              ></v-text-field>
              <v-text-field
                outlined
                class="mt-1 rounded-xl"
                label="موبایل"
                pattern="\d*"
                type="number"
                append-icon="mdi-phone"
                v-model="loginForm.phone"
                :rules="phoneRules"
              ></v-text-field>
            </div>
            <div
              v-if="UserType == 2 && loginType == 'login'"
              style="width: 240px"
            >
              <v-row>
                <v-text-field
                  outlined
                  class="mt-2 rounded-xl"
                  append-icon="mdi-mail"
                  v-model="loginForm.mail"
                  label="ایمیل"
                  :rules="emailRules"
                ></v-text-field>
                <v-text-field
                  outlined
                  class="mt-1 rounded-xl"
                  type="number"
                  append-icon="mdi-phone"
                  pattern="\d*"
                  v-model="loginForm.phone"
                  label="موبایل"
                  :rules="phoneRules"
                ></v-text-field>
                <v-text-field
                  outlined
                  class="mt-1 rounded-xl"
                  type="password"
                  append-icon="mdi-star"
                  v-model="loginForm.password"
                  label="رمزعبور"
                  :rules="emptyRules"
                ></v-text-field>
              </v-row>
            </div>
            <div
              v-if="UserType == 2 && loginType == 'register'"
              style="width: 240px"
            >
              <v-row>
                <v-text-field
                  outlined
                  class="mt-2 rounded-xl"
                  append-icon="mdi-account-outline"
                  v-model="loginForm.name"
                  label="نام نماینده"
                  :rules="nameRules"
                ></v-text-field>
                <v-text-field
                  outlined
                  class="mt-1 rounded-xl"
                  append-icon="mdi-account-outline"
                  v-model="loginForm.family"
                  label="نام خانوادگی نماینده"
                  :rules="familyRules"
                ></v-text-field>
                <v-text-field
                  outlined
                  class="mt-1 rounded-xl"
                  append-icon="mdi-account-group"
                  v-model="loginForm.companeyName"
                  label="نام شرکت یا آژانس"
                  :rules="emptyRules"
                ></v-text-field>
                <v-select
                  v-model="loginForm.companeyWork"
                  :items="companeyWorkItems"
                  :rules="emptyRules"
                  outlined
                  class="mt-2 rounded-xl"
                  append-icon="mdi-semantic-web"
                  label="حوضه فعالیت شرکت"
                ></v-select>
                <v-text-field
                  outlined
                  class="mt-1 rounded-xl"
                  type="number"
                  append-icon="mdi-numeric"
                  v-model="loginForm.code"
                  pattern="\d*"
                  label="کد ثبت شرکت"
                  :rules="emptyRules"
                ></v-text-field>
                <v-text-field
                  outlined
                  class="mt-1 rounded-xl"
                  type="number"
                  append-icon="mdi-phone"
                  v-model="loginForm.phone"
                  pattern="\d*"
                  label="شماره موبایل نماینده"
                  :rules="phoneRules"
                ></v-text-field>
                <v-text-field
                  outlined
                  class="mt-1 rounded-xl"
                  append-icon="mdi-mail"
                  v-model="loginForm.mail"
                  label="آدرس ایمیل شرکت"
                  :rules="emailRules"
                ></v-text-field>
                <v-text-field
                  outlined
                  class="mt-1 rounded-xl"
                  type="password"
                  append-icon="mdi-star"
                  v-model="loginForm.password"
                  label="رمزعبور"
                  :rules="emptyRules"
                ></v-text-field>
              </v-row>
            </div>
          </v-form>
        </v-row>
        <v-row v-if="loginStep == 2 && UserType != 2" justify="center">
          <v-form ref="loginOtpForm" lazy-validation>
            <span
              class="body-2 text-center d-block"
              style="font-family: Byekan !important"
              >کد 4 رقمی ارسال شده بر روی شماره موبایل را لطفا وارد
              نمایید.</span
            >
            <div class="mb-2 mt-4 px-12">
              <v-otp-input
                pattern="\d*"
                v-model="loginForm.otp"
                class="mx-6 mx-md-12"
                length="4"
              ></v-otp-input>
            </div>
          </v-form>
        </v-row>
        <v-row
          v-if="
            loginStep == 3 ||
            (UserType == 2 && loginType == 'register' && loginStep == 2) ||
            (UserType == 2 && loginStep == 2)
          "
          justify="center"
        >
          <img
            class="my-6"
            src="@/assets/image/success.png"
            alt=""
            width="130px"
          />
          <h5
            v-if="UserType == 2 && loginType == 'register'"
            class="green--text text--darken-2 my-3 text-center d-block"
          >
            اطلاعات شما با موفقیت دریافت شد.لطفا منتظر تایید باشید.
          </h5>
          <h4
            v-else
            class="green--text text--darken-2 my-3 widthAll text-center"
          >
            عملیات ورود با موفقیت انجام شد.
          </h4>
        </v-row>
        <v-row justify="center">
          <span
            v-if="resendSeconds != 0 && loginStep == 2 && UserType == 1"
            class="body-2 text-center mb-2 widthAll text-center"
            style="font-family: Byekan !important"
            >امکان ارسال مجدد تا {{ resendSeconds }} ثانیه دیگر</span
          >
          <div class="widthAll">
            <v-row justify="center">
              <div
                v-if="resendSeconds == 0 && loginStep == 2 && UserType == 1"
                @click="resendSeconds = 60"
                class="body-2 blue--text text--darken-2 text-decoration-underline mb-3 cursorPointer d-inline-block mx-auto"
                style="font-family: Byekan !important"
              >
                ارسال مجدد کد
              </div>
            </v-row>
          </div>
          <span
            v-if="loginType == 'login' && loginStep == 1"
            class="body-2 text-center widthAll my-4"
            style="font-family: Byekan !important"
          >
            قبلا ثبت نام نکرده اید؟
            <span
              @click="loginType = 'register'"
              class="blue--text text--darken-2 cursorPointer"
              style="text-decoration: underline"
              >ثبت نام</span
            >
          </span>
          <span
            v-else-if="loginStep == 2 && UserType != 2"
            class="body text-center widthAll grey--text text--darken-1"
            style="font-family: Byekan !important"
          >
            {{ loginForm.phone }}
            <span
              @click="loginStep = 1"
              v-if="UserType == 1"
              class="blue--text text--darken-2 cursorPointer"
              style="text-decoration: underline"
              >تغییر شماره</span
            >
          </span>
          <span
            v-else-if="loginType != 'login' && loginStep == 1"
            class="body-2 text-center widthAll my-4"
            style="font-family: Byekan !important"
          >
            قبلا ثبت نام کرده اید؟
            <span
              @click="loginType = 'login'"
              class="blue--text text--darken-2 cursorPointer"
              style="text-decoration: underline"
              >وارد شوید</span
            >
          </span>
          <v-btn
            v-if="loginStep == 1 || (loginStep == 2 && UserType == 1)"
            :disabled="loginStep == 2 && loginForm.otp.length < 4"
            @click="loginOrRegisterValidate()"
            dark
            class="widthAll red my-4 rounded-xl py-7 mt-1"
            style="width: 55%"
          >
            {{
              (UserType == 2 && loginType == "login") ||
              (loginStep == 2 && UserType == 1)
                ? "ورود"
                : "مرحله بعدی"
            }}
          </v-btn>
        </v-row>
      </v-card>
    </v-dialog>
  </div>
</template>

<style></style>

<script>
import "@/assets/css/main.css";
import axios from "axios";
axios.defaults.headers.common["Client-Token"] = "Ahuan-Wapi?123";

var codeSend = null;
// import style from '../css/main.css'
export default {
  name: "HeaderSite",
  components: {
    // style
  },
  props: ["isMain"],
  watch: {
    showAlert() {
      if (this.showAlert) {
        setTimeout(() => {
          this.showAlert = false;
        }, 5000);
      }
    },
    loginStep() {
      if (this.loginStep == 3 || (this.loginStep == 2 && this.UserType == 2)) {
        setTimeout(() => {
          if (this.loginType == "login") {
            localStorage.setItem("isLoginAhuan", true);
            this.isLogin = true;
          }
          this.loginDialog = false;
        }, 2000);
      }
      this.$refs.loginForm.resetValidation();
    },
  },
  data: () => ({
    tours: [],
    activeLinkMenuHeader: "",
    activePage: null,
    isLoading: false,
    loginForm: {
      name: "",
      family: "",
      companeyName: "",
      companeyWork: "",
      code: "",
      phone: "",
      mail: "",
      password: "",
      otp: "",
    },
    isLogin: false,
    showMenuSmall: false,
    userName: "",
    loginDialog: false,
    loginStep: 1,
    UserType: 1,
    resendSeconds: 0,
    loginSecondsInterval: "",
    loginType: "login",
    emailRules: [(v) => /.+@.+\..+/.test(v) || "ایمیل نادرست میباشد."],
    phoneRules: [
      (v) => !!v || "پر کردن فیلد تلفن اجباریست.",
      (v) => v.length == 11 || "شماره تلفن صحیح نیست.",
    ],
    nameRules: [
      (v) => !!v || "پر کردن فیلد نام اجباریست.",
      (v) => (v || "").indexOf(0) < 0 || "فرمت صحیح نیست",
      (v) => (v || "").indexOf(1) < 0 || "فرمت صحیح نیست",
      (v) => (v || "").indexOf(2) < 0 || "فرمت صحیح نیست",
      (v) => (v || "").indexOf(3) < 0 || "فرمت صحیح نیست",
      (v) => (v || "").indexOf(4) < 0 || "فرمت صحیح نیست",
      (v) => (v || "").indexOf(5) < 0 || "فرمت صحیح نیست",
      (v) => (v || "").indexOf(6) < 0 || "فرمت صحیح نیست",
      (v) => (v || "").indexOf(7) < 0 || "فرمت صحیح نیست",
      (v) => (v || "").indexOf(8) < 0 || "فرمت صحیح نیست",
      (v) => (v || "").indexOf(9) < 0 || "فرمت صحیح نیست",
    ],
    familyRules: [
      (v) => !!v || "پر کردن فیلد نام خانوادگی اجباریست.",
      (v) => (v || "").indexOf(0) < 0 || "فرمت صحیح نیست",
      (v) => (v || "").indexOf(1) < 0 || "فرمت صحیح نیست",
      (v) => (v || "").indexOf(2) < 0 || "فرمت صحیح نیست",
      (v) => (v || "").indexOf(3) < 0 || "فرمت صحیح نیست",
      (v) => (v || "").indexOf(4) < 0 || "فرمت صحیح نیست",
      (v) => (v || "").indexOf(5) < 0 || "فرمت صحیح نیست",
      (v) => (v || "").indexOf(6) < 0 || "فرمت صحیح نیست",
      (v) => (v || "").indexOf(7) < 0 || "فرمت صحیح نیست",
      (v) => (v || "").indexOf(8) < 0 || "فرمت صحیح نیست",
      (v) => (v || "").indexOf(9) < 0 || "فرمت صحیح نیست",
    ],
    emptyRules: [(v) => !!v || "پر کردن این فیلد اجباریست."],
    companeyWorkItems: [
      "آژانس مسافرتی",
      "علمی و دانشگاهی",
      "بانکی",
      "صنعتی",
      "تولیدی",
      "سایر",
    ],
    showAlert: false,
  }),
  methods: {
    resetLoginForm() {
      this.loginForm = {
        name: "",
        family: "",
        companeyName: "",
        companeyWork: "",
        code: "",
        phone: "",
        mail: "",
        password: "",
        otp: "",
      };
    },
    loginOrRegisterValidate() {
      var self = this;

      if (self.loginStep == 1) {
        if (self.$refs.loginForm.validate()) {
          // login section_________________________________________________
          if (self.loginType == "login") {
            // user login__________________________________________________
            if (self.UserType == 1) {
              axios
                .post(
                  "https://ahuan.ir/api/login?mobile=" + self.loginForm.phone
                )
                .then(function (response) {
                  // handle success

                  if (response.data.sussecc) {
                    localStorage.setItem("user-name", response.data.result);
                    axios
                      .get(
                        "https://ahuan.ir/api/login?mobile=" +
                          self.loginForm.phone
                      )
                      .then(function (response) {
                        // handle success
                        codeSend = response.data;
                        self.resendSeconds = 60;
                        self.alertText = "کد تایید برای شما ارسال شد.";
                        self.alertType = "success";
                        self.showAlert = true;
                        self.loginStep = 2;
                      })
                      .catch(function (error) {
                        // handle error
                        console.log(error);
                      });
                  } else {
                    self.alertText = response.data.error;
                    self.alertType = "error";
                    self.showAlert = true;
                  }
                })
                .catch(function (error) {
                  // handle error
                  console.log(error);
                });
            }
            // companey login______________________________________________
            else {
              let userInfo = {
                email: self.loginForm.mail,
                mobile: self.loginForm.phone,
                password: self.loginForm.password,
                rememberMe: true,
              };

              axios
                .post("https://ahuan.ir/api/login", userInfo)
                .then(function (response) {
                  // handle success
                  if (response.data.sussecc) {
                    localStorage.setItem("user-name", response.data.result);
                    localStorage.setItem("isLoginAhuan", true);
                    self.userName = response.data.result;
                    self.alertText = "عملیات ورود با موفقیت انجام شد.";
                    self.alertType = "success";
                    self.showAlert = true;
                    self.loginStep = 2;
                  } else {
                    self.alertText = response.data.error;
                    self.alertType = "error";
                    self.showAlert = true;
                  }
                })
                .catch(function (error) {
                  // handle error
                  console.log(error);
                });
            }
          }
          // register section_________________________________________________
          else {
            // user register__________________________________________________
            if (self.UserType == 1) {
              axios
                .get(
                  "https://ahuan.ir/api/login?mobile=" + self.loginForm.phone
                )
                .then(function (response) {
                  // handle success
                  codeSend = response.data;
                  self.resendSeconds = 60;
                  self.alertText = "کد تایید برای شما ارسال شد.";
                  self.alertType = "success";
                  self.showAlert = true;
                  self.loginStep = 2;
                  console.log(codeSend);
                })
                .catch(function (error) {
                  // handle error
                  console.log(error);
                });
              console.log(options);
              // axios.post('https://ahuan.ir/api/register' , options)
              //         .then(function (response) {
              //           // handle success
              //           // codeSend = response.data
              //           // self.resendSeconds = 60
              //           self.alertText = 'ثبت نام با موفقیت انجام شد.'
              //           self.alertType = 'success'
              //           self.showAlert = true
              //           // self.loginStep = 2
              //         })
              //         .catch(function (error) {
              //           // handle error
              //           console.log(error);
              //         })
            }
            // companey register______________________________________________
            else {
              //
            }
          }
          //     if ((self.loginForm.phone == '09054791374' && self.loginType == 'login') || self.loginType == 'register') {
          //       if (self.UserType == 1) {
          //         self.resendSeconds = 60
          //         self.showAlert = true
          //         self.alertText = 'کد تایید برای شما ارسال شد.'
          //         self.alertType = 'success'
          //         self.loginStep = 2
          //       }
          //       self.loginStep = 2
          // }
          //     else {

          //       self.loginType = 'register'
          //       self.showAlert = true
          //       self.alertText = 'برای ورود به سایت باید ابتدا ثبت نام کنید.'
          //       self.alertType = 'error'
          //       self.loginForm.password = ''
          //     }
          //     this.$refs.loginForm.resetValidation()
        } else {
          self.showAlert = true;
          self.alertText = "لطفا فیلدها را بدرستی تکمیل کنید.";
          self.alertType = "error";
        }
      } else if (self.loginStep == 2) {
        console.log(self.loginForm.otp, codeSend);
        if (self.loginForm.otp == codeSend) {
          if (self.loginType == "login") {
            self.isLogin = true;
            self.userName = localStorage.getItem("user-name");
            self.loginStep = 3;
          } else {
            var options = {
              displayname: self.loginForm.name + " " + self.loginForm.family,
              email: self.loginForm.mail,
              mobile: self.loginForm.phone,
              password: "Test@123",
            };
            axios
              .post("https://ahuan.ir/api/register", options)
              .then(function (response) {
                // handle success
                // codeSend = response.data
                // self.resendSeconds = 60
                if (response.data.sussecc) {
                  self.alertText = "ثبت نام با موفقیت انجام شد.";
                  self.alertType = "success";
                  self.showAlert = true;
                  self.isLogin = true;
                  self.userName = options.displayname;
                  localStorage.setItem("user-name", options.displayname);
                  localStorage.setItem("isLoginAhuan", true);
                  self.loginStep = 3;
                } else {
                  console.log(response.data.error);
                  self.alertText = response.data.error;
                  self.alertType = "error";
                  self.showAlert = true;
                }
              })
              .catch(function (error) {
                // handle error
                console.log(error);
              });
          }
        } else {
          self.loginForm.otp == "";
          self.showAlert = true;
          self.alertText = "کد وارد شده صحیح نیست.";
          self.alertType = "error";
        }
      }
    },
    logOut() {
      window.location.href = "/profile";
      // var self = this
      // axios.put('https://ahuan.ir/api/login')
      //   .then(function (response) {
      //     // handle success
      //     self.alertText = 'عملیات خروج از سایت انجام شد.'
      //     self.alertType = 'success'
      //     self.showAlert = true
      //     localStorage.setItem('isLoginAhuan', false)
      //     localStorage.removeItem('user-name')
      //     self.isLogin = false
      //   })
      //   .catch(function (error) {
      //     // handle error
      //     console.log(error);
      //   })
    },
    getTours() {
      let self = this;
      axios
        .get("https://panel.ahuantours.com/api/package/menu")
        .then(function (response) {
          let res = response.data.map((x) => {
            return {
              id: x.id,
              name: x.group,
              packages: x.packages,
              route: "/tour/" + x.group.replace(/\s/g, "-"),
            };
          });
          self.$emit("getGroups", res);
          self.tours = res;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    },
  },
  mounted() {
    window.scrollTo(0, 0);
    // if (localStorage.getItem('user-name')) {
    //   this.userName = localStorage.getItem('user-name')
    // }
    // if (localStorage.getItem('isLoginAhuan')) {
    //   this.isLogin = localStorage.getItem('isLoginAhuan')
    // }
    // this.loginSecondsInterval = setInterval(() => {
    //   this.resendSeconds > 0 && this.resendSeconds--
    // }, 1000);
  },
};
</script>

<template>
  <div id="app">
    <v-app>
      <v-app-bar
        app
        clipped-left
        style="height: auto; border-bottom: #003a60 solid"
        class="flex-grow-0"
      >
        <div class="row pl-8 resMobHeader">
          <div class="pb-0">
            <div class="row justify-content-between align-self-center menu-bar">
              <div class="nnit-top-bar-title scroll-content">
                "Transform your brand with custom web solutions that captivate and
                convert."
              </div>

              <div class="nnit-top-left">
                <img
                  class="hamburger mt-5 desktop"
                  src="./assets/hamburger.png"
                  @click.stop="drawer = !drawer"
                />

                <div class="col-md-12 pl-16 px-0 py-0 justify-content-between">
                  <a href="/"
                    ><img class="mb-4 mt-2 nnit-header-logo" src="./assets/nnitlogo.png"
                  /></a>

                  <v-btn class="pl-0 contact no-background-hover">
                    <div class="pl-0 mr-5 ml-5">
                      <a href="/"
                        ><img
                          src="./assets/phonelogo.png"
                          class="headerimg"
                          width="25px"
                        />
                        <span class="pl-3"> +91-9650405268</span></a
                      >
                      <a class="pl-3 text-lowercase" href="/"
                        ><img
                          src="./assets/emailassignment.png"
                          class="headerimg"
                          width="25px"
                        />
                        <span class="pl-3">nimish@nnitsoft.com</span></a
                      >
                    </div></v-btn
                  >

                  <v-btn
                    to="/"
                    :ripple="false"
                    class="pl-0 mr-3 mt-5 ml-5 no-background-hover headerbtn mbres text-capitalize text-capitalize"
                    text
                    large
                    >Home</v-btn
                  >
                  <v-btn
                    to="/about-us"
                    :ripple="false"
                    class="mr-3 mt-5 no-background-hover headerbtn mbres text-capitalize text-capitalize"
                    text
                    large
                    >About Us</v-btn
                  >
                  <!-- <v-btn
                    to="/sample"
                    :ripple="false"
                    class="mr-5 mt-5 no-background-hover headerbtn mbres text-capitalize text-capitalize"
                    text
                    large
                    >Sample</v-btn
                  >
                  <v-btn
                    to="/experts"
                    :ripple="false"
                    class="mr-5 mt-5 no-background-hover headerbtn mbres text-capitalize text-capitalize"
                    text
                    large
                    >Experts</v-btn
                  > -->

                  <v-btn
                    to="/contact-us"
                    :ripple="false"
                    class="mr-3 mt-5 no-background-hover headerbtn mbres text-capitalize text-capitalize"
                    text
                    large
                    >Contact Us</v-btn
                  >
                  <v-btn
                    to="/blog"
                    :ripple="false"
                    class="mr-3 mt-5 no-background-hover headerbtn mbres text-capitalize text-capitalize"
                    text
                    large
                    >Blog</v-btn
                  >
                </div>
              </div>
              <div class="row col-7 pb-0 align-self-center mobile">
                <div
                  class="row justify-content-end align-self-center align-self-md-end pr-3 right-menu-bar"
                ></div>
              </div>
            </div>
          </div>
          <div class="col-md-12 ml-md-4 px-0 py-0 justify-content-between">
            <v-menu
              class="menu-content"
              :close-on-content-click="true"
              open-on-hover
              tile
              bottom
              offset-y
              min-width="100%"
              style="border-bottom: 5px solid var(--beige)"
            >
              <template v-slot:activator="{ on }">
                <v-btn
                  v-on="on"
                  :ripple="false"
                  class="pl-0 no-background-hover headerbtn mbres text-capitalize"
                  text
                  large
                  >Web Development
                </v-btn>
              </template>
              <v-list class="pt-0 pb-0">
                <div class="row menu-row">
                  <div class="pl-8 pl-md-12 col-12 col-xl-9 pt-0 pb-13 row pr-0">
                    <div class="col-4">
                      <v-btn
                        to="front-end-development-services"
                        :ripple="false"
                        class="justify-start pl-0 mr-2 no-background-hover menubtn mbres text-capitalize"
                        text
                        large
                        >Frontend Development Services</v-btn
                      >
                    </div>

                    <div class="col-4">
                      <v-btn
                        to="back-end-development-services"
                        :ripple="false"
                        class="justify-start pl-0 mr-2 no-background-hover menubtn mbres text-capitalize"
                        text
                        large
                        >Backend Development Services</v-btn
                      >
                    </div>

                    <div class="col-4">
                      <v-btn
                        to="database-management-services"
                        :ripple="false"
                        class="justify-start pl-0 mr-2 no-background-hover menubtn mbres text-capitalize"
                        text
                        large
                        >Database Management Services</v-btn
                      >
                    </div>
                    <div class="col-4">
                      <v-btn
                        to="responsive-design-services"
                        :ripple="false"
                        class="justify-start pl-0 mr-2 no-background-hover menubtn mbres text-capitalize"
                        text
                        large
                        >Responsive Design Services</v-btn
                      >
                    </div>
                    <div class="col-4">
                      <v-btn
                        to="progressive-web-apps-services"
                        :ripple="false"
                        class="justify-start pl-0 mr-2 no-background-hover menubtn mbres text-capitalize"
                        text
                        large
                        >Progressive Web Apps (PWAs) Services</v-btn
                      >
                    </div>
                    <div class="col-4">
                      <v-btn
                        to="e-commerce-services"
                        :ripple="false"
                        class="justify-start pl-0 mr-2 no-background-hover menubtn mbres text-capitalize"
                        text
                        large
                        >E-commerce Solutions Services</v-btn
                      >
                    </div>
                  </div>
                  <div class="col-xl-3 pa-0 d-none d-xl-block">
                    <div class="paddingmainclass">
                      <div
                        class="nnitimage block-background-image"
                        style="background-image: url('static/img/tools_header.jpg')"
                      ></div>
                    </div>
                  </div>
                </div>
              </v-list>
            </v-menu>

            <v-menu
              class="menu-content"
              :close-on-content-click="true"
              open-on-hover
              tile
              bottom
              offset-y
              min-width="100%"
              style="border-bottom: 5px solid var(--beige)"
            >
              <template v-slot:activator="{ on }">
                <v-btn
                  v-on="on"
                  :ripple="false"
                  class="no-background-hover headerbtn mbres text-capitalize"
                  text
                  large
                  >Mobile App Development
                </v-btn>
              </template>
              <v-list class="pt-0 pb-0">
                <div class="row menu-row">
                  <div class="pl-8 pl-md-12 col-12 col-xl-9 pt-0 pb-13 row pr-0">
                    <div class="col-4">
                      <v-btn
                        to="IOS-development-services"
                        :ripple="false"
                        class="justify-start pl-0 mr-2 no-background-hover menubtn mbres text-capitalize"
                        text
                        large
                        >IOS Development Services</v-btn
                      >
                    </div>
                    <div class="col-4">
                      <v-btn
                        to="android-development-services"
                        :ripple="false"
                        class="justify-start pl-0 mr-2 no-background-hover menubtn mbres text-capitalize"
                        text
                        large
                        >Android Development Services</v-btn
                      >
                    </div>
                    <div class="col-4">
                      <v-btn
                        to="cross-platform-development-services"
                        :ripple="false"
                        class="justify-start pl-0 mr-2 no-background-hover menubtn mbres text-capitalize"
                        text
                        large
                        >Cross-Platform Development Services</v-btn
                      >
                    </div>
                  </div>
                  <div class="col-xl-3 pa-0 d-none d-xl-block">
                    <div class="paddingmainclass">
                      <div
                        class="nnitimage block-background-image"
                        style="background-image: url('static/img/tools_header.jpg')"
                      ></div>
                    </div>
                  </div>
                </div>
              </v-list>
            </v-menu>

            <v-menu
              class="menu-content"
              :close-on-content-click="true"
              open-on-hover
              tile
              bottom
              offset-y
              min-width="100%"
              style="border-bottom: 5px solid var(--beige)"
            >
              <template v-slot:activator="{ on }">
                <v-btn
                  v-on="on"
                  :ripple="false"
                  class="no-background-hover headerbtn mbres text-capitalize"
                  text
                  large
                  >Technical Services
                </v-btn>
              </template>
              <v-list class="pt-0 pb-0">
                <div class="row menu-row">
                  <div class="pl-8 pl-md-12 col-12 col-xl-9 pt-0 pb-13 row pr-0">
                    <div class="col-4">
                      <v-btn
                        to="IT-services"
                        :ripple="false"
                        class="justify-start pl-0 mr-2 no-background-hover menubtn mbres text-capitalize"
                        text
                        large
                        >IT Services</v-btn
                      >
                    </div>
                    <div class="col-4">
                      <v-btn
                        to="computer-science-services"
                        :ripple="false"
                        class="justify-start pl-0 mr-2 no-background-hover menubtn mbres text-capitalize"
                        text
                        large
                        >Computer Science Services</v-btn
                      >
                    </div>
                    <div class="col-4">
                      <v-btn
                        to="computer-network-services"
                        :ripple="false"
                        class="justify-start pl-0 mr-2 no-background-hover menubtn mbres text-capitalize"
                        text
                        large
                        >Computer Network Services</v-btn
                      >
                    </div>
                    <!-- <div class="col-4">
                      <v-btn
                        to="technical-services"
                        :ripple="false"
                        class="justify-start pl-0 mr-2 no-background-hover menubtn mbres text-capitalize"
                        text
                        large
                        >Technical Services</v-btn
                      >
                    </div> -->
                    <div class="col-4">
                      <v-btn
                        to="matlab-services"
                        :ripple="false"
                        class="justify-start pl-0 mr-2 no-background-hover menubtn mbres text-capitalize"
                        text
                        large
                        >Matlab Services</v-btn
                      >
                    </div>
                    <div class="col-4">
                      <v-btn
                        to="data-science-services"
                        :ripple="false"
                        class="justify-start pl-0 mr-2 no-background-hover menubtn mbres text-capitalize"
                        text
                        large
                        >Data Science Services</v-btn
                      >
                    </div>
                    <div class="col-4">
                      <v-btn
                        to="tableau-services"
                        :ripple="false"
                        class="justify-start pl-0 mr-2 no-background-hover menubtn mbres text-capitalize"
                        text
                        large
                        >Tableau Services</v-btn
                      >
                    </div>
                    <div class="col-4">
                      <v-btn
                        to="block-chain-services"
                        :ripple="false"
                        class="justify-start pl-0 mr-2 no-background-hover menubtn mbres text-capitalize"
                        text
                        large
                        >BlockChain Services</v-btn
                      >
                    </div>
                    <div class="col-4">
                      <v-btn
                        to="spss-services"
                        :ripple="false"
                        class="justify-start pl-0 mr-2 no-background-hover menubtn mbres text-capitalize"
                        text
                        large
                        >SPSS Services</v-btn
                      >
                    </div>
                    <div class="col-4">
                      <v-btn
                        to="database-management-services"
                        :ripple="false"
                        class="justify-start pl-0 mr-2 no-background-hover menubtn mbres text-capitalize"
                        text
                        large
                        >Database Management Services</v-btn
                      >
                    </div>
                    <div class="col-4">
                      <v-btn
                        to="cloud-computing-services"
                        :ripple="false"
                        class="justify-start pl-0 mr-2 no-background-hover menubtn mbres text-capitalize"
                        text
                        large
                        >Cloud Computing Services</v-btn
                      >
                    </div>
                    <div class="col-4">
                      <v-btn
                        to="network-security-services"
                        :ripple="false"
                        class="justify-start pl-0 mr-2 no-background-hover menubtn mbres text-capitalize"
                        text
                        large
                        >Network Security Services</v-btn
                      >
                    </div>

                    <div class="col-4">
                      <v-btn
                        to="machine-learning-services"
                        :ripple="false"
                        class="justify-start pl-0 mr-2 no-background-hover menubtn mbres text-capitalize"
                        text
                        large
                        >Machine Learning Services</v-btn
                      >
                    </div>
                    <div class="col-4">
                      <v-btn
                        to="artificial-intelligence-services"
                        :ripple="false"
                        class="justify-start pl-0 mr-2 no-background-hover menubtn mbres text-capitalize"
                        text
                        large
                        >Artificial Intelligence Services</v-btn
                      >
                    </div>
                    <div class="col-4">
                      <v-btn
                        to="data-analysis-services"
                        :ripple="false"
                        class="justify-start pl-0 mr-2 no-background-hover menubtn mbres text-capitalize"
                        text
                        large
                        >Data Analysis Services</v-btn
                      >
                    </div>
                    <div class="col-4">
                      <v-btn
                        to="excel-services"
                        :ripple="false"
                        class="justify-start pl-0 mr-2 no-background-hover menubtn mbres text-capitalize"
                        text
                        large
                        >Excel Services</v-btn
                      >
                    </div>
                    <div class="col-4">
                      <v-btn
                        to="cyber-security-services"
                        :ripple="false"
                        class="justify-start pl-0 mr-2 no-background-hover menubtn mbres text-capitalize"
                        text
                        large
                        >Cyber Security Services</v-btn
                      >
                    </div>
                    <div class="col-4">
                      <v-btn
                        to="database-design-services"
                        :ripple="false"
                        class="justify-start pl-0 mr-2 no-background-hover menubtn mbres text-capitalize"
                        text
                        large
                        >Database Design Services</v-btn
                      >
                    </div>

                    <div class="col-4">
                      <v-btn
                        to="IOT-services"
                        :ripple="false"
                        class="justify-start pl-0 mr-2 no-background-hover menubtn mbres text-capitalize"
                        text
                        large
                        >IOT Services</v-btn
                      >
                    </div>
                    <div class="col-4">
                      <v-btn
                        to="data-visualization-services"
                        :ripple="false"
                        class="justify-start pl-0 mr-2 no-background-hover menubtn mbres text-capitalize"
                        text
                        large
                        >Data Visualization Services</v-btn
                      >
                    </div>
                    <div class="col-4">
                      <v-btn
                        to="power-bi-services"
                        :ripple="false"
                        class="justify-start pl-0 mr-2 no-background-hover menubtn mbres text-capitalize"
                        text
                        large
                        >Power BI Services</v-btn
                      >
                    </div>
                    <div class="col-4">
                      <v-btn
                        to="content-management-services"
                        :ripple="false"
                        class="justify-start pl-0 mr-2 no-background-hover menubtn mbres text-capitalize"
                        text
                        large
                        >Content Management Services</v-btn
                      >
                    </div>
                  </div>
                  <div class="col-xl-3 pa-0 d-none d-xl-block">
                    <div class="paddingmainclass">
                      <div
                        class="nnitimage block-background-image"
                        style="background-image: url('static/img/tools_header.jpg')"
                      ></div>
                    </div>
                  </div>
                </div>
              </v-list>
            </v-menu>

            <v-menu
              class="menu-content"
              :close-on-content-click="true"
              open-on-hover
              tile
              bottom
              offset-y
              min-width="100%"
              style="border-bottom: 5px solid var(--beige)"
            >
              <template v-slot:activator="{ on }">
                <v-btn
                  v-on="on"
                  :ripple="false"
                  class="no-background-hover headerbtn mbres text-capitalize"
                  text
                  large
                  >Programming
                </v-btn>
              </template>
              <v-list class="pt-0 pb-0">
                <div class="row menu-row">
                  <div class="pl-8 pl-md-12 col-12 col-xl-9 pt-0 pb-13 row pr-0">
                    <div class="col-4">
                      <v-btn
                        to="python-programming-services"
                        :ripple="false"
                        class="justify-start pl-0 mr-2 no-background-hover menubtn mbres text-capitalize"
                        text
                        large
                        >Python Programming Services</v-btn
                      >
                    </div>
                    <div class="col-4">
                      <v-btn
                        to="C-programming-services"
                        :ripple="false"
                        class="justify-start pl-0 mr-2 no-background-hover menubtn mbres text-capitalize"
                        text
                        large
                        >C Programming Services</v-btn
                      >
                    </div>
                    <div class="col-4">
                      <v-btn
                        to="java-services"
                        :ripple="false"
                        class="justify-start pl-0 mr-2 no-background-hover menubtn mbres text-capitalize"
                        text
                        large
                        >Java Services</v-btn
                      >
                    </div>
                    <div class="col-4">
                      <v-btn
                        to="R-services"
                        :ripple="false"
                        class="justify-start pl-0 mr-2 no-background-hover menubtn mbres text-capitalize"
                        text
                        large
                        >R Services</v-btn
                      >
                    </div>
                    <div class="col-4">
                      <v-btn
                        to="javascript-services"
                        :ripple="false"
                        class="justify-start pl-0 mr-2 no-background-hover menubtn mbres text-capitalize"
                        text
                        large
                        >Javascript Services</v-btn
                      >
                    </div>
                    <div class="col-4">
                      <v-btn
                        to="coding-services"
                        :ripple="false"
                        class="justify-start pl-0 mr-2 no-background-hover menubtn mbres text-capitalize"
                        text
                        large
                        >Coding Services</v-btn
                      >
                    </div>
                    <div class="col-4">
                      <v-btn
                        to="cryptographic-services"
                        :ripple="false"
                        class="justify-start pl-0 mr-2 no-background-hover menubtn mbres text-capitalize"
                        text
                        large
                        >Cryptographic Services</v-btn
                      >
                    </div>
                    <div class="col-4">
                      <v-btn
                        to="data-structure-services"
                        :ripple="false"
                        class="justify-start pl-0 mr-2 no-background-hover menubtn mbres text-capitalize"
                        text
                        large
                        >Data Structure Services</v-btn
                      >
                    </div>
                    <div class="col-4">
                      <v-btn
                        to="GO-services"
                        :ripple="false"
                        class="justify-start pl-0 mr-2 no-background-hover menubtn mbres text-capitalize"
                        text
                        large
                        >Go Services</v-btn
                      >
                    </div>
                  </div>
                  <div class="col-xl-3 pa-0 d-none d-xl-block">
                    <div class="paddingmainclass">
                      <div
                        class="nnitimage block-background-image"
                        style="background-image: url('static/img/tools_header.jpg')"
                      ></div>
                    </div>
                  </div>
                </div>
              </v-list>
            </v-menu>

            <v-btn
              to="/devops-services"
              :ripple="false"
              class="no-background-hover headerbtn mbres text-capitalize"
              text
              large
              >Devops Services</v-btn
            >

            <v-btn
              to="/cloud-services"
              :ripple="false"
              class="no-background-hover headerbtn mbres text-capitalize"
              text
              large
              >Cloud Services
            </v-btn>

            <v-btn
              to="/job-interview-support"
              :ripple="false"
              class="no-background-hover headerbtn mbres text-capitalize"
              text
              large
              >Job Support Services
            </v-btn>
          </div>
          <div class="header-divider"></div>
        </div>
      </v-app-bar>

      <v-navigation-drawer
        class="left-nav pt-0 resMobHeader"
        v-bind:style="drawer ? 'transform: scaleY(100%)' : 'transform: scaleY(0%)'"
        app
        clipped
        v-model="drawer"
      >
        <v-list nav class="p-0">
          <v-list-group
            :value="false"
            class="d-xl-none group-pl"
            @click="
              mobileMenu.group1_expanded = !mobileMenu.group1_expanded;
              mobileMenu.group2_expanded = false;
            "
          >
            <template v-slot:appendIcon>
              <img
                class="ml-2 left-nav-icon"
                v-bind:style="
                  mobileMenu.group1_expanded
                    ? 'transform: rotate(270deg)'
                    : 'transform: rotate(90deg)'
                "
              />
            </template>
            <template v-slot:activator>
              <v-list-item-title class="text-uppercase font-16px">
                Web Development
              </v-list-item-title>
            </template>

            <v-list-item
              sub-group
              link
              class="d-xl-none"
              to="/front-end-development-services"
            >
              <v-list-item-content>
                <v-list-item-title class="text-uppercase font-16px">
                  Frontend Development Services
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item
              sub-group
              link
              class="d-xl-none"
              to="/back-end-development-services"
            >
              <v-list-item-content>
                <v-list-item-title class="text-uppercase font-16px">
                  Backend Development Services
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item
              sub-group
              link
              class="d-xl-none"
              to="/database-management-services"
            >
              <v-list-item-content>
                <v-list-item-title class="text-uppercase font-16px">
                  DataBase Management Services
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item
              sub-group
              link
              class="d-xl-none"
              to="/responsive-design-services"
            >
              <v-list-item-content>
                <v-list-item-title class="text-uppercase font-16px">
                  Responsive Design Services
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item
              sub-group
              link
              class="d-xl-none"
              to="/progressive-web-apps-services"
            >
              <v-list-item-content>
                <v-list-item-title class="text-uppercase font-16px">
                  Progressive Web Apps (PWA) Services
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item sub-group link class="d-xl-none" to="/e-commerce-services">
              <v-list-item-content>
                <v-list-item-title class="text-uppercase font-16px">
                  E-Commerce Solutions Services
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>

          <v-list-group
            :value="false"
            class="d-xl-none group-pl"
            @click="
              mobileMenu.group1_expanded = !mobileMenu.group1_expanded;
              mobileMenu.group2_expanded = false;
            "
          >
            <template v-slot:appendIcon>
              <img
                class="ml-2 left-nav-icon"
                v-bind:style="
                  mobileMenu.group1_expanded
                    ? 'transform: rotate(270deg)'
                    : 'transform: rotate(90deg)'
                "
              />
            </template>
            <template v-slot:activator>
              <v-list-item-title class="text-uppercase font-16px">
                Mobile App Development
              </v-list-item-title>
            </template>

            <v-list-item sub-group link class="d-xl-none" to="/ios-development-services">
              <v-list-item-content>
                <v-list-item-title class="text-uppercase font-16px">
                  IOS Development Services
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item
              sub-group
              link
              class="d-xl-none"
              to="/android-development-services"
            >
              <v-list-item-content>
                <v-list-item-title class="text-uppercase font-16px">
                  Android Development Services
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item
              sub-group
              link
              class="d-xl-none"
              to="/cross-platform-development-services"
            >
              <v-list-item-content>
                <v-list-item-title class="text-uppercase font-16px">
                  Cross Platform Development Services
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>

          <v-list-group
            :value="false"
            class="d-xl-none group-pl"
            @click="
              mobileMenu.group1_expanded = !mobileMenu.group1_expanded;
              mobileMenu.group2_expanded = false;
            "
          >
            <template v-slot:appendIcon>
              <img
                class="ml-2 left-nav-icon"
                v-bind:style="
                  mobileMenu.group1_expanded
                    ? 'transform: rotate(270deg)'
                    : 'transform: rotate(90deg)'
                "
              />
            </template>
            <template v-slot:activator>
              <v-list-item-title class="text-uppercase font-16px">
                Technical Services
              </v-list-item-title>
            </template>

            <v-list-item sub-group link class="d-xl-none" to="/IT-services">
              <v-list-item-content>
                <v-list-item-title class="text-uppercase font-16px">
                  IT Services
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item sub-group link class="d-xl-none" to="/computer-science-services">
              <v-list-item-content>
                <v-list-item-title class="text-uppercase font-16px">
                  Computer Science Services
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item sub-group link class="d-xl-none" to="/computer-network-services">
              <v-list-item-content>
                <v-list-item-title class="text-uppercase font-16px">
                  Computer Network Services
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item sub-group link class="d-xl-none" to="/matlab-services">
              <v-list-item-content>
                <v-list-item-title class="text-uppercase font-16px">
                  Matlab Services
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item sub-group link class="d-xl-none" to="/data-science-services">
              <v-list-item-content>
                <v-list-item-title class="text-uppercase font-16px">
                  Data Science Services
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item sub-group link class="d-xl-none" to="/tableau-services">
              <v-list-item-content>
                <v-list-item-title class="text-uppercase font-16px">
                  Tableau Services
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item sub-group link class="d-xl-none" to="/block-chain-services">
              <v-list-item-content>
                <v-list-item-title class="text-uppercase font-16px">
                  BlockChain Services
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item sub-group link class="d-xl-none" to="/spss-services">
              <v-list-item-content>
                <v-list-item-title class="text-uppercase font-16px">
                  SPSS Services
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item
              sub-group
              link
              class="d-xl-none"
              to="/database-management-services"
            >
              <v-list-item-content>
                <v-list-item-title class="text-uppercase font-16px">
                  Database Management Services
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item sub-group link class="d-xl-none" to="/cloud-computing-services">
              <v-list-item-content>
                <v-list-item-title class="text-uppercase font-16px">
                  Cloud Computing Services
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item sub-group link class="d-xl-none" to="/network-security-services">
              <v-list-item-content>
                <v-list-item-title class="text-uppercase font-16px">
                  Network Security Services
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item sub-group link class="d-xl-none" to="/machine-learning-services">
              <v-list-item-content>
                <v-list-item-title class="text-uppercase font-16px">
                  Machine Learning Services
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item
              sub-group
              link
              class="d-xl-none"
              to="/artificial-intelligence-services"
            >
              <v-list-item-content>
                <v-list-item-title class="text-uppercase font-16px">
                  Artificial Intelligence Services
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item sub-group link class="d-xl-none" to="/data-analysis-services">
              <v-list-item-content>
                <v-list-item-title class="text-uppercase font-16px">
                  Data Analysis Services
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item sub-group link class="d-xl-none" to="/excel-services">
              <v-list-item-content>
                <v-list-item-title class="text-uppercase font-16px">
                  Excel Services
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item sub-group link class="d-xl-none" to="/cyber-security-services">
              <v-list-item-content>
                <v-list-item-title class="text-uppercase font-16px">
                  Cyber Security Services
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item sub-group link class="d-xl-none" to="/database-design-services">
              <v-list-item-content>
                <v-list-item-title class="text-uppercase font-16px">
                  Database Design Services
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item sub-group link class="d-xl-none" to="/IOT-services">
              <v-list-item-content>
                <v-list-item-title class="text-uppercase font-16px">
                  IOT Services
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item
              sub-group
              link
              class="d-xl-none"
              to="/data-visualization-services"
            >
              <v-list-item-content>
                <v-list-item-title class="text-uppercase font-16px">
                  Data Visualization Services
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item sub-group link class="d-xl-none" to="/power-bi-services">
              <v-list-item-content>
                <v-list-item-title class="text-uppercase font-16px">
                  Power BI Services
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item
              sub-group
              link
              class="d-xl-none"
              to="/content-management-services"
            >
              <v-list-item-content>
                <v-list-item-title class="text-uppercase font-16px">
                  Content Management Services
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>

          <v-list-group
            :value="false"
            class="d-xl-none group-pl"
            @click="
              mobileMenu.group1_expanded = !mobileMenu.group1_expanded;
              mobileMenu.group2_expanded = false;
            "
          >
            <template v-slot:appendIcon>
              <img
                class="ml-2 left-nav-icon"
                v-bind:style="
                  mobileMenu.group1_expanded
                    ? 'transform: rotate(270deg)'
                    : 'transform: rotate(90deg)'
                "
              />
            </template>
            <template v-slot:activator>
              <v-list-item-title class="text-uppercase font-16px">
                Programming
              </v-list-item-title>
            </template>

            <v-list-item
              sub-group
              link
              class="d-xl-none"
              to="/python-programming-services"
            >
              <v-list-item-content>
                <v-list-item-title class="text-uppercase font-16px">
                  Python Programming Services
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item sub-group link class="d-xl-none" to="/C-programming-services">
              <v-list-item-content>
                <v-list-item-title class="text-uppercase font-16px">
                  C Programming Services
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item sub-group link class="d-xl-none" to="/java-services">
              <v-list-item-content>
                <v-list-item-title class="text-uppercase font-16px">
                  Java Services
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item sub-group link class="d-xl-none" to="/R-services">
              <v-list-item-content>
                <v-list-item-title class="text-uppercase font-16px">
                  R Services
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item sub-group link class="d-xl-none" to="/javascript-services">
              <v-list-item-content>
                <v-list-item-title class="text-uppercase font-16px">
                  Javascript Services
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item sub-group link class="d-xl-none" to="/coding-services">
              <v-list-item-content>
                <v-list-item-title class="text-uppercase font-16px">
                  Coding Services
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item sub-group link class="d-xl-none" to="/cryptographic-services">
              <v-list-item-content>
                <v-list-item-title class="text-uppercase font-16px">
                  Cryptographic Services
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item sub-group link class="d-xl-none" to="/data-structure-services">
              <v-list-item-content>
                <v-list-item-title class="text-uppercase font-16px">
                  Data Structure Services
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item sub-group link class="d-xl-none" to="/GO-services">
              <v-list-item-content>
                <v-list-item-title class="text-uppercase font-16px">
                  Go Services
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>

          <v-list-item class="d-xl-none" to="/devops-services">
            <v-list-item-content>
              <v-list-item-title class="text-uppercase font-16px">
                Devops
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item class="d-xl-none" to="/cloud-services">
            <v-list-item-content>
              <v-list-item-title class="text-uppercase font-16px">
                Cloud Services
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item class="d-xl-none" to="/job-interview-support">
            <v-list-item-content>
              <v-list-item-title class="text-uppercase font-16px">
                JOb Support Services
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main class="mainmobile mobileFooter pt-16 mb-12 mb-md-0">
        <router-view class="mb-12"></router-view>
      </v-main>
      <div class="sticky-icon">
        <a href="https://wa.me/7838481871" target="_blank">
          <img src="./assets/whatsapp.png" width="60px" alt="Sticky Icon" />
        </a>
      </div>
      <v-bottom-navigation
        :input-value="footdrawer"
        scroll-target="#scroll-threshold-example"
        class="pt-1 pl-md-8 text-left mobileForm"
        scroll-threshold="500"
        app
        absolute
        hide-on-scroll
        text
        horizontal
        style="height: 240px; background-color: var(--blue); color: white"
      >
        <div class="col-lg-3 ml-5">
          <div class="footer mt-1" v-bind:class="{ open: drawer }">
            <u class="px-6 footerbtn text-white no-background-hover">Quick Links:</u>
            <br />
            <a
              :ripple="false"
              text
              class="mt-6 px-6 footerbtn text-white no-background-hover"
              large
              style="text-decoration: none"
              @click="$router.push('/')"
              >Home</a
            >
            <br />
            <a
              :ripple="false"
              text
              style="text-decoration: none"
              class="px-6 footerbtn text-white no-background-hover"
              @click="$router.push('/about-us')"
              >About Us</a
            >
            <br />
            <!-- <a
              @click="$router.push('/sample')"
              :ripple="false"
              text
              style="text-decoration: none"
              class="px-6 footerbtn text-white no-background-hover"
              >Sample</a
            >
            <br />

            <a
              @click="$router.push('/experts')"
              :ripple="false"
              text
              style="text-decoration: none"
              class="px-6 footerbtn text-white no-background-hover"
              >Experts</a
            > -->
            <!-- <br /> -->
            <a
              @click="$router.push('/contact-us')"
              :ripple="false"
              text
              style="text-decoration: none"
              class="px-6 footerbtn text-white no-background-hover"
              >Contact Us</a
            >
            <br />
            <a
              @click="$router.push('/blog')"
              :ripple="false"
              text
              style="text-decoration: none"
              class="px-6 footerbtn text-white no-background-hover"
              >Blog</a
            >
            <br />
            <!-- <v-btn href="/careers" :ripple="false"  text class="py-6 footerbtn text-uppercase no-background-hover">CAREERS</v-btn> -->
            <a
              @click="$router.push('/faqs')"
              :ripple="false"
              text
              style="text-decoration: none"
              class="px-6 footerbtn text-white no-background-hover"
              >Faqs</a
            >
            <br />
            <a
              @click="$router.push('/testimonials')"
              :ripple="false"
              text
              style="text-decoration: none"
              class="px-6 footerbtn text-white no-background-hover"
              >Testimonials</a
            >
            <br />
          </div>
        </div>
        <div class="col-lg-3">
          <div class="text-white mt-2 ml-5">
            <u class="footerbtn text-white no-background-hover">Contact Us:</u>
            <br />
            <br />

            <div href="/">
              <img src="./assets/phonelogo.png" width="30px" class="mr-3" /><span
                class="text-white"
                >+91-9650405268</span
              >
            </div>
            <br />
            <div href="/">
              <img src="./assets/emailassignment.png" width="35px" class="mr-3" /><span
                class="text-white"
                >nimish@nnitsoft.com</span
              >
            </div>
            <br />
            <!-- <div href="/">
              <img src="./assets/emaillogo.png" width="35px" class="mr-3" /><span
                class="text-white"
                >help.NNIT SOFT@gmail.com</span
              >
            </div> -->
          </div>
        </div>

        <div class="col-lg-3">
          <div class="text-white mt-2 ml-5" style="text-align: center">
            <u class="footerbtn text-white no-background-hover ml-md-20"
              >Social Media Links:</u
            >
            <br />

            <a href="/" class="mt-5 mr-5"
              ><img src="./assets/facebooklogo.png" width="32px"
            /></a>
            <a href="/" class="ml-3 mt-5 mr-5 mb-2"
              ><img src="./assets/twitterlogo.png" width="32px"
            /></a>
            <a href="/" class="ml-3 mt-5 mr-5"
              ><img src="./assets/instagramlogo.png" width="32px"
            /></a>
            <a href="/" class="ml-3 mt-5 mr-5"
              ><img src="./assets/linkedinlogo.png" width="32px"
            /></a>
            <p class="mt-5 text-white" style="text-align: center">
              NNIT SOFT Pvt Ltd<br />
              F 103, Adani M2k oyster grande<br />
              Gurugram , Sector 102,<br />
              122505<br />
              India
            </p>
          </div>
        </div>
        <div class="col-lg-3 mt-2 mr-2">
          <u class="ml-md-13">Special Offers*</u>
          <p class="text-white mt-3 ml-md-13">Subscribe to avail our special offers</p>
          <form class="center-content">
            <label for="email" class="mt-4">Email Address*</label>
            <input type="email" id="email" name="email" class="border" required />
            <div class="center-content border w-100 mt-5">
              <button type="submit">Subscribe</button>
            </div>
          </form>
        </div>
      </v-bottom-navigation>
      <!-- <p class="text-center">@2023 NNIT SOFT All CopyRights Reserved</p> -->
    </v-app>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      drawer: null,
      footdrawer: true,

      mobileMenu: {
        group1_expanded: false,
        group2_expanded: false,
      },
    };
  },
};
</script>
<style scoped>
.contact {
  box-shadow: none !important;
  background-color: #fff !important;
  @media (max-width: 1500px) {
    display: none;
  }
}

.container {
  border: 1px solid #ccc; /* Border style */
  padding: 10px; /* Add some padding for spacing */
  border-radius: 5px; /* Add rounded corners */
}
.center-content {
  text-align: center;
}
</style>

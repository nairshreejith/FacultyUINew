<template>
  <div id="app">
    <v-app>
      <v-app-bar
        app
        clipped-left
        style="height: auto; border-bottom: #003a60 solid d-xl-none"
        class="flex-grow-0"
      >
        <div class="row pl-8 resMobHeader">
          <div class="pb-0">
            <div class="row justify-content-between align-self-center menu-bar">
              <div class="top-bar-title scroll-content">
                Get upto 60% discount on your first Assignment!!!
              </div>

              <div class="top-Left-wrap">
                <img
                  class="hamburger d-md-none"
                  src="./assets/hamburger.png"
                  @click.stop="drawer = !drawer"
                />

                <div class="col-md-12 pl-16 px-0 py-0 justify-content-between">
                  <a href="/"
                    ><img
                      class="mb-4 kb-header-log"
                      src="./assets/assignmentwalalogo.png"
                      width="150px"
                  /></a>

                  <v-btn class="pl-0 contact no-background-hover">
                    <div class="pl-0 mr-5 ml-5">
                      <a href="/"
                        ><img src="./assets/phonelogo.png" width="25px" />
                        <span class="pl-3"> +91-83880 88212</span></a
                      >
                      <a class="pl-3 text-lowercase" href="/"
                        ><img src="./assets/emailassignment.png" width="25px" />
                        <span class="pl-3"> help@assignmentwallah.com</span></a
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
                  <v-btn
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
                  >

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

                  <!-- <v-btn to="/careers"  :ripple="false" class="mr-2 no-background-hover headerbtn mbres text-capitalize" text large>Careers</v-btn> -->
                </div>
              </div>
              <div class="row col-7 pb-0 align-self-center">
                <div
                  class="row justify-content-end align-self-center align-self-md-end pr-3 right-menu-bar"
                ></div>
              </div>
            </div>
          </div>
          <div class="col-md-12 pl-4 ml-md-16 px-0 py-0 justify-content-between">
            <v-menu
              class="menu-content"
              :close-on-content-click="false"
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
                  to="/assignment"
                  :ripple="false"
                  class="pl-0 no-background-hover headerbtn mbres text-capitalize"
                  text
                  large
                  >Assignment Help
                </v-btn>
              </template>
              <v-list class="pt-0 pb-0">
                <div class="row menu-row">
                  <div class="pl-8 pl-md-12 col-12 col-xl-9 pt-0 pb-13 row pr-0">
                    <div class="col-4">
                      <v-btn
                        :href="`best-assignment`"
                        :ripple="false"
                        class="justify-start pl-0 mr-2 no-background-hover menubtn mbres text-capitalize"
                        text
                        large
                        >Best Assignment Help</v-btn
                      >
                    </div>
                    <div class="col-4">
                      <v-btn
                        :href="`student-assignment`"
                        :ripple="false"
                        class="justify-start pl-0 mr-2 no-background-hover menubtn mbres text-capitalize"
                        text
                        large
                        >Student Assignment Help</v-btn
                      >
                    </div>
                    <div class="col-4">
                      <v-btn
                        :href="`urgent-assignment`"
                        :ripple="false"
                        class="justify-start pl-0 mr-2 no-background-hover menubtn mbres text-capitalize"
                        text
                        large
                        >Urgent Assignment Help</v-btn
                      >
                    </div>
                    <div class="col-4">
                      <v-btn
                        :href="`cheap-assignment`"
                        :ripple="false"
                        class="justify-start pl-0 mr-2 no-background-hover menubtn mbres text-capitalize"
                        text
                        large
                        >Cheap Assignment Help</v-btn
                      >
                    </div>
                    <div class="col-4">
                      <v-btn
                        :href="`academic-writing`"
                        :ripple="false"
                        class="justify-start pl-0 mr-2 no-background-hover menubtn mbres text-capitalize"
                        text
                        large
                        >Academic Writing Help</v-btn
                      >
                    </div>
                    <div class="col-4">
                      <v-btn
                        :href="`all-assignment`"
                        :ripple="false"
                        class="justify-start pl-0 mr-2 no-background-hover menubtn mbres text-capitalize"
                        text
                        large
                        >All Assignment Help</v-btn
                      >
                    </div>
                    <div class="col-4">
                      <v-btn
                        :href="`online-assignment`"
                        :ripple="false"
                        class="justify-start pl-0 mr-2 no-background-hover menubtn mbres text-capitalize"
                        text
                        large
                        >Online Assignment Help</v-btn
                      >
                    </div>
                    <div class="col-4">
                      <v-btn
                        :href="`business-management-assignment`"
                        :ripple="false"
                        class="justify-start pl-0 mr-2 no-background-hover menubtn mbres text-capitalize"
                        text
                        large
                        >Business Management Assignment Help</v-btn
                      >
                    </div>
                    <div class="col-4">
                      <v-btn
                        :href="`project-management-assignment`"
                        :ripple="false"
                        class="justify-start pl-0 mr-2 no-background-hover menubtn mbres text-capitalize"
                        text
                        large
                        >Project Management Assignment Help</v-btn
                      >
                    </div>
                    <div class="col-4">
                      <v-btn
                        :href="`human-resource-assignment`"
                        :ripple="false"
                        class="justify-start pl-0 mr-2 no-background-hover menubtn mbres text-capitalize"
                        text
                        large
                        >Human Resource Assignment Help</v-btn
                      >
                    </div>
                    <div class="col-4">
                      <v-btn
                        :href="`economic-assignment`"
                        :ripple="false"
                        class="justify-start pl-0 mr-2 no-background-hover menubtn mbres text-capitalize"
                        text
                        large
                        >Economic Assignment Help</v-btn
                      >
                    </div>
                    <div class="col-4">
                      <v-btn
                        :href="`hospitality-assignment`"
                        :ripple="false"
                        class="justify-start pl-0 mr-2 no-background-hover menubtn mbres text-capitalize"
                        text
                        large
                        >Hospitality Assignment Help</v-btn
                      >
                    </div>
                    <div class="col-4">
                      <v-btn
                        :href="`marketing-assignment`"
                        :ripple="false"
                        class="justify-start pl-0 mr-2 no-background-hover menubtn mbres text-capitalize"
                        text
                        large
                        >Marketing Assignment Help</v-btn
                      >
                    </div>
                    <div class="col-4">
                      <v-btn
                        :href="`healthcare-management`"
                        :ripple="false"
                        class="justify-start pl-0 mr-2 no-background-hover menubtn mbres text-capitalize"
                        text
                        large
                        >Healthcare Management Help</v-btn
                      >
                    </div>
                    <div class="col-4">
                      <v-btn
                        :href="`free-assignment`"
                        :ripple="false"
                        class="justify-start pl-0 mr-2 no-background-hover menubtn mbres text-capitalize"
                        text
                        large
                        >Free Assignment Help</v-btn
                      >
                    </div>
                  </div>
                  <div class="col-xl-3 pa-0 d-none d-xl-block">
                    <div class="sixteentonine">
                      <div
                        class="kachelimage block-background-image"
                        style="background-image: url('static/img/tools_header.jpg')"
                      ></div>
                    </div>
                  </div>
                </div>
              </v-list>
            </v-menu>

            <v-menu
              class="menu-content"
              :close-on-content-click="false"
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
                  >Technical Assignment
                </v-btn>
              </template>
              <v-list class="pt-0 pb-0">
                <div class="row menu-row">
                  <div class="pl-8 pl-md-12 col-12 col-xl-9 pt-0 pb-13 row pr-0">
                    <div class="col-4">
                      <v-btn
                        :href="`IT-assignment`"
                        :ripple="false"
                        class="justify-start pl-0 mr-2 no-background-hover menubtn mbres text-capitalize"
                        text
                        large
                        >IT Assignment Help</v-btn
                      >
                    </div>
                    <div class="col-4">
                      <v-btn
                        :href="`computer-science-assignment`"
                        :ripple="false"
                        class="justify-start pl-0 mr-2 no-background-hover menubtn mbres text-capitalize"
                        text
                        large
                        >Computer Science Assignment Help</v-btn
                      >
                    </div>
                    <div class="col-4">
                      <v-btn
                        :href="`computer-network-assignment`"
                        :ripple="false"
                        class="justify-start pl-0 mr-2 no-background-hover menubtn mbres text-capitalize"
                        text
                        large
                        >Computer Network Assignment Help</v-btn
                      >
                    </div>
                    <div class="col-4">
                      <v-btn
                        :href="`technical-assignment`"
                        :ripple="false"
                        class="justify-start pl-0 mr-2 no-background-hover menubtn mbres text-capitalize"
                        text
                        large
                        >Technical Assignment Help</v-btn
                      >
                    </div>
                    <div class="col-4">
                      <v-btn
                        :href="`matlab-assignment`"
                        :ripple="false"
                        class="justify-start pl-0 mr-2 no-background-hover menubtn mbres text-capitalize"
                        text
                        large
                        >Matlab Assignment Help</v-btn
                      >
                    </div>
                    <div class="col-4">
                      <v-btn
                        :href="`tableau-assignment`"
                        :ripple="false"
                        class="justify-start pl-0 mr-2 no-background-hover menubtn mbres text-capitalize"
                        text
                        large
                        >Tableau Assignment Help</v-btn
                      >
                    </div>
                    <div class="col-4">
                      <v-btn
                        :href="`spss-assignment`"
                        :ripple="false"
                        class="justify-start pl-0 mr-2 no-background-hover menubtn mbres text-capitalize"
                        text
                        large
                        >SPSS Assignment Help</v-btn
                      >
                    </div>
                    <div class="col-4">
                      <v-btn
                        :href="`database-management-assignment`"
                        :ripple="false"
                        class="justify-start pl-0 mr-2 no-background-hover menubtn mbres text-capitalize"
                        text
                        large
                        >Database Management Assignment Help</v-btn
                      >
                    </div>
                    <div class="col-4">
                      <v-btn
                        :href="`cloud-computing-assignment`"
                        :ripple="false"
                        class="justify-start pl-0 mr-2 no-background-hover menubtn mbres text-capitalize"
                        text
                        large
                        >Cloud Computing Assignment Help</v-btn
                      >
                    </div>
                    <div class="col-4">
                      <v-btn
                        :href="`network-security-assignment`"
                        :ripple="false"
                        class="justify-start pl-0 mr-2 no-background-hover menubtn mbres text-capitalize"
                        text
                        large
                        >Network Security Assignment Help</v-btn
                      >
                    </div>
                    <div class="col-4">
                      <v-btn
                        :href="`android-development-assignment`"
                        :ripple="false"
                        class="justify-start pl-0 mr-2 no-background-hover menubtn mbres text-capitalize"
                        text
                        large
                        >Android Development Assignment Help</v-btn
                      >
                    </div>
                    <div class="col-4">
                      <v-btn
                        :href="`machine-learning-assignment`"
                        :ripple="false"
                        class="justify-start pl-0 mr-2 no-background-hover menubtn mbres text-capitalize"
                        text
                        large
                        >Machine Learning Assignment Help</v-btn
                      >
                    </div>
                    <div class="col-4">
                      <v-btn
                        :href="`artificial-intelligence-assignment`"
                        :ripple="false"
                        class="justify-start pl-0 mr-2 no-background-hover menubtn mbres text-capitalize"
                        text
                        large
                        >Artificial Intelligence Assignment Help</v-btn
                      >
                    </div>
                    <div class="col-4">
                      <v-btn
                        :href="`data-analysis-assignment`"
                        :ripple="false"
                        class="justify-start pl-0 mr-2 no-background-hover menubtn mbres text-capitalize"
                        text
                        large
                        >Data Analysis Assignment Help</v-btn
                      >
                    </div>
                    <div class="col-4">
                      <v-btn
                        :href="`excel-assignment`"
                        :ripple="false"
                        class="justify-start pl-0 mr-2 no-background-hover menubtn mbres text-capitalize"
                        text
                        large
                        >Excel Assignment Help</v-btn
                      >
                    </div>
                    <div class="col-4">
                      <v-btn
                        :href="`cyber-security`"
                        :ripple="false"
                        class="justify-start pl-0 mr-2 no-background-hover menubtn mbres text-capitalize"
                        text
                        large
                        >Cyber Security Assignment Help</v-btn
                      >
                    </div>
                    <div class="col-4">
                      <v-btn
                        :href="`database-design-assignment`"
                        :ripple="false"
                        class="justify-start pl-0 mr-2 no-background-hover menubtn mbres text-capitalize"
                        text
                        large
                        >Database Design Assignment Help</v-btn
                      >
                    </div>
                    <div class="col-4">
                      <v-btn
                        :href="`web-development-assignment`"
                        :ripple="false"
                        class="justify-start pl-0 mr-2 no-background-hover menubtn mbres text-capitalize"
                        text
                        large
                        >Web Development Assignment Help</v-btn
                      >
                    </div>
                    <div class="col-4">
                      <v-btn
                        :href="`IOT-assignment`"
                        :ripple="false"
                        class="justify-start pl-0 mr-2 no-background-hover menubtn mbres text-capitalize"
                        text
                        large
                        >IOT Assignment Help</v-btn
                      >
                    </div>
                    <div class="col-4">
                      <v-btn
                        :href="`data-visualization-assignment`"
                        :ripple="false"
                        class="justify-start pl-0 mr-2 no-background-hover menubtn mbres text-capitalize"
                        text
                        large
                        >Data Visualization Assignment Help</v-btn
                      >
                    </div>
                    <div class="col-4">
                      <v-btn
                        :href="`power-bi-assignment`"
                        :ripple="false"
                        class="justify-start pl-0 mr-2 no-background-hover menubtn mbres text-capitalize"
                        text
                        large
                        >Power BI Assignment Help</v-btn
                      >
                    </div>
                  </div>
                  <div class="col-xl-3 pa-0 d-none d-xl-block">
                    <div class="sixteentonine">
                      <div
                        class="kachelimage block-background-image"
                        style="background-image: url('static/img/tools_header.jpg')"
                      ></div>
                    </div>
                  </div>
                </div>
              </v-list>
            </v-menu>

            <v-btn
              to="/dissertation"
              :ripple="false"
              class="no-background-hover headerbtn mbres text-capitalize"
              text
              large
              >Dissertation
            </v-btn>

            <v-menu
              class="menu-content"
              :close-on-content-click="false"
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
                  to="/programming"
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
                        :href="`python-programming`"
                        :ripple="false"
                        class="justify-start pl-0 mr-2 no-background-hover menubtn mbres text-capitalize"
                        text
                        large
                        >Python Programming Assignment Help</v-btn
                      >
                    </div>
                    <div class="col-4">
                      <v-btn
                        :href="`C-programming-assignment`"
                        :ripple="false"
                        class="justify-start pl-0 mr-2 no-background-hover menubtn mbres text-capitalize"
                        text
                        large
                        >C Programming Assignment Help</v-btn
                      >
                    </div>
                    <div class="col-4">
                      <v-btn
                        :href="`java-assignment`"
                        :ripple="false"
                        class="justify-start pl-0 mr-2 no-background-hover menubtn mbres text-capitalize"
                        text
                        large
                        >Java Assignment Help</v-btn
                      >
                    </div>
                    <div class="col-4">
                      <v-btn
                        :href="`R-assignment`"
                        :ripple="false"
                        class="justify-start pl-0 mr-2 no-background-hover menubtn mbres text-capitalize"
                        text
                        large
                        >R Assignment Help</v-btn
                      >
                    </div>
                    <div class="col-4">
                      <v-btn
                        :href="`javascript-assignment`"
                        :ripple="false"
                        class="justify-start pl-0 mr-2 no-background-hover menubtn mbres text-capitalize"
                        text
                        large
                        >Javascript Assignment Help</v-btn
                      >
                    </div>
                    <div class="col-4">
                      <v-btn
                        :href="`coding-assignment`"
                        :ripple="false"
                        class="justify-start pl-0 mr-2 no-background-hover menubtn mbres text-capitalize"
                        text
                        large
                        >Coding Assignment Help</v-btn
                      >
                    </div>
                    <div class="col-4">
                      <v-btn
                        :href="`cryptographic-assignment`"
                        :ripple="false"
                        class="justify-start pl-0 mr-2 no-background-hover menubtn mbres text-capitalize"
                        text
                        large
                        >Cryptographic Assignment Help</v-btn
                      >
                    </div>
                    <div class="col-4">
                      <v-btn
                        :href="`data-structure-assignment`"
                        :ripple="false"
                        class="justify-start pl-0 mr-2 no-background-hover menubtn mbres text-capitalize"
                        text
                        large
                        >Data Structure Assignment Help</v-btn
                      >
                    </div>
                    <div class="col-4">
                      <v-btn
                        :href="`GO-assignment`"
                        :ripple="false"
                        class="justify-start pl-0 mr-2 no-background-hover menubtn mbres text-capitalize"
                        text
                        large
                        >Go Assignment Help</v-btn
                      >
                    </div>
                  </div>
                  <div class="col-xl-3 pa-0 d-none d-xl-block">
                    <div class="sixteentonine">
                      <div
                        class="kachelimage block-background-image"
                        style="background-image: url('static/img/tools_header.jpg')"
                      ></div>
                    </div>
                  </div>
                </div>
              </v-list>
            </v-menu>

            <v-menu
              class="menu-content"
              :close-on-content-click="false"
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
                  to="/engineering-assignment"
                  :ripple="false"
                  class="no-background-hover headerbtn mbres text-capitalize"
                  text
                  large
                  >Engineering Assignment
                </v-btn>
              </template>
              <v-list class="pt-0 pb-0">
                <div class="row menu-row">
                  <div class="pl-8 pl-md-12 col-12 col-xl-9 pt-0 pb-13 row pr-0">
                    <div class="col-4">
                      <v-btn
                        :href="`software-engineering-assignment`"
                        :ripple="false"
                        class="justify-start pl-0 mr-2 no-background-hover menubtn mbres text-capitalize"
                        text
                        large
                        >Software Engineering Assignment Help</v-btn
                      >
                    </div>
                    <div class="col-4">
                      <v-btn
                        :href="`statistics-assignment`"
                        :ripple="false"
                        class="justify-start pl-0 mr-2 no-background-hover menubtn mbres text-capitalize"
                        text
                        large
                        >Statistics Assignment Help</v-btn
                      >
                    </div>
                    <div class="col-4">
                      <v-btn
                        :href="`math-assignment`"
                        :ripple="false"
                        class="justify-start pl-0 mr-2 no-background-hover menubtn mbres text-capitalize"
                        text
                        large
                        >Math Assignment Help</v-btn
                      >
                    </div>
                    <div class="col-4">
                      <v-btn
                        :href="`digital-electronics-assignment`"
                        :ripple="false"
                        class="justify-start pl-0 mr-2 no-background-hover menubtn mbres text-capitalize"
                        text
                        large
                        >Digital Electronics Assignment Help</v-btn
                      >
                    </div>
                    <div class="col-4">
                      <v-btn
                        :href="`engineering-assignment`"
                        :ripple="false"
                        class="justify-start pl-0 mr-2 no-background-hover menubtn mbres text-capitalize"
                        text
                        large
                        >Engineering Assignment Help</v-btn
                      >
                    </div>
                    <div class="col-4">
                      <v-btn
                        :href="`electrical-engineering-assignment`"
                        :ripple="false"
                        class="justify-start pl-0 mr-2 no-background-hover menubtn mbres text-capitalize"
                        text
                        large
                        >Electrical Engineering Assignment Help</v-btn
                      >
                    </div>
                    <div class="col-4">
                      <v-btn
                        :href="`civil-engineering-assignment`"
                        :ripple="false"
                        class="justify-start pl-0 mr-2 no-background-hover menubtn mbres text-capitalize"
                        text
                        large
                        >Civil Engineering Assignment Help</v-btn
                      >
                    </div>
                  </div>
                  <div class="col-xl-3 pa-0 d-none d-xl-block">
                    <div class="sixteentonine">
                      <div
                        class="kachelimage block-background-image"
                        style="background-image: url('static/img/tools_header.jpg')"
                      ></div>
                    </div>
                  </div>
                </div>
              </v-list>
            </v-menu>

            <v-btn
              to="/essay-writing"
              :ripple="false"
              class="no-background-hover headerbtn mbres text-capitalize"
              text
              large
              >Essay Writing</v-btn
            >

            <v-menu
              class="menu-content"
              :close-on-content-click="false"
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
                  to="/hots"
                  :ripple="false"
                  class="no-background-hover headerbtn mbres text-capitalize"
                  text
                  large
                  >Hots'
                </v-btn>
              </template>
              <v-list class="pt-0 pb-0">
                <div class="row menu-row">
                  <div class="pl-8 pl-md-12 col-12 col-xl-9 pt-0 pb-13 row pr-0">
                    <div class="col-4">
                      <v-btn
                        :href="`digital-marketing-assignment`"
                        :ripple="false"
                        class="justify-start pl-0 mr-2 no-background-hover menubtn mbres text-capitalize"
                        text
                        large
                        >Digital Marketing Assignment Help</v-btn
                      >
                    </div>
                    <div class="col-4">
                      <v-btn
                        :href="`strategic-management-assignment`"
                        :ripple="false"
                        class="justify-start pl-0 mr-2 no-background-hover menubtn mbres text-capitalize"
                        text
                        large
                        >Strategic Management Assignment Help</v-btn
                      >
                    </div>
                    <div class="col-4">
                      <v-btn
                        :href="`leadership-assignment`"
                        :ripple="false"
                        class="justify-start pl-0 mr-2 no-background-hover menubtn mbres text-capitalize"
                        text
                        large
                        >Leadership Assignment Help</v-btn
                      >
                    </div>
                    <div class="col-4">
                      <v-btn
                        :href="`risk-management-assignment`"
                        :ripple="false"
                        class="justify-start pl-0 mr-2 no-background-hover menubtn mbres text-capitalize"
                        text
                        large
                        >Risk Management Assignment Help</v-btn
                      >
                    </div>
                    <div class="col-4">
                      <v-btn
                        :href="`supply-chain-assignment`"
                        :ripple="false"
                        class="justify-start pl-0 mr-2 no-background-hover menubtn mbres text-capitalize"
                        text
                        large
                        >Supply Chain Assignment Help</v-btn
                      >
                    </div>
                    <div class="col-4">
                      <v-btn
                        :href="`kali-linux-assignment`"
                        :ripple="false"
                        class="justify-start pl-0 mr-2 no-background-hover menubtn mbres text-capitalize"
                        text
                        large
                        >Kali Linux Assignment Help</v-btn
                      >
                    </div>
                    <div class="col-4">
                      <v-btn
                        :href="`block-chain-assignment`"
                        :ripple="false"
                        class="justify-start pl-0 mr-2 no-background-hover menubtn mbres text-capitalize"
                        text
                        large
                        >Block Chain Assignment Help</v-btn
                      >
                    </div>
                    <div class="col-4">
                      <v-btn
                        :href="`physics-assignment`"
                        :ripple="false"
                        class="justify-start pl-0 mr-2 no-background-hover menubtn mbres text-capitalize"
                        text
                        large
                        >Physics Assignment Help</v-btn
                      >
                    </div>
                    <div class="col-4">
                      <v-btn
                        :href="`chemistry-assignment`"
                        :ripple="false"
                        class="justify-start pl-0 mr-2 no-background-hover menubtn mbres text-capitalize"
                        text
                        large
                        >Chemistry Assignment Help</v-btn
                      >
                    </div>
                  </div>
                  <div class="col-xl-3 pa-0 d-none d-xl-block">
                    <div class="sixteentonine">
                      <div
                        class="kachelimage block-background-image"
                        style="background-image: url('static/img/tools_header.jpg')"
                      ></div>
                    </div>
                  </div>
                </div>
              </v-list>
            </v-menu>

            <v-btn
              to="/thesis"
              :ripple="false"
              class="no-background-hover headerbtn mbres text-capitalize"
              text
              large
              >Resume Making
            </v-btn>

            <v-btn
              to="/thesis"
              :ripple="false"
              class="no-background-hover headerbtn mbres text-capitalize"
              text
              large
              >Offer Zone
            </v-btn>
          </div>
          <div class="header-divider"></div>
        </div>
      </v-app-bar>

      <v-navigation-drawer
        class="left-nav pt-0 pt-lg-16 d-xl-none"
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
                Assignment
              </v-list-item-title>
            </template>

            <v-list-item sub-group link class="d-xl-none" to="/best-assignment">
              <v-list-item-content>
                <v-list-item-title class="text-uppercase font-16px">
                  Best Assignment Help
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item sub-group link class="d-xl-none" to="/student-assignment">
              <v-list-item-content>
                <v-list-item-title class="text-uppercase font-16px">
                  Student Assignment Help
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item sub-group link class="d-xl-none" to="/urgent-assignment">
              <v-list-item-content>
                <v-list-item-title class="text-uppercase font-16px">
                  Urgent Assignment Help
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item sub-group link class="d-xl-none" to="/cheap-assignment">
              <v-list-item-content>
                <v-list-item-title class="text-uppercase font-16px">
                  Cheap Assignment Help
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item sub-group link class="d-xl-none" to="/academic-writing-service">
              <v-list-item-content>
                <v-list-item-title class="text-uppercase font-16px">
                  Academic Assignment Help
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item sub-group link class="d-xl-none" to="/all-assignment">
              <v-list-item-content>
                <v-list-item-title class="text-uppercase font-16px">
                  All Assignment Help
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item sub-group link class="d-xl-none" to="/online-assignment">
              <v-list-item-content>
                <v-list-item-title class="text-uppercase font-16px">
                  Online Assignment Help
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item
              sub-group
              link
              class="d-xl-none"
              to="/business-management-assignment"
            >
              <v-list-item-content>
                <v-list-item-title class="text-uppercase font-16px">
                  Business Management Assignment Help
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item
              sub-group
              link
              class="d-xl-none"
              to="/project-management-assignment"
            >
              <v-list-item-content>
                <v-list-item-title class="text-uppercase font-16px">
                  Project Management Assignment Help
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item sub-group link class="d-xl-none" to="/human-resource-assignment">
              <v-list-item-content>
                <v-list-item-title class="text-uppercase font-16px">
                  Human Resource Assignment Help
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item sub-group link class="d-xl-none" to="/economy-assignment">
              <v-list-item-content>
                <v-list-item-title class="text-uppercase font-16px">
                  Economy Assignment Help
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item sub-group link class="d-xl-none" to="/hospitality-assignment">
              <v-list-item-content>
                <v-list-item-title class="text-uppercase font-16px">
                  Hospitality Assignment Help
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item sub-group link class="d-xl-none" to="/marketing-assignment">
              <v-list-item-content>
                <v-list-item-title class="text-uppercase font-16px">
                  Marketing Assignment Help
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item sub-group link class="d-xl-none" to="/free-assignment">
              <v-list-item-content>
                <v-list-item-title class="text-uppercase font-16px">
                  Free Assignment Help
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
                Technical Assignment
              </v-list-item-title>
            </template>

            <v-list-item sub-group link class="d-xl-none" to="/IT-assignment">
              <v-list-item-content>
                <v-list-item-title class="text-uppercase font-16px">
                  IT Assignment Help
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item
              sub-group
              link
              class="d-xl-none"
              to="/computer-science-assignment"
            >
              <v-list-item-content>
                <v-list-item-title class="text-uppercase font-16px">
                  Computer Science Assignment Help
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item
              sub-group
              link
              class="d-xl-none"
              to="/computer-network-assignment"
            >
              <v-list-item-content>
                <v-list-item-title class="text-uppercase font-16px">
                  Computer Network Assignment Help
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item sub-group link class="d-xl-none" to="/dissertation">
              <v-list-item-content>
                <v-list-item-title class="text-uppercase font-16px">
                  Dissertation Help
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item sub-group link class="d-xl-none" to="/technical-assignment">
              <v-list-item-content>
                <v-list-item-title class="text-uppercase font-16px">
                  Technical Assignment Help
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item sub-group link class="d-xl-none" to="/matlab-assignment">
              <v-list-item-content>
                <v-list-item-title class="text-uppercase font-16px">
                  Matlab Assignment Help
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item sub-group link class="d-xl-none" to="/tableau-assignment">
              <v-list-item-content>
                <v-list-item-title class="text-uppercase font-16px">
                  Tableau Assignemnt Help
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item sub-group link class="d-xl-none" to="/spss-assignment">
              <v-list-item-content>
                <v-list-item-title class="text-uppercase font-16px">
                  SPSS Assignment Help
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item
              sub-group
              link
              class="d-xl-none"
              to="/database-management-assignment"
            >
              <v-list-item-content>
                <v-list-item-title class="text-uppercase font-16px">
                  Database Management Assignment Help
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item
              sub-group
              link
              class="d-xl-none"
              to="/cloud-computing-assignment"
            >
              <v-list-item-content>
                <v-list-item-title class="text-uppercase font-16px">
                  Cloud Computing Assignment Help
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item
              sub-group
              link
              class="d-xl-none"
              to="/network-security-assignment"
            >
              <v-list-item-content>
                <v-list-item-title class="text-uppercase font-16px">
                  Network Security Assignment Help
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item
              sub-group
              link
              class="d-xl-none"
              to="/android-development-assignment"
            >
              <v-list-item-content>
                <v-list-item-title class="text-uppercase font-16px">
                  Android Development Assignment Help
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item
              sub-group
              link
              class="d-xl-none"
              to="/machine-learning-assignment"
            >
              <v-list-item-content>
                <v-list-item-title class="text-uppercase font-16px">
                  Machine Learning Assignment Help
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item
              sub-group
              link
              class="d-xl-none"
              to="/artificial-intelligence-assignment"
            >
              <v-list-item-content>
                <v-list-item-title class="text-uppercase font-16px">
                  Artificial Intelligence Assignment Help
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item sub-group link class="d-xl-none" to="/data-analysis-assignment">
              <v-list-item-content>
                <v-list-item-title class="text-uppercase font-16px">
                  Data Analysis Assignment Help
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item sub-group link class="d-xl-none" to="/tableau-assignment">
              <v-list-item-content>
                <v-list-item-title class="text-uppercase font-16px">
                  Tableau Assignment Help
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item
              sub-group
              link
              class="d-xl-none"
              to="/excel-assignment-assignment"
            >
              <v-list-item-content>
                <v-list-item-title class="text-uppercase font-16px">
                  Excel Assignemnt Help
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item
              sub-group
              link
              class="d-xl-none"
              to="/dcyber-security-assignment"
            >
              <v-list-item-content>
                <v-list-item-title class="text-uppercase font-16px">
                  Cyber Security Assignment Help
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item
              sub-group
              link
              class="d-xl-none"
              to="/database-design-assignment"
            >
              <v-list-item-content>
                <v-list-item-title class="text-uppercase font-16px">
                  Database Design Assignment Help
                </v-list-item-title>
              </v-list-item-content> </v-list-item
            ><v-list-item
              sub-group
              link
              class="d-xl-none"
              to="/web-development-assignment"
            >
              <v-list-item-content>
                <v-list-item-title class="text-uppercase font-16px">
                  Web Development Assignment Help
                </v-list-item-title>
              </v-list-item-content> </v-list-item
            ><v-list-item sub-group link class="d-xl-none" to="/IOT-assignment">
              <v-list-item-content>
                <v-list-item-title class="text-uppercase font-16px">
                  IOT Assignment Help
                </v-list-item-title>
              </v-list-item-content> </v-list-item
            ><v-list-item
              sub-group
              link
              class="d-xl-none"
              to="/data-visualization-assignment"
            >
              <v-list-item-content>
                <v-list-item-title class="text-uppercase font-16px">
                  Data Visualization Assignment Help
                </v-list-item-title>
              </v-list-item-content> </v-list-item
            ><v-list-item sub-group link class="d-xl-none" to="/power-bi-assignment">
              <v-list-item-content>
                <v-list-item-title class="text-uppercase font-16px">
                  Power BI Assignment Help
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>

          <v-list-item class="d-xl-none" to="/thesis">
            <v-list-item-content>
              <v-list-item-title class="text-uppercase font-16px">
                Thesis
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item class="d-xl-none" to="/dissertation">
            <v-list-item-content>
              <v-list-item-title class="text-uppercase font-16px">
                Dissertation
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

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
              to="/python-programming-assignment"
            >
              <v-list-item-content>
                <v-list-item-title class="text-uppercase font-16px">
                  Python Programming Assignment Help
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item sub-group link class="d-xl-none" to="/C-programming-assignment">
              <v-list-item-content>
                <v-list-item-title class="text-uppercase font-16px">
                  C Programming Assignment Help
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item sub-group link class="d-xl-none" to="/java-assignment">
              <v-list-item-content>
                <v-list-item-title class="text-uppercase font-16px">
                  Java Assignment Help
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item sub-group link class="d-xl-none" to="/R-assignment">
              <v-list-item-content>
                <v-list-item-title class="text-uppercase font-16px">
                  R Assignment Help
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item sub-group link class="d-xl-none" to="/javascript-assignment">
              <v-list-item-content>
                <v-list-item-title class="text-uppercase font-16px">
                  Javascript Assignment Help
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item sub-group link class="d-xl-none" to="/coding-assignment">
              <v-list-item-content>
                <v-list-item-title class="text-uppercase font-16px">
                  Coding Assignment Help
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item sub-group link class="d-xl-none" to="/cryptography-assignment">
              <v-list-item-content>
                <v-list-item-title class="text-uppercase font-16px">
                  Cryptographic Assignment Help
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item sub-group link class="d-xl-none" to="/data-structure-assignment">
              <v-list-item-content>
                <v-list-item-title class="text-uppercase font-16px">
                  Data Structure Assignment Help
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item sub-group link class="d-xl-none" to="/GO-assignment">
              <v-list-item-content>
                <v-list-item-title class="text-uppercase font-16px">
                  Go Assignment Help
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
                Engineering Assignment
              </v-list-item-title>
            </template>

            <v-list-item
              sub-group
              link
              class="d-xl-none"
              to="/software-engineering-assignment"
            >
              <v-list-item-content>
                <v-list-item-title class="text-uppercase font-16px">
                  Software Engineering Assignment Help
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item sub-group link class="d-xl-none" to="/statistics-assignment">
              <v-list-item-content>
                <v-list-item-title class="text-uppercase font-16px">
                  Statistics Assignment Help
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item sub-group link class="d-xl-none" to="/math-assignment">
              <v-list-item-content>
                <v-list-item-title class="text-uppercase font-16px">
                  Math Assignment Help
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item
              sub-group
              link
              class="d-xl-none"
              to="/digital-electronics-assignment"
            >
              <v-list-item-content>
                <v-list-item-title class="text-uppercase font-16px">
                  Digital Electronics Assignment Help
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item sub-group link class="d-xl-none" to="/engineering-assignment">
              <v-list-item-content>
                <v-list-item-title class="text-uppercase font-16px">
                  Engineering Assignment Help
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item
              sub-group
              link
              class="d-xl-none"
              to="/electical-engineering-assignment"
            >
              <v-list-item-content>
                <v-list-item-title class="text-uppercase font-16px">
                  Electrical Engineering Assignment Help
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item
              sub-group
              link
              class="d-xl-none"
              to="/civil-engineering-assignment"
            >
              <v-list-item-content>
                <v-list-item-title class="text-uppercase font-16px">
                  Civil Engineering Assignment Help
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>

          <v-list-item class="d-xl-none" to="/essay-writing">
            <v-list-item-content>
              <v-list-item-title class="text-uppercase font-16px">
                Essay Writing
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

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
                Hots Assignment
              </v-list-item-title>
            </template>

            <v-list-item
              sub-group
              link
              class="d-xl-none"
              to="/digital-marketing-assignment"
            >
              <v-list-item-content>
                <v-list-item-title class="text-uppercase font-16px">
                  Digital Marketing Assignment Help
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item
              sub-group
              link
              class="d-xl-none"
              to="/strategic-management-assignment"
            >
              <v-list-item-content>
                <v-list-item-title class="text-uppercase font-16px">
                  Strategic Management Assignment Help
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item sub-group link class="d-xl-none" to="/leadership-assignment">
              <v-list-item-content>
                <v-list-item-title class="text-uppercase font-16px">
                  Leadership Assignment Help
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item
              sub-group
              link
              class="d-xl-none"
              to="/risk-management-assignment"
            >
              <v-list-item-content>
                <v-list-item-title class="text-uppercase font-16px">
                  Risk Management Assignment Help
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item sub-group link class="d-xl-none" to="/supply-chain-assignment">
              <v-list-item-content>
                <v-list-item-title class="text-uppercase font-16px">
                  Supply Chain Assignment Help
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item sub-group link class="d-xl-none" to="/kali-linux-assignment">
              <v-list-item-content>
                <v-list-item-title class="text-uppercase font-16px">
                  Kali Linux Assignment Help
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item sub-group link class="d-xl-none" to="/block-chain-assignment">
              <v-list-item-content>
                <v-list-item-title class="text-uppercase font-16px">
                  Block Chain Assignment Help
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item sub-group link class="d-xl-none" to="/physics-assignment">
              <v-list-item-content>
                <v-list-item-title class="text-uppercase font-16px">
                  Physics Assignment Help
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item sub-group link class="d-xl-none" to="/chemistry-assignment">
              <v-list-item-content>
                <v-list-item-title class="text-uppercase font-16px">
                  Chemistry Assignment Help
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </v-list>
      </v-navigation-drawer>
      <v-main
        class="mainmobile pt-16 mb-12 mb-md-0"
        style="padding: 64px 0px 250px 0px !important"
      >
        <router-view class="mb-12"></router-view>
      </v-main>
      <div class="sticky-icon">
        <img src="./assets/whatsapp.png" width="60px" alt="Sticky Icon" />
      </div>
      <v-bottom-navigation
        :input-value="footdrawer"
        scroll-target="#scroll-threshold-example"
        class="pt-1 pl-md-8 text-left"
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
            <a
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
            >
            <br />
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
            <div href="/">
              <img src="./assets/phonelogo.png" width="30px" class="mr-3" /><span
                class="text-white"
                >+91-83880 88212</span
              >
            </div>
            <br />
            <div href="/">
              <img src="./assets/emailassignment.png" width="35px" class="mr-3" /><span
                class="text-white"
                >help@assignmentwallah.com</span
              >
            </div>
            <br />
            <div href="/">
              <img src="./assets/emaillogo.png" width="35px" class="mr-3" /><span
                class="text-white"
                >help.assignmentwallah@gmail.com</span
              >
            </div>
          </div>
        </div>

        <div class="col-lg-3">
          <div class="text-white mt-3 ml-5" style="text-align: center">
            <a href="/" class="mr-5 mt-5"
              ><img src="./assets/facebooklogo.png" width="35px"
            /></a>
            <a href="/" class="ml-3 mt-5 mr-5 mb-2"
              ><img src="./assets/twitterlogo.png" width="35px"
            /></a>
            <a href="/" class="ml-3 mt-5 mr-5"
              ><img src="./assets/instagramlogo.png" width="35px"
            /></a>
            <a href="/" class="ml-3 mt-5 mr-5"
              ><img src="./assets/linkedinlogo.png" width="35px"
            /></a>
            <br />
            <p class="mt-5 text-white" style="text-align: center">
              Assignment Wallah Pvt Ltd<br />
              1234 Elm Street<br />
              Apt 567<br />
              Springfield, IL 12345<br />
              United States
            </p>
          </div>
        </div>
        <div class="col-lg-3 mt-3 mr-2">
          <h5 class="text-center">Special Offers*</h5>
          <p class="text-center text-white">Subscribe to avail our special offers</p>
          <form class="center-content">
            <label for="email" class="mt-4">Email Address*</label>
            <input type="email" id="email" name="email" class="border" required />
            <div class="center-content border w-100 mt-5">
              <button type="submit">Subscribe</button>
            </div>
          </form>
        </div>
      </v-bottom-navigation>
      <!-- <p class="text-center">@2023 AssignmentWallah All CopyRights Reserved</p> -->
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

<template>
  <div>
    <div class="sixteentosix omt-6 omt-md-25">
      <div class="row">
        <div class="col-md-6">
          <div
            class="kachelimage header-image"
            style="background: url('static/img/aboutus.png')"
          ></div>
        </div>
        <div class="col-md-6">
          <div class="position-relative">
            <h3
              class="text-white mt-5 pl-md-13 mobileForm"
              style="position: absolute; right: 360px"
            >
              Assignment Help
            </h3>
            <h6
              class="text-white mt-3 pl-md-13 mobileForm"
              style="position: absolute; right: 340px; top: 50px"
            >
              Affordable Essay Writing Services
            </h6>
            <div class="mobileForm">
              <assignment-request></assignment-request>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="assignmenttext text-content mt-md-12 col-md-12 pl-md-16 pl-12 px-8 pr-sm-16"
    >
      <h2 class="text-center">Our Approach to deliver a perfect solution</h2>
      <div class="row">
        <!-- Image of first half -->
        <div class="col-md-6">
          <img
            src="../assets/solutionapproach.png"
            width="500px"
            alt="Image Description"
          />
        </div>
        <div class="col-md-6">
          <h5>Beat The Stress By Using Thesis Writing Help For Your Coursework</h5>
          <ul>
            <li>
              Research design, which includes creating a conceptual framework or model
            </li>
            <li>
              Chapter drafting, which includes arranging chapters with headers and
              subheadings
            </li>
            <li>
              Gathering data for doctorate research, including primary and secondary data
              collecting
            </li>
            <li>Data analysis utilizing SPSS, STATA, R, Python, Matlab, SAS etc.</li>
            <li>
              Use of Matlab Simulink, NS2, NS3, ANSYS, Labview, CST, HFSS, and Weka in
              implementation
            </li>
            <li>Revisions or corrections in response to guides’ comments</li>
            <li>Manuscript editing, proofreading, and scientific editing</li>
          </ul>
        </div>
      </div>
    </div>

    <img src="../assets/doubts.png" class="mx-auto d-block" width="500px" />
    <div
      class="assignmenttext text-content text-center my-5 col-md-12 pl-md-16 pl-12 px-8 pr-sm-16"
    >
      <h2>How We Help You To Get Your Doubt Clear?</h2>
      <p>
        Hey students! Don’t need to worry. Here, the World’s Leading Technical Assignment
        Help Platform is close to you for clearing your doubts in your research module,
        education as well as project development which is the main objective of our Team.
        We promise to give our best in solving your problems. To make your doubt clear, we
        are following some waterfall approach. At first, we received your doubts, then
        after we try to analyze your doubt to find out your particular domain expert. Now
        the complete task will be under domain expert who will be responsible for making
        good content for your problem areas. After receiving the complete task from our
        technical team of experts, we will deliver it to you via email.
      </p>
    </div>
    <img src="../assets/step.png" class="mx-auto d-block" width="500px" />

    <div
      class="assignmenttext text-content text-center my-5 col-md-12 pl-md-16 pl-12 px-8 pr-sm-16"
    >
      <h2>University Student's Trust</h2>
      <p>
        Our team Assignment Wallah helps more than 150000+ students belonging to the
        following prestigious universities in their education and research-oriented works.
        We are always here available for students. Students are able to save money thanks
        to the fact that we provide the most competitively priced solutions for their
        assignments. We support students to achieve their goals in careers with higher
        academics grade.
      </p>
    </div>

    <div
      class="assignmenttext text-content text-center my-md-12 col-md-12 pl-md-16 pl-12 px-8 pr-sm-16"
    >
      <div class="row pb-4 justify-content-center">
        <!-- Center the columns horizontally -->

        <!-- First Row -->
        <div class="col-md-2 p-0">
          <img
            src="../assets/Birmingham-City-University.png"
            width="200px"
            alt="University 1"
          />
          <p>Birmingham City University</p>
        </div>
        <div class="col-md-2 p-0">
          <img src="../assets/BPP-University.png" width="200px" alt="University 2" />
          <p>BPP University</p>
        </div>
        <div class="col-md-2 p-0">
          <img src="../assets/Coventry-University.png" width="200px" alt="University 3" />
          <p>Coventry University</p>
        </div>
        <div class="col-md-2 p-0">
          <img
            src="../assets/University-of-East-London.png"
            width="200px"
            alt="University 4"
          />
          <p>University of East London</p>
        </div>
        <div class="col-md-2 p-0">
          <img
            src="../assets/Birmingham-City-University.png"
            width="200px"
            alt="University 5"
          />
          <p>University of Greenwich</p>
        </div>
      </div>
      <div class="row justify-content-center">
        <!-- Center the columns horizontally -->
        <!-- Second Row -->
        <div class="col-md-2 p-0">
          <img
            src="../assets/University-of-Chester.png"
            width="200px"
            alt="University 6"
          />
          <p>University of Chester</p>
        </div>
        <div class="col-md-2 p-0">
          <img
            src="../assets/University-of-Manchester.png"
            width="200px"
            alt="University 7"
          />
          <p>University of Manchester</p>
        </div>
        <div class="col-md-2 p-0">
          <img
            src="../assets/University-of-Hertfordshire.png"
            width="200px"
            alt="University 8"
          />
          <p>University of Hertfordshire</p>
        </div>
        <div class="col-md-2 p-0">
          <img
            src="../assets/University-of-West-London.png"
            width="200px"
            alt="University 9"
          />
          <p>University of West London</p>
        </div>
        <div class="col-md-2 p-0">
          <img
            src="../assets/Main_Entrance_and_Sign_Imperial.png"
            width="200px"
            alt="University 10"
          />
          <p>Imperial College London</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AssignmentRequest from "./AssignmentRequest.vue";
export default {
  components: {
    AssignmentRequest,
  },
};
</script>

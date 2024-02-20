<template>
  <div>
    <div class="paddingsubmainclass omt-6 omt-md-25">
      <div
        class="nnitimage header-image"
        style="background: url('static/img/contact.png')"
      >
        <div class="headline">
          <div class="text-subtitle-2 text-md-h5">Contact Us</div>
        </div>
      </div>
    </div>
    <div>
      <div class="row mx-5">
        <!-- Corporate Address Card -->
        <div class="col-md-4">
          <div class="card mb-4 h-100">
            <div class="card-body">
              <div class="text-subtitle-2 text-md-h5 text-center">
                <b>Corporate Address</b>
                <img src="../assets/location.png" width="20px" />
              </div>
              <div class="text-content text-center">
                F 103, Adani M2k oyster grande <br />
                Gurugram , Sector 102,<br />
                122505<br />
                India
              </div>
            </div>
          </div>
        </div>

        <!-- Office Timings Card -->
        <div class="col-md-4">
          <div class="card mb-4 h-100">
            <div class="card-body text-center">
              <div class="text-subtitle-2 text-md-h5 text-center">
                <b>Office Timings</b>
              </div>
              <div class="text-content">
                <img src="../assets/calender.png" width="20px" />All 7 days
                <img src="../assets/time.png" width="20px" /> EST, CST, MST, PST, GMT and
                IST , we are available 24/7<br />
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Details Card -->
        <div class="col-md-4">
          <div class="card mb-4 h-100">
            <div class="card-body text-center">
              <div class="text-subtitle-2 text-md-h5 text-center">
                <b>Contact Details</b>
              </div>
              <div class="text-content">
                <a href="/"
                  ><img src="../assets/phonelogo.png" width="50px" />+91-9650405268</a
                ><br />
                <a href="/"
                  ><img
                    src="../assets/emailassignment.png"
                    width="50px"
                  />nimish@nnitsoft.com</a
                >
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row mx-5">
        <div class="col-md-4"></div>
        <div class="col-md-4">
          <div class="card mb-4 h-100">
            <div class="card-body">
              <h5 class="text-subtitle-2 text-md-h5 text-center">
                <b>Corporate Social Media Accounts</b>
              </h5>
              <div class="social-icons text-center">
                <a href="/"><img src="../assets/facebooklogo.png" width="60px" /></a>
                <a href="/"><img src="../assets/twitterlogo.png" width="60px" /></a>
                <a href="/"><img src="../assets/instagramlogo.png" width="60px" /></a>
                <a href="/"><img src="../assets/linkedinlogo.png" width="60px" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.social-icons {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.social-icons a {
  font-size: 24px;
  color: #333; /* Adjust the color as needed */
  transition: color 0.2s;
}

.social-icons a:hover {
  color: #007bff; /* Adjust the hover color as needed */
}

.card {
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card-title {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}

.card-body p {
  font-size: 0.875rem;
  margin-bottom: 0;
}

.mt-4 {
  margin-top: 1.5rem;
}
</style>

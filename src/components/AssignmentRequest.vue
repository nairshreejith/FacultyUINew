<template>
  <div
    class="nnitcontainer innercreatetraining mt-5 form-container mobileForm"
    style="position: absolute; right: 90px; top: 73px"
  >
    <h6 class="text-center text-white">
      IT'S TIME CLEAR YOUR DOUBTS FROM<br />NNIT SOFT.COM EXPERTS
    </h6>
    <div>
      <div class="row">
        <div class="col-md-6">
          <!-- Email ID -->
          <v-text-field
            hide-details="auto"
            class="datainput justify-content-end searchbar align-self-center pb-3"
            style="padding-right: 2px"
            dense
            outlined
            :label="'Email' + '*'"
            v-model="email"
          ></v-text-field>

          <!-- Subject -->
          <v-text-field
            hide-details="auto"
            class="datainput justify-content-end searchbar align-self-center pb-3"
            style="padding-right: 2px"
            dense
            outlined
            :label="'Subject'"
            v-model="subject"
          ></v-text-field>
        </div>

        <div class="col-md-6">
          <!-- Deadline Date -->
          <div class="form-group">
            <input
              type="date"
              class="form-control"
              id="deadline"
              name="deadline"
              required
              style="margin-bottom: 0.6rem !important"
              v-model="deadline"
            />
          </div>

          <!-- Technology -->
          <v-text-field
            hide-details="auto"
            class="datainput justify-content-end searchbar align-self-center pb-3 pt-1"
            style="padding-right: 2px"
            dense
            outlined
            :label="'Technology'"
            v-model="technology"
          ></v-text-field>
          <!-- <Upload v-model="assignmentDocumentList" multiple allowOtherFileTypes /> -->
        </div>
        <div class="row">
          <div class="col-md-12">
            <v-textarea
              hide-details="auto"
              class="datainput justify-content-end align-self-center"
              dense
              outlined
              :label="'Comments'"
              :rows="3"
              v-model="comments"
            ></v-textarea>
          </div>
        </div>
      </div>
      <div class="col-md-12 py-0 mt-0 text-white">
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />

        <v-span class="text-white ml-4 datainput"
          >I accept the T&C and other policies of the web site and agree to receive offers
          and updates</v-span
        >
      </div>

      <div class="col-md-12 pb-0 lastBtnSubmit text-center">
        <v-btn @click="submit()" outlined depressed tile class="savebutton mr-2"
          >Submit <img src="../assets/send.png" width="20px"
        /></v-btn>
      </div>
    </div>
  </div>
</template>
<script src="https://smtpjs.com/v3/smtp.js"></script>
<script>
import Upload from "./Upload.vue";
export default {
  components: {
    Upload,
  },
  data() {
    return {
      uploadUrl: "/api/upload", // Replace with your backend API URL for handling file upload
      assignmentDocumentList: [],
      email: null,
      subject: null,
      comments: null,
      deadline: null,
      technology: null,
      consentprivacy: true,
    };
  },
  methods: {
    onFileChange(file) {
      // File object contains information about the uploaded document
      this.documentData = file;
    },
    submit() {
      let messageBody =
        "Email:  " +
        this.email +
        "<br/> Deadline:  " +
        this.deadline +
        "<br/> Subject:  " +
        this.subject +
        "<br/> Technology:  " +
        this.technology +
        "<br/> Comments:  " +
        this.comments;
      Email.send({
        Host: "smtp.elasticemail.com",
        Username: "email@nnitsoft.com",
        Password: "EE3926449BBE1B90A3A84B67CEB4EAF30D89",
        To: "nairshreejith1999@gmail.com",
        From: "email@nnitsoft.com",
        Subject: "Service Request at NNIT",
        Body: messageBody,
      }).then((message) => console.log(message));
    },
  },
};
</script>
<style>
.v-text-field--outlined fieldset {
  border-collapse: collapse;
  border: 0px solid !important;
  bottom: 0;
  left: 0;
  pointer-events: none;
  position: absolute;
  right: 0;
  top: -5px;
  transition-duration: 0.3s;
  transition-property: color, border-width;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
}

/* Style for the form container (make it opaque) */
.form-container {
  background-color: rgba(48, 46, 46, 0.3); /* Adjust opacity as needed */
}

/* Style for the text fields (make them non-opaque) */
.v-text-field {
  background-color: rgba(255, 100, 100, 0); /* Set opacity to 0 for text fields */
}

/* Additional styles for text fields if needed */
/* .v-text-field .v-label, .v-text-field .v-input, etc. {
  custom styles here
} */

/* Style for the submit button (if needed) */
.savebutton {
  opacity: 1; /* Set opacity to 1 to make the button fully visible */
}
</style>

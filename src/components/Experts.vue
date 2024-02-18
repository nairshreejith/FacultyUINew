<template>
  <div>
    <div class="sixteentosix omt-6 omt-md-25">
      <div
        class="kachelimage header-image"
        style="background: url('static/img/aboutus.png')"
      >
        <div class="headline">
          <div class="text-subtitle-2 text-md-h5">Experts</div>
        </div>
      </div>
    </div>
    <div>
      <div class="assignmenttext mx-5 my-5">
        <h2 class="text-center"><u>Meet Our Experts</u></h2>

        <div
          class="testimonial text-content"
          v-for="(expert, index) in experts"
          :key="index"
        >
          <p>{{ expert.name }}</p>
          <p>{{ expert.area }}</p>
          <p>{{ expert.description }}</p>
        </div>
        <div class="text-center mt-3">
          <v-btn
            outlined
            depressed
            tile
            class="savebutton mr-2 mb-2"
            @click="showPreviousPage"
            :disabled="currentPage === 0"
            ><img src="../assets/back.png" width="20px" />Previous Page
          </v-btn>
          <v-btn
            outlined
            depressed
            tile
            class="savebutton mr-2 mb-2"
            @click="showNextPage"
            :disabled="currentPage === pageCount - 1"
            >Next Page <img src="../assets/next.png" width="20px"
          /></v-btn>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      experts: [
        {
          name: "Dr. David Johnson",
          area: "Web Development",
          description:
            "With extensive experience in web development and a background in computer science, Dr. Johnson specializes in crafting dynamic and responsive web applications. His expertise in front-end and back-end technologies ensures high-quality and scalable solutions for clients.",
        },
        {
          name: "Prof. Michelle Lee",
          area: "App Development",
          description:
            "As a seasoned developer and app architect, Prof. Lee brings a wealth of knowledge to app development projects. With proficiency in iOS, Android, and cross-platform frameworks, she ensures innovative and user-friendly mobile experiences.",
        },
        {
          name: "Dr. Adam Adams",
          area: "DevOps Services",
          description:
            "Dr. Adams is a leading expert in DevOps practices and cloud-native technologies. His deep understanding of CI/CD pipelines, containerization, and infrastructure as code enables seamless deployment and automation for clients' software projects.",
        },
        {
          name: "John Smith, MSc",
          area: "Data Science",
          description:
            "With a Master's degree in Data Science and expertise in machine learning and predictive analytics, John specializes in unlocking insights from complex datasets. His skills in data visualization and statistical analysis drive informed decision-making for clients.",
        },
        {
          name: "Prof. Emma White",
          area: "Cloud Services",
          description:
            "Prof. White is a cloud computing expert with proficiency in AWS, Azure, and Google Cloud Platform. Her knowledge of cloud architecture, scalability, and security ensures reliable and scalable cloud solutions for clients' infrastructure needs.",
        },
      ],
      pageSize: 3, // Number of testimonials per page
      currentPage: 0, // Current page index
    };
  },
  computed: {
    displayedTestimonials() {
      const startIndex = this.currentPage * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      return this.experts.slice(startIndex, endIndex);
    },
    pageCount() {
      return Math.ceil(this.experts.length / this.pageSize);
    },
  },
  methods: {
    showPreviousPage() {
      if (this.currentPage > 0) {
        this.currentPage--;
      }
    },
    showNextPage() {
      if (this.currentPage < this.pageCount - 1) {
        this.currentPage++;
      }
    },
  },
};
</script>

<style scoped>
.testimonial {
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 5px;
  text-align: center;
}

button {
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button[disabled] {
  background-color: #ccc;
  cursor: not-allowed;
}

button:hover {
  background-color: #0056b3;
}
</style>

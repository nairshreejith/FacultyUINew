<template>
  <div class="assignmenttext mx-5 my-5">
    <h2 class="text-center"><u>What clients tell about us?</u></h2>

    <div
      class="testimonial text-content"
      v-for="(testimonial, index) in displayedTestimonials"
      :key="index"
    >
      <p>{{ testimonial.text }}</p>
      <p>- {{ testimonial.author }}</p>
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
</template>
<script>
export default {
  data() {
    return {
      testimonials: [
        {
          text:
            "I had a tonne of assignments to complete before my semester exams. But, a classmate of mine suggested NN IT Soft, which offers quick responses. I am pleased with the client care and writing assistance provided by NN IT Soft. I used this program often, and they guided me through all the solutions, enabling me to receive good grades. Excellent work! Thank you once more, NN IT Soft.",
          author: "Emma Hart:",
        },
        {
          text:
            "It is my greatest pleasure to recommend NN IT Soft. Thank you so much. I discovered this website to be quite trustworthy and was pleased with the NN IT Soft team. The result of my assignment surprised me. My lecture granted me full credit for this assignment.",
          author: "Eddie Johnson",
        },
        {
          text:
            "Working with NN IT Soft has been fantastic! Every admin on the site is helpful and cooperative. When I thought I had lost my direction, the support team would always push me to work harder and reach new milestones.",
          author: "Jonathan Doe",
        },
        {
          text:
            "Hello everyone! Working with NN IT Soft is a great experience. Every member of the team puts in a lot of effort, and each tutor is respected and gives personalised feedback. The team works extremely hard to make the process simple, and assignment distribution and payment have never been problems.NN IT Soft helps you easily to achieve your goals. We are a team of experienced designers and developers who have been working in this field for years. We proudly display our hard work and achievements!",
          author: "Mike Edward",
        },
        {
          text:
            "I used NN IT SOFT for my programming assignments, and the results were outstanding. I'll definitely use their services again.",
          author: "Michael Clark",
        },
        {
          text:
            "The support I received from NN IT SOFT was invaluable during my exams. I'm grateful for their help.",
          author: "Emily Wilson",
        },
        {
          text:
            "NN IT SOFT's tutors are excellent. They clarified my doubts and boosted my confidence in mathematics.",
          author: "Daniel Lee",
        },
        {
          text:
            "I was worried about my research paper, but NN IT SOFT's writers delivered a well-researched and well-written paper on time.",
          author: "Linda Taylor",
        },
        {
          text:
            "NN IT SOFT is the go-to platform for assignment help. Their services are affordable and top-notch.",
          author: "William Anderson",
        },
        {
          text:
            "I appreciate NN IT SOFT's dedication to helping students succeed academically. Their team is responsive and professional.",
          author: "Maria Garcia",
        },
        {
          text:
            "I recommend NN IT SOFT to all my friends. Their assistance has made a significant difference in my academic journey.",
          author: "Thomas Smith",
        },
        {
          text:
            "I struggled with statistics, but NN IT SOFT's tutors made it easy to understand. They are the best!",
          author: "Olivia Davis",
        },
        {
          text:
            "NN IT SOFT's support saved me from the stress of looming deadlines. Their services are a lifesaver for students.",
          author: "Robert Wilson",
        },
        {
          text:
            "I'm grateful for NN IT SOFT's help with my chemistry assignments. Their experts are knowledgeable and experienced.",
          author: "Anna Johnson",
        },
        {
          text:
            "NN IT SOFT is the reason I aced my exams. Their guidance and study materials were instrumental in my success.",
          author: "Matthew Brown",
        },
        {
          text:
            "I never thought I could excel in finance, but NN IT SOFT's tutors proved me wrong. They are brilliant!",
          author: "Sophia Lee",
        },
        {
          text:
            "NN IT SOFT's support is unmatched. They provide personalized assistance that caters to each student's needs.",
          author: "James Anderson",
        },
        {
          text:
            "I'm a repeat customer of NN IT SOFT because their services are consistently excellent. They are my academic saviors.",
          author: "Ella Taylor",
        },
        {
          text:
            "NN IT SOFT's dedication to helping students is remarkable. They make challenging subjects seem easy.",
          author: "Christopher Clark",
        },
        {
          text:
            "I owe my academic success to NN IT SOFT. Their support and expertise have been invaluable to me.",
          author: "Sophie Garcia",
        },
        // Add more testimonials here...
      ],
      pageSize: 3, // Number of testimonials per page
      currentPage: 0, // Current page index
    };
  },
  computed: {
    displayedTestimonials() {
      const startIndex = this.currentPage * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      return this.testimonials.slice(startIndex, endIndex);
    },
    pageCount() {
      return Math.ceil(this.testimonials.length / this.pageSize);
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

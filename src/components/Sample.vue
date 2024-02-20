<template>
  <div>
    <div class="paddingsubmainclass omt-6 omt-md-25">
      <div
        class="nnitimage header-image"
        style="background: url('static/img/aboutus.png')"
      >
        <div class="headline">
          <div class="text-subtitle-2 text-md-h5">Sample</div>
        </div>
      </div>
    </div>
    <div>
      <div class="assignmenttext mx-5 my-5">
        <h2 class="text-center"><u>Sample Projects</u></h2>

        <div
          class="testimonial text-content"
          v-for="(contentData, index) in content"
          :key="index"
        >
          <p>{{ contentData.topic }}</p>
          <p>{{ contentData.description }}</p>
          <a>View Website</a>
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
      content: [
        {
          topic: "Web Development Services",
          description:
            "Our latest web development project involved creating a dynamic e-commerce platform for a global retailer, enhancing user experience with intuitive navigation and seamless checkout processes.We collaborated closely with the client to implement custom features like personalized product recommendations and integrated payment gateways, resulting in increased sales and customer satisfaction.Leveraging modern technologies such as React.js and Node.js, we ensured the website's responsiveness and scalability across desktop and mobile devices.Our team focused on optimizing page load times and enhancing security protocols to protect customer data and transactions, adhering to industry standards and best practices.Explore our web development portfolio to see how we've helped businesses across industries establish a strong online presence and drive revenue growth.",
          link: "#",
        },
        {
          topic: "App Development Solutions",
          description:
            "Our recent app development project involved creating a fitness tracking app for a health and wellness startup, empowering users to set fitness goals, track workouts, and monitor progress.We designed the app's user interface to be intuitive and visually appealing, incorporating gamification elements to keep users engaged and motivated.Using React Native, we ensured cross-platform compatibility, allowing the app to run seamlessly on both iOS and Android devices.Features such as social sharing, in-app challenges, and real-time progress updates were implemented to enhance user interaction and community engagement.Check out our app development portfolio to see how we've helped startups and enterprises launch successful mobile applications and drive user adoption.",
          link: "#",
        },
        {
          topic: "DevOps Services",
          description:
            "Our recent DevOps project involved implementing a CI/CD pipeline for a software development company, automating the build, test, and deployment processes.We utilized Jenkins for continuous integration and Docker containers for consistent and portable application environments across development, testing, and production stages.Kubernetes was deployed for container orchestration, enabling seamless scaling and management of microservices-based applications.Our team integrated monitoring and alerting solutions like Prometheus and Grafana to ensure visibility into system health and performance metrics.Explore our DevOps portfolio to see how we've helped organizations accelerate software delivery, improve collaboration, and achieve operational excellence.",
          link: "#",
        },
        {
          topic: "Data Science Solutions",
          description:
            "In our latest data science project, we developed a predictive analytics platform for a financial services firm, enabling data-driven decision-making and risk management.Leveraging machine learning algorithms and historical data, we built models to forecast market trends, identify potential investment opportunities, and mitigate risks.Python libraries such as Pandas and Scikit-learn were utilized for data preprocessing, feature engineering, and model training.We implemented interactive dashboards using tools like Tableau and Power BI, providing stakeholders with actionable insights and visualizations.Check out our data science portfolio to see how we've helped organizations harness the power of data to drive innovation and achieve business objectives.",
          link: "#",
        },
        {
          topic: "Cloud Services",
          description:
            "Our recent cloud services project involved migrating a multinational corporation's legacy infrastructure to the AWS cloud, optimizing performance, and reducing operational costs.Leveraging AWS services such as EC2, S3, and RDS, we designed a scalable and resilient architecture to support the client's growing business needs.We implemented auto-scaling and load balancing mechanisms to ensure high availability and fault tolerance, even during peak traffic periods.Our team conducted thorough security assessments and implemented robust IAM policies and encryption protocols to safeguard sensitive data and applications.Explore our cloud services portfolio to see how we've helped organizations leverage the power of cloud computing to innovate, scale, and accelerate their digital transformation journeys.",
          link: "#",
        },
        {
          topic: "ML/AI Services",
          description:
            "Our recent ML/AI project involved developing a personalized recommendation engine for an e-commerce platform, leveraging machine learning algorithms to analyze user behavior and preferences.Using natural language processing (NLP) techniques, we implemented sentiment analysis to understand customer feedback and improve product recommendations.TensorFlow and PyTorch were employed for training deep learning models, enabling accurate predictions and enhancing user engagement and conversion rates.We integrated the recommendation engine seamlessly into the client's existing infrastructure, ensuring scalability and performance under varying load conditions.Explore our ML/AI portfolio to see how we've helped businesses leverage artificial intelligence to drive customer satisfaction and revenue growth.",
          link: "#",
        },
        {
          topic: "Blockchain Services",
          description:
            "In our recent blockchain project, we developed a decentralized identity management solution for a healthcare provider, enabling secure and transparent access to patient records and medical history.Leveraging Hyperledger Fabric and smart contracts, we ensured data integrity and privacy while enabling seamless interoperability between healthcare providers and patients.Our blockchain experts implemented consensus mechanisms like Proof of Authority (PoA) to validate transactions and maintain network consensus.We conducted thorough security audits and penetration testing to identify and mitigate potential vulnerabilities, ensuring compliance with regulatory requirements such as HIPAA.Check out our blockchain portfolio to see how we've empowered organizations to revolutionize their industries with distributed ledger technology and decentralized applications.",
          link: "#",
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
      return this.content.slice(startIndex, endIndex);
    },
    pageCount() {
      return Math.ceil(this.content.length / this.pageSize);
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

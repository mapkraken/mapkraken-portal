<template>
  <div class="portfolio-page">
    <h1>Portfolio</h1>
    <div class="portfolio-container">
      <div 
        v-for="item in portfolioItems" 
        :key="item.SK.S" 
        class="portfolio-card"
      >
        <h2>{{ item.title.S }}</h2>
        <p>{{ item.description.S }}</p>
        <div class="links">
          <a :href="item.site_url.S" target="_blank">Visit Site</a>
          <a :href="item.repo_url.S" target="_blank">View Repo</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PortfolioPage',
  data() {
    return {
      portfolioItems: [] // Holds the portfolio items fetched from the API
    };
  },
  created() {
    this.fetchPortfolioItems();
  },
  methods: {
    async fetchPortfolioItems() {
      try {
        const response = await fetch('https://sit-api.mapkraken.com/portfolio');
        const data = await response.json();
        this.portfolioItems = data;
      } catch (error) {
        console.error('Error fetching portfolio items:', error);
      }
    }
  }
};
</script>

<style scoped>
.portfolio-page {
  padding: 20px;
}

.portfolio-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.portfolio-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  width: 300px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.portfolio-card h2 {
  margin: 0 0 8px;
  color: #42b983;
}

.portfolio-card p {
  margin: 0 0 12px;
}

.resources ul {
  padding: 0;
  list-style: none;
}

.resources li {
  background: #f4f4f4;
  margin: 4px 0;
  padding: 4px 8px;
  border-radius: 4px;
}

.links a {
  display: inline-block;
  margin-right: 10px;
  color: #42b983;
  text-decoration: none;
}

.links a:hover {
  text-decoration: underline;
}
</style>
<template>
  <div class="portfolio-page">
    <h1>Portfolio</h1>
    <div class="portfolio-container" v-if="portfolioItems && portfolioItems.length > 0">
      <div 
        v-for="item in portfolioItems" 
        :key="item.SK?.S || 'default-key'" 
        class="portfolio-card"
      >
        <h2>{{ item.title?.S || 'Untitled' }}</h2>
        <p>{{ item.description?.S || 'No description' }}</p>
        <div class="links">
          <a :href="item.site_url?.S || '#'" target="_blank">Visit Site</a>
          <a 
            v-for="(repo, index) in item.repo_urls?.L || []" 
            :key="index" 
            :href="repo.S || '#'" 
            target="_blank"
          >
            View Repo {{ index + 1 }}
          </a>
        </div>
      </div>
    </div>
    <div v-else>
      <p>No portfolio items available.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PortfolioPage',
  data() {
    return {
      portfolioItems: [], // Holds the portfolio items fetched from the API
    };
  },
  created() {
    this.fetchPortfolioItems();
  },
  methods: {
    async fetchPortfolioItems() {
      try {
        // Construct the URL dynamically using the environment variable
        const stage = process.env.VUE_APP_STAGE || 'sit'; // Default to 'sit' if VUE_APP_STAGE is not set
        const apiUrl = stage === 'prd' 
          ? `https://api.mapkraken.com/portfolio` 
          : `https://${stage}-api.mapkraken.com/portfolio`;

        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Failed to fetch portfolio items');
        }
        const data = await response.json();
        console.log('Fetched portfolio items:', data); // Debug the response
        this.portfolioItems = Array.isArray(data) ? data : [];
      } catch (error) {
        console.error('Error fetching portfolio items:', error);
        this.portfolioItems = []; // Fallback to empty array on error
      }
    },
  },
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
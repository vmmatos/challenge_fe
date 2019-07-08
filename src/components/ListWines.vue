<template>
  <div class="container" v-show="wines.length > 0">
    <h5>Wines</h5>
    <div class="columns mrb-10" v-for="wine in wines" v-bind:key="wine.id">
      <div class="column is-2">
        <div>
          <img :src="wine.img" :alt="wine.name" class="image" />
        </div>
      </div>
      <div class="column is-10">
        <h5 class="bold">{{ wine.name }}</h5>
        <div class="txt-9">rating: {{ wine.rating }}</div>
        <div class="txt-9">year: {{ wine.year }}</div>
        <div class="comments">
          <div class="bold">comments:</div>
          <div class="txt-9 dark-grey-color">{{ wine.comment }}</div>
        </div>
        <div class="price bold">{{ wine.price }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      wines: []
    };
  },
  created: function() {
    this.fetchWines();
  },
  methods: {
    fetchWines() {
      const uri = `${process.env.VUE_APP_API_LOCATION}all`;

      axios
        .get(uri)
        .then(response => {
          this.wines = response.data;
        })
        .catch(err => {
          console.error(err);
        });
    }
  }
};
</script>

<style scoped>
.bold {
  font-weight: bold;
}
.txt-9 {
  color: #444;
  font-size: 0.9rem;
}
.dark-grey-color {
  color: #222;
}
.comments {
  border-bottom: 1px solid #eee;
  border-top: 1px solid #eee;
  padding: 5px 0 10px 0;
  margin: 15px 0;
}
.mrb-10 {
  margin-bottom: 10px;
}
.price {
  font-size: 1rem;
  float: right;
}
</style>

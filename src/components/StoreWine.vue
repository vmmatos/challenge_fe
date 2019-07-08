<template>
  <div class="container">
    <h5>Store one Wine</h5>
    <form>
      <div class="field">
        <label class="label">Wine Name</label>
        <div class="control">
          <input
            v-model="wine.name"
            class="input"
            type="text"
            placeholder="Wine Name input"
          />
        </div>
      </div>
      <div class="field">
        <label class="label">Year</label>
        <div class="control">
          <input
            v-model="wine.year"
            class="input"
            type="text"
            placeholder="Year input"
          />
        </div>
      </div>
      <div class="field">
        <label class="label">URL Image</label>
        <div class="control">
          <input
            v-model="wine.img"
            class="input"
            type="text"
            placeholder="URL Image input"
          />
        </div>
      </div>
      <div class="field">
        <label class="label">Rating</label>
        <div class="control">
          <input
            v-model="wine.rating"
            class="input"
            type="text"
            placeholder="Rating input"
          />
        </div>
      </div>
      <div class="field">
        <label class="label">Price</label>
        <div class="control">
          <input
            v-model="wine.price"
            class="input"
            type="text"
            placeholder="Price input"
          />
        </div>
      </div>
      <div class="field">
        <label class="label">Comment</label>
        <div class="control">
          <textarea
            v-model="wine.comment"
            class="textarea"
            placeholder="Comment"
          />
        </div>
      </div>
      <div class="field is-grouped">
        <div class="control">
          <button class="button is-link" @click.prevent="save">Submit</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      wine: {
        name: "",
        year: "",
        img: "",
        rating: "",
        price: "",
        comment: ""
      }
    };
  },
  methods: {
    save(e) {
      e.preventDefault();

      const uri = `${process.env.VUE_APP_API_LOCATION}store`;
      const save = axios.post(uri, { ...this.wine });
      if (!save) {
        return;
      }

      this.$router.push({ name: "home" });
    }
  }
};
</script>

<script setup>
defineProps({
  data: {
    type: Object,
    required: true,
  },
  priceClass: {
    type: String,
    required: true,
  },
})

const price = "price"
</script>

<template>
  <div class="card">
    <div class="top">
      <img class="smile" :src="data.imagePath" alt="" />
      <p class="level">{{ data.level }}</p>
    </div>

    <p :class="[price, priceClass]">{{ data.price }} gwei</p>
    <p class="small">
      Base: {{ data.basePrice }} | Priority : {{ data.priority }}
    </p>
    <p class="small">
      ${{ data.usdPrice }} | ~ {{ data.time.min }} mins: {{ data.time.sec }}
      secs
    </p>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid #e7eaf3;
  border-radius: 0.5rem;
  color: black;
  padding: 12px 20px;
}

.smile {
  width: 20px;
  height: 20px;
  margin-right: 5px;
}

.level {
  font-weight: 600;
}

.top {
  display: flex;
  align-items: center;
}

.price {
  font-size: 1.3125rem;
  word-wrap: break-word;
  font-weight: 600;
  margin: 0.5rem 0;
}

.low {
  color: hsla(160, 100%, 37%, 1);
}

.avarage {
  color: #3498db;
}

.high {
  color: rgb(165, 42, 42);
}

.small {
  font-size: 0.875rem;
  word-wrap: break-word;
}
</style>

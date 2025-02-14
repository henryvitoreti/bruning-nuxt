<template>
  <div class="custom-card">
    <div v-if="$slots.header" class="card-header d-flex justify-content-between align-items-center">
      <slot name="header"></slot>
    </div>
    <div v-if="$slots.body" class="card-body">
      <slot name="body"></slot>
    </div>
  </div>
</template>

<style scoped>
.custom-card {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.custom-card:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  border-color: #663399;
  transform: translateY(-5px);
}

.card-header {
  padding: 20px;
  border-bottom: 1px solid #ddd;
}

.card-body {
  padding: 20px;
  flex-grow: 1;
  max-height: 70vh;
  overflow-y: auto;
}

.card-body::-webkit-scrollbar {
  width: 8px;
}

.card-body::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

.card-body::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}

.card-body::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
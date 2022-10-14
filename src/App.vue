<script>
import { search, getLink } from "./api";
export default {
  name: "app",
  data() {
    return {
      list: [],
      keywords: "",
    };
  },
  methods: {
    async searchAction() {
      const data = await search(this.keywords);
      console.log(data);
      this.list = data.data.result.songs;
    },
    async download(id) {
      const datat = await getLink(id);
      location.href = datat.data.data[0].url;
    },
  },
};
</script>

<template>
  <var-row class="flex">
    <var-input v-model="keywords" placeholder="请输入搜索内容" />
    <var-button @click="searchAction()" type="primary" round>
      <var-icon name="chevron-right" />
    </var-button>

    <var-list>
      <var-cell
        :key="index"
        v-for="(item, index) in list"
        @click="download(item.id)"
      >
        {{ item.name }}
      </var-cell>
    </var-list>
  </var-row>
</template>

<style>
.flex {
  display: flex;
  justify-content: center !important;
  align-items: center !important;
}
.flex .var-input {
  width: 90%;
}
</style>

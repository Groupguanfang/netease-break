<script>
import { getLink } from "./api"

export default {
  name: "app",
  data() {
    return {
      url: "",
      id: "",
      buttonText: "请填写音乐id",
      disabled: true
    }
  },
  methods: {
    async action() {
      this.buttonText = "加载中"
      const data = await getLink(this.id)
      this.url = data.data.data[0].url
      this.buttonText = "狗叼，点击下载吧"
      this.disabled = false
    }
  },
}
</script>

<template>
  <div class="root">
    <input v-model="id" placeholder="请输入音乐id"/>
    <button @click="action">获取下载链接</button>
    <a :href="url"><button :disabled="disabled">{{ buttonText }}</button></a>
  </div>
</template>

<style scoped>
</style>

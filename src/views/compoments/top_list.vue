<template>
  <div class="top-list">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      :error="error"
      error-text="请求失败，点击重新加载"
      @load="onLoad"
    >
      <article-item
        v-for="(article, index) in list"
        :key="index"
        :article="article"
      />
    </van-list>
  </div>
</template>

<script>
import { getNewsTop } from "@/api/index";
import ArticleItem from "@/components/article_item/index";
export default {
  name: "toplist",
  components: {
    ArticleItem,
  },
  props: {
    url: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      error: false,
    };
  },
  methods: {
    async onLoad() {
      try {
        const { data } = await getNewsTop(this.url);
        // if (Math.random() > 0.5) {
        //   JSON.parse('dsfcsdfsdf')
        // }
        this.list.push(...data);
        this.loading = false;
        this.finished = true;
      } catch (err) {
        this.error = true;
        this.loading = false;
        this.$toast("获取头条数据失败");
      }
    },
  },
};
</script>

<style scoped lang="less">
</style>

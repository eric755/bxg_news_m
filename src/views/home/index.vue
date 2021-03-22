<template>
  <div class="home">
    <!-- 头部搜索logo -->
    <van-nav-bar class="page-nav-bar" title="登录">
      <img slot="title" src="@/assets/logo.png" alt="logo" />
      <i slot="left" class="xw xw-V"></i>
      <i slot="right" class="xw xw-sousuo" @click="search_btn"></i>
    </van-nav-bar>
    <!-- /头部搜索logo -->

    <!-- 导航栏滚动切换 -->
    <van-tabs
      class="navigation_bar"
      v-model="active"
      :title-active-color="select_color"
      :title-inactive-color="unselect_color"
      sticky
      animated
      swipeable
    >
      <van-tab v-for="(item, id) in list" :key="id" :title="item.name">
        <top-list :url="item.url" />
      </van-tab>
    </van-tabs>
    <!-- /导航栏滚动切换 -->
  </div>
</template>

<script>
import TopList from "@/views/compoments/top_list"
export default {
  name: "home",
  components: {
    TopList
  },
  data() {
    return {
      active: 0,
      select_color: "#43a4fc",
      unselect_color: "#727272",
      list: [
        { id: 1, name: "头条", url: "top" },
        { id: 2, name: "社会", url: "shehui" },
        { id: 3, name: "国内", url: "guonei" },
        { id: 4, name: "国际", url: "guoji" },
        { id: 5, name: "娱乐", url: "yule" },
        { id: 6, name: "体育", url: "tiyu" },
        { id: 7, name: "科技", url: "keji" },
      ],
    };
  },
  created() {},
  methods: {
    search_btn() {
      this.$router.replace("/search");
    },
  },
};
</script>

<style scoped lang="less">
.home {
  background-color: #f4f5f6;
  .page-nav-bar {
    img {
      height: 26px;
    }
    i.xw {
      font-size: 26px;
      color: #43a4fc;
    }
  }
  /deep/ .navigation_bar {
    .van-tab {
      width: 23%;
    }
    .van-tabs__nav {
      background: #f4f5f6;
    }
    .van-tabs__line {
      background-color: #466de2;
    }
  }
}
</style>

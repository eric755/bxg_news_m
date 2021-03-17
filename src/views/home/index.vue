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
      <van-tab title="头条">
        <top-list />
      </van-tab>
      <van-tab title="社会">
        <shehui-list />
      </van-tab>
      <van-tab title="国内">
        <guonei-list />
      </van-tab>
      <van-tab title="国际">
        <guoji-list />
      </van-tab>
      <van-tab title="娱乐">
        <yul-list />
      </van-tab>
      <van-tab title="体育">
        <tiyu-list />
      </van-tab>
      <van-tab title="科技">
        <keji-list />
      </van-tab>
    </van-tabs>
    <!-- /导航栏滚动切换 -->
  </div>
</template>

<script>
import TopList from '@/views/compoments/top_list'
import ShehuiList from '@/views/compoments/shehui_list'
import GuoneiList from '@/views/compoments/guonei_list'
import GuojiList from '@/views/compoments/guoji_list'
import YulList from '@/views/compoments/yul_list'
import TiyuList from '@/views/compoments/tiyu_list'
import kejiList from '@/views/compoments/keji_list'
export default {
  name: 'home',
  components: {
    TopList,
    ShehuiList,
    GuoneiList,
    GuojiList,
    YulList,
    TiyuList,
    kejiList
  },
  data () {
    return {
      active: 0,
      select_color: '#43a4fc',
      unselect_color: '#727272'
    }
  },
  created () {},
  methods: {
    search_btn(){
      this.$router.replace('/search')
    }
  }
}
</script>

<style scoped lang="less">
.home{
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
  .van-tab{
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

<template>
  <div class="search">
    <form action="/">
      <van-search
        v-model="value"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
        action-text="搜索"
        class="yuanjiao"
      />
    </form>
    <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">猜你喜欢</van-divider>
    <van-grid class="lishi_item" column-num="0">
      <van-grid-item text="前端课程2019版本更新" />
      <van-grid-item text="博学谷" />
      <van-grid-item text="前端公开课" />
      <van-grid-item text="前端前端前端" />
      <van-grid-item text="博学谷" />
      <van-grid-item text="博学谷" />
      <van-grid-item text="博学谷" />
      <van-grid-item text="博学谷" />
    </van-grid>
  </div>
</template>

<script>
import { Toast } from 'vant'
export default {
  name: "search",
  data() {
    return {
      value: ''
    }
  },
  methods: {
    onSearch(val) {
      Toast(val);
    },
    onCancel() {
      Toast('你点击了搜索按钮')
    },
  },
}
</script>

<style scoped lang="less">
.lishi_item::after{
    border:none;
}
/deep/.van-grid-item__content{
    padding: 5px 8px;
    .van-grid-item__text{
    font-size: 18px !important;
    }
}
/deep/.yuanjiao{
    .van-search__content{
        border-radius: 20px !important;
    }
}
/deep/.van-hairline::after{
        border:none;
    }
</style>
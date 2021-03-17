<template>
  <van-cell class="article-item" :url="article.url">
    <div slot="title" class="article_title">{{ article.title }}</div>
    <div slot="label">
      <div class="cover-wrap">
        <van-image
          v-if="article.thumbnail_pic_s"
          width="100"
          height="100"
          :src="article.thumbnail_pic_s"
        />
        <van-image
          v-if="article.thumbnail_pic_s02"
          width="100"
          height="100"
          :src="article.thumbnail_pic_s02"
        />
      </div>
      <span class="article_time">时间：{{ article.date }}</span>
      <span class="article_author">作者：{{ article.author_name }}</span>
    </div>
  </van-cell>
</template>

<script>
export default {
  name: 'ArticleItem',
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  data () {
    return {}
  }
}
</script>

<style scope lang="less">
.article-item {
  .article_title {
    font-size: 18px;
    font-weight: 700;
    color: #323233;
    margin-bottom: 10px;
  }
  /deep/.cover-wrap {
    margin-bottom: 5px;
    .van-image {
      width: 150px !important;
      height: 120px !important;
      padding: 0 7px;
    }
  }
  .article_time,
  .article_author {
    color: #bfbfbf;
    font-size: 14px;
  }
  .article_time {
    padding-right: 10px;
  }
}
</style>

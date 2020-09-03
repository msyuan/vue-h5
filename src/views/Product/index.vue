<template>
  <div class="ui-box">
    <div class="search-box">
      <div class="ui-search">
        <input type="text" class="ui-input" placeholder="搜索商品" @click="gotoSearch" />
      </div>
    </div>
    <ul class="category-list">
      <li class="item" :class="'item' + index" v-for="(item, index) in categoryList" :key="item.categoryId" @click="gotoSearchProduct(item.categoryId)">{{item.categoryName}}</li>
    </ul>
     <div class="product-box">
      <van-pull-refresh v-model="isLoading" @refresh="onPullRefresh">
        <van-list
          v-model="loading"
          :finished="finished"
          :immediate-check="false"
          finished-text="没有更多了"
          @load="onLoadMore"
        >
          <ul class="product-list van-clearfix">
            <li class="item" v-for="item in productList" :key='item.productId'>
              <router-link :to="{path:'/detail',query:{'productId':item.productId}}">
                <img v-lazy='item.img' :ref="item.img" alt="item.title" />
              </router-link>
              <div class="info">
                <p class="title">{{item.title}}</p>
                <p class="price">¥{{item.price}}元</p>
              </div>
            </li>
          </ul>
        </van-list>
      </van-pull-refresh>
    </div>
  </div>
</template>
<script>
import { List, PullRefresh } from 'vant';
import { categoryList, productList } from './model'
import { getHomeProduct } from '../../service/product'
export default {
  name: 'Product',
  components:{
    [List.name]: List,
    [PullRefresh.name]: PullRefresh
  },
  data () {
    return {
      productList: productList,
      categoryList: categoryList,
      isLoading: true,         //下拉刷新数据
      pageNumber: 1,     //分页页码 1-第一页
      pageSize: 10,      //每页条数
      loading: false,    //加载状态
      finished: false    //是否加载完成
    }
  },
  created () {

  },
  methods: {
    //跳转至搜索页面
    gotoSearch(){
      console.log("搜索")
      // this.$router.push({path:'/search'})
    },
    /**
     * 获取商品数据
     * @hasMore  控制分页是否是上垃加载
     */
    getProduct (hasMore = false) {
      var params = {
        pageNumber: this.pageNumber,
        pageSize: this.pageSize,
      }
      getHomeProduct(params).then(res => {
        var data = res.data
        console.log("返回的数据", data.list)
        //全部数据加载完成
        if(data && data.list.length === 0){
          this.finished = true
        }
        if(hasMore){
          this.productList = this.productList.concat(data.list)
        }else{
          this.productList = data.list
        }
        console.log("this.productList", this.productList)
        this.loading = false
        this.refreshing = false
      })
    },
    // 下拉刷新数据
    onPullRefresh () {
      this.loading = false
      this.finished = false
      this.pageNumber = 1
      console.log("下拉加载", this.pageNumber)
      this.getProduct()
    },
    // 加载更多数据
    onLoadMore () {
      this.pageNumber++
      console.log("上拉加载", this.pageNumber)
      this.getProduct(true)
    }
  }

}
</script>
<style lang="less" scoped>
  @import 'style.less';
</style>
import SiteTopBar from './components/SiteTopBar'

export default {
  components: {
    SiteTopBar
  },
  data () {
    return {
    }
  },
  computed: {
    isShowSiteAsideBar () {
      if (this.$route.meta.ignoreAsideBar) return false
      return true
    }
  },
  // async created () {
  //   await this.getUserInfo()
  //   if (common.getToken()) return
  //   this.redirect()
  // },
  methods: {
    // async getUserInfo () {
    //   try {
    //     const res = await userServices.getUserInfo()
    //     this.$store.state.user = res
    //   } catch (e) {}
    // },
    // redirect () {
    //   this.$router.replace({ path: '/homepage' })
    // }
  }
}

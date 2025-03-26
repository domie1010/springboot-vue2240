const base = {
    get() {
        return {
            url : "http://localhost:8080/springbooty2rp6/",
            name: "springbooty2rp6",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springbooty2rp6/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "数码产品抢购系统"
        } 
    }
}
export default base

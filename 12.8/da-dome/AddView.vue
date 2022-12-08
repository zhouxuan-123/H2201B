<template>
  <div class="add">
    <h1>添加商品</h1>
    <el-card>
      <el-alert title="添加商品信息" center type="info" show-icon></el-alert>
      <!-- 步骤条 -->
      <el-steps :active="active" align-center finish-status="success" style="margin:15px 0;">
        <el-step title="基本信息"></el-step>
        <el-step title="商品参数"></el-step>
        <el-step title="商品属性"></el-step>
        <el-step title="商品图片"></el-step>
        <el-step title="商品内容"></el-step>
        <el-step title="完成"></el-step>
      </el-steps>
      <!-- tabs标签页 -->
      <el-tabs tab-position="left" :before-leave="fn">
        <el-tab-pane label="基本信息">
          <!-- 表单 -->
          <el-form :model="ruleForm" label-position="top" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="商品名称" prop="goods_name">
              <el-input v-model="ruleForm.goods_name"></el-input>
            </el-form-item>
            <el-form-item label="商品价格" prop="goods_price">
              <el-input v-model.number="ruleForm.goods_price"></el-input>
            </el-form-item>
            <el-form-item label="商品数量" prop="goods_number">
              <el-input v-model.number="ruleForm.goods_number"></el-input>
            </el-form-item>
            <el-form-item label="商品重量" prop="goods_weight">
              <el-input v-model.number="ruleForm.goods_weight"></el-input>
            </el-form-item>
            <el-form-item label="商品分类" prop="goods_cat">
              <!-- 级联选择器 -->
              <!-- :props="{label: 'cat_name', value: 'cat_id'}"  配置级联选择器的名字和值 -->
              <el-cascader
                style="width:100%"
                v-model="ruleForm.goods_cat"
                :options="cateList"
                @change="handleChange"
                :props="{label: 'cat_name', value: 'cat_id'}"
                ></el-cascader>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="商品参数">商品参数</el-tab-pane>
        <el-tab-pane label="商品属性">商品属性</el-tab-pane>
        <el-tab-pane label="商品图片">
            <!-- Upload 上传 -->
            <!-- action 图片要提交的地址 -->
            <!-- el-upload 可以发送一个ajax请求 -->
            <!-- 图片默认是post请求方式 -->
            <!-- headers 请求头， 请求头设置token -->
            <!-- :on-success  成功的回调函数  相当于 .then(res=>{}) -->
            <!-- this.$axios.post("http://175.27.228.178:3434/api/private/v1/upload").then(res=>{}) -->
            <el-upload
                class="upload-demo"
                action="http://175.27.228.178:3434/api/private/v1/upload"
                :headers="headers"
                list-type="picture"
                :on-success="success"
                >
                <el-button size="small" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
        </el-tab-pane>
        <el-tab-pane label="商品内容">
            <!-- 富文本编辑器 -->
            <quill-editor style="height:300px;overflow: auto;margin: 20px 0"
                ref="myQuillEditor"
                v-model="content"
            />
            <el-button type="primary" @click="onSubmit" style="margin: 20px;">添加商品</el-button>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
        content:"",
      headers:{Authorization:window.sessionStorage.getItem('token')}, // 请求头，设置token
      active: 0,// 步骤条 从0开始
      cateList:[], // 分类列表
      ruleForm:{ // 基本信息
          goods_name:"",
          goods_price:"",
          goods_number:"",
          goods_weight:"",
          goods_cat:"",
      },
      pics:[], // 图片地址
      rules: {
          goods_name: [
            { required: true, message: '请输入商品名称', trigger: 'blur' },
          ],
          goods_price: [
            { required: true, message: '请输入商品价格', trigger: 'blur' },
          ],
          goods_number: [
            { required: true, message: '请输入商品数量', trigger: 'blur' },
          ],
          goods_weight: [
            { required: true, message: '请输入商品重量', trigger: 'blur' },
          ],
          goods_cat: [
            { required: true, message: '请输入商品分类', trigger: 'blur' },
          ],
      }
    }
  },
  methods: {
      getCate(){ // 获取分类列表
            this.$http.get("/api/categories").then(res=>{
                console.log(res);
                this.cateList = res.data.data;
            })
      },
      handleChange(){ // 切换分类时触发

      },
      fn(newName, oldName){  // tabs 标签页切换之前触发   return false阻止跳转
        //   console.log(newName, oldName);
            //   newName, oldName   标签页 对应的下标
            // 判断所有的数据是否为空
            let flag = false;
            for (let i in this.ruleForm ){
                if (this.ruleForm[i] == ""){
                    flag = true;
                }
            }
            // flag == true 说明表单为空
            // 如果点击除0以外的其他标签，并且 表单中有空数据，阻止跳转并提示
            if (newName !=0 && flag == true){
                this.$message({
                    message: '请补全内容',
                    type: 'error'
                });
                return false;
            } else{
                this.active = Number(newName); // active 从报错中看到，只接受数字类型，所以把字符串转化成数字
            }


      },
      success(res){
        //   res相当于成功的回调函数中，后台返回的数据
          console.log(res);
        //   截取掉字符串的后缀名 tmp_uploads/5019cc3c9325fe6c18fe9b5e1f2842d3.jpg
          console.log(res.data.tmp_path.slice(0, -4))
          let tem = res.data.tmp_path.slice(0, -4)
          this.pics.push({"pic": "/" + tem})
      },
      onSubmit(){ // 添加商品
        //   this.ruleForm.goods_cat = this.ruleForm.goods_cat.join(",");
          this.$axios.post("goods", {...this.ruleForm, goods_cat: this.ruleForm.goods_cat.join(",")}).then(res=>{
              console.log(res);
              if (res.data.meta.status == 201){
                  this.$message({
                      message: '创建商品成功',
                      type: 'success'
                  });
                //   编程式跳转，跳转到商品列表页
                this.$router.push({path:"/goods"})
              } else {
                  this.$message({
                      message: res.data.meta.msg,
                      type: 'error'
                  });
              }
          })
      }
  },
  created() {
      this.getCate();
  },
}
</script>
<style lang="scss" scoped>
.add{
    text-align: left;
}
</style>

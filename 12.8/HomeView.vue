<template>
	<div class="home">
		<div class="homelist">
			<ul>
				<li v-for="(item, index) in list" :key="item.id">
					<span @click.right="del(index)" @click.left="edit(item, index)">
						{{ item.name }}
					</span>
				</li>
			</ul>
			<button class="add" @click="dialogVisible = true">添加</button>
		</div>
		<!-- //添加人员弹窗 -->
		<el-dialog title="添加人员" :visible.sync="dialogVisible" width="30%">
			<el-form
				:model="ruleForm"
				:rules="rules"
				ref="ruleForm"
				label-width="100px"
				class="demo-ruleForm"
			>
				<el-form-item label="姓名" prop="name">
					<el-input v-model="ruleForm.name" placeholder="请输入姓名"></el-input>
				</el-form-item>
				<el-form-item label="手机号" prop="tel">
					<el-input
						v-model="ruleForm.tel"
						placeholder="请输入手机号"
					></el-input>
				</el-form-item>
				<el-form-item label="验证码" class="code" prop="code">
					<el-input
						v-model="ruleForm.code"
						class="codeinput"
						placeholder="请输入验证码"
					></el-input>
					<template>
						<el-button
							type="primary"
							class="codebtn"
							@click="obtain"
							v-if="flag"
						>
							获取验证码
						</el-button>
						<el-button type="primary" class="codebtn" disabled v-else>
							{{ time }}s后重发
						</el-button>
					</template>
				</el-form-item>
				<el-form-item label="充值" prop="Recharge">
					<el-input
						v-model="ruleForm.Recharge"
						class="rechinput"
						placeholder="最多2位小数"
					></el-input>
				</el-form-item>
				<el-form-item class="btns">
					<el-button @click="resetForm('ruleForm')">重置</el-button>
					<el-button type="primary" @click="submitForm('ruleForm')">
						确定
					</el-button>
				</el-form-item>
			</el-form>
		</el-dialog>
		<!-- //编辑人员弹窗 -->
		<el-dialog title="编辑人员" :visible.sync="dialogVisibles" width="30%">
			<el-form
				:model="editForm"
				:rules="rules"
				ref="editForm"
				label-width="100px"
				class="demo-ruleForm"
			>
				<el-form-item label="姓名" prop="name">
					<el-input v-model="editForm.name" placeholder="请输入姓名"></el-input>
				</el-form-item>
				<el-form-item label="手机号" prop="tel">
					<el-input
						v-model="editForm.tel"
						placeholder="请输入手机号"
					></el-input>
				</el-form-item>
				<el-form-item label="验证码" class="code" prop="code">
					<el-input
						v-model="editForm.code"
						class="codeinput"
						placeholder="请输入验证码"
					></el-input>
					<template>
						<el-button
							type="primary"
							class="codebtn"
							@click="obtain"
							v-if="flag"
						>
							获取验证码
						</el-button>
						<el-button type="primary" class="codebtn" disabled v-else>
							{{ time }}s后重发
						</el-button>
					</template>
				</el-form-item>
				<el-form-item label="充值" prop="Recharge">
					<el-input
						v-model="editForm.Recharge"
						class="rechinput"
						placeholder="最多2位小数"
					></el-input>
				</el-form-item>
				<el-form-item class="btns">
					<el-button @click="resetForms">重置</el-button>
					<el-button type="primary" @click="editForms('editForm')">
						确定
					</el-button>
				</el-form-item>
			</el-form>
		</el-dialog>
		<div :class="active ? 'draw' : 'actives'" @click="draw">
			<div>抽</div>
			<div>奖</div>
		</div>
		<el-dialog title="抽奖" :visible.sync="drawVisible" width="30%">
			<h1 class="nams" v-if="timsfalg == false">张三</h1>
			<h1 class="nams" v-else>{{ nams }}</h1>
			<div class="drawbtn">
				<el-button type="primary" @click="start">开始抽奖</el-button>
			</div>
		</el-dialog>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				flag: true,
				dialogVisible: false,
				dialogVisibles: false,
				drawVisible: false,
				time: 60,
				active: false,
				timsfalg: false,
				list: [
					{
						id: 1,
						name: '张三',
						luckyNumber: 3,
					},
					{
						id: 2,
						name: '李四',
						luckyNumber: 3,
					},
				],
				ruleForm: {
					name: '',
					tel: '',
					code: '',
					Recharge: '',
				},
				editForm: {
					name: '',
					tel: '',
					code: '',
					Recharge: '',
				},
				is: -1,
				codes: '',
				rules: {
					name: [
						{ required: true, message: '请输入姓名', trigger: 'blur' },
						{
							min: 1,
							max: 10,
							message: '长度在 1 到 10 个字符',
							trigger: 'blur',
						},
					],
					tel: [
						// { validator: Mobile, trigger: 'blur' },
						{ required: true, message: '请输入手机号', trigger: 'blur' },
						{
							pattern: /^1[3456789]\d{9}$/,
							message: '请输入正确的手机号',
							trigger: 'blur',
						},
					],
					code: [
						{ required: true, message: '请输入验证码', trigger: 'blur' },
						{
							pattern: /^[0-9]{6}$/,
							message: '请输入正确的验证码',
							trigger: 'blur',
						},
					],
					Recharge: [
						// { validator: Recharge, trigger: 'blur' },
						{ required: true, message: '请输入充值金额', trigger: 'blur' },
						{
							pattern: /^(([1-9]\d{0,4})|0)(\.\d{1,2})?$/,
							message: '请输入正确的充值金额',
							trigger: 'blur',
						},
					],
				},
				timer: null,
				nams: '',
				fullHeight: document.documentElement.clientHeight,
			};
		},
		methods: {
			// 添加
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						//判断验证码是否正确
						if (this.codes != this.ruleForm.code) {
							this.$message({
								message: '验证码错误',
								type: 'error',
							});
							return false;
						}
						this.list.push({ ...this.ruleForm, luckyNumber: 3 });
						this.dialogVisible = false;
						this.$message({
							message: '添加成功',
							type: 'success',
						});
						// 重置表单
						this.$refs[formName].resetFields();
						localStorage.setItem('list', JSON.stringify(this.list));
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			//重置
			resetForm(formName) {
				this.$refs[formName].resetFields();
			},
			//获取验证码
			obtain() {
				this.flag = false;
				// 验证码倒计时
				let timer = setInterval(() => {
					this.time--;
					if (this.time <= 0) {
						clearInterval(timer);
						this.flag = true;
						this.time = 60;
					}
				}, 1000);
				this.codenum();
			},
			// 生成一个验证码
			codenum() {
				this.codes = '';
				for (let i = 0; i < 6; i++) {
					this.codes += Math.floor(Math.random() * 10);
				}
				alert(this.codes);
				console.log(this.codes);
			},
			// 删除
			del(i) {
				this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning',
				})
					.then(() => {
						this.list.splice(i, 1);
						this.$message({
							type: 'success',
							message: '删除成功!',
						});
						localStorage.setItem('list', JSON.stringify(this.list));
					})
					.catch(() => {
						this.$message({
							type: 'info',
							message: '已取消删除',
						});
					});
			},
			//编辑
			edit(val, i) {
				this.dialogVisibles = true;
				this.editForm.name = val.name;
				this.editForm.tel = val.tel;
				this.editForm.Recharge = val.Recharge;
				this.is = i;
			},
			// 编辑提交
			editForms() {
				//判断验证码是否正确
				if (this.codes != this.editForm.code) {
					this.$message({
						message: '验证码错误',
						type: 'error',
					});
					return false;
				}
				//判断新旧手机号是否一致
				if (this.list[this.is].tel !== this.editForm.tel) {
					this.list.forEach((item) => {
						if (item.tel === this.editForm.tel) {
							return false;
						} else {
							this.list[this.is].name = this.editForm.name;
							this.list[this.is].tel = this.editForm.tel;
							this.list[this.is].Recharge = this.editForm.Recharge;
							this.dialogVisibles = false;
							this.$message({
								message: '编辑成功',
								type: 'success',
							});
							localStorage.setItem('list', JSON.stringify(this.list));
						}
					});
				}
			},
			// 编辑重置
			resetForms() {
				this.editForm.name = '';
				this.editForm.tel = '';
				this.editForm.Recharge = '';
				this.editForm.code = '';
			},
			//抽奖
			draw() {
				// 如果人员小于5人 提示‘人员数未超过5人，请先去添加人员
				if (this.list.length < 5) {
					this.$message({
						message: '人员数未超过5人，请先去添加人员',
						type: 'error',
					});
					return false;
				}
				this.drawVisible = true;
			},
			//开始抽奖
			start() {
				this.timer = setInterval(() => {
					this.index = Math.floor(Math.random() * this.list.length);
					this.list.forEach((item) => {
						if (item.luckyNumber == 0) {
							this.index = Math.floor(Math.random() * this.list.length);
						}
					});
				}, 100);
				setTimeout(() => {
					clearInterval(this.timer);
					this.list[this.index].luckyNumber--;
					this.$message({
						message: '恭喜' + this.list[this.index].name + '中奖',
						type: 'success',
					});
					this.timsfalg = true;
					this.nams = this.list[this.index].name;
					localStorage.setItem('list', JSON.stringify(this.list));
				}, 1000);
			},

			handleScroll() {
        this.fullHeight = document.documentElement.scrollTop;
        console.log(this.fullHeight);
        if(this.fullHeight>200){
          this.active = true;
        }else{
          this.active = false;
        }
			},
		},
		created() {
			localStorage.getItem('list') &&
				(this.list = JSON.parse(localStorage.getItem('list')));
		},
		mounted() {
			window.addEventListener('scroll', this.handleScroll, true);
		},
		components: {},
		computed: {},
		watch: {
		},
	};
</script>

<style lang="scss" scoped>
	ul {
		height: 80px;
		display: flex;
		align-items: center;
	}
	li {
		margin: 10px 0;
		padding: 10px;
		cursor: pointer;
	}
	.add {
		width: 60px;
		height: 30px;
		margin-left: 20px;
		background-color: pink;
		color: white;
		border: none;
		border-radius: 5px;
		cursor: pointer;
	}

	.home {
		position: relative;
		height: 200%;
		.homelist {
			width: 100%;
			display: flex;
			align-items: center;
		}
		.draw,
		.actives {
			position: absolute;
			bottom: 1000px;
			right: 0px;
			width: 50px;
			height: 100px;
			background-color: #1e89e0;
			text-align: center;
			line-height: 50px;
			border-radius: 5px;
			border-top-right-radius: 0px;
			border-bottom-right-radius: 0px;
			color: white;
		}
	}
  // 动画效果
  .draw {
    transition: all 1s;
    transform: rotate(45deg);
    right: -50px;
  }

	.nams {
		text-align: center;
		line-height: 200px;
	}
	.drawbtn {
		text-align: center;
	}
	.code {
		.codeinput {
			width: 200px;
		}
	}
	.rechinput {
		width: 200px;
	}
	.codebtn {
		margin-left: 100px;
	}
	.btns {
		text-align: right;
	}
</style>

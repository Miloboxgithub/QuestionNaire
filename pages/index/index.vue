<template>

	<view class="content">
		<view class="header" style="margin-top: 20px;">
			<p style="font-weight: 600; font-size: 18px;">深圳市龙岗区人民医院</p>
			<h1>患者人文关怀满意度调查问卷</h1>
			<p style="text-align: left;">尊敬的女士/先生:</p>
			<p class="survey-instruction">
				&emsp;&emsp;您好！为帮助评价医院的关怀护理服务，并便于我们改进工作，请您填写此问卷。请您根据住院期间护理人员对您关怀照顾的整体感受，在最佳选项上打“√”。这将不会对您的治疗护理带来影响，感谢您的配合！祝您早日康复！
			</p>
		</view>
		<view class="" style="text-align: left; width: 90vw;font-weight: 600;">
			个人信息：
		</view>
		<active-form style="width: 90w !important;" ref="activeForm" v-model="form" :formData="formData"
			num></active-form>
		<view class="" style="text-align: left; margin-top: 20px; width: 90vw;font-weight: 600;">
			我觉得护士：
		</view>
		<active-form ref="activeForms" v-model="forms" :formData="formDatas" num></active-form>
		<view class="btn-list">
			<view class="subform" @click="submit">提交表单</view>
			<!-- <view class="resetform" @click="reset">重置表单</view> -->
		</view>
	</view>
</template>

<script>
	import ActiveForm from "@/components/active-form/active-form";

	export default {
		components: {
			ActiveForm,
		},
		data() {
			return {
				//双向绑定回显
				form: {

				},
				forms: {

				},
				//表单配置项
				formData: [{
						id: "1",
						placeholder: "选择",
						label: "科室",
						type: "select",
						show: false, //是否显示
						title: "请选择科室",
						list: [{
							value: '消化内科',
							name: "消化内科",
						}],
						rules: {
							name: "office",
							value: "消化内科", //list.value  0 1
							verify: true,
							errMess: "科室未选择",
						},
					},
					{
						id: "2",
						label: "年龄",
						type: "number",
						list: [],
						rules: {
							name: "age",
							value: '', // 字段值  list.value 填入回显 0 1
							verify: false,
							errMess: "请输入年龄",
						},
					},
					{
						id: "3",
						placeholder: "选择",
						label: "性别",
						type: "select",
						show: false, //是否显示
						title: "请选择性别",
						list: [{
								value: '男',
								name: "男",
							},
							{
								value: '女',
								name: "女",
							},
						],
						rules: {
							name: "sex",
							value: "", //list.value  0 1
							verify: true,
							errMess: "性别未选择",
						},
					},
					{
						id: "4",
						placeholder: "选择",
						label: "文化程度",
						type: "select",
						show: false, //是否显示
						title: "请选择文化程度",
						list: [{
							name: '研究生',
							value: '研究生'
						}, {
							name: '本科',
							value: '本科'
						}, {
							name: '专科',
							value: '专科'
						}, {
							name: '高中',
							value: '高中'
						}, {
							name: '初中',
							value: '初中'
						}, {
							name: '小学',
							value: '小学'
						}, {
							name: '文盲',
							value: '文盲'
						}, ],
						rules: {
							name: "education",
							value: "", //list.value  0 1
							verify: true,
							errMess: "教育程度未选择",
						},
					},
					{
						id: "5",
						label: "职业",
						type: "text",
						list: [],
						rules: {
							name: "occupation",
							value: '', // 字段值  list.value 填入回显 0 1
							verify: false,
							errMess: "请输入职业",
						},
					},
					{
						id: "6",
						label: "住院天数",
						placeholder: "例：3-5天",
						type: "text",
						list: [],
						rules: {
							name: "tian",
							value: '', // 字段值  list.value 填入回显 0 1
							verify: true,
							errMess: "请输入住院天数",
						},
					},


				],
				formDatas: [{
						id: "7",
						label: "1.具有愿意帮助他人和令人信任的态度。",
						type: "radio",
						list: [{
								value: 5,
								label: "总是",
							},
							{
								value: 4,
								label: "经常",
							},
							{
								value: 3,
								label: "一般",
							},
							{
								value: 2,
								label: "很少",
							},
							{
								value: 1,
								label: "极少",
							},
						],
						rules: {
							name: "q1",
							value: '', // 字段值  list.value 填入回显 0 1
							verify: true,
							errMess: "有选项未选择",
						},
					}, {
						id: "8",
						label: "2.安排日程和给药时考虑我的需要。",
						type: "radio",
						list: [{
								value: 5,
								label: "总是",
							},
							{
								value: 4,
								label: "经常",
							},
							{
								value: 3,
								label: "一般",
							},
							{
								value: 2,
								label: "很少",
							},
							{
								value: 1,
								label: "极少",
							},
						],
						rules: {
							name: "q2",
							value: '', // 字段值  list.value 填入回显 0 1
							verify: true,
							errMess: "有选项未选择",
						},
					}, {
						id: "9",
						label: "3.制定治疗方案时让我可以选择。",
						type: "radio",
						list: [{
								value: 5,
								label: "总是",
							},
							{
								value: 4,
								label: "经常",
							},
							{
								value: 3,
								label: "一般",
							},
							{
								value: 2,
								label: "很少",
							},
							{
								value: 1,
								label: "极少",
							},
						],
						rules: {
							name: "q3",
							value: '', // 字段值  list.value 填入回显 0 1
							verify: true,
							errMess: "有选项未选择",
						},
					},
					{
						id: "10",
						placeholder: "请选择年龄段",
						label: "4.帮助我了解由于疾病所引起的生活变化。",
						type: "radio",
						list: [{
								value: 5,
								label: "总是",
							},
							{
								value: 4,
								label: "经常",
							},
							{
								value: 3,
								label: "一般",
							},
							{
								value: 2,
								label: "很少",
							},
							{
								value: 1,
								label: "极少",
							},
						],
						rules: {
							name: "q4",
							value: '', // 字段值  list.value 填入回显 0 1
							verify: true,
							errMess: "有选项未选择",
						},
					},
					{
						id: "11",
						label: "5.让我参与我的护理。",
						type: "radio",
						list: [{
								value: 5,
								label: "总是",
							},
							{
								value: 4,
								label: "经常",
							},
							{
								value: 3,
								label: "一般",
							},
							{
								value: 2,
								label: "很少",
							},
							{
								value: 1,
								label: "极少",
							},
						],
						rules: {
							name: "q5",
							value: '', // 字段值  list.value 填入回显 0 1
							verify: true,
							errMess: "有选项未选择",
						},
					}, {
						id: "122",
						label: "6.让我的家人和重要的人参与我的护理。",
						type: "radio",
						list: [{
								value: 5,
								label: "总是",
							},
							{
								value: 4,
								label: "经常",
							},
							{
								value: 3,
								label: "一般",
							},
							{
								value: 2,
								label: "很少",
							},
							{
								value: 1,
								label: "极少",
							},
						],
						rules: {
							name: "q6",
							value: '', // 字段值  list.value 填入回显 0 1
							verify: true,
							errMess: "有选项未选择",
						},
					}, {
						id: "12",
						label: "7.让我感到当我再次需要护理时会再到这个医院。",
						type: "radio",
						list: [{
								value: 5,
								label: "总是",
							},
							{
								value: 4,
								label: "经常",
							},
							{
								value: 3,
								label: "一般",
							},
							{
								value: 2,
								label: "很少",
							},
							{
								value: 1,
								label: "极少",
							},
						],
						rules: {
							name: "q7",
							value: '', // 字段值  list.value 填入回显 0 1
							verify: true,
							errMess: "有选项未选择",
						},
					}, {
						id: "13",
						label: "8.对我进行治疗时让我感到安心。",
						type: "radio",
						list: [{
								value: 5,
								label: "总是",
							},
							{
								value: 4,
								label: "经常",
							},
							{
								value: 3,
								label: "一般",
							},
							{
								value: 2,
								label: "很少",
							},
							{
								value: 1,
								label: "极少",
							},
						],
						rules: {
							name: "q8",
							value: '', // 字段值  list.value 填入回显 0 1
							verify: true,
							errMess: "有选项未选择",
						},
					}, {
						id: "14",
						label: "9.提供心理护理和资源。",
						type: "radio",
						list: [{
								value: 5,
								label: "总是",
							},
							{
								value: 4,
								label: "经常",
							},
							{
								value: 3,
								label: "一般",
							},
							{
								value: 2,
								label: "很少",
							},
							{
								value: 1,
								label: "极少",
							},
						],
						rules: {
							name: "q9",
							value: '', // 字段值  list.value 填入回显 0 1
							verify: true,
							errMess: "有选项未选择",
						},
					}, {
						id: "15",
						label: "10.确保其他工作人员知道如何护理我。",
						type: "radio",
						list: [{
								value: 5,
								label: "总是",
							},
							{
								value: 4,
								label: "经常",
							},
							{
								value: 3,
								label: "一般",
							},
							{
								value: 2,
								label: "很少",
							},
							{
								value: 1,
								label: "极少",
							},
						],
						rules: {
							name: "q10",
							value: '', // 字段值  list.value 填入回显 0 1
							verify: true,
							errMess: "有选项未选择",
						},
					}, {
						id: "16",
						label: "11.提供能使我舒适的基本措施。",
						type: "radio",
						list: [{
								value: 5,
								label: "总是",
							},
							{
								value: 4,
								label: "经常",
							},
							{
								value: 3,
								label: "一般",
							},
							{
								value: 2,
								label: "很少",
							},
							{
								value: 1,
								label: "极少",
							},
						],
						rules: {
							name: "q11",
							value: '', // 字段值  list.value 填入回显 0 1
							verify: true,
							errMess: "有选项未选择",
						},
					}, {
						id: "17",
						label: "12.专业知识和技能过硬。",
						type: "radio",
						list: [{
								value: 5,
								label: "总是",
							},
							{
								value: 4,
								label: "经常",
							},
							{
								value: 3,
								label: "一般",
							},
							{
								value: 2,
								label: "很少",
							},
							{
								value: 1,
								label: "极少",
							},
						],
						rules: {
							name: "q12",
							value: '', // 字段值  list.value 填入回显 0 1
							verify: true,
							errMess: "有选项未选择",
						},
					}, {
						id: "18",
						label: "13.提供良好的身体护理。",
						type: "radio",
						list: [{
								value: 5,
								label: "总是",
							},
							{
								value: 4,
								label: "经常",
							},
							{
								value: 3,
								label: "一般",
							},
							{
								value: 2,
								label: "很少",
							},
							{
								value: 1,
								label: "极少",
							},
						],
						rules: {
							name: "q13",
							value: '', // 字段值  list.value 填入回显 0 1
							verify: true,
							errMess: "有选项未选择",
						},
					}, {
						id: "19",
						label: "14.意识到我可能有特殊的需要。",
						type: "radio",
						list: [{
								value: 5,
								label: "总是",
							},
							{
								value: 4,
								label: "经常",
							},
							{
								value: 3,
								label: "一般",
							},
							{
								value: 2,
								label: "很少",
							},
							{
								value: 1,
								label: "极少",
							},
						],
						rules: {
							name: "q14",
							value: '', // 字段值  list.value 填入回显 0 1
							verify: true,
							errMess: "有选项未选择",
						},
					}, {
						id: "20",
						label: "15.不用等我叫，就来看我。",
						type: "radio",
						list: [{
								value: 5,
								label: "总是",
							},
							{
								value: 4,
								label: "经常",
							},
							{
								value: 3,
								label: "一般",
							},
							{
								value: 2,
								label: "很少",
							},
							{
								value: 1,
								label: "极少",
							},
						],
						rules: {
							name: "q15",
							value: '', // 字段值  list.value 填入回显 0 1
							verify: true,
							errMess: "有选项未选择",
						},
					}, {
						id: "21",
						label: "16.对我表示关心。",
						type: "radio",
						list: [{
								value: 5,
								label: "总是",
							},
							{
								value: 4,
								label: "经常",
							},
							{
								value: 3,
								label: "一般",
							},
							{
								value: 2,
								label: "很少",
							},
							{
								value: 1,
								label: "极少",
							},
						],
						rules: {
							name: "q16",
							value: '', // 字段值  list.value 填入回显 0 1
							verify: true,
							errMess: "有选项未选择",
						},
					}, {
						id: "22",
						label: "17.合适的时候教我自我护理。",
						type: "radio",
						list: [{
								value: 5,
								label: "总是",
							},
							{
								value: 4,
								label: "经常",
							},
							{
								value: 3,
								label: "一般",
							},
							{
								value: 2,
								label: "很少",
							},
							{
								value: 1,
								label: "极少",
							},
						],
						rules: {
							name: "q17",
							value: '', // 字段值  list.value 填入回显 0 1
							verify: true,
							errMess: "有选项未选择",
						},
					}, {
						id: "23",
						label: "18.及时注意到我的问题。",
						type: "radio",
						list: [{
								value: 5,
								label: "总是",
							},
							{
								value: 4,
								label: "经常",
							},
							{
								value: 3,
								label: "一般",
							},
							{
								value: 2,
								label: "很少",
							},
							{
								value: 1,
								label: "极少",
							},
						],
						rules: {
							name: "q18",
							value: '', // 字段值  list.value 填入回显 0 1
							verify: true,
							errMess: "有选项未选择",
						},
					}, {
						id: "24",
						label: "19.对我诚实。",
						type: "radio",
						list: [{
								value: 5,
								label: "总是",
							},
							{
								value: 4,
								label: "经常",
							},
							{
								value: 3,
								label: "一般",
							},
							{
								value: 2,
								label: "很少",
							},
							{
								value: 1,
								label: "极少",
							},
						],
						rules: {
							name: "q19",
							value: '', // 字段值  list.value 填入回显 0 1
							verify: true,
							errMess: "有选项未选择",
						},
					}, {
						id: "25",
						label: "20.合我的意并对我友爱。",
						type: "radio",
						list: [{
								value: 5,
								label: "总是",
							},
							{
								value: 4,
								label: "经常",
							},
							{
								value: 3,
								label: "一般",
							},
							{
								value: 2,
								label: "很少",
							},
							{
								value: 1,
								label: "极少",
							},
						],
						rules: {
							name: "q20",
							value: '', // 字段值  list.value 填入回显 0 1
							verify: true,
							errMess: "有选项未选择",
						},
					}, {
						id: "26",
						label: "21.请问：您对护士关怀患者方面还有哪些意见和建议?请您描述一下。",
						type: "textarea",
						rules: {
							name: "q21",
							value: '', // 字段值  list.value 填入回显 0 1
							verify: true,
							errMess: "请填写21题",
						},
					}, {
						id: "27",
						label: "22.您觉得最具人文关怀精神的护士是？",
						type: "text",
						rules: {
							name: "q22",
							value: '', // 字段值  list.value 填入回显 0 1
							verify: true,
							errMess: "请填写22题",
						},
					},

				],

			};
		},
		methods: {
			// 提交表单
			submit() {
				let formData = {}
				const questions = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8', 'q9', 'q10', 'q11', 'q12', 'q13', 'q14',
					'q15', 'q16', 'q17', 'q18', 'q19', 'q20'
				];
				this.$refs.activeForm.vervify()
					.then(async (form) => {
						console.log("表单对象:", form);
						formData = {
							...formData,
							...form
						};
						this.$refs.activeForms.vervify()
							.then(async (forms) => {
								console.log("表单对象:", forms);
								formData.score = questions.reduce((total, question) => {
									const value = parseInt(forms[question], 10);
									return isNaN(value) ? total : total + value;
								}, 0);
								const creationTime = new Date().toISOString(); // 使用 ISO 格式
								formData = {
									...formData,
									...forms,
									creationTime: creationTime // 确保创建时间被添加
								};
								uniCloud.callFunction({
									name: 'submitForm',
									data: {
										formData: formData
									}
								}).then((res) => {
									if (res.result.status === 'success') {
										// 提示用户提交成功
										uni.showModal({
											title: '提交成功',
											content: '提交成功，感谢您的信任和支持！',
											showCancel: false,
											success: function(showModalRes) {
												if (showModalRes.confirm) {
													// 用户点击确定后关闭当前页面或窗口
													uni.navigateBack();
												}
											}
										});
									} else {
										// 提示用户提交失败
										uni.showToast({
											title: '提交失败，请稍后再试',
											icon: 'none',
											duration: 3000
										});
									}
								}).catch((err) => {
									console.error('调用失败', err);
								});
							})
							.catch((err) => {
								console.log("err", err);
							}); //表单校验

					})
					.catch((err) => {
						console.log("err", err);
					}); //表单校验


			},
			//重置表单
			reset() {
				this.$refs.activeForm.resetForm()
			}
		},
	};
</script>

<style lang="less">
	.header {
		text-align: center;
		margin-bottom: 20px;
		padding-left: 20px;
		padding-right: 20px;
	}

	.header p {
		font-size: 16px;
		line-height: 1.6;
	}

	.header h1 {
		font-size: 24px;
		margin: 10px 0;
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		.btn-list {
			display: flex;

			.subform {
				margin: 30rpx;
				padding: 18rpx 60rpx;
				border-radius: 18rpx;
				background-color: rgba(16, 103, 255);
				width: 50vw;
				color: #ffffff;
				font-weight: 500;
				font-size: 18px;
				display: flex;
				align-items: center;
				justify-content: center;
			}

			.resetform {
				margin: 30rpx;
				padding: 20rpx 60rpx;
				border-radius: 18rpx;
				background-color: #6e6a67;
				color: #ffffff;
			}
		}

		.survey-instruction {
			text-align: justify;
			font-size: 16px;
			line-height: 1.6;
			white-space: pre-wrap;
			text-indent: 2em;
		}
	}
</style>
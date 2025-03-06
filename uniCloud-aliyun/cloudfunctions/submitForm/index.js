'use strict';
exports.main = async (event, context) => {
	// 获取当前云数据库实例
	const db = uniCloud.database();

	// 获取表单提交的数据
	const formData = event.formData;

	// 定义要存储数据的集合名称，这里假设为 'form_data'
	const collectionName = 'form_data';

	try {
		// 将表单数据添加到数据库集合中
		const result = await db.collection(collectionName).add(formData);

		// 返回成功的响应
		return {
			status: 'success',
			message: '表单提交成功',
			data: result
		};
	} catch (error) {
		// 处理异常情况
		console.error('存储表单信息时发生错误', error);
		return {
			status: 'error',
			message: '存储表单信息时发生错误',
			error: error
		};
	}
};
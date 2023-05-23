import 'element-plus/es/components/message/style/css';
import {
	ElMessage,
	ElMessageBox,
	ElTabPane,
	ElCol,
	ElTabs,
	ElRow,
	ElTooltip,
	ElDropdown,
	ElDropdownItem,
	ElUpload,
	ElButton,
	ElDialog,
	ElAlert,
} from 'element-plus';

function MessageBox(message: string, title: string, type = 'warning') {
	return ElMessageBox.confirm(message, title, {
		confirmButtonText: '确定',
		cancelButtonText: '取消',
		type: 'warning',
	});
}

export {
	ElMessage as Message,
	MessageBox,
	ElTabPane,
	ElCol,
	ElTabs,
	ElRow,
	ElTooltip,
	ElDropdown,
	ElDropdownItem,
	ElUpload,
	ElButton,
	ElDialog,
	ElAlert,
};

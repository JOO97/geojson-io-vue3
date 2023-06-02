import 'element-plus/dist/index.css';

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
	ElIcon,
} from 'element-plus';

import { Document, Expand, Fold, ArrowDown } from '@element-plus/icons-vue';

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
	ElIcon,
	Document,
	Expand,
	Fold,
	ArrowDown,
};

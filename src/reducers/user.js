import { SET_NAME, SET_AGE, INIT_STORE } from '../actions';
let userList = [
		{ name: 'lilei', age: 18, id: 78 },
		{ name: 'wangjiang', age: 20, id: 96 },
		{ name: 'zhoujielun', age: 22, id: 6 },
		{ name: 'liudehua', age: 55, id: 99 }
];
export default function(state = userList, action) {
		switch (action.type) {
				case INIT_STORE:
						return [...action.value];
				case SET_NAME:
						let copyStateName = [...state];
						copyStateName[action.index].name = action.value;
						return copyStateName;
				case SET_AGE:
						let copyStateAge = [...state];
						copyStateAge[action.index].age = action.value;
						return copyStateAge;
				default:
						return state;
		}
}
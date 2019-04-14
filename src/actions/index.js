//常量
export const INIT_STORE='init_store';
export const SET_NAME='set_name';
export const SET_AGE='set_age';

export function setName(value,index){
  return {
    type: SET_NAME,
    value,
    index
  };
}

export function setAge(value,index){
  return {
    type: SET_AGE,
    value,
    index
  };
}

export function initStore(value,index){
  return {
    type: INIT_STORE,
    value
  };
}



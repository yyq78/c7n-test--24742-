import { action, computed, observable } from 'mobx';
import { axios } from '@choerodon/boot';
import FirstStore from './index.js';
class Store {
  @observable LabelData = [];
  @observable menuData=[];

  @action
  loadData(level="site") {
     level=FirstStore.level;
    axios.get(`/iam/v1/labels?type=role&level=${level}`, {level}).then((res)=>{
      this.LabelData=res;
    });
    axios.get(`/iam/v1/menus/menu_config?code=choerodon.code.top.${level}`).then((resp)=>{
      this.menuData=resp;
  });
  }
}

const store = new Store();

export default store;

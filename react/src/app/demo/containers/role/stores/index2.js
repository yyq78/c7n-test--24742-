import { action, computed, observable } from 'mobx';
import { axios } from '@choerodon/boot';
import FirstStore from './index.js';
class Store {
  @observable LabelData = [];
  @observable MenuData=[];
  @action
  loadData(level="site") {
    level=FirstStore.level;
    axios.get(`/iam/v1/labels?type=role&level=${level}`, {level}).then((res)=>{
      this.LabelData=res;
    });
    axios.get(`/iam/v1/menus/menu_config?code=choerodon.code.top.${level}`).then((resp)=>{
      this.MenuData=resp.subMenus.map(item =>{
        return {
          name:item.name,
          parentCode:item.code,
          children:item.subMenus,
        }
      });
    });
    
  }
}

const store = new Store();

export default store;

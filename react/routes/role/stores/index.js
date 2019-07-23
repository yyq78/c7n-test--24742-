
import { action, computed, observable } from 'mobx';
import { axios } from '@choerodon/boot';

class Store {
  @observable data = [];
  @observable isLoading=false;
  @observable pagination = {
    current: 1,
    pageSize: 10,
    total: '',
  };
  @observable level="site";
  @computed
  get getData() {
    return this.data.slice();
  }
  @action
  loadData(page = this.pagination.current, size = this.pagination.pageSize) {
    const body = {};
    const sorter = [];
    const level=this.level;
    axios.post(`/iam/v1/roles/search?page=${page}&size=${size}&sort=id,desc`, {level}).then((res)=>{
      this.data = res.list;
      this.pagination = {
        current: res.pageNum,
        pageSize: res.pageSize,
        total: res.total,
      }
    });
  }
}

const store = new Store();

export default store;

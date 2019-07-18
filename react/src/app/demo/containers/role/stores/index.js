
import { action, computed, observable } from 'mobx';
import { axios } from '@choerodon/boot';

class Store {
  @observable data = [];
  @observable isLoading = true;
  @observable pagination = {
    current: 1,
    pageSize: 10,
    total: '',
  };

  @action
  setData(data) {
    this.data = data;
  }

  @action
  setIsLoading(data) {
    this.isLoading = data;
  }

  @computed
  get getData() {
    return this.data.slice();
  }

  @action
  loadData(page = this.pagination.current, size = this.pagination.pageSize) {
    const body = {};
    const sorter = [];
    this.isLoading = true;
    axios.post(
      `/iam/v1/menus?code=choerodon.code.top.user&source_id=0`,
      JSON.stringify(body),
    )
      .then((res) => {
        this.isLoading = false;
        this.data = res.list;
        this.pagination = {
          current: res.pageNum,
          pageSize: res.pageSize,
          total: res.total,
        };
      });
  }
}

const store = new Store();

export default store;

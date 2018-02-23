import { observable, computed, action } from "mobx";

class NameStore {
  @observable name;

  @action("Change name")
  changeNameTo(name) {
    this.name = name;
  }

  @computed
  get currentName() {
    return this.name;
  }
}

const nameStore = new NameStore();
export default nameStore;

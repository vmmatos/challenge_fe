import { shallowMount } from "@vue/test-utils";
import ListWines from "@/components/ListWines.vue";
import axios from "axios";

jest.mock("axios", () => ({
  get: jest.fn()
}));

describe("ListWines.vue rendered", () => {
  beforeEach(() => {
    axios.get.mockClear();
    axios.get.mockReturnValue(Promise.resolve({}));
  });

  it("renders component with a full list of wines", async () => {
    // setup axios call
    const response = {
      data: [{ name: "Red Wine" }]
    };
    axios.get.mockReturnValue(Promise.resolve(response));

    const wrapper = shallowMount(ListWines);
    await wrapper.vm.$nextTick();

    expect(axios.get).toHaveBeenCalledWith("http://localhost:4000/api/all");
    expect(wrapper.vm.wines.length).toBeGreaterThan(0);
    expect(typeof wrapper.vm.wines).toEqual("object");
    expect(wrapper.vm.wines[0].name).toEqual("Red Wine");
  });

  it("renders component without a list of wines", async () => {
    // setup axios call
    const response = {
      data: []
    };
    axios.get.mockReturnValue(Promise.resolve(response));

    const wrapper = shallowMount(ListWines);
    await wrapper.vm.$nextTick();

    expect(axios.get).toHaveBeenCalledWith("http://localhost:4000/api/all");
    expect(wrapper.vm.wines.length).toEqual(0);
  });

  it("renders component but the axios call have an error", async () => {
    // setup axios call
    const response = {};
    axios.get.mockReturnValue(Promise.reject(response));

    const wrapper = shallowMount(ListWines);
    await wrapper.vm.$nextTick();

    expect(axios.get).toHaveBeenCalledWith("http://localhost:4000/api/all");
  });
});

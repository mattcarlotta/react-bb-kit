import App from "../index.js";

const wrapper = mount(<App />);

describe("App", () => {
	it("renders without errors", () => {
		expect(wrapper.find(".app").exists()).toBeTruthy();
	});
});

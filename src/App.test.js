import React from 'react';
import App from './App';
import toJson from "enzyme-to-json";
import { shallow, mount } from "enzyme";

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });


it("renders using shallow", function() {
  shallow(<App />);
});

it("renders using mount", function(){
  mount(<App />);
});

it("matches snapshot", function() {
  let wrapper = shallow(<App />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});
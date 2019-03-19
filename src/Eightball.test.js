import React from 'react';
import Eightball from './Eightball';
import toJson from "enzyme-to-json";
import { shallow, mount } from "enzyme";


it("renders using shallow", function() {
    shallow(<Eightball />);
  });
  
  it("renders using mount", function(){
    mount(<Eightball />);
  });
  
  it("matches snapshot", function() {
    let wrapper = shallow(<Eightball />);
    let serialized = toJson(wrapper);
    expect(serialized).toMatchSnapshot();
  });


  it('can use output tests', function () {
    let wrapper = mount(<Eightball />);
  

  
    expect(wrapper.html()).toContain("Think of a question");
  });


  // { msg: "As I see it, yes.", color: "green" }
  it('can be props/state tested', function () {
    let wrapper = mount(<Eightball answers={[ { msg: "As I see it, yes.", color: "green" }]}/>);
  
    expect(wrapper.prop('answers')).toEqual([ { msg: "As I see it, yes.", color: "green" }]);
  
    wrapper.setProps({answers: [ { msg: "As I see it, yes.", color: "green" }]});
    console.log(wrapper.debug());
    expect(wrapper.html()).toContain("Think of a question");
  
    wrapper.setState({ statement: "As I see it, yes.", color: "green" });
    let b_elem = wrapper.find('b').first();
    // note {42}, not just 42 --- has to match exactly
    console.log('b element is ', b_elem);
    //expect(b_elem.equals(<b className = "Eightball-text">As I see it, yes.</b>)).toEqual(true);
    expect(wrapper.matchesElement(<b>As I see it, yes.</b>));
  });
import { render, screen } from '@testing-library/react';
import { shallow } from 'enzyme';
import Header from './components/container/Header';

describe('Header Component', () => {
  it('It should render true', () => {
    const component = shallow(<Header />);
    const wrapper = component.find('.logoIMG');
    expect(wrapper.length.toBe(1))
  });

});


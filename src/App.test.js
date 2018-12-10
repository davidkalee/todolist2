import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('App', () => {
  const app = shallow(<App />);

  it('renders properly', () => {
    expect(app).toMatchSnapshot();
  })

  it('initializes input field of state with empty string', () => {
    expect(app.state().input).toEqual('');
  })

  it('initializes storage array in state with empty array', () => {
    expect(app.state().storage).toEqual([]);
  })

  describe('adding an entry', () => {
    const entry1 = 'buy groceries';
    it('updates input in state to match field', () => {
      app.find('.input-entry').simulate('change', { target: { value: entry1 }});
      expect(app.state().input).toEqual(entry1);
    })

    it('updates storage array in state when submitted', () => {
      app.find('.submit-entry').simulate('click');
      expect(app.state().input).toEqual('');

      expect(app.state().storage).toHaveLength(1);
      expect(app.state().storage).toEqual([entry1])
    })

    it('renders new child component', () => {
      const entry = app.find('Entry');
      expect(entry.exists()).toBe(true);
    })
  })

  describe('timer', () => {
    jest.useFakeTimers();
    
    it('calls a function after timer finishes', () => {
      const mockCallback = app.instance().endTimer = jest.fn();
      
      app.find('#timer').simulate('click');
      expect(mockCallback).not.toHaveBeenCalled();
      jest.runAllTimers();
      expect(mockCallback).toHaveBeenCalled();

    })
  })
})
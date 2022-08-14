import type { Component } from 'solid-js';
import {Routes, Route} from "@solidjs/router";
import { HomePage } from './components/HomePage';


const App: Component = () => {

  return (
    <Routes>
      <Route path="/" component={HomePage} />
    </Routes>
  );
};

export default App;

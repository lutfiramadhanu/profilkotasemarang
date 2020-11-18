import { BrowserRouter, Switch, Link}from 'react-router-dom';
import Home from './component/Home';
import Kuliner from './component/Kuliner';
import Pariwisata from './component/Pariwisata';
import Sejarah from './component/Sejarah';
import Pemerintah from './component/Pemerintah';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Link path="/" exact component={Home} />
      <Link path="/Pariwisata" component={Pariwisata}/>
      <Link path="/Kuliner" component={Kuliner}/>
      <Link path="/Sejarah" component={Sejarah}/>
      <Link path="/Pemerintah" component={Pemerintah}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App
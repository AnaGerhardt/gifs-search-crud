import { Switch, Route } from "react-router-dom";
import { Main, SavedGifs } from "./pages";
import { Layout } from "./components";

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/salvos" component={SavedGifs} />
      </Switch>
    </Layout>
  );
};

export default Routes;

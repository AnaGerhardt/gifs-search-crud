import { Switch, Route } from "react-router-dom";
import { Main } from "./pages/Main/Main";
import { Layout } from "./components";

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Main} />
        {/* <Route path="/salvos" component={Personagens} /> */}
      </Switch>
    </Layout>
  );
};

export default Routes;

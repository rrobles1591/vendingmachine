import reactRouter from "react-router";
import { Redirect, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Chips from "./Chip";
import Chocolate from "./Chocolate";
import Coke from "./Coke"
import VendingMachine from "./Vendingmachine";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/chips"><Chips/></Route>
            <Route exact path="/chocolate"><Chocolate/></Route>
            <Route exact path="/coke"><Coke/></Route>
        </Switch>
    )
}

export default Routes;
import { Routing } from "../pages";
import { withProviders } from "./providers";
import '../shared/styles/index.scss'
import Header from "../widgets/Header";

const App = () => {
    return (
        <>
            <Header/>
            <Routing/>
        </>
    )
}

export default withProviders(App);

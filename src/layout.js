import Header from './header';
import Bottom from './bottom';
import {Outlet} from 'react-router-dom';


export default function Layout(){
    return(
        <main>
            <Header/>
            <Outlet/>
            <Bottom/>
        </main>
    )
}